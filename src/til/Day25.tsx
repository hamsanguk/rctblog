import React from "react";

const Day25: React.FC = () => {
    return (
        <div>
        <dl className="dayWrap">
            <dt className="dayButton">day25</dt>
            <dd className="dayContent">
                <h3>4/9</h3>
                <p>
                    <h3>hardhat 상세 구성</h3>
                    hardhat.config.ts: 프로잭트 설정(네트워크 상세, 컴파일러 버전) <br />
                    abi: 컨트랙트 배포후 자동생성, 컨트랙트 코드 추가 시 수동 업데이트, 배포된 컨트랙트와 상호작용 <br />
                </p>
            </dd>
        </dl>
        </div>
    )
}
export default Day25;