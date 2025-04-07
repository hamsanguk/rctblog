import React from "react";

const Day23: React.FC = () => {
    return (
        <div>
            <dl className="dayWrap">
                <dt className="daybutton">day23</dt>
                <dd className="daycontent">
                    <h3>solidity abi</h3>
                    <p>
                        컨트랙트 호출이란 배포된 컨트랙트의 함수를 호출하는것으로 상태변경이나 데이터조회가 가능하다 <br />
                        <ul>
                            <li><h3>컨트랙트 호출방식</h3></li>
                            <li>트랜잭션 호출: 상태변경이 발생하는 함수호출 가스비용 소모</li>
                            <li>조회(call): 읽기전용 가스소모 없음</li>
                        </ul>
                    </p>
                        
                        <h3>abi(application binary interface)</h3>
                        <p>
                            컨트랙트에서 호출할수 있는 함수 및 데이터 구조를 정의하는 인터페이스 <br />
                            컨트랙트 배포시 자동으로 생성되고, 컨트랙트 주소와 함수 시그니처를 포함한다. <br />
                            abi encoding: 함수호출시 데이터를 바이트화 하여 EVM에 전달 <br />
                            abi decoding: 컨트랙트의 응답값(바이트)을 사람이 읽을수 있는 형태로 변환 <br />
                        </p>
                        <p>
                            중요한구문:<h4>await tx.wait()</h4>  <br />
                            트랜잭션이 블록체인에 완전히 저장될 때까지 기다리는 구문이다. <br />
                            이 구문을 사용하면 트랜잭션이 완료될 때까지 대기하고, 성공처리 되었는지 확인하고, tx receipt를 반환 <br />
                            tx의 실패여부를 확인해야되고,가스비 사용량등 tx의 상세정보를 확인하며,tx완료전에 확인하면 잘못된 결과발생 <br /> 
                        </p>
                </dd>
            </dl>
        </div>
    );
};

export default Day23;