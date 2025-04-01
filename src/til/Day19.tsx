import React,{JSX} from 'react';

const Day19 = (): JSX.Element => {
    return(
        <div>
           <dl className="dayWrap">
            <dt className="dayButton">
               day19
            </dt>
            <dd className="dayContent">
                    <h2>
                        day41 solidity 문법
                    </h2>
                    <p>
                        solidity에서 상태변수에 public을 사용하면 getter함수가 생성되지만, <br/>
                        상태변수에 private또는 internal로 가시성 명시하면 외부에서 접근할수 없어서 getter를 직접 구현해야 된다<br/>
                        <br/>
                        구조체 struct는 기본적으로 접근제한자(public,private,internal,external)를 사용하지 않으며<br/>
                        다른 상태변수를 통해 private로 선언할 수 있다.<br/>
                         <p>
                            struct Person&#123; <br/>
                            string name; uint age; adress userAddress; <br/>
                            &#125; 
                            <br/>
                            Person private makePerson;

                            <h3>구조체의 getter</h3>
                            <p>
                               상태변수를 private로 선언하면 getter가 자동생성이 않되며,별도의 getter함수를 public으로 구현
                            </p>
                            <h3>구조체의 setter</h3>
                            <p>
                                구조체 데이터를 설정하는 setter함수는 특정 필드 변경이나,전체 구조체를 한 번에 설정 가능
                            </p>
                            <h3>mapping활용 여러 구조체 관리</h3>
                            <p>

                                mapping을 활용하면 여러 구조체를 관리할 수 있다. <br/>
                                contract StructMapping &#123;<br/>
                                    struct Person &#123;<br/>
                                        string name;<br/>
                                        uint age;<br/>
                                        address wallet;<br/>
                                        &#125;<br/>
                                        <br/>
                                    mapping(address =&#62; Person) private people;<br/>
                                    <br/>
                                    // 특정 사용자의 정보를 설정하는 함수
                                    function setPerson(string memory _name, uint _age) public &#123;
                                        people[msg.sender] = Person(_name, _age, msg.sender);
                                        &#125;<br/>

                                    <br/>
                                    // 특정 사용자의 정보를 반환하는 함수
                                    function getPerson(address _user) public view returns (string memory, uint, address) &#123;<br/>
                                        Person memory p = people[_user];<br/>
                                        return (p.name, p.age, p.wallet);<br/>
                                        &#125;<br/>
                                    &#125;<br/>
                            </p>
                         </p>
                        <br/>
                        <br/>
                    </p>
            </dd>
           </dl>
        </div>
    )
}

export default Day19;