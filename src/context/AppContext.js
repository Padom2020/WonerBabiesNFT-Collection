import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import abi from "../utils/abi";
import { chainID, contractAddress } from "../utils/contract";

export const AppContext = React.createContext();
export const useAppContext = () => {
  return React.useContext(AppContext);
};
function AppContextProvider({ children }) {
  const [currentAccount, setCurrentAccount] = useState("");
  const [chainId, setChainId] = useState("");
  const [contractRef, setCrontractRef] = useState(null);

  useEffect(() => {
    if (!currentAccount || !ethers.utils.isAddress(currentAccount)) return;
    if (!window.ethereum) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    provider.getNetwork().then((result) => {
      if (chainID !== result.chainId) {
        alert("you need to connect to Conflux network to continue");
      } else {
        setChainId(result.chainId);
        const signer = provider.getSigner();
        setCrontractRef(new ethers.Contract(contractAddress, abi, signer));
      }
    });
    //eslint-disable-next-line
  }, [currentAccount]);

  const connect = () => {
    //client side code
    if (!window.ethereum) {
      alert("please install MetaMask");
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider
      .send("eth_requestAccounts", [])
      .then((accounts) => {
        if (accounts.length > 0) setCurrentAccount(accounts[0]);
      })
      .catch((e) => console.log(e));
  };

  const disconnect = () => {
    setCurrentAccount(undefined);
    setChainId(null);
  };
  return (
    <AppContext.Provider
      value={{
        connect,
        disconnect,
        contract: contractRef,
        chainIdFromMetamask: chainId,
        account: currentAccount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
