// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.6.11;

import "@openswap/contracts/interfaces/IERC20.sol";
import '@openswap/contracts/libraries/SafeMath.sol';

interface IOSWAP_PairV1 {
    function getReserves() external view returns (uint112, uint112, uint32);
    function swap(uint256 amount0Out, uint256 amount1Out, address to, bytes calldata data) external;
}
interface IOSWAP_PairV5 is IOSWAP_PairV1 {
    function getAmountOut(uint256 amountIn, address tokenIn) external view returns (uint256 amountOut);
    function getAmountIn(uint256 amountOut, address tokenOut) external view returns (uint256 amountIn);
}

contract StableFactory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint newSize);

    mapping(address=>mapping(address=>address[])) public getPair;
    address[] public allPairs;

    function getPairsLength(address tokenA, address tokenB) external view returns (uint256) {
        return getPair[tokenA][tokenB].length;
    }
    function allPairsLength() external view returns (uint256) {
        return allPairs.length;
    }
    function createPair(address tokenA, address tokenB, address owner, uint256 fee) external {
        require(tokenA < tokenB, "Invalid token order");
        // require(getPair[tokenA][tokenB] == address(0), "pair already exists");
        address pair = address(new StablePair(tokenA, tokenB, owner, fee));
        getPair[tokenA][tokenB].push(pair);
        allPairs.push(pair);
        
        emit PairCreated(tokenA, tokenB, pair, allPairs.length);
    }
}
contract StablePair {
    using SafeMath for uint;

    event Swap(
        address indexed sender,
        uint amount0In,
        uint amount1In,
        uint amount0Out,
        uint amount1Out,
        address indexed to
    );
    event Sync(uint112 reserve0, uint112 reserve1);

    uint256 constant WEI = 10 ** 18;
    uint256 constant FEE_BASE = 10 ** 5;
    bytes4 private constant SELECTOR = bytes4(keccak256(bytes('transfer(address,uint256)')));

    address public owner;
    address public immutable token0;
    address public immutable token1;
    uint256 public fee;

    uint112 private reserve0;           // uses single storage slot, accessible via getReserves
    uint112 private reserve1;           // uses single storage slot, accessible via getReserves

    constructor(address _token0, address _token1, address _owner, uint256 _fee) public {
        require((_token0) != address(0) && (_token0) < (_token1), "Invalid addresses");
        owner = msg.sender;
        token0 = _token0;
        token1 = _token1;
        owner = _owner;
        fee = _fee;
    }
    function setFee(uint256 _fee) external {
        require(msg.sender == owner, "not from owner");
        fee = _fee;
    }
    function getReserves() external view returns (uint112 _reserve0, uint112 _reserve1, uint32) {
        return (reserve0, reserve1, 0);
    }
    function _getAmountOut(uint256 amountIn) internal view returns (uint256 amountOut) {
        return amountIn.mul(fee).div(FEE_BASE);
    }
    function getAmountOut(uint256 amountIn, address /*tokenIn*/) external view returns (uint256 amountOut) {
        return _getAmountOut(amountIn);
    }
    function getAmountIn(uint256 amountOut, address /*tokenOut*/) external view returns (uint256 amountIn) {
        return amountOut.mul(FEE_BASE).div(fee).add(1);
    }
    function _safeTransfer(address token, address to, uint value) private {
        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(SELECTOR, to, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))), 'TRANSFER_FAILED');
    }
    function swap(uint256 amount0Out, uint256 amount1Out, address to, bytes calldata/* data*/) external {
        require(amount0Out > 0 || amount1Out > 0, 'INSUFFICIENT_OUTPUT_AMOUNT');
        require(amount0Out < reserve0 && amount1Out < reserve1, 'INSUFFICIENT_LIQUIDITY');
        require(to != token0 && to != token1, 'INVALID_TO');
        if (amount0Out > 0) _safeTransfer(token0, to, amount0Out); // optimistically transfer tokens
        if (amount1Out > 0) _safeTransfer(token1, to, amount1Out); // optimistically transfer tokens
        uint256 balance0 = IERC20(token0).balanceOf(address(this));
        uint256 balance1 = IERC20(token1).balanceOf(address(this));
        uint amount0In = balance0 > reserve0 - amount0Out ? balance0 - (reserve0 - amount0Out) : 0;
        uint amount1In = balance1 > reserve1 - amount1Out ? balance1 - (reserve1 - amount1Out) : 0;
        require(amount0In > 0 || amount1In > 0, 'INSUFFICIENT_INPUT_AMOUNT');
        require(amount0Out <= _getAmountOut(amount1In), "Insufficient Amount 0");
        require(amount1Out <= _getAmountOut(amount0In), "Insufficient Amount 0");
        _update(balance0, balance1, reserve0, reserve1);
        emit Swap(msg.sender, amount0In, amount1In, amount0Out, amount1Out, to);
    }
    function _update(uint balance0, uint balance1, uint112 /*_reserve0*/, uint112 /*_reserve1*/) private {
        require(balance0 <= uint112(-1) && balance1 <= uint112(-1), 'OVERFLOW');
        reserve0 = uint112(balance0);
        reserve1 = uint112(balance1);
        emit Sync(reserve0, reserve1);
    }
    function sync() external {
        _update(IERC20(token0).balanceOf(address(this)), IERC20(token1).balanceOf(address(this)), reserve0, reserve1);
    }
}