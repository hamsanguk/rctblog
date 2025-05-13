import React,{JSX} from "react";

const Day36 = ()=>{
    return(
        <dl className="dayWrap">
            <dt className="daybutton">5.13</dt>
            <dd className="daycontent">
                <div>
                    <h3>web에서 사용자 로그인 정보 기억하기</h3>
                    <p>
                        server는 stateless로 모든 요청을 기억하지 않는다
                        사용자의 환경이나 로그인을 저장하기 위해서는 쿠기나 세션을 이용한다
                    </p>
                    <ul>
                        <li>
                            <h4>cookie:브라우저에서 서버에 같이 보내질 목적으로 저장되는 데이터</h4>
                        </li>
                        <li>
                            <h4>session:사용자 전체정보를 서버에 저장하며 보안성이 높다</h4>
                        </li>
                    </ul>
                    <h3>JWT(Json Web Token)</h3>
                    <p>
                        json형식의 데이터를 base64로 인코딩한 문자열의 토큰, 사용자 인증 및 정보전달에 사용
                        jwt는 stateless Authentication방식에서 사용되며, 서버에 세션 저장이 아닌 클라이언트가 토큰을
                        보관하고 매 요청마다 서버에 전달
                    </p>
                    <h4>jwt구조:header/ payload/ signature</h4>
                    <div>
                        <h3>jwt흐름</h3>
                        <p>
                            client:login요청 - server:토큰생성,클라이언트 전달 - client:cookie등에 저장, 앞으로 있을 요청들에
                            Authorization.header에 토큰을 포함 - 서버에서 유효성 확인후, 권한이나 인증 사용자 처리
                        </p>
                    </div>
                </div>
            </dd>
        </dl>
    )
}
export default Day36;