import React,{JSX} from "react";

const Day2=():JSX.Element=>{
    return(
        <dl className="dayWrap">
        <dt className="daybutton"> 25.2.4 day 2[블록채인 일부 기능 (hash,키 종류)]</dt>
        <dd className="daycontent">
            <h3>Hash</h3>
            <p>데이터의 크기에 상관없이 고정된 크기의 출력 값으로 변환되어 암호화와 무결성을 보장한다.
                무결성: 데이터가 전송이나 변화되는 과정에서 오해나 손실없이 시스템이 원하는대로 작동하는것,보안과 정확성을 포함
            </p>
            <p>오늘날 해시에 사용되는 대표적인 함수는 SHA-256함수 이며, 256비트(32바이트)의 고정된 출력값이다</p>
            <h3>암호화폐에서 해시의 목적</h3>
            <p>각 블록은 [블록해시 값, 헤더, 바디]로 구성되며, 블록 해시 값은 이전 블록의 해시 값, 
                해당 블록의 트랜잭션을 비롯한 다양한 정보들이 인자가 되어 해싱된 결과이다 
                트랜잭션 등에서 약간의 변화가 생기면 쉽게 식별할 수 있을 정도로 해시 값이 변한다.
            </p>
            <h5>블록 간 연결성 유지와 변경사항(고의로 조작된 블록)탐지에 사용된다</h5>
            <h3>개인 키, 공개 키의 사용</h3>
            <ul>
                <li>대칭키: 암호화와 복호와가 같은 키로 관리된다</li>
                <li>비대칭키:개인 키와 공개 키가 같이 사용되며 관리된다</li>
            </ul>
            <p>블록체인은 비대칭키 암호와 방식</p>
            <h5>개인 키와 공개 키 생성과정</h5>
            <ol>
                <li>개인 키:임의의 난수가 생성되며, 숫자형에서 16진수로 변환되거나 Base58Check 인코딩으로 문자형으로 변환</li>
                <li>공개 키:개인 키를 기반으로 타원곡선 암호화로 파생된다</li>
                <li>공개 키는 다시 해싱되어 주소가 된다</li>
            </ol>
            <dl>
                <dt>블록체인에서 공개키 활용</dt>
                <dd>주소 생성</dd>
                <dd>검증</dd>
            </dl>
            <dl>
                <dt>개인 키 활용</dt>
                <dd>트랜잭션 서명</dd>
                <dd>자산 제어</dd>
                <dd>소유를 증명하려는 저작물 암호화에 사용</dd>
            </dl>
        </dd>
    </dl>
    )
}
export default Day2;

