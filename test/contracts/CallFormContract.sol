// SPDX-License-Identifier: GPL-3.0-only
pragma solidity =0.6.11;

import '@openswapdex/openswap-core/contracts/interfaces/IWETH.sol';
import '@openswapdex/openswap-core/contracts/interfaces/IERC20.sol';
import '@openswapdex/openswap-core/contracts/commons/interfaces/IOSWAP_FactoryBase.sol';
import '@openswapdex/openswap-core/contracts/oracle/interfaces/IOSWAP_OraclePair.sol';
import '@openswapdex/openswap-core/contracts/router/interfaces/IOSWAP_OracleRouter.sol';

contract CallFormContract {
    address public weth;
    address public factory;
    address public router;

    constructor(address _weth, address _factory, address _router) public {
        weth = _weth;
        factory = _factory;
        router = _router;
    }

    function callPairToSwap(address token0, address token1, uint256 token0In, uint256 token1In, uint256 token0Out, uint256 token1Out, bytes calldata data) external payable {
        require(token0 < token1, "Incorrect token order");
        address pair = IOSWAP_FactoryBase(factory).getPair(token0, token1);
        if (token0In > 0) {
            if (token0 == weth) {
                IWETH(weth).deposit{value: token0In}();
                IERC20(token0).transfer(pair, token0In);
            } else {
                IERC20(token0).transferFrom(msg.sender, pair, token0In);
            }
        }
        if (token1In > 0) {
            if (token1 == weth) {
                IWETH(weth).deposit{value: token1In}();
                IERC20(token1).transfer(pair, token1In);
            } else {
                IERC20(token1).transferFrom(msg.sender, pair, token1In);
            }
        }
        IOSWAP_OraclePair(pair).swap(token0Out, token1Out, msg.sender, data);
    }
}