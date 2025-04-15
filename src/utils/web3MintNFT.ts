import Web3 from "web3";

const INFURA_API_KEY = process.env.INFURA_API_KEY;
const web3 = new Web3(`https://public-en-kairos.node.kaia.io/v3/${ INFURA_API_KEY }`);

export const loginMetamask = async()=>{
  const account = await web3.eth.getAccounts();
  //account 에서 nft업로드해오기
};//최초 메타마스크 팝업띄우기,

export const getNFTList = ()=>{
   // const address = web3
};//계정에 nft리스트 불러오기

