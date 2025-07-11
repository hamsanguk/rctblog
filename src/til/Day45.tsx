import React from 'react';

const Day45 = ()=>{

    return(
        <dl className="dayWrap">
            <dt className="daybutton">6/3</dt>
            <dd className="daycontent">
                <h2>Auditing in the blockchain:a literature riview</h2>
                <p>
                    블록체인 기술이 어떻게 감사(Audit) 분야에 영향을 미치는지에 대한 적절한 주제를 다루고 있습니다.
                    특히 블록체인의 특성인 분산화, 투명성, 불변성, 추적 가능성 등을 통해 감사 효율성을 높이고
                    데이터 신뢰성을 개선할 수 있는 가능성을 탐구하는 내용이 포함되어 있습니다. 
                    또한 기존 감사 모델의 한계와 블록체인 기술의 적용을 통한 문제 해결 가능성을 다루고 있어 
                    사용자 보안과 감사 관련 측면에서 유용한 통찰을 제공
                </p>

                <h4>방법론</h4>
                <p>
                    문헌연구/ 사례 분석 방법: PwC(PricewaterhosuseCoopers: 블록체인 감사서비스+Halo 도구 개발)
                </p>

                <h3>Blockchain Audit Risk</h3>
                <p>
                    본질적 리스크,통제 리스크,탐지 리스크 나눠진다.(이 3개 리스크 설명 필요)

                    <strong>1. 51% 공경및 보안문제</strong>; 컴퓨터 하드웨어의 발전과 함께 51% 컴퓨팅파워 공격에 취약할 수 있다
                    네트워크 과반수이상의 해시파워를 가진 공격자가 블록체인을 장악할수 있는 공격방식
                    audit을 수행하려면 외부 감사인이 시스템의 공개키와 특정 개인키를 받아야 관련 데이터에 접근 가능
                    {/* 이 과정에서 새로운 보안 문제를 유발할 수 있습니다*/}
                    <strong>2.신뢰 메커니즘의 재구성</strong>: 원래 감사는 권위있는 기관의 승인을 거쳐야 하는데 블록체인은 알고리즘과
                    컨트랙트에 의존하여 새로운 신뢰 메커니즘의 재구성이 필요
                    데이터의 진위 확인, 데이터 프랑버시와 공유의 균형, 인센티브 메커니즈 구축과 관련한 이해관계 분배 문제를 해결하는 것을
                    포함
                    <strong>3. 전통적인 감사인의 역할 변화</strong>: 블록체인 감사는 전통적인 감사인의 소요를 감소시킬 수 있으며, 
                    감사인에게 더 높은 수준의 기술적 능력을 요구하게 된다
                    {/* 이제부터 감사인은 기본적인 감사 지식에 대한 전문적 이해 뿐 아니라 컴퓨너 기술, 블록체인에 대한 깊은 이해, 강력한
                    분석 과 의사결정 능력을 갖추어야 되지만 현재 대부분 감사인들은 그렇지 못합니다 */}
                    <strong>4.블록체인 기술이 감사인에게 가져오는 새로운 리스크</strong>:블록체인 시스템의 복잡성은 감사인들이
                    겨래의 무결성을 이해하고 검증하는데 어려움을 겪는다. 
                    {/*예시로, 블록체인의 불병성은 중요한 특징이지만 양면성이 있다블록체인에 오류나 악의적인 항목이 기록되면
                        수정이 어려워지며,이는 재무 보고서의 오류를 초래할 수 있다 감사인들은 이러한 오류를 식별하고 수정하는데 어려움을 겪을 수 있다
                    */}
                </p>
                        <p>
                            블로거 주관:감사 기관이나, 감사 모델도 존재하는데 불구하고 감사인들이 전문성과 기술력을 갖춰야한다는
                            고충만을 서술하는 것이 아쉬웠다
                            
                        </p>
            </dd>
        </dl>  
    )
}

export default Day45;