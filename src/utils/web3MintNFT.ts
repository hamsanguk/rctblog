import Web3 from "web3";
import type { AbiItem } from "web3-utils";
import MintNftABI from "../abi/MintNft.json";

const RPC_URL = "https://public-en-kairos.node.kaia.io";
const web3 = new Web3(RPC_URL);
const defaultWeb3 = new Web3(RPC_URL);

const NFT_CONTRACT_ADDRESS = "0x280F0f5F2fa11ED8aDdf852c38445EdC2F8fa72E"; // 배포된 NFT Mint 컨트랙트 주소

const getContract = (web3Instance: Web3) => {
  return new web3Instance.eth.Contract(MintNftABI as AbiItem[], NFT_CONTRACT_ADDRESS);
};

export const loginMetamask = async (): Promise<string> => {
  if (typeof window.ethereum !== "undefined") {
    try {
      const accounts = (await window.ethereum.request({
        method: "eth_requestAccounts",
      })) as string[];

      if (!accounts || accounts.length === 0) {
        throw new Error("지갑 주소를 가져오지 못했습니다.");
      }

      const address = accounts[0];
      return address;
    } catch (err) {
      console.error("MetaMask 연결 실패:", err);
      throw new Error("MetaMask 연결을 허용하지 않았습니다.");
    }
  } else {
    alert("MetaMask가 설치되어 있지 않습니다.");
    throw new Error("MetaMask 미설치");
  }
};

interface NFTMetadata {
  name: string;
  description: string;
  image: string;
}

export const getNFTList = async (
  address: string,
  web3Instance?: Web3
): Promise<
  {
    token_id: string;
    name: string;
    description: string;
    image_url: string;
  }[]
> => {
  const web3 = web3Instance || defaultWeb3;
  const contract = getContract(web3);

  try {
    const rawBalance: string = await contract.methods.balanceOf(address).call();
    const balance: number = parseInt(rawBalance, 10);

    const nftList: {
      token_id: string;
      name: string;
      description: string;
      image_url: string;
    }[] = [];

    for (let i = 0; i < balance; i++) {
      const tokenIdRaw = await contract.methods.tokenOfOwnerByIndex(address, i).call();
      const tokenId = tokenIdRaw as unknown as string;
    
      const tokenURIRaw = await contract.methods.tokenURI(tokenId).call();
      const tokenURI = tokenURIRaw as unknown as string;
    
      if (!tokenURI || typeof tokenURI !== "string") {
        console.warn("잘못된 tokenURI:", tokenURI);
        continue;
      }
    
      let metadataUrl = tokenURI;
      if (metadataUrl.startsWith("ipfs://")) {
        metadataUrl = metadataUrl.replace("ipfs://", "https://ipfs.io/ipfs/");
      }
    
      const response = await fetch(metadataUrl);
      const metadata: NFTMetadata = await response.json();
    
      nftList.push({
        token_id: tokenId,
        name: metadata.name ?? "No Name",
        description: metadata.description ?? "No Description",
        image_url: metadata.image ?? "",
      });
    }
    
    

    return nftList;
  } catch (err) {
    console.error("NFT 목록 가져오기 실패:", err);
    return [];
  }
};


export const mintNFT = async (metadataURI: string, to: string) => {
  const contract = getContract(web3);

  try {
    const tx = contract.methods.mint(to, metadataURI); // ABI에 따라 함수명이 정확해야 함

    const gas = await tx.estimateGas({ from: to });
    const gasPrice = await web3.eth.getGasPrice();

    const txData = {
      from: to,
      to: NFT_CONTRACT_ADDRESS,
      data: tx.encodeABI(),
      gas,
      gasPrice,
    };

    const receipt = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [txData],
    });

    return receipt;
  } catch (err) {
    console.error("NFT 민팅 실패:", err);
    throw new Error("NFT 민팅 중 문제가 발생했습니다.");
  }
};
