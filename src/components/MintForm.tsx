import React, { useState } from "react";
import { uploadToPinata, uploadMetadataToPinata } from "../utils/pinata";
import { mintNFT, loginMetamask } from "../utils/web3MintNFT";
import "../css/MintForm.css"

const MintForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [minting, setMinting] = useState(false);

  const handleMint = async () => {
    if (!file || !name || !desc) return alert("모든 필드를 입력해주세요.");

    setMinting(true);
    try {
      const address = await loginMetamask();
      const imageUrl = await uploadToPinata(file);
      const metadataUrl = await uploadMetadataToPinata(name, desc, imageUrl);
      const txHash = await mintNFT(metadataUrl, address);
      alert("민팅 완료! TX: " + txHash);
    } catch (err) {
      alert(`민팅실패: ${err}`);
      console.log()
    }
    setMinting(false);
  };

  return (
    <div className="mint-form">
      <h2>NFT 민팅</h2>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
      <input placeholder="NFT 이름" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="설명" value={desc} onChange={(e) => setDesc(e.target.value)} />
      <button onClick={handleMint} disabled={minting}>
        {minting ? "민팅 중..." : "민팅하기"}
      </button>
    </div>
  );
};

export default MintForm;
