import React,{JSX} from "react";

const Day29 = ():JSX.Element=>{
    return (
        <>
            <dl className="dayWrap">
                <dt className="daybutton">4월 23일</dt>
                <dd className="daycontent">
                    <h4>gasless</h4>
                    <p>
                        EVM기반 블록체인에서는 컨트랙트 실행이나 상태변경 트랜잭션은 가스를 소모. <br />
                        <ul>
                            <li>transfer: 송진자가 직접 토큰을 전송</li>
                            <li>approve + transferFrom: 3자가 송신자의 승인으로 대신 토큰 전송 (자동결제, 스테이킹 및 리워드 시스템)</li>
                        </ul>
                        transferFrom을 사용시 토큰주인이 approve실행이 먼저 되어야 하며 이 과정에서 가스 소모
                    </p>
                    <h4>기존 Ethereum 서명방식</h4>
                    <p> 
                        우선 메새지를 keccak해싱, 해싱된 메새지를 개인키로 서명 <br />
                        ECDSA(Elliptic Curve Digital Signature Algorithm)사용으로 서명 검증;<br />
                        <h5>기존서명의 문제점은 사용자 지갑이나 익스플로러에서 이 서명이 어떤의미인지 알 수 없다</h5>
                    </p>
                    <h4>EIP-712:Typed Structured Data Signing</h4>
                    <ul>
                        <li>EIP712 장점</li>
                        <li>사람이 인지할 수 있는 서명데이터 제공</li>
                        <li>Replay Attack방지</li>
                        <li>도메인(네트워크,컨트랙트)바인딩으로 보안강화</li>
                        <li>gasless 트랜잭션(ERC-2612 permit)가능</li>
                    </ul>
                    <p>
                        eip2612는 erc20의 permit기능을 제안
                    </p>
                </dd>
            </dl>
        </>
    )
}