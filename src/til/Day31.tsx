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
                                상속받는 contract 각각의 모양을 명시
                            </li>
                            <li>
                                implemantation contract:실제 비즈니스 로직을 실행,
                                직접 사용되지 않고,proxy를 통해서만 호출된다,상태변수는 가지지만 저장은 proxy의 storage에 저장(delegatecall 때문)
                                필요한 경우, 새로운 로직 버전을 만들어 proxy에 연결시켜 업그레이드 가능
                            </li>
                         </ul>
                         <h4>user - upgradable proxycontract - implementation contract</h4>
                         <p>
                            storage:CA와 연결된 고유함 저장공간,값은 트랜잭션 이후에도 계속 유지,가스비용이 높다(쓰기비용)
                            저장방식- slot단위로 저장:순서는 상태변수 선언순서대로 슬롯 할당
                            upgradable contract에서는 로직 컨트랙트를 교체해도 storage는 proxy쪽에만 남겨야 하여,
                            슬롯 충돌을 주의해야 된다
                         </p>
                         <h3>eip1967슬롯고정방식</h3>
                         <p>
                            byte32 constant IMPLEMENTATION_SLOT = keccak256("eip1967.proxy.implementation")-1
                            이 슬롯은 implementation address를 저장하기 위한 고유슬롯, 다른 상태변수와 절대 슬롯 충돌이 발생하지 않도록 고정된 위치에서 사용
                         </p>
                         <p>
                            업그레이더블컨트랙트에서 fallback함수와 delegatecall
                            fallback함수-사용자 진입점
                            delegatecall이 없다면 업그레이더블 패턴은 불가능하다
                            사용자가 Proxy컨트랙트에 정의되지 않은 함수를 호출하면, 이 fallback함수가 실행되고,
                            내부에서 delegatecall을 통해 실제 로직 컨트랙트로 요청을 넘긴다
                         </p>
                         <p>
                            proxyContract  -delegatecall() -  logic(implementation)contract
                            proxy컨트랙트에서 다른 컨트랙트(implementation)의 코드를 실행시킨다
                            단,proxy의 상태를 그대로 사용중, 즉 로직은 implementation이 제공하며 저장역할은 proxy가 담당
                         </p>
                         <h4>유저가 프록시에 호출 - fallback 작동 - delegatecall실행 - 로직 컨트랙트의 코드 실행
                            - 결과는 proxy의 storage에 저장
                         </h4>
                         <p>
                            <h3>proxy pattern을 위한 구성요소3가지</h3>
                            <ul>
                                <li>proxy contract:유저가 호출하는 진입점.실제 로직이 없으며 delegatecall을 이용하여 위임</li>
                                <li>Implementation contract(logic):실제 기능이 정의된 컨트랙트</li>
                                <li>Storage(proxy 내부):데이터는 proxy에 저장된다(delegatecall)</li>
                            </ul>
                         </p>
                    </p>
                </dd>
            </dl>
        </>
    )
}
export default Day31;