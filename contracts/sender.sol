// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {LinkTokenInterface} from "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {Withdraw} from "./withdraw.sol";

//  SENDER(FUJI)
//  SENDER(FUJI) 0x06481F10649C47c9EEB005fb4aab07F32152dc56
// router de fuji 0x554472a2720e5e7d5d3c817529aba05eed5f82d8
// address de link de fuji 0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846

// 1er interaccion en MUMBAI success = https://ccip.chain.link/msg/0x447a287e0307470257d19de81b4e519e9488f8364262763909386cf8840d85c7

// DESPLEGADO EN FUJI 0xBE7288161d6e5E8dd328f9122708CEc2eDb70409

// router de fuji 0x554472a2720e5e7d5d3c817529aba05eed5f82d8
// address de link de fuji 0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846
// segun documentacion en https://docs.chain.link/ccip/supported-networks/testnet#avalanche-fuji

// PARA USAR mint function:
// amount: 3000000000000000000
// destinationChainSelector(sepolia): 16015286601757825753
// receiver (el address del RECEIVERv3): 0x44126FbD93795aDE762a86456D325c9e02fD8525
// 0x44126FbD93795aDE762a86456D325c9e02fD8525
// payFeesIn: 1, porque pagamos con link
// LISTO!, darle a transact desde fuji
// Para verlo, pegar la address del SOURCEMINTERv3  en ccip.chain.link, https://ccip.chain.link/address/0xBE7288161d6e5E8dd328f9122708CEc2eDb70409

interface ERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract SENDERv4 is Withdraw {
    enum PayFeesIn {
        Native, //0 (avax)
        LINK //1
    }

    address immutable i_router;
    address immutable i_link;

    event MessageSent(bytes32 messageId);

    constructor(address router, address link) {
        i_router = router;
        i_link = link;
        LinkTokenInterface(i_link).approve(i_router, type(uint256).max);
    }

    receive() external payable {}

    function linkBalance() external view returns (uint256) {
        // 0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846// link en fuji testnet
        ERC20 token = ERC20(i_link);
        return token.balanceOf(address(this));
    }

    function mint(
        uint256 amount,
        uint64 destinationChainSelector,
        address receiver,
        PayFeesIn payFeesIn
    ) external {
        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver),
            // xmint(address to, uint256 amount)
            data: abi.encodeWithSignature(
                "xmint(address,amount)",
                msg.sender,
                amount
            ), //AQUI
            // data: abi.encodeWithSignature("safeMint(address)", msg.sender),//AQUI
            tokenAmounts: new Client.EVMTokenAmount[](0),
            extraArgs: "",
            feeToken: payFeesIn == PayFeesIn.LINK ? i_link : address(0)
        });

        //VALIDACIONES...
        uint256 fee = IRouterClient(i_router).getFee(
            destinationChainSelector,
            message
        );

        bytes32 messageId;

        if (payFeesIn == PayFeesIn.LINK) {
            // LinkTokenInterface(i_link).approve(i_router, fee);
            messageId = IRouterClient(i_router).ccipSend(
                destinationChainSelector,
                message
            );
        } else {
            messageId = IRouterClient(i_router).ccipSend{value: fee}(
                destinationChainSelector,
                message
            );
        }

        emit MessageSent(messageId);
    }
}
