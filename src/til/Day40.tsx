import React from "react";

const Day40 = ()=>{
    return(
        <dl className="dayWrap">
            <dt className="daybutton">5/28</dt>
            <dd className="daycontent">
                <h3>서버 API요청으로 db에 내용 추가하기</h3>
                <p>
                    db와 nestjs는 타입의 차이가 있어서 "typeorm"과 같은 라이브러리의 도움을 받아야 된다
                    @Entity는 table로 표현된다.
                    클래스의 속성이 @Column일때 table의 컬럼으로 인식된다. 
                    이런 구조를 기반으로 nestjs에서 데이터를 조회하거나 저장되는 repository에 객체를 자동생성
                </p>
                <h3>db.config.ts</h3>
                <p>
                    type:db의 종류, host:db서버의 호스트 주소, port:postgres의 기본값 5432, username:db접속 사용자, password:사용자 계정 pw
                    database:연결할 db의 이름(테이블 이름 아님), autoLoadEntities: 모듈마다 수동으로 등록 안해도 자동인식, false로 하면 forFeature([UserEntity]),
                    syncronize: 앱 시작시 db테이블 자동 생성하고 수정, 실제서비스에서는 false권장
                </p>
            </dd>
        </dl>
    )
}
export default Day40;