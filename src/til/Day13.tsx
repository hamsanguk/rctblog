import React,{JSX} from "react"; //수정하기
import "../css/dayform.css"
const Day13=():JSX.Element=>{
    return(
        <div>
            <dl className="dayWrap">
                <dt className="daybutton">3/24 day35</dt>
                <dd className="daycontent">
                    <h2>solidity 사용</h2>
                    <h3>solidity 컴파일러 설치</h3>
                    <p>
                        npm i -g solc <br/>
                        or hardhat과 함꼐 사용하려면: npm i -D hardhat
                    </p>
                    <h3>solidity 코드 실행환경</h3>
                    <p>
                        Remix IDE: 브라우저 기반 solidity IDE, 컴파일,디버깅,배포 가능 <br/>
                        Hardhat: 로컬 개발환경, 테스트넷 배포, 테스트 가능 <br/>
                        Truffle: solidity 개발환경, 테스트, 배포 가능<br/>
                        배포를 위해서는 hardhat과 truffle을 사용한다
                            <ul>
                                <li>npx hardhat compile</li>
                                <li>npx hardhat run scripts deploy.js --network lacalhost</li>
                                <li>npx hardhat test</li>
                            </ul>
                    </p>
                    <h3>solidity특징</h3>
                    <ul>
                        <li>
                            스마트컨트랙트 기반:블록체인에서 자동실행되는 계약작성,중계자 없는 defi,nft,dao구현가능
                        </li>
                        <li>
                            EVM에서 실행가능: 이더리움뿐 아니라 poligon,avalanche,bnbchain등에서도 활용가능
                        </li>
                    </ul>
                    <h3>solidity IDE(integrated development Enviroment)</h3>
                    <p>
                        vscode는 코드 하이라이팅, 기본적인 컴파일을 지원하지만, 배포, 테스트, 디버깅을 위해서는 <br/>
                        hardhat,truffle과 같은 개발프레임워크가 필요 <br/>
                        remix: 브라우저 기반 solidity IDE, 컴파일,디버깅,배포 가능
                    </p>
                    <h3>pragma solidity 버전범위</h3>
                    <p>
                        pragam solidity [&gt=0.8.0] :특정버전 이상을 지정 <br/>
                        pragma solidity [^0.8.0] :최신버전 안정화 버전사용  <br/>
                        pragma solidity [0.8.0] : 고정된 버전<br/>
                    </p>
                    <h3>Value Type</h3>
                    <p>
                        solidiy의 데이터타잎은 value type과 reference type으로 나뉜다 <br/>
                        value type: 데이터를 복사하여 저장, 불변성을 가진다 <br/>
                        reference type: 데이터를 참조하여 저장, 가변성을 가진다
                    </p>
                    <ul>
                        <li><h4>value type</h4>
                            정수형: 변수가 직접 값을 저장, uint8,uint16,uint32,uint64,uint128,uint256,int8,int16,int32,int64,int128,int256<br/>
                            정수형은 부호있는 int (음,양수)와 부호없는 uint (양수)로 나뉜다 <br/>
                            연산할때 uint와 int를 섞어서 사용하면 오버플로우,언더플로우 (컴파일오류)발생<br/>
                            0으로 나누는 연산은 require로 예외처리
                        </li>
                        <li>
                            bool: true,false값을 가지는 불리언 타입, 초기 기본 값은 false
                        </li>
                        <li>
                            address: 이더리움 주소를 저장하는 변수, 주소를 저장하고 이더를 송금하는 함수를 가진다 <br/>
                            EOA (externally owned account) 및 스마트 컨트랙트 계정 모두 adress타입으로 식별
                            address public userAdress = 0x1234...;  특정 계정식별 용도의 기본적인 adress <br/>
                            address payable public owner = 0x1234...; 송금 기능 payable 속성이 추가된 주소타입<br/>
                            adress type 주요 메서드 <br/>
                            transfer: 이더 송금, 실패시 예외처리 <br/>
                            send: 이더 송금, 실패시 false반환 <br/>
                            call: 유연하지만 보안에 취약, 실패시 false반환<br/>
                            balance: 잔액확인<br/>
                            일반주소에서 payable주소로의 변환은 가능하지만 그 반대는 불가능
                        </li>
                        <li>
                            bytes: 바이트 배열을 저장하는 변수,문자열보다 낮은 가스 비용을 가지며, 특정 데이터 조작을 더 효율적으로 수행 <br/>
                            가변 크기의 바이트 배열을 저장 <br/>
                            bytes 고정 크기의 바이트 배열을 저장하는 변수는 bytes1~bytes32까지의 크기를 가진다<br/>
                        </li>
                        <li>
                            enum: 열거형 변수, 상태를 정의하고 상태에 따라 분기처리를 할때 사용,스마트컨트랙트에서 상태(state)나 옵션을 명확하게 표현하는데 사용된다 <br/>
                            저장은 값을 숫자로 저장하지만 가독성을 위하여 명명된 요소 사용가능<br/>
                            enum State  &#123;Pending, Active,Inactive &#125; 이렇게 명시되어있으면 pending=0,active=1,inactive=2로 값자체는 숫자로 저장된다
                        </li>
                    </ul>
                </dd>
            </dl>
        </div>
        
    )
}
{/* git fetch, git pull*/}
export default Day13;