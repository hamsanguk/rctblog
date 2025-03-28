import React,{JSX} from "react";
import "../css/dayform.css"
const Day1=():JSX.Element=>{
    return(
        <dl className="dayWrap">
        <dt className="daybutton">
            25.2.3 day 1 [블록채인 기본개념]
        </dt>
        <dd className="daycontent">
            <p>블록체인의 최초 탄생 목적은 암호화폐가 아닌 디지털 문서의 타임 스탬프를 보장하기 위한 아이디어에서 시작되었다.
                세계 금융위기가 발생한 2008.10.31, 기존 금융시스템과 중앙화된 정책에 대항한 사회운동가 집단(사이퍼 펑크)이 탈중앙화된 암호화폐 '비트코인 백서'를 사토시로부터 매일
                수신하였다.
                이 둘의 공통점은 신뢰가 없는 가정 속에 신뢰할 수 있는 시스템을 구축하려는 점이다.</p>

            <h3>화폐의 조건</h3>
            <p>화폐의 조건으로 부합하기 위해서는 다음 세 가지 조건을 충족해야 한다.</p>

            <ul>
                <li>교환 매개체: 물물교환의 불편함을 없애고 편리하게 교환할 수 있는 기능</li>
                <li>가치 척도의 기능: 화폐가 어떤 물건의 가치를 재는 잣대로써 기능</li>
                <li>가치 저장기능: 오랫동안 저장해 두어도 기능성 내구성 및 질의 변화 없이 사용될 수 있는 기능</li>
            </ul>
            <h3>암호화폐가 화폐 조건에 부합하는지</h3>
            <ul>
                <li>교환 매개체: 비트코인으로 구매할 수 있는 곳이 드물다.</li>
                <li>가치 척도의 기능: 비트코인은 변동폭이 심하여 가치 척도 기능이 어렵다.</li>
                <li>가치 저장기능: 암호화폐가 지닌 대표적인 기능은 화폐보다는 자산의 기능이 강해졌다.</li>
            </ul>
        </dd>
    </dl>
    )
}
export default Day1;
