import LogoMetamask from './assets/logo_metamask.png';
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import Web3 from 'web3/dist/web3.min.js';

import getBalance from './server/balance';

//Module used for shortening the ETH address
import truncateEthAddress from 'truncate-eth-address';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const { t } = useTranslation();

  const web3 = new Web3(Web3.givenProvider || 'ws://localhost:3000');

  const connectMetamask = () => {
    web3.eth.requestAccounts().then((value) => {
      setWalletAddress(value[0]);
      setIsConnected(true);
      getBalance(value[0]);
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
          <p>{t('walletBalanceTitle')} </p>
          <p className="walletBalanceNumbers"></p>
        </div>
      )}
      <div className="walletBalance walletBalanceDisplayNone">
        <p>{t('walletBalanceTitle')} </p>
        <p className="walletBalanceNumbers"></p>
      </div>
    </div>
  );
}

export default App;
