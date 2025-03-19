import "../css/Explorer.css";
import React, { useState } from "react";
import { getTransaction, getBlock } from "../utils/web3";
import { useNavigate } from "react-router-dom";

const bigIntReplacer = (key: string, value: any) => typeof value === "bigint" ? value.toString() : value;

const Explorer: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    // 입력값 변경 시 처리
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        setError(null);
    };

    // 검색 실행
    const handleSearch = async () => {
        setResult(null);
        setError(null);

        if (searchQuery.trim() === "") {
            setError("검색어를 입력하세요.");
            return;
        }

        try {
            // 주소 조회
            if (/^0x[a-fA-F0-9]{40}$/.test(searchQuery)) { // 16진수 주소 형식 검사
                navigate(`/explorer/address/${searchQuery}`); // 주소 페이지로 이동
                return;
            }

            // 트랜잭션 조회
            const txResult = await getTransaction(searchQuery);
            if (txResult) {
                setResult(txResult);
                navigate(`tx/${searchQuery}`); // 트랜잭션 페이지로 이동
                return;
            }

            // 블록 조회
            if (/^\d+$/.test(searchQuery)) {
                const blockResult = await getBlock(searchQuery);
                if (blockResult) {
                    navigate(`/explorer/block/${searchQuery}`)
                } else {
                    setError("블록을 찾을 수 없습니다.");
                }
            } else {
                setError("올바른 트랜잭션 해시, 블록 번호 또는 주소를 입력하세요.");
            }
        } catch (err) {
            setError("데이터를 불러오는 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="pageWrap">
            <input
                className="searchBar"
                type="text"
                placeholder="블록 번호, 트랜잭션 해시, 또는 주소 입력"
                value={searchQuery}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>검색</button>
            {error && <p className="error">{error}</p>}
            {result && (
                <div className="result">
                    <h3>검색 결과:</h3>
                    <pre>{JSON.stringify(result, bigIntReplacer, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Explorer;
