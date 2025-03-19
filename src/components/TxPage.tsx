import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTransaction } from "../utils/web3";

const bigIntReplacer = (key: string, value: any) => typeof value === "bigint" ? value.toString() : value;

const TxPage: React.FC = () => {
    const { txHash } = useParams<{ txHash?: string }>(); // URL에서 트랜잭션 해시 추출
    const [txData, setTxData] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가

    useEffect(() => {
        if (!txHash) {
            setError("트랜잭션 해시가 제공되지 않았습니다.");
            setLoading(false);
            return;
        }

        const fetchTransaction = async () => {
            try {
                setLoading(true);
                const tx = await getTransaction(txHash);
                if (tx) {
                    setTxData(tx); // 트랜잭션 데이터 저장
                } else {
                    setError("트랜잭션을 찾을 수 없습니다.");
                }
            } catch (err) {
                setError("트랜잭션을 불러오는 중 오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchTransaction();
    }, [txHash]); // txHash가 변경될 때마다 실행

    return (
        <div className="txPage">
            <h1>트랜잭션 상세</h1>
            {loading && <p>로딩 중...</p>}
            {error && <p className="error">{error}</p>}
            {txData && (
                <div className="txDetails">
                    <h3>트랜잭션 해시: {txHash}</h3>
                    <pre>{JSON.stringify(txData, bigIntReplacer, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default TxPage;
