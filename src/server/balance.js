import Web3 from 'web3/dist/web3.min';

/**
 * Function used to retrieve balance from the testnet network Infura
 *
 * @function
 * @param {*} walletAddress
 */
function getBalance(walletAddress) {
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      'https://mainnet.infura.io/v3/745d93a39c9d4a38ade8c528115811d3'
    )
  );

  web3.eth.getBalance(walletAddress, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      document.querySelector('.walletBalanceNumbers').innerHTML =
        web3.utils.fromWei(result, 'ether') + ' ETH';
    }
  });
}

export default getBalance;
