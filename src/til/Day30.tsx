import React,{JSX} from "react";

const Day30 = ():JSX.Element=>{
    
    return(
        <div>
        user  relayer가스비 대납 excute()  fowarder (nonces 소유)  recipient
        forwarder사용은 erc2771을 상속받지 않으면 평범한 erc20
        <p>
        solidity의 msg.sender:현 컨트랙트 기준에서 트랜잭션을 발생시킨 주소(eoa,컨트랙트의 주소)가 msg.sender
        erc-20에서 스마트컨트랙트에서 msg.sender는 토큰의 소유권을 증명하고, 트랜잭션은 실행하는 중요한역할
        transfer에서 사용:msg.sender가 자신의 토큰을 다른 주소로 전송할때
        </p>
        </div>
    )
}
export default Day30;