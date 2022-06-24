import LogoMetamask from './assets/logo_metamask.png';
import Navbar from './components/Navbar';
import { useTranslation } from 'react-i18next';
import Web3 from 'web3/dist/web3.min.js';
import { useState } from 'react';
import truncateEthAddress from 'truncate-eth-address';

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
    });
  };

  const disconnectMetamask = () => {
    window.location.reload(false);
  };

  return (
    <div className="home">
      <Navbar />

      <div className="connectMetamask">
        {isConnected ? (
          <button className="connectMetamaskBtn" onClick={disconnectMetamask}>
            ({truncateEthAddress(walletAddress)}) {t('disconnectBtn')}
          </button>
        ) : (
          <button className="connectMetamaskBtn" onClick={connectMetamask}>
            <img className="connectMetamaskBtnLogo" src={LogoMetamask} alt="" />
            {t('connectBtn')}
          </button>
        )}
      </div>
    </div>
  );
}
