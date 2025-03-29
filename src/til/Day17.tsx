import React,{JSX} from "react";
import "../css/dayform.css";
const Day17 = ():JSX.Element=>{

    return(
        <div>
            <dl className="dayWrap">
                <dt className="daybutton">3.28 day39</dt>
                <dd className="daycontent">
                    스마트컨트랙트가 이더를 수신하면 호출되는 함수는 Receive,Fallback <br />
                    계약이 명시적으로 이더를 받을 때 호출, external과 payable 명시
                    <p>
                        Fallback:정의않된 함수가 호출되거나, 데이터가 포함된 호출이 발생시 자동실행<br />
                        external명시, 이더전송이 포함되있으면 payable필요
                    </p>
                    <p>
                        기존 에러핸들러(require,revert.assert) 외의 try/catch문법<br />
                        try/catch try:성공적 실행시 반환/ catch:error 발생시 처리 <br /><br />

                        custum error(사용자 정의 에러) error:정의한 에러/ revert:발생시 중단 및 에러반환
                    </p>
                </dd>
            </dl>
        </div>
    )
}
export default Day17;