import React, { JSX, useState, useEffect } from "react";
import "../css/MintNft.css";
import { useNavigate } from "react-router-dom";
import { loginMetamask, getNFTList } from "../utils/web3MintNFT";
import Web3 from "web3";

const MintNft = (): JSX.Element => {
  const [wallet, setWallet] = useState<string>("");
  const [nfts, setNfts] = useState<any[]>([]);
  const [privateKey, setPrivateKey] = useState<string>("");
  const navigate = useNavigate();

  const connectWalletClick = async () => {
    try {
      const account = await loginMetamask();
      setWallet(account);
    } catch (err) {
      console.error(err);
    }
  };

  // const connectWithPrivateKey = async () => {
  //   try {
  //     const web3 = new Web3("https://public-en-kairos.node.kaia.io");
  //     const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  //     setWallet(account.address);
  //   } catch (err) {
  //     console.error("잘못된 개인키입니다.");
  //     alert("잘못된 개인키입니다.");
  //   }
  // };

  useEffect(() => {
    const fetchNFTs = async () => {
      if (wallet) {
        const list = await getNFTList(wallet);
        setNfts(list);
      }
    };
    fetchNFTs();
  }, [wallet]);

  return (
    <div className="wrap">
      {!wallet ? (
        <button onClick={connectWalletClick}>Connect MetaMask</button>
      ) : (
        <>
          <div>
            <h3>지갑 주소: {wallet}</h3>
            <button onClick={() => navigate("/mint")}>NFT upload</button>
          </div>
          <div className="nft-list">
            {nfts.map((nft, idx) => (
              <div
                key={idx}
                className="nftCard"
                onClick={() => navigate(`/nft/${nft.token_id}`)}>
                <img src={nft.image_url} alt={nft.name} />
                <p>{nft.name}</p>
                <p>{nft.network}</p>
                <p>{nft.description}</p>
              </div>

            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MintNft;
