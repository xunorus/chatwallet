// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
// ____________________________________________________________
// deployed on sepolia 0x2d4C40Ef4f8bd35ae4AEFD260C9fa961B65C51AB
// ____________________________________________________________

import "@openzeppelin/contracts@5.0.1/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@5.0.1/token/ERC20/extensions/ERC20Permit.sol";

contract MyToken is ERC20, ERC20Permit {
    constructor() ERC20("MyToken", "MTK") ERC20Permit("MyToken") {}

        function mint(address to, uint256 amount) external {
            _mint(to,amount);
        }

}

