//SPDX-License-Identifier: MIT

pragma solidity 0.8.19;
// COMO FUNCIONA
// PRE: autorizar al contrato DEPOSIT a ejecutar la funcion en el mytoken desde deposit.sol
// El usuario que quiere el token (ver minter para saber su address), viene a este contrato DEPOSIT, 
//  y recibe lo que deposita en tokens con relacion al eth=>dolar=>gho
//  

// ____________________________________________________________
// DEPOSIT SEPOLIA 0x038E40F65D8e11656cdf3eedD643F698171179B1
// ____________________________________________________________
//  ERC20(MYTOKEN) SEPOLIA 0x2d4C40Ef4f8bd35ae4AEFD260C9fa961B65C51AB
 
 
// DATA FEED
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

interface TokenInterface {
        function mint (address to, uint256 amount) external;
        
}


contract DEPOSIT {

    AggregatorV3Interface internal priceFeed;
    AggregatorV3Interface internal GHOpriceFeed;
    TokenInterface public minter;
    uint256 public tokenPrice  = 20000; // 1 token 200.00 usd, with 2 decimal places
    address public owner;

    constructor (address tokenAddress) {
        minter = TokenInterface (tokenAddress);
        /**
        Network: sepolia
        Aggregator: ETH / USD
        Address: 0x694AA1769357215DE4FAC081bf1f309aDC325306
        https://docs.chain.link/data-feeds/price-feeds/addresses?network=ethereum&page=1&search=
        */
            priceFeed = AggregatorV3Interface (0x694AA1769357215DE4FAC081bf1f309aDC325306);
        /**
        Network: sepolia
        Aggregator: GHO / USD
        Address: 0x635A86F9fdD16Ff09A0701C305D3a845F1758b8E
        https://docs.chain.link/data-feeds/price-feeds/addresses?network=ethereum&page=1&search=
        */
            GHOpriceFeed = AggregatorV3Interface (0x635A86F9fdD16Ff09A0701C305D3a845F1758b8E);
           
            owner = msg.sender;
           

    } 
 

function getLatestPrice() public view returns (int) {
    (
        /*uint80 roundID*/,
        int price,
        /*uint startedAt*/,
        /* uint timeStamp*/, 
        /*uint80 answeredInRound*/ 
    ) = priceFeed.latestRoundData(); 
    return price;
    }

function getLatestGHOPrice() public view returns (int) {
    (
        /*uint80 roundID*/,
        int price,
        /*uint startedAt*/,
        /* uint timeStamp*/, 
        /*uint80 answeredInRound*/ 
    ) = GHOpriceFeed.latestRoundData(); 
    return price;
    }

    function tokenAmount (uint256 amountETH) public view returns (uint256){
        uint256 ethUsd = uint256 (getLatestPrice());
        uint256 amountUSD = amountETH * ethUsd / 1000000000000000000;//ETH 18 décimal places
        uint256 amountToken = amountUSD; //2 decimals places
        // uint256 amountToken = amountUSD/ tokenPrice / 100; //2 decimals places
        return amountToken;
    }

 function ghoAmount (uint256 amountUSD) public view returns (uint256){
        uint256 amountGHO = uint256 (getLatestGHOPrice());
        uint256 amountToken = amountUSD * amountGHO / 1000000000000000000;//ETH 18 décimal places
        // uint256 amountToken = amountUSD; //2 decimals places
        // uint256 amountToken = amountUSD/ tokenPrice / 100; //2 decimals places
        return amountToken;
    }

    receive() external payable {
        uint256 amountToken = tokenAmount (msg.value);
        minter.mint (msg.sender, amountToken);//ejecuta la funcion mint de la addres de minter(el hloan token)
    }

 function depositToCustomAddress(address customAddress) external payable {
        require(customAddress != address(0), "Invalid custom address");
        uint256 amountToken = tokenAmount(msg.value);
        minter.mint(customAddress, amountToken);
    }


    modifier onlyOwner(){
        require (msg.sender == owner);
        _;
    }

    function withdraw() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }


}
