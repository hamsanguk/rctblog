import Web3 from "web3";


const API_KEY = 'f758d04f5c2c467389c34d512e7fa686';
const web3 = new Web3(`https://public-en-kairos.node.kaia.io/v3/${API_KEY}`);

// 트랜잭션 조회
export const getTransaction = async (txHash: string) => {
    try {
        const tx = await web3.eth.getTransaction(txHash);
        return tx;
    } catch (err) {
        console.error("트랜잭션 조회 실패:", err);
        return null;
    }
};

// 블록 조회
export const getBlock = async (blockNumber: string | number) => {
    try {
        const block = await web3.eth.getBlock(blockNumber);
        return block;
    } catch (err) {
        console.error("블록 조회 실패:", err);
        return false;
    }
};

// 주소 잔액 조회
export const getBalance = async (address: string) => {
    try {
        const balance = await web3.eth.getBalance(address);
        return balance;
    } catch (err) {
        console.error("주소 잔액 조회 실패:", err);
        return null;
    }
};



export const getRecentTransactions = async (address:string) => {
    try {
        const transactions = await web3.eth.getBalance(address);
        return transactions;
    } catch (err) {
        console.error("최근 거래 내역 조회 실패:", err);
        return null;
    }
}




