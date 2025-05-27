import React from "react";

const Day39 = ()=>{
    return (
        <dl className="dayWrap">
            <dt className="daybutton">5/27</dt>
            <dd className="daycontent">
                <h3>서브쿼리</h3>
                <p>
                    구조: SELECT "컬럼명" FROM (서브쿼리) AS "별칭" WHERE 조건<br/>
                    메인쿼리를 도와 중간결과를 만들거나 필터링 보조하는 역할<br/>
                    사용위치: select[특정 컬럼 계산]/where[조건으로 사용 가능]/from[임시 table로 사용 가능]
                </p>
                <h3>create view</h3>
                <p>
                    create view "뷰 이름" as select "컬럼이름" from "테이블" where "조건"<br/>
                    실제 데이터 저장이 아닌 select의 결과를 테이블처럼 보여주는 가상의 데이터<br/>
                    뷰 특징:실제 데이터 저장이 아니라서 가벼운 성능/ 복잡한 쿼리를 재사용 가능<br/>
                    단점:뷰를 갱신하는 것은 일부 제한이 있다.
                </p>
                <h3>Transaction</h3>
                <p>
                    데이터베이스에서 여러 작업을 하나의 단위로 묶어서, 모두 성공이나 실패시 취소되는 결과<br/>
                    commit:트랜잭션의 모든 변경사항을 확정하고 저장<br/>
                    rollback:트랜잭션 중 발생한 변경사항을 모두 취소
                </p>
                <h3>Index</h3>
                <p>
                    db table에서 필요한 데이터를 빠르게 찾기 위한 목차/ 인덱스를 사용 않하면 풀스캔 진행<br/>
                    create index "인덱스명" on "테이블명" ("컬럼명")<br/>
                    [index가 필요한 경우] where로 특정 값을 자주 검색할때:빠른 조건 검색 가능<br/>
                    join에 사용하는 컬럼:join성능 향상<br/>
                    order by || group by에 사용되는 컬럼: 정렬성능 향상
                </p>
                <h3>정규화(Nomalization)</h3>
                <p>
                    테이블을 나눠서 필요한 데이터만을 저장하여 중복을 줄인다,update시 구조가 명확하여 관리가 쉽다
                </p>
                <h3>비정규화(Denomalization)</h3>
                <p>
                    속도나 편의성을 위하여 중복을 허용한다. <br/>
                    성능 최적화:join이 많으면 느려진다/조회속도 향상:테이블 병합 없이 한 번에 읽게한다.
                </p>
            </dd>
        </dl>
    )
}
export default Day39;