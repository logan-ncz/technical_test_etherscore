import LogoMetamask from './assets/logo_metamask.png';
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';
import Web3 from 'web3/dist/web3.min.js';
import { useState } from 'react';
import truncateEthAddress from 'truncate-eth-address';
import getBalance from './server/balance';
import GetTransactions from './server/transactions';

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const { t } = useTranslation();

  const web3 = new Web3(Web3.givenProvider || 'ws://localhost:3000');

  const connectMetamask = () => {
    // window.ethereum.request({ method: 'eth_requestAccounts' });
    web3.eth.requestAccounts().then((value) => {
      console.log(value);
      setWalletAddress(value[0]);
      setIsConnected(true);
      getBalance(value[0]);
      GetTransactions(value[0]);
    });
  };

  const disconnectMetamask = () => {
    window.location.reload(false);
  };

  return (
    <div className="home">
      <Navbar>
        {isConnected && (
          <button
            className="connectMetamaskBtn disconnectMetamaskBtn"
            onClick={disconnectMetamask}
          >
            ({truncateEthAddress(walletAddress)}) {t('disconnectBtn')}
          </button>
        )}
      </Navbar>

      <div className="connectMetamask">
        {!isConnected && (
          <button className="connectMetamaskBtn" onClick={connectMetamask}>
            <img className="connectMetamaskBtnLogo" src={LogoMetamask} alt="" />
            {t('connectBtn')}
          </button>
        )}
      </div>
      {isConnected && (
        <div className="walletBalance">
          <p>{t('accountBalance')} </p>
          <p className="walletBalanceNumbers"></p>
        </div>
      )}
    </div>
  );
}
