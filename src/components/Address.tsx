import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBalance, getRecentTransactions } from "../utils/web3";  // 수정된 메서드 가져오기

const bigIntReplacer = (key: string, value: any) => typeof value === "bigint" ? value.toString() : value;

const Address: React.FC = () => {
    const { address } = useParams<{ address?: string }>(); // URL에서 주소 추출
    const [accountData, setAccountData] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가

    useEffect(() => {
        if (!address) {
            setError("주소가 제공되지 않았습니다.");
            setLoading(false);
            return;
        }

        const fetchAccountData = async () => {
            try {
                setLoading(true);
                // 주소의 잔액 조회
                const balance = await getBalance(address);
                if (balance === null) {
                    setError("잔액을 불러오는 중 오류가 발생했습니다.");
                    return;
                }
                // 최근 거래 내역을 가져오는 로직
                const transactions = await getRecentTransactions(address);

                setAccountData({ balance, transactions }); // 잔액과 거래 내역 저장
            } catch (err) {
                setError("주소 정보를 불러오는 중 오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchAccountData();
    }, [address]);

    return (
        <div className="addressPage">
            <h1>주소 상세</h1>
            {loading && <p>로딩 중...</p>}
            {error && <p className="error">{error}</p>}
            {accountData && (
                <div className="accountDetails">
                    <h3>주소: {address}</h3>
                    <p>잔액: {accountData.balance} wei</p>
                    <h4>최근 거래 내역:</h4>
                    <ul>
                        {accountData.transactions.map((tx: any, index: number) => (
                            <li key={index}>
                                <p>트랜잭션 해시: {tx.hash}</p>
                                <p>상태: {tx.status ? "성공" : "실패"}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Address;
