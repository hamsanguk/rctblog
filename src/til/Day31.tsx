import React,{JSX} from "react";

const Day31 = ():JSX.Element=>{
    return(
        <>
            <dl className="dayWrap">
                <dt className="daybutton">4/29</dt>
                <dd className="daycontent">
                    <h3>upgradable contract</h3>
                    <p>
                        contract는 특성상 배포후에 변경을 할 수 없지만 프록시패턴을 이용하면 변경할수 있다. <br />
                        일반적인 소프트웨어 개발에서 프록시패턴은 실제 대상대신 요청을 중계하는 역할을 수행
                         
                         <ul>
                            <li>
                                proxy contract:중계자 역할, 사용자가 직접 사용할 외부 인터페이스, 사용자의 호출을 받아서 실제 구현된 implemantation Contract로 위임을 한다
                                자신의 상태변수(storage)를 유지한채, 로직만 외부 컨트랙트에 위임
                                핵심기능: delegatecall로 로직을 실행, implamentation주소를 저장한다, 업그레이드시 이 주소만 변경하면 다른 로직실행 가능
                            </li>
                            <li>
                                implemantation contract:실제 비즈니스 로직을 실행,
                                직접 사용되지 않고,proxy를 통해서만 호출된다,상태변수는 가지지만 저장은 proxy의 storage에 저장(delegatecall 때문)
                                필요한 경우, 새로운 로직 버전을 만들어 proxy에 연결시켜 업그레이드 가능
                            </li>
                         </ul>
                         <p>
                            상태변수:evm의 영구저장공간 storage에 저당되는 변수, solidity에서는 상태변수선언을 순서대로 slot에 저장
                            업그레이드 컨트랙트에서는 로직컨트랙트를 교체해도 storage는 proxy쪽에만 남겨야하므로 슬롯충돌 주의
                         </p>
                         <p>
                            EIP-1967 슬롯고정방식
                         </p>

                    </p>
                </dd>
            </dl>
        </>
    )
}