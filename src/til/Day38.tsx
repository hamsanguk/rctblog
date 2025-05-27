import React from 'react';

const Day38 = ()=>{
    return(
        <dl className="dayWrap">
            <dt className="daybutton">5/26</dt>
            <dd className="daycontent">
                <h3>
                    SQL 주요 명령어
                </h3>
                <ul>
                    <li>SELECT</li>
                    <li>INSERT</li>
                    <li>UPDATE</li>
                    <li>DELETE</li>
                </ul>
                <p>
                    UPDATE,DELETE는 WHERE을 않쓰면 전체가 적용되버린다.
                </p>
                <hr />
                <h3>필요한 데이터만 조건 필터링</h3>
                <p>
                    where "조건문 작성" if문 처럼 and나 or을 추가하여 여러조건을 만족하는 값을 조회한다.
                    LIKE "%문자열" 패턴으로 문자열 검색하기 '%a':a로 끝나는,'%a%':a를 포함,'a%':시작이 a
                </p>
                <ul>
                    <li>column: 여러명의 한 속성(열)</li>
                    <li>row: 온전한 1인분의 데이터(행)</li>
                </ul>
                <h4>명령어 FROM columnName WHERE 조건문: 일반적인 모양</h4>
                <hr />
                <h3>JOIN</h3>
                <p>
                    2개 이상의 테이블을 연결하여 하나의 결과처럼 원하는 데이터 출력
                    <h5>select * from A Join B ON A.sameCol = B.sameCol</h5>
                    조회한다 모두 A table 과 B table에서 합친 각각의 같은 column을 
                </p>
                <ul>
                    <li>
                        <h4>Inner Join</h4>:교집합
                    </li>
                    <li>
                        <h4>Left Join</h4>:왼쪽전체+교집합(기준테이블 왼쪽)
                    </li>
                    <li>
                        <h4>Right Join</h4>:오른쪽전체+교집합(기준테이블 오른쪽)
                            <h5>기준테이블:둘 중 더 많이 포함하는 테이블</h5>
                    </li>
                </ul>

            </dd>
        </dl>
    )
}
export default Day38;