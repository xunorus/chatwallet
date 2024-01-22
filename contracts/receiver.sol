// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;
// RECEIVER(sepolia-fuji)
//  implementa ccipReceiver y ejecuta la funcion mint en el MyToken(GHO)

import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {MyToken} from "./mytoken.sol";


// ____________________________________________________________
// DEPLOYED EN SEPOLIA 0x26dA24D96c9627462cfcEA4d2e874c8777B7d563
// ____________________________________________________________

// router de sepolia 0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59
// ERC20 address en  sepolia  0x2d4C40Ef4f8bd35ae4AEFD260C9fa961B65C51AB
// segun documentacion en https://docs.chain.link/ccip/supported-networks/testnet#avalanche-fuji


contract RECEIVER is CCIPReceiver {
    MyToken erc;
 
    event MintCallSuccessfull();
 
    constructor(address router, address ercAddress) CCIPReceiver(router) {
        // nft = tokenerc20(nftAddress);
        erc = MyToken(ercAddress);
    }
 
    function _ccipReceive(Client.Any2EVMMessage memory message) internal override {
        (bool success, ) = address(erc).call(message.data);
        require(success);
        emit MintCallSuccessfull();
    }
 
}