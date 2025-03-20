import "../css/BlockPage.css"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlock } from "../utils/web3";
import Explorer from "./Explorer";

const bigIntReplacer = (key: string, value: any) => typeof value === "bigint" ? value.toString() : value;

const BlockPage: React.FC = () => {
    const { blockNumber } = useParams<{ blockNumber?: string }>(); // URL에서 블록 번호 가져오기
    const [blockData, setBlockData] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가

    useEffect(() => {
        if (!blockNumber) {
            setError("블록 번호가 제공되지 않았습니다.");
            setLoading(false);
            return;
        }

        const fetchBlock = async () => {
            try {
                setLoading(true);
                const block = await getBlock(blockNumber);
                if (block) {
                    setBlockData(block); // 블록 데이터 저장
                } else {
                    setError("블록을 찾을 수 없습니다.");
                }
            } catch (err) {
                setError("블록을 불러오는 중 오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlock();
    }, [blockNumber]); // blockNumber가 변경될 때마다 실행

    return (
        <div className="blockPage">
            <h1>블록 상세</h1>
            
            {loading && <p>로딩 중...</p>}
            {error && <p className="error">{error}</p>}
            {blockData && (
                <div className="blockDetails">
                    <h3>블록 번호: {blockNumber}<Explorer/></h3>
                    <div className="blockInfo">
                        <div><strong>블록 해시:</strong> {blockData.hash}</div>
                        <div><strong>Nonce:</strong> {blockData.nonce}</div>
                        <div><strong>마이너:</strong> {blockData.miner}</div>
                        <div><strong>타임스탬프:</strong> {new Date(Number(blockData.timestamp) * 1000).toLocaleString()}</div>
                        <div><strong>가스 사용량:</strong> {blockData.gasUsed}</div>
                    </div>
                    <div className="transactions">
                        <h4>트랜잭션 목록</h4>
                        {blockData.transactions && blockData.transactions.length > 0 ? (
                            <ul>
                                {blockData.transactions.map((tx: string, index: number) => (
                                    <li key={index}>
                                        <strong>트랜잭션 {index + 1}:</strong>
                                        <div><strong>트랜잭션 해시:</strong> {tx}</div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>트랜잭션이 없습니다.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlockPage;
