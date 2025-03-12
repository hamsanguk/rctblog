import React,{JSX} from "react";

const Day27 = ():JSX.Element =>{
    return(
        <dl>
            <dt className="daybutton">day27 on chain data</dt>
            <dd className="daycontent">
                <p>
                    온체인데이터:스마트컨트렉트 실행,트랜잭션 정보,계정상태등 블록체인 네트워크상의 모든 활동
                    온체인 주요구성:트랜잭션 데이터,블록데이터,상태 데이터
                    <ul>
                        <li><h3>트랜잭션 데이터</h3></li>
                        <li>트랜잭션 id(Tx hash):식별 고유 해시값</li>
                        <li>from address:트랜잭션 보낸 주소</li>
                        <li>to address:받는 주소</li>
                        <li>value:이동된 화폐나 토큰의양</li>
                        <li>gas used:처리된 비용</li>
                    </ul>
                    <ul>
                        <li><h3>블록데이터</h3></li>
                        <li>블록해시:식별 해시값</li>
                        <li>블록번호:해당 블록의 높이:제일높은게 최신</li>
                        <li>timestamp:생성시간</li>
                        <li>transactions:블록에 포함된 모든 트랜잭션</li>
                    </ul>
                    <ul>
                        <li><h3>상태데이터</h3></li>
                        <li>Account Balance:그 계정의 보유화폐양 잔액</li>
                        <li>contract storage:스마트컨트랙트가 저장하는 데이터</li>
                        <li>token balance:ERC-20같은 토큰을 보유한 계정의 잔액</li>
                    </ul>
                    <h3>온체인 데이터 가져오기</h3>
                </p>
                <p>
                        블록체인 노드와 상호작용하는 방법으로 조회
                        이를 위해 web3.js, Ether.js같은 SDK나 RPC(Remote Procedure Call / blockchainnode api 서비스)를 사용한다

                        rpc:별도의 원격제어를 위한 코딩없이 다른주소공간에서 리모트의 함수나 프로시저를 실행할 수 있게
                        하는 프로세스간 통신
                </p>
                <p>
                    <h3>개뱔과정:TestRPC - TestNet - MainNet</h3>
                    TestRPC: ganache를 사용하여 로컬환경 개발진행
                    TestNet:개발완료되면 메인넷과 동일환경에서 테스트
                    MainNet:실제 서비스 사용 배포
                </p>
                <p>
                {/* curl -X POST https://public-en-kairos.node.kaia.io \
                    -H "Content-Type: application/json" \
                    --data '{
                        "jsonrpc": "2.0",
                        "method": "eth_getBalance",
                        "params": ["0x7F4eCb81082eE10c330B926F64E34a9102de4F03", "latest"],
                        "id": 1 나만의?token economy
                    }' */} 엔드포인트:https://public-en-kairos.node.kaia.io
                </p>
                <p>
                    가나슈:로컬에서 생성된 네트워크 127.0.0.1:7545
                    infura:API key를 발급받아 evm계열의 블록체인에서 만든 주소 
                    web3.js:JSON RPC(remote procedure call)을 사용하여 온체인 접근
                </p>
            </dd>
        </dl>
    )
}
export default Day27;