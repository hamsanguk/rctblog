import React from 'react';

const Day44 = () => {
    return (
        <dl className="dayWrap">
            <dt className="daybutton">6/2</dt>
            <dd className="daycontent">
                <h1>이더리움 스마트 컨트랙트 보안: A Survey of Ethereum Smart Contract Security: Attacks and Detection</h1>

                <p>이더리움 스마트 컨트랙트는 탈중앙화 애플리케이션을 가능하게 하지만 동시에 다양한 보안 취약점을 야기할 수 있습니다. 본 발표에서는 주요 취약점과 탐지 도구를 소개합니다.</p>

                <p>
                    <strong>컨트랙트 특징:</strong> 이더리움 기반의 DeFi, NFT, DAO 등에서 활발히 사용되며, 수정이 불가능하고 많은 자산을 보관하므로 해킹 타깃이 됩니다.
                </p>

                <p>일반적인 프로그램과 달리, <b>스마트 컨트랙트는 5단계 생애주기</b>를 가집니다.</p>
                <ol>
                    <li>개발: Solidity로 로직을 코드화</li>
                    <li>컴파일: EVM에서 동작되게 bytecode 변환, ABI 생성</li>
                    <li>배포: 바이트코드와 ABI를 포함한 트랜잭션이 블록체인에 기록되고, 채굴자가 이 트랜잭션을 블록에 포함시켜야 계약이 활성화됨</li>
                    <li>실행: 사용자나 다른 컨트랙트가 호출 (트랜잭션: 상태변경 / 메시지 호출: 상태변경 없이 읽기)</li>
                    <li>
                        자기 파괴(Self-Destruct): <code>selfdestruct</code> 명령어로 컨트랙트 영구 제거 가능<br />
                        - 소유자에 의한 파기: 테스트 계약, 임시 계약<br />
                        - 긴급 탈출(Emergency Exit): 시스템이 손상되었을 때<br />
                        - 자금 회수: 계약 종료와 함께 잔고 회수<br />
                        - 자동 파기: 조건 충족 시 자동 selfdestruct 트리거<br />
                        <img src="./images/killable.png" alt="killable" />
                    </li>
                </ol>

                <hr />

                <h2>3계층 위협 모델</h2>
                <ul>
                    <li><strong>블록체인 계층:</strong> 1. 타임스탬프 의존성, 2. 거래 순서 의존성</li>
                    <li><strong>EVM 계층:</strong> 3. 재진입, 4. 짧은 주소</li>
                    <li><strong>Solidity 계층:</strong> 5. 예외 미처리, 6. 이더 동결, 7. tx.origin 사용, 8. 서비스 거부</li>
                </ul>

                <h2>주요 취약점 설명</h2>

                <h3>1. 타임스탬프 의존성</h3>
                <p>블록 타임스탬프를 조작해 스마트 컨트랙트 결과에 영향을 줄 수 있음. block.timestamp는 중요 결정에 사용하지 말 것.</p>

                <h3>2. 거래 순서 의존성 (TOD)</h3>
                <p>공개 풀에서 거래를 관찰하고 더 높은 가스비로 선점하는 공격. 커밋-공개 방식 활용 권장.</p>

                <h3>3. 재진입</h3>
                <p>외부 호출이 상태 변경 전 컨트랙트를 재진입하는 공격. Checks-Effects-Interactions 순서로 코드 작성.</p>

                <h3>4. 짧은 주소 공격</h3>
                <p>주소 포맷 오류로 파라미터가 밀리는 현상. 주소 길이 검증 필수.</p>

                <h3>5. 예외 미처리</h3>
                <p>call 같은 저수준 호출의 실패를 무시할 수 있음. 항상 반환값 확인.</p>

                <h3>6. 이더 동결</h3>
                <p>출금 경로가 없는 컨트랙트는 이더가 영구히 잠김. 긴급 출금 기능 필요.</p>
                <h3>7. tx.origin</h3>
                <p>
                    tx.origin으로 인증 시 피싱 공격에 노출. msg.sender 사용 권장.<br />
                    (예시) 공격자가 사용자의 인증된 지갑으로 만든 중간 컨트랙트를 호출하면,<br />
                    tx.origin == owner 조건을 통과해 권한을 탈취할 수 있습니다.
                </p>
                <h3>8. 서비스 거부 (DoS)</h3>
                <p>예상치 못한 연산이나 호출 실패로 컨트랙트 기능 마비. 가스 최적화 및 예외 처리 필요.</p>
                <hr />
                <h2>취약점 탐지 도구</h2>
                <ul>
                    <li>
                        <strong>기호 실행:</strong> Oyente, Manticore, Mythril, Maian
                        <p>
                            기호 실행은 스마트 컨트랙트의 입력값을 상징적(symbolic) 값으로 대체하여 가능한 모든 실행 경로를 탐색하는 기법입니다. 예를 들어 Mythril은 EVM 바이트코드를 입력으로 받아 재진입 취약점이나 오버플로우 가능성을 정적 분석할 수 있습니다.
                        </p>
                    </li>

                    <li>
                        <strong>형식 검증:</strong> Zeus, Securify
                        <p>
                            수학적 증명을 통해 스마트 컨트랙트의 보안 속성을 보장합니다. Zeus는 LLVM 중간 언어로 변환하여 보안 정책을 적용하고, Securify는 DSL 기반 보안 패턴과 코드를 비교하여 위반 여부를 탐지합니다.
                        </p>
                    </li>
                    <li>
                        <strong>퍼징 기법:</strong> ContractFuzzer, Reguard
                        <p>
                            다양한 무작위 입력을 통해 실행 중 발생할 수 있는 예외나 충돌을 탐지합니다. 예컨대 ContractFuzzer는 예외 처리 미흡 또는 DoS 가능성을 테스트할 수 있습니다.
                        </p>
                    </li>
                    <li>
                        <strong>정적 분석:</strong> Slither, SmartCheck
                        <p>
                            실제 실행 없이 코드 자체만을 분석하여 취약 패턴을 탐지합니다. Slither는 빠르고 상세한 리포트를 제공하고, SmartCheck는 XML 변환 후 XPath로 보안 위험을 식별합니다.
                        </p>
                        <img src="./images/slither.png" alt="slither" />
                    </li>
                </ul>
                <h2>결론</h2>
                <p>스마트 컨트랙트의 보안은 필수적입니다. 주요 취약점을 이해하고 적절한 도구를 활용하여 신뢰 가능한 DApp을 구축해야 합니다.</p>
            </dd>
        </dl>
    );
};

export default Day44;
