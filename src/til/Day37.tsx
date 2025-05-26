import React,{JSX} from "react";

const Day37 = ():JSX.Element=>{
    return (
        <dl className="dayWrap">
            <dt className="daybutton">5/23</dt>
            <dd className="daycontent">
                <ul>
                    <li><h3>≈DB종류</h3></li>
                    <li>Relational Database Management System:data를 표테이블로 관리,행과 열 구성,
                        테이블간 foreignKey로 관리[ex: postgreSQL,MySQL /적합한곳: 관계 복잡,정형 데이터많고 안정성이 중요]
                    </li>
                    <li>
                        No Only SQL:관계형 이외의 구조로 데이터를 저장하는 db시스템
                        테이블 대신 문서, 키=값,그래프,컬럼 등 다양한 구조로 db에 저장
                        스키마 유연성, 수평 확장성에 강점[ex: MongoDB,Redis/ 적합한곳:빠른 구조변화,스타트업 초기,많은 데이터 수평확장처리,캐싱이나 세션관리등 초고속 처리]
                    </li>
                </ul>
                <div>
                    <h3>Table특징</h3>
                    <ul>
                        <li>
                            <h4>
                                column:특정한 데이터 타입과 의미들 id,name,email,age 
                            </h4>
                        </li>
                        <li>
                            <h4>
                                row:table에서 실직적 가로축 데이터
                            </h4>
                        </li>
                        <li>
                            <h4>
                                schema:Table구조, 데이터 타입, 제약조건을 포함(실제 데이터가 아닌 어떤 구조로 저장할지)
                            </h4>
                        </li>
                    </ul>
                    <h4>ACID</h4>
                    <ul>
                        <li>Atomicity:모두수행or모두취소</li>
                        <li>Consistency:규칙위반 없이 상태 유지</li>
                        <li>Isolation:트랜잭션간 간섭 없음</li>
                        <li>Durability:결과는 영구적 저장</li>
                    </ul>
                </div>
            </dd>
        </dl>
    )
}
