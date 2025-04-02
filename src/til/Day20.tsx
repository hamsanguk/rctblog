import React,{JSX} from 'react';

const Day20 = (): JSX.Element => {
    return (
    <>
        <dl className="dayWrap">
            <dt className="dayButton">
                <h3>day41 solidity 문법</h3>
            </dt>
            <dd className="daycontent">
                <h2>solidity Test</h2>
                <p>
                    solidity는 배포후에 수정할수 없어서 여러 테스트를 거친후에 배포되야 된다 <br/>
                    <b>로컬테스트의 주요 목적과 기능</b>:기본적인 논리 검증, 이벤트 발생여부 확인, 오류 및 예외처리 검증 <br/>
                    가스소비량 테스트 <br/>
                   <br />
                   로컬 테스트는 특성상 빠르고 비용이 들지않는다
                   <br />
                   <b>테스트배포후 확인 사항</b>:
                </p> <br />
                <b>로컬테스트 한계:</b>실제 가스비 측정 불가, 실제 네트워크 지연(latency) 반영 불가, 실제 네트워크와 다르다.
                <p>
                    <b>hardhat</b>: 내장 ethers 지원과 트랜잭션 및 스마트 컨트랙트 테스트에 최적화 <br />
                    <b>truffle</b>: web3를 제공하며, ganache 와 truffle suite와 같이 작동하도록 설계 <br />
                </p>
                <p>
                    defference of constant and immutable
                    초기값 설정 후 변경 불가능
                    constant는 컴파일 타임에 값이 결정되고, immutable은 컴파일 타임이 아닌 런타임에 값이 결정된다.
                    <br />
                    constant는 변수 선언시 값을 할당해야 하고, immutable은 생성자에서 할당해야 한다.
                    <br />
                </p>
            </dd>
        </dl>
    </>
    )
}
export default Day20;