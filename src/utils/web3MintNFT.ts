import Web3 from "web3";
import MyNFT from "./MyNFT.json";
import axios from "axios";

declare global {
  interface Window {
    ethereum?: any;
  }
}

// Klaytn Kairos 네트워크 연결
const web3 = new Web3("https://public-en-kairos.node.kaia.io");

// 스마트 컨트랙트 인스턴스 생성
const contract = new web3.eth.Contract(MyNFT.abi, MyNFT.address);

// 메타마스크 로그인 함수
export const mintNFT = async (tokenURI: string, fromAddress: string): Promise<string> => {
  if (!window.ethereum) throw new Error("MetaMask가 설치되어 있지 않습니다.");

  try {
    const web3WithProvider = new Web3(window.ethereum);
    const contractWithProvider = new web3WithProvider.eth.Contract(MyNFT.abi, MyNFT.address);

    const gas: bigint|number = await contractWithProvider.methods
      .mint(fromAddress, tokenURI)
      .estimateGas({ from: fromAddress });

    const tx = await contractWithProvider.methods
      .mint(fromAddress, tokenURI)
      .send({
        from: fromAddress,
        gas:web3.utils.toHex(gas), // number로 충분함
      });

    return tx.transactionHash;
  } catch (error) {
    console.error("MetaMask 민팅 실패:", error);
    throw error;
  }
};

export const loginMetamask = async (): Promise<string> => {
  if (!window.ethereum) throw new Error("MetaMask가 설치되지 않았습니다.");

  try {
    const accounts: string[] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  } catch (error) {
    console.error("MetaMask 로그인 실패:", error);
    throw error;
  }
};

// 개인키 기반 NFT 민팅 함수
// export const mintWithPrivateKey = async (
//   privateKey: string,
//   tokenURI: string
// ): Promise<string> => {
//   try {
//     const account = web3.eth.accounts.privateKeyToAccount(`0x${privateKey}`);
//     const gas = await contract.methods
//       .mint(account.address, tokenURI)
//       .estimateGas({ from: account.address });

//     const gasPrice = await web3.eth.getGasPrice();
//     const nonce = await web3.eth.getTransactionCount(account.address, "latest");

//     const tx = {
//       from: account.address,
//       to: contract.options.address,
//       gas: web3.utils.toHex(gas),
//       gasPrice: web3.utils.toHex(gasPrice),
//       nonce: web3.utils.toHex(nonce),
//       data: contract.methods.mint(account.address, tokenURI).encodeABI(),
//     };

//     const signedTx = await web3.eth.accounts.signTransaction(
//       tx,
//       account.privateKey
//     );

//     const receipt = await web3.eth.sendSignedTransaction(
//       signedTx.rawTransaction as string
//     );

//     return receipt.transactionHash;
//   } catch (error) {
//     console.error("❌ 트랜잭션 실패:", error);
//     throw error;
//   }
// };

// 메타데이터 조회 함수
const getMetadata = async (tokenURI: string): Promise<any> => {
  try {
    const response = await axios.get(tokenURI);
    return response.data;
  } catch (error) {
    console.error("메타데이터 조회 실패:", error);
    return {};
  }
};

// 주소 기준 NFT 목록 조회 함수
export const getNFTList = async (address: string): Promise<any[]> => {
  const nfts: any[] = [];

  try {
    const totalSupply = Number(await contract.methods.totalSupply().call());

    for (let i = 0; i <= totalSupply; i++) {
      try {
        const owner: string = await contract.methods.ownerOf(i).call();

        if (
          owner &&
          typeof owner === "string" &&
          owner.toLowerCase() === address.toLowerCase()
        ) {
          const tokenURI: string = await contract.methods.tokenURI(i).call();
          const metadata = await getMetadata(tokenURI);

          nfts.push({
            token_id: i,
            owner,
            contract:MyNFT.address,
            name: metadata.name,
            image_url: metadata.image,
            description: metadata.discription,
            network:'Kaia testnet',
            symbol: await contract.methods.symbol().call()
          });
        }
      } catch (error) {
        continue;
      }
    }

    return nfts;
  } catch (error) {
    console.error("NFT 목록 조회 실패:", error);
    return [];
  }
};



