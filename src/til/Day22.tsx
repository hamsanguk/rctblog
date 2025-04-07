import React,{JSX} from "react";

const Day22 = ()=>{
    return(
        <>
        <dl className="dayWrap">
            <dt className="daybutton">Day22</dt>
            <dd className="daycontent">
                <h3>day44 solidity문법</h3>
                <p>
                    <h4>Interface</h4>
                    외부계약이 따를 수 있는 표준 함수 시그니처만 정의하는 컨트랙트(contract 키워드 대신 ). <br />
                    상태변수나 구현 로직이 포함되서는 안되며 <b>함수의 선언만 작성(external)</b>가능
                    다른계약에서 상속받아 구현되야 된다, 상속받은 컨트랙트는 interface 안에 모든것을 구현해야 된다 <br />
                    사용예시:표준화된 인터페이스 정의(ERC20 등 여러 토큰)

                    <h4>Abstract contract</h4>
                    하나 이상의 구현않된 함수를 가진 계약으로 기본 로직이나 공통기능을 정의하고,
                    이를 상속받은 계약에서 구현하도록 설계 <br/>
                    직접배포 불가, 최소 하나이상의 virtual함수 필요, 상속받으려면 override 키워드 필요 <br />
                    사용예시:공통 로직을 제공하는 기반 계약
                    
                    <h4>Library</h4>
                    재사용 가능한 코드 집합, 상태변수 없고 직접 배포 불가능 하며 이더수신 불가,오직 함수집합만 제공  <br />
                    컨트랙트에서 직접 호출되거나 using for구문에서 사용된다, 최적화 기능 내장
                </p>
            </dd>
        </dl>
        </>
    )
}
export default Day22;