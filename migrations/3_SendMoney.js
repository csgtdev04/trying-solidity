const SendMoney = artifacts.require("SendMoney");

module.exports = function(deployer) {
  const walletAddress = "0xbb7281e2Ae7817c0b4A13A6c58B0f555c9aBb1f3"; // Replace with your wallet address
  deployer.deploy(SendMoney, walletAddress);
};