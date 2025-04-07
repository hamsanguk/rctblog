import React,{JSX} from "react";

const Day21 = ()=>{
    return(
        <>
            <dl className="dayWrap">
                <dt className="daybutton">Day21</dt>
                <dd className="daycontent">
                    <h3>day 43 solidity문법</h3>
                    <p>
                        solidity 상속<br />
                        <h5>기본적으로 상속받으면 상태변수와 함수를 자동으로 받아 사용할 수 있다</h5>
                        <b>부모컨트랙트에서 준비할것</b>:상속원하는 함수는 [virtual] 키워드 지정,<br/>
                            고려할키워드들[public:어디서든 접근가능, internal:상속받은 계약에서 접근가능(외부는 접근불가), private:상속되도 접근불가]  <br />
                        <b>자식컴포넌트에서 준비할것</b>:import "parent.sol"지정/ 컨트랙트 선언시 is parent 로 선언,
                        
                    </p>
                </dd>
            </dl>
        </>
    )
}
export default Day21;