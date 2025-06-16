import React from 'react';

const Day46 = ()=>{
    return(
        <dl className="dayWrap">
            <dt className="daybutton">6/5</dt>
            <dd className="daycontent">
                <h2>A Survey on the Application of Zero-Knowledge Proofs</h2>
                <p>

                </p>
                <p>
                    ZKP는 계산 무결성과 개인정보 보호 기술에 있어 혁신적인 진보를 나타내며, 기본적인 개인데이터를 
                    공개 않하고 안전하고 비공개로 교환할 수 있게 한다. 
                    ZKP 동형암도나 보안 다자간 연산(secure multiparty computation)과 같은 다른 분산 시스템용 개인정보 
                    보호 중심 계산 방법들과 비교했을때, 보편성과 최소 보안 가정 측면에서 고유한 장정점을 지닌다.
                    
                    다양한 응용분야에서 검증과 프라이버시의 통합을 보여주는 사례들
                    zkp의 영영을 탐구할 때, 검증 가능한 계산이 zkp의 실질적인 응용들이 기반을 두고있는 핵심 개념
                    1.간결성(succinctness) 2.privacy
                    zkp의 간결성은 복잡한 계산이 정확히 수행되었는지 빠르고 효율적으로 검증할 수 있게한다. 
                    계산자원이 제한되거나 비용이 많이 드는 환경,예를 들어 블록체인 네트워크
                    zkp는 각 노드가 모든 거래나 스마트 계약의 계산을 반복 실행하지 않고도 트랜잭션 블록이나 컨트랙트실행을 검증할 수 있게 한다.
                    이 기능은 네트워크의 계산 부담을 획기적으로 줄여, 확장성과 처리량을 향상
                     Privacy는 정보 자체를 공개 않해도 그 정보가 옳다는 것을 증명할 수 있는 능력에서 비롯
                </p>
                <h4>snark정의와 속성</h4>
                <p>
                    (Succinct Non-interactive Arguments of Knowledge)는 제로 지식 증명에
                    하위집합으로, 특징들은
                    <ul>
                        <li>
                            간결성(Succinct)
                            짧은 크기의 증명,계산의 복잡도나 입력데이터의 크기와 무관하게 증명의 크기는 작에 유지된다
                        </li>
                        <li>
                            비대화성(Non-interactivw)
                            상호작용 업이 한 번에 제출된 증명으로 검증이 가능하다
                        </li>
                        <li>
                            지식의 주장(Arguments of Knowledge)
                        </li>
                        <li></li>
                    </ul>
                </p>
                <h4>ZKP의 활용 예시</h4>
                <p>
                    zkp는 프라이버시를 유지하면서도 진위를 증명할 수 있게 해주며 응용되는 분야는
                    
                    개인 데이터 검증:은행잔고, 시용점수 등 민감한 정보를 내용공개 없이 검증
                    인증 및 접근제어: 국적,연령,지역 기반 자격증명 없이 접근 권한 증명
                    금융분야:신원 비공개 결제,소득 공개 없이 세금 신고
                    신뢰없는 위임 계산:외부 연산 결과를 다시 계산하지 않고 검증 가능
                    블록체인 구조 변화: 기존의 모두가 계산하는 방식 - 한 명이 계산, 전체가 검증하는 방식으로 전환가능
                </p>
                
            </dd>
        </dl>
    )
}
export default Day46;