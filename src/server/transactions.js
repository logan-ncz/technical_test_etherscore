// import { createAlchemyWeb3 } from '@alch/alchemy-web3';

function GetTransactions(address) {
  // const dispatch = useDispatch()

  const url = `http://api.etherscan.io/api?module=account&action=txlist&address=0x1e5becaa9c331fcbdfaa99db74cb5afa78c71035&sort=asc`;

  const requestOptions = {
    method: 'GET',
  };

  // Send POST request:
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('/user/profile response to POST:', json);
    })
    .catch((error) => {
      console.error(
        `An error has occured while posting to /user/profile: ${error}`
      );
    });
}

export default GetTransactions;
