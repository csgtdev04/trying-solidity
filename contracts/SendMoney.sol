pragma solidity ^0.8.0;

contract SendMoney {
    mapping(address => uint256) public balances;
    address payable public wallet;

    constructor(address payable _wallet) {
        wallet = _wallet;
    }

    function buyToken() public payable {
        // buy token
        balances[msg.sender] += 1;
        // send ether from this account to the account specificed when 
        // constructor was invoked
        wallet.transfer(msg.value);
    }
}