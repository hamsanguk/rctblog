import React,{JSX} from "react";

const Day18 = (): JSX.Element => {
  return <div>
    <dl className="dayWrap">
      <dt className="dayButton">Day </dt>
      <dd className="dayContent">
        <p>
            <h2>getter and setter함수</h2>
           getter함수: 상태변수를 조회하는 함수(public으로 자동생성 가능)<br/>
           setter함수: 상태변수를 변경하는 함수(수동으로 구현필요)<br/>
           <br/>
           constructor는 배포되면 한번만 실행되고, 이후에는 실행되지 않는다, 초기값을 설정하는 용도로도 사용<br/>
        </p>
        <p>
            <h3>스마트컨트랙트 테스트코드 필요성</h3>
            <p>
                hardhat or truffle은 테스트 및 배포환경을 제공하는 이더리움 개발도구이다
                블록체인에 배포된 스마트컨트랙트는 변경이 불가하여, 사전에 철저한 테스트가 필요<br/>
                에러,버그 발생되면 새로운 컨트랙트를 배포해야 하며, 데이터손실과 비용증가를 부담하게 된다.<br/>
                테스트를 통해 불필요한 연산을 줄이고 최적화된 코드 작성<br/>
                solidity의 연산은 가스를 소모해서, 최적화된 코드 작성으로 트랜잭션 비용을 줄일수 있다<br/>
                보안취약점을 찾아내고 버그를 수정하여 컨트랙트를 안전하게 만들수 있다<br/>
                Hardhat의 test기능을 활용하여 재진입 공격(reentrancy attack),오버플로우,접근제어오류등의 취약점을 미리 발견할 수 있다<br/>               
            </p>
        </p>

      </dd>
    </dl>
  </div>;
};

export default Day18;