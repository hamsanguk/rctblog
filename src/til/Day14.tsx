import React,{JSX} from "react";

const Day14=():JSX.Element=>{
    return(
        <div>
            <dl>
                <dt className="daybutton">day36 solidity문법</dt>
                <dd className="daycontent">
                    <h3>참조타입</h3>
                    <p>
                        참조타입: 데이터를 참조하여 저장, 가변성을 가진다 <br/>
                        배열,구조체,매핑,함수,모듈,라이브러리,스토리지,메모리,컨트랙트가 있다
                    </p>
                    <ul>
                        <li>
                            <h3>string type</h3>
                            <p>
                                string public greeting = "Hello, World!"; <br/>
                                주로 이름,이메일,토큰네임등 사람이 식별해야 될 문자에 사용이된다.<br/>
                                str자체는 조작기능이 제한있고,가스 효율이 않좋아서 bytes로 대체하여 사용하거나 혼합하여 사용한다<br/>
                                str == str2 직접 비교연산은 지원이 않되며, keccak256를 이용하여 변환후에 비교를 한다.
                            </p>
                        </li>
                        <li>
                            <h3>Array type</h3>
                            <p>
                                배열은 동적크기와 고정크기로 나뉜다: uint[] dynamicArray; uint[5] fixedArray; <br/>
                                배열은 push,pop,shift,unshift,delete,splice,concat,join,reverse,sort,filter,map,reduce등의 메소드를 지원한다 <br/>
                                uint[] public nums; 가변배열, uint[5] public nums; 최대요소5개고정배열<br/>
                                배열관련 내장함수는 고정크기배열 사용불가

                            </p>
                        </li>
                        <li>
                            <h3>Mapping</h3>
                            <p>
                                key-value를 저장하는 자료구조, key값으로 value를 찾는다 <br/>
                                mapping(address &#61;&gt; uint) public balances; <br/>
                                balances[msg.sender] = 100;  특정 주소의 값을 설정<br/>
                                uint balance = balances[msg.sender]; 특정 주소의 값을 가져온다<br/>
                                mapping은 storage에 저장되며 memory에 저장할수 없다/ 0이나 false값 반환이 기본이어서 존재여부 확인시 별도 플래그변수 필요
                            </p>
                        </li>
                        <li>
                            <h3>Struct</h3>
                            <p>
                                사용자가 정의한 데이터 타입으로 묶어 저장하는 자료구조로 복잡한 데이터를 효율적으로 관리할 수 있다. <br/>
                                struct user&#123;string name; uint age; address wallet;&#125; <br/>
                                여려 구조체를 관리하기위해 구조체 배열을 선언 가능하다. <br/>
                                struct User&#123;string name; uint age&#125;
                            </p>
                        </li>
                        <li>
                            <h3>bytes type</h3>
                            <p>
                                bytes public greeting = "Hello, World!"; <br/>
                                bytes는 와 같이 동작하지만, 길이가 고정되어있어서 더 효율적으로 사용가능하다 <br/>
                                bytes는 문자열을 저장할때 사용하며, 문자열을 비교할때는 keccak256를 이용하여 비교한다. <br/>
                                bytes는 bytes1~bytes32까지 있으며, bytes는 bytes1과 같다 <br/>
                                다양한 연산을 지원하며, 문자열을 저장할때 사용한다
                            </p>
                        </li>
                    </ul>

                </dd>
            </dl>
        </div>
    )
}
export default Day14;