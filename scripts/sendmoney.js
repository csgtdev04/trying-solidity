const SendMoney = artifacts.require("SendMoney");

module.exports = async function (callback) {
  const instance = await SendMoney.deployed();
  const accounts = await web3.eth.getAccounts();
  const amount = web3.utils.toWei("5", "ether"); // Replace with the amount you want to send
  await instance.buyToken({ from: accounts[1], value: amount });
  console.log(`Sent ${web3.utils.fromWei(amount, "ether")} Ether to buy token`);
  callback();
};
