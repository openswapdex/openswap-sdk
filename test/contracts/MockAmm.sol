// SPDX-License-Identifier: GPL-3.0-only
pragma solidity =0.6.11;

contract MockAmmFactory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint newSize);
    mapping(address => mapping(address => address)) public getPair;
    function setPair(address token0, address token1, address _pair) public {
        getPair[token0][token1] = _pair;
        getPair[token1][token0] = _pair;
    }
    function createPair(address tokenA, address tokenB) external returns (address pair) {
        pair = address(new MockAmmPair(tokenA, tokenB));
        setPair(tokenA, tokenB, address(pair));
        emit PairCreated(tokenA, tokenB, pair, 0);
    }
}

contract MockAmmPair {
    event Sync(uint112 reserve0, uint112 reserve1);

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
    function setReserves(uint112 _reserve0, uint112 _reserve1) public {
        __reserve0 = _reserve0;
        __reserve1 = _reserve1;
        __blockTimestampLast = uint32(block.timestamp);
        emit Sync(__reserve0, __reserve1);
    }
    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast) {
        return (__reserve0, __reserve1, __blockTimestampLast);
    }
}