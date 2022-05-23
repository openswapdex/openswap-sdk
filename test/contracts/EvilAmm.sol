// SPDX-License-Identifier: GPL-3.0-only
pragma solidity =0.6.11;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";

contract EvilAmmFactory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint newSize);
    mapping(address => mapping(address => address)) public getPair;
    function setPair(address token0, address token1, address _pair) public {
        getPair[token0][token1] = _pair;
        getPair[token1][token0] = _pair;
    }
    function createPair(address tokenA, address tokenB) external returns (address pair) {
        pair = address(new EvilAmmPair(tokenA, tokenB));
        setPair(tokenA, tokenB, address(pair));
        emit PairCreated(tokenA, tokenB, pair, 0);
    }
}

contract EvilAmmPair {
    using SafeERC20 for IERC20;
    event Sync(uint112 reserve0, uint112 reserve1);

    bytes4 private constant SELECTOR = bytes4(keccak256(bytes('transfer(address,uint256)')));
    address public _owner;
    address public immutable token0;
    address public immutable token1;
    uint112 public __reserve0;
    uint112 public __reserve1;
    uint32 public __blockTimestampLast;
    constructor(address _token0, address _token1) public {
        require(_token0 != address(0) && _token0 < _token1, "Invalid addresses");
        token0 = _token0;
        token1 = _token1;
    }
    function setOwner(address owner) public {
        _owner = owner;
    }
    function setReserves(uint112 _reserve0, uint112 _reserve1) public {
        __reserve0 = _reserve0;
        __reserve1 = _reserve1;
        __blockTimestampLast = uint32(block.timestamp);
        emit Sync(__reserve0, __reserve1);
    }
    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast) {
        return (__reserve0, __reserve1, __blockTimestampLast);
    }
    function _safeTransfer(address token, address to, uint value) private {
        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(SELECTOR, to, value));
        require(success && (data.length == 0 || abi.decode(data, (bool))), 'EvilAmmPair: TRANSFER_FAILED');
    }
    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external {
        if (amount0Out > 0) _safeTransfer(token0, _owner, amount0Out); 
        if (amount1Out > 0) _safeTransfer(token1, _owner, amount1Out); 
    }
}