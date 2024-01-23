//SPDX-License-Identifier: MIT

pragma solidity 0.8.19;
// COMO FUNCIONA
// PRE: autorizar al contrato DEPOSIT a ejecutar la funcion en el mytoken desde deposit.sol
// El usuario que quiere el token (ver token para saber su address), viene a este contrato DEPOSIT, 
//  y recibe lo que deposita en tokens con relacion al eth=>dolar=>gho
//  

// ____________________________________________________________
// DEPOSIT SEPOLIA 0x76FCE76d2214Ec2DE56dBD43E93FDA598FA1F7cB
// old 0xb52625E2cf70cBFC85DDE00140B3869AF000aA9c
// old 0x8791FD856444D32E618d2c42783436237021C941
// old 0x038E40F65D8e11656cdf3eedD643F698171179B1
// ____________________________________________________________
//  ERC20(MYTOKEN) SEPOLIA 0xa45EEE39395B32fDf753aFd53f66fa1aB88ed525
// old 0x2d4C40Ef4f8bd35ae4AEFD260C9fa961B65C51AB
 
 
// DATA FEED
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

interface TokenInterface {
        function mint (address to, uint256 amount) external;
        
}


contract DEPOSIT {

    TokenInterface public token;
    AggregatorV3Interface internal priceFeed;
    AggregatorV3Interface internal GHOpriceFeed;
    AggregatorV3Interface internal DAIpriceFeed;
    // uint256 public tokenPrice  = 100; // 1 token 200.00 usd, with 2 decimal places
    uint256 public tokenPrice  = 100000000; // 1 token 1.00 usd, with 8 decimal places
    address public owner;

    constructor (address tokenAddress) {
        token = TokenInterface (tokenAddress);
        /**
        Network: sepolia
        Aggregator: ETH / USD
        Decimals: 8
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


    // Function to convert ETH to USD (for testing)
    // uint256 public   ethToUsdExchangeRate = 232655005954; // 2000 with 8 decimals
    // uint256 public  usdToGhodExchangeRate = 98091784; //  with 8 decimals


function convertEthToGHO (uint256 ethAmount) public view returns (uint256){
        
        uint256 ethToUsdExchangeRate = uint256 (getLatestPrice());
        
        // A
        uint256 usdValue = (ethAmount * ethToUsdExchangeRate) / 10**18;

        // B
        // uint256 tokenPrice;

        // C
        uint256 usdToGhodExchangeRate = uint256 (getLatestGHOPrice());
        
        // AxB/C=ghoValue
        uint256 ghoValue = ( usdValue * tokenPrice)/ usdToGhodExchangeRate;

        return ghoValue *10**10;
}

 
    receive() external payable {
        uint256 amountToken = convertEthToGHO (msg.value);
        token.mint (msg.sender, amountToken);//ejecuta la funcion mint de la addres del token 
    }

//  function depositToCustomAddress(address customAddress) public payable {
 function depositToCustomAddress(address customAddress) external payable {
        require(customAddress != address(0), "Invalid custom address");
        uint256 amountToken = convertEthToGHO(msg.value);
        token.mint(customAddress, amountToken);
    }


    modifier onlyOwner(){
        require (msg.sender == owner);
        _;
    }

    function withdraw() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }


}
