import { Copy } from "lucide-react";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import "../css/mywallet.css";

// RPC URLs chainID 1001 
const rpcUrls = {
  kairosTest: "https://public-en-kairos.node.kaia.io",
  amoyTest: "wss://polygon-amoy-bor-rpc.publicnode.com"
};

const MyWallet = () => {
  const [rpcUrl, setRpcUrl] = useState(rpcUrls.kairosTest),
        [web3, setWeb3] = useState(new Web3(rpcUrl));
  const [wallet, setWallet] = useState<{ address: string; privateKey: string } | null>(null),
        [balance, setBalance] = useState<string | null>(null);
  const [gasPrice, setGasPrice] = useState(""),
        [gasLimit, setGasLimit] = useState("21000");
  const [recipient, setRecipient] = useState(""),
        [amount, setAmount] = useState("");
  const [txHash, setTxHash] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [tokenName, setTokenName] = useState("KAIA");
  const [transactions, setTransactions] = useState<string[]>([]); // 거래 내역

  // Handle RPC URL change
  const handleRpcChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRpc = event.target.value;
    setRpcUrl(newRpc);
    const newWeb3 = new Web3(newRpc);
    setWeb3(newWeb3);

    setTokenName(newRpc === rpcUrls.amoyTest ? "MATIC" : "KAIA");

    if (wallet) {
      getBalance(newWeb3, wallet.address);
    }
  };

  // Load wallet and transactions from localStorage
  useEffect(() => {
    const savedWallet = localStorage.getItem("wallet");
    if (savedWallet) {
      setWallet(JSON.parse(savedWallet));
    }

    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  // 지갑이 변경되거나 네트워크 변경 시 자동으로 잔액 조회
  useEffect(() => {
    if (wallet) {
      getBalance(web3, wallet.address);
    }
  }, [wallet, web3, txHash, rpcUrl]);

  // 새 지갑 생성
  const createWallet = () => {
    const newWallet = web3.eth.accounts.create();
    setWallet(newWallet);
    setBalance(null);
    setTxHash(null);
    localStorage.setItem("wallet", JSON.stringify(newWallet));
  };

  // 잔액 조회 함수
  const getBalance = async (web3Instance = web3, address = wallet?.address) => {
    if (!address) return;
    try {
      const balanceWei = await web3Instance.eth.getBalance(address);
      setBalance(parseFloat(web3Instance.utils.fromWei(balanceWei, "ether")).toFixed(3));
    } catch (error) {
      console.error("잔액 조회 실패:", error);
    }
  };

  // 송금 함수
  const sendTransaction = async () => {
    if (!wallet || !recipient || !amount) return;
    try {
      const value = web3.utils.toWei(amount, "ether"),
            gasPriceWei = gasPrice ? web3.utils.toWei(gasPrice, "gwei") : await web3.eth.getGasPrice();
      
      const tx = {
        from: wallet.address,
        to: recipient,
        value,
        gas: gasLimit || 21000,
        gasPrice: gasPriceWei
      };
      const signedTx = await web3.eth.accounts.signTransaction(tx, wallet.privateKey);
      const sentTx = await web3.eth.sendSignedTransaction(signedTx.rawTransaction!);
      
      const newTxHash = sentTx.transactionHash.toString();
      setTxHash(newTxHash);

      // 거래 내역 저장
      const newTransactions = [`${new Date().toLocaleString()} - ${newTxHash}`, ...transactions].slice(0, 5);
      setTransactions(newTransactions);
      localStorage.setItem("transactions", JSON.stringify(newTransactions));

    } catch (error) {
      console.error("Transaction Failed:", error);
    }
  };

  // 클립보드 복사 기능
  const copyToClipboard = async (text: string, type: "주소" | "개인키") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(`${type} 복사 완료!`);
      setTimeout(() => setCopySuccess(null), 1500);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  // 지갑 삭제
  const deleteWallet = () => {
    setWallet(null);
    setBalance(null);
    setTxHash(null);
    setTransactions([]);
    localStorage.removeItem("wallet");
    localStorage.removeItem("transactions");
  };

  return (
    <div className="wrap">
      <div className="prevaccount">
        <div className="transaction-history">
          <h4>이전 거래 내역</h4>
          <ul>
            {transactions.length > 0 ? (
              transactions.map((tx, index) => (
                <li key={index}>{tx}</li>
              ))
            ) : (
              <li>거래 내역 없음</li>
            )}
          </ul>
        </div>
      </div>

      {!wallet ? (
        <button onClick={createWallet} className="create-wallet-btn">지갑 생성</button>
      ) : (
        <>
            <div className="rpc-selection">
            <label>RPC URL 선택:</label>
            <select value={rpcUrl} onChange={handleRpcChange}>
              {Object.entries(rpcUrls).map(([key, url]) => (
                <option key={key} value={url}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <ul className="keywrap">
            <li className="address">
              <button className="copybutton" onClick={() => copyToClipboard(wallet.address, "주소")}>
                <Copy style={{ color: "#333" }} size={18} />
              </button>
              주소: {wallet.address}
            </li>
            <li className="privatekey">
              <button className="copybutton" onClick={() => copyToClipboard(wallet.privateKey, "개인키")}>
                <Copy style={{ color: "#333" }} size={18} />
              </button>
              개인키:
            </li>
          </ul>

          <h3>현재 잔액: <span className="balance">{balance ?? "0.00"}</span> {tokenName}</h3>

          <div className="transaction">
            <input 
              type="text" 
              placeholder="받는 주소" 
              value={recipient} 
              onChange={(e) => setRecipient(e.target.value)} 
            />
            <div className="gas-setting">
              <input
                type="text"
                placeholder="Max Limit 21000 gwei"
                value={gasLimit}
                onChange={(e) => setGasLimit(e.target.value)}
              />
            </div>
            <input 
              type="text" 
              placeholder="보낼 금액 (단위는 ETH 입니다)"
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
            />
            <button onClick={sendTransaction} className="send-btn" disabled={!(recipient && amount)}>
              송금
            </button>
          </div>

          <button onClick={deleteWallet} className="delete-wallet-btn">현재 지갑 삭제</button>
          <ul className="referenceLink">
        <li><a href="https://www.kaia.io/faucet" target="blank">kaia faucet 받기</a></li>
        <li><a href="https://faucet.polygon.technology/" target="blank">polygon faucet 받기</a></li>
        <li><a href="https://kairos.kaiascan.io/" target="blank">카이아 스캔(거래 해시를 조회합니다)</a></li>
      </ul>
        </>
        
      )}
    </div>
  );
};

export default MyWallet;
