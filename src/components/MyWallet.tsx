import { Copy } from "lucide-react";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import "../css/mywallet.css";


const rpcUrls = {
  kairosTest1: "https://public-en-kairos.node.kaia.io",
  klaytnTest2: "https://rpc.ankr.com/klaytn_testnet",
  amoyTest: "https://rpc-amoy.polygon.technology", 
};//rpc endpoint

const MyWallet = () => {
  const [rpcUrl, setRpcUrl] = useState(rpcUrls.kairosTest1); // 초기값 설정
  const [web3, setWeb3] = useState(new Web3(rpcUrl));
  const [wallet, setWallet] = useState<{ address: string; privateKey: string } | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [txHash, setTxHash] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  //  RPC URL 변경 핸들러
  const handleRpcChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newRpc = event.target.value;
    setRpcUrl(newRpc);
    setWeb3(new Web3(newRpc));
  };

  //  로컬 스토리지에서 지갑 불러오기
  useEffect(() => {
    const savedWallet = localStorage.getItem("wallet");
    if (savedWallet) {
      setWallet(JSON.parse(savedWallet)); // 저장된 지갑 복원
    }
  }, []);

  //  지갑 생성
  const createWallet = () => {
    const newWallet = web3.eth.accounts.create();
    setWallet(newWallet);
    setBalance(null);
    setTxHash(null);

    // 로컬 스토리지에 지갑 정보 저장
    localStorage.setItem("wallet", JSON.stringify(newWallet));
  };

  // 잔액 조회
  const getBalance = async () => {
    if (!wallet) return;
    const balanceWei = await web3.eth.getBalance(wallet.address);
    setBalance(parseFloat(web3.utils.fromWei(balanceWei, "ether")).toFixed(3));
  };

  //  송금 기능
  const sendTransaction = async () => {
    if (!wallet || !recipient || !amount) return;

    try {
      const value = web3.utils.toWei(amount, "ether");
      const gasPrice = await web3.eth.getGasPrice();
      const tx = {
        from: wallet.address,
        to: recipient,
        value,
        gas: 21000,
        gasPrice,
      };

      const signedTx = await web3.eth.accounts.signTransaction(tx, wallet.privateKey);
      const sentTx = await web3.eth.sendSignedTransaction(signedTx.rawTransaction!);

      setTxHash(sentTx.transactionHash.toString());
      getBalance();
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

  // 지갑 삭제 기능 로컬 스토리지에서도 삭제
  const deleteWallet = () => {
    setWallet(null);
    setBalance(null);
    setTxHash(null);
    localStorage.removeItem("wallet");
  };

  return (
    <div className="wrap">
      {/* RPC URL 선택 (지갑 초기화 X) */}
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

      {!wallet ? (
        <button onClick={createWallet} className="create-wallet-btn">지갑 생성</button>
      ) : (
        <>
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
              개인키::<span className="textNone">{wallet.privateKey}</span> 
            </li>
          </ul>

          <button onClick={getBalance} className="balance-btn">잔액 조회</button>
          <h3>현재 잔액: <span className="balance">{balance ?? "0.00"}</span> ETH</h3>

          <div className="transaction">
            <input 
              type="text" 
              placeholder="받는 주소" 
              value={recipient} 
              onChange={(e) => setRecipient(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="보낼 금액 (ETH)" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
            />
            <button onClick={sendTransaction} className="send-btn">송금</button>
          </div>

          {txHash && (
            <div className="modal-overlay">
                <div className="modal">
                <p className="transaction">거래 해시: {txHash}</p>
                <button className="close-btn" onClick={() => setTxHash(null)}>
                    닫기
                </button>
                </div>
            </div>
            )}
          <button onClick={deleteWallet} className="delete-wallet-btn">현재 지갑 삭제</button>
        </>
      )}

      {copySuccess && <p className="copy-success">{copySuccess}</p>}


      <ul className="referenceLink">
        <li><a href="https://kairos.kaiascan.io/">카이아 스캔</a></li>
        <li><a href="https://www.kaia.io/faucet">faucet 받기</a></li>
      </ul>

    </div>
  );
};

export default MyWallet;
