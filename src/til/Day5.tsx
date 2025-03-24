import React, { JSX } from "react";
import "../css/dayform.css"
const Day5 = (): JSX.Element => {
    return (
        <dl className="dayWrap">
            <dt className="daybutton">
                25.2.7 day 5 기존 블록체인에서 차별화된 이더리움
            </dt>
            <dd className="daycontent">
                <h3>최초의 코딩이 가능한 블록체인</h3>
                <p>
                    튜링완전성(Turing Completeness): 어떠한 계산 가능한 문제도, 적절한 알고리즘과 충분한 리소스(시간과 메모리)가 주어진다면 해결 가능해야 함으로
                    while, for, if 등의 루프 반복 조건문 실행이 가능해야 한다.
                    기존의 비트코인의 트랜잭션 스크립트 언어는 튜링 불완전하며 비트코인은 디지털 통화의 역할만 부여되어 있다.
                    비탈릭 부테린이라는 인물이 블록체인에 튜링완전성을 더하고 싶어 이더리움이라는 새로운 블록체인 플랫폼을 개발했다.
                </p>
                
                <h5>이더리움의 핵심목표</h5>
                <ul>
                    <li>스마트계약</li>
                    <li>탈중앙화 자율조직(DAO), DeFi, NFT</li>
                    <li>탈중앙화 어플리케이션 DApps</li>
                    <li>프로그래밍 가능성 (Solidity)</li>
                </ul>
                
                <h3>비트코인과 이더리움의 차이</h3>
                
                <h4>비트코인</h4>
                <ul>
                    <li>UTXO모델: 잔액 추적이 아닌 미사용 거래 출력을 추적</li>
                    <li>nonce: 채굴 과정(난이도 조건 충족까지 블록 헤더 해시 결과의 변수로 사용하기 위한 변수로 사용하기 위해 변경)</li>
                    <li>제한적인 프로그래밍 가능성</li>
                    <li>가상머신 X</li>
                </ul>
                
                <h4>이더리움</h4>
                <ul>
                    <li>계정 기반 모델(Account-based): 각 계정에 대한 잔액 관리</li>
                    <li>nonce: 재사용 방지 목적의 각 계정에서 발생한 트랜잭션 순서 관리</li>
                    <li>유연한 프로그래밍 가능성</li>
                    <li>가상머신 EVM</li>
                </ul>

                <h3>이더리움 EVM</h3>
                <p>
                    가상머신: 사람이 작성한 코드와 하드웨어 사이 소프트웨어적으로 구현된 실행 환경. 실제로 존재하지 않아 가상머신이라 한다.
                    이더리움 스마트 계약은 Solidity라는 고급 언어로 작성되어 EVM이 해석할 수 없기 때문에, 
                    <strong>solc</strong> 컴파일러를 사용해 EVM 친화적인 바이트코드로 변환된다.
                </p>
                <ol>
                    <li>solidity - solc compile [bytecode]</li>
                    <li>bytecode - EVM</li>
                </ol>

                <h3>튜링완전성의 보완점</h3>
                <p>
                    튜링 기능으로 인해 악의적으로 무한 반복문을 사용하면 네트워크 자원이 낭비될 수 있다. 이를 방지하기 위해 연산이 필요한 작업에 가스 비용을 부과하며,
                    가스가 소진되면 그 트랜잭션을 중단시키는 매커니즘을 가진다.
                </p>
                <ol>
                    <li>
                        보안 격리(sandboxing): EVM은 계약 간 충돌을 방지하며, 잘못된 코드가 네트워크나 다른 계약에 영향을 주지 않도록 격리된 실행 환경을 제공.
                    </li>
                    <li>gas: 바이트코드 실행에는 가스 비용이 소모된다.</li>
                </ol>
            </dd>
        </dl>
    );
};

export default Day5;
