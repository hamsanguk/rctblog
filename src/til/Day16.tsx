import React,{JSX} from "react";
import "../css/dayform.css"

const Day16 = ():JSX.Element=>{
    return(
        <div>
            <dl className="dayWrap">
                <dt className="daybutton">day38solidity문법</dt>
                <dd className="daycontent">
                    <h3>global Variables</h3>
                    <p>
                        전역변수는 스마트컨트랙트 실행시 자동제공되는 읽기전용테이터, (블록,트랜잭션,메세지에 대한정보 제공)<br/>
                        msg.sender .value .data | tx.origin |block.timestamp .number .prevrandao .gaslimit .coinbase .gasleft()
                    </p>
                    <h3>전역함수</h3>
                    <p>
                        gasleft():현재 트랜잭션에서 남아있는 가스양 확인 <br />
                        kecckak256():입력된 데이터를 해시처리 <br />
                        blockhash(uint):특정블록번호에 대한 해시값을 반환(최근 256개 block)
                    </p>
                    <ul>
                        <li><h3>전역변수와 함수 사용시 주의</h3></li>
                        <li>
                            tx.origin은 재진입공격에 최약:인증에 사용x/ msg.sender를 권장 사용
                        </li>
                        <li>
                            block.timestamp 채굴자에 의해 소폭변경 +-15초 시간기반 게임로직에 유의
                        </li>
                    </ul>
                    <p>
                        public:상속받은 계약에서 접근 가능 <br />
                        internal:상속받은 계약어서 접근가능(외부접근 불가)  <br />
                        private:상속받은 계약에서도 접근 불가
                    </p>
                    <h3>Interface</h3>
                    <p>
                        외부계약이 따를 수 있는 표준함수 시그니처만 정의
                        변수나 구현로직 포함불가,함수의 선언만 포함<br />
                        기본로직이나 공통기능을 정의하고, 이를 상속받은 계약에서 구현하도록 설계<br />
                        직접 배포 불가,최소 하나이상의 virtual 함수가 존재
                        정의:interface IAnimal&#123;function makeSound() external view returns(string memory)&#125;
                    </p>
                    <h3>추상계약(Abstract contracts)</h3>
                    <p>
                        하나이상의 구현않되 함수를 가진 계약, 기본로직이나 공통 기능을 정의하고, 상속받은 계약에서 구현하도록 설계 <br />
                        직접배포 불가,하나이상의 virtual 함수 필요,상속받은 계약에서 반드시 override해야된다
                        library LibraryName&#123; function functionName(parameters) public pure returns (type)&#123;&#125; &#125;
                    </p>
                    <p>
                        using for구문은 라이브러리 함수를 특정 데이터에 연결시켜, 메서드 형식으로 사용을 돕는다.
                        
                    </p>
                    
                </dd>
            </dl>
        </div>
    )
}

// msg.sender vs tx.origin
// EOA(트랜잭션 생성): 컨트랙트 1 호출 => 컨트랙트 1: 함수 실행시 컨트래트 2 호출 => 컨트랙트 2: !!여기서 msg.sender or tx.origin은 어떻게 될까?!!
// function getRandom() external view returns (uint256) {
//     return uint256(keccak256(abi.encodePacked(block.prevrandao, msg.sender, block.timestamp)));
// }
export default  Day16;