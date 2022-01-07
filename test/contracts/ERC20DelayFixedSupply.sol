// SPDX-License-Identifier: GPL-3.0-only
pragma solidity 0.6.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20DelayFixedSupply is ERC20 {
    address public immutable minter;
    bool public minted;
    constructor(address _minter, string memory name, string memory symbol) ERC20(name, symbol) public {
        minter = _minter;
    }
    function mint(address to, uint256 amount) external {
        require(msg.sender == minter, "Not from minter");
        require(!minted, "Already minted!");
        minted = true;
        _mint(to, amount);
    }
}
