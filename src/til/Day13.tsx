import React,{JSX} from "react";

const Day13 = ():JSX.Element=>{
    return(
        <div>
            <h4>변수 선언 방식</h4>
            <p>
                (데이터타입)(가시성)(변수명)=(초기값);
                uint public myNum = 10;
                string private name = 'solidity'
                address internal owner;
                bool public isActive = true;
            </p>
            <ul>
                <li><h3>Visibility 가시성</h3></li>
                <li>
                    public:getter함수가 생성되는 내부,외부접근 가능한 데이터
                </li>
                <li>
                    private:선언된 컨트랙트 내부에서만 접근 가능
                </li>
                <li>
                    internal:선언된 컨트랙트, 그 상속받은 컨트랙트에서 접근가능
                </li>
                <li>
                    external:외부(컨트랙트, 계정)만 접근가능(번수는 사용불가 함수만 적용)
                </li>
            </ul>
            <h3>상태변수, 로컬변수</h3>
            <p>
                상태변수: 블록체인 저장소에 저장(storage)/ 영구적인 저장(트랜잭션 후에도 유지)/가스비용 발생(쓰기,읽기)/컨트랙트 내부 최상단쓰면 상태변수 <br/>
                로컬변수: Memory or Stack에 저장/함수 실행후 소멸/가스비용적음(일시적사용)/함수 내부에 쓰면 로컬변수
            </p>
            <h3>constatnt, immutable</h3>
            <p>
                상수:배포시점에 고정된값으로 수정불가능, 읽기연산에만 사용되므로 가스비용작다
                불변:배포시점에서만 설정가능,이후에는 변경불가능 보안성이 향상됨
            </p>
            <h3>function</h3>
            <p>
                외부호출이나 내부로직, 상태변수에 접근하거나 외부에서데이터를 가져오는데 사용된다, visibility(가시성) or state mutability(상태변경자)설정가능 <br/>
                function addNum(uint a,uint b) public pure returns (uint) &#123;return a+b;&#125; <br/>
                함수키워드&#124;함수이름&#124;(인자타입 인자이름)&#124;가시성지정&#124;상태 변경자&#124;(반환될타입)
            </p>
            <h3>state Mutability</h3>
            <p>
                함수가 스마트컨트랙트에 주는 영향을 정의<br/>
                view: 컨트랙트의 상태변수 읽기만 허용 (gas fee X)<br/>
                pure: 상태변수 읽기,쓰기 모두금지<br/>
                payable: ETH받을수 있는 함수(특정한 금액을 받을 수 있는 함수)
            </p>
            <p>
                returns (반환타입)을 지정한다: (string memory, uint) 튜플 형태
            </p>
        </div>
    )
}

export default Day13;