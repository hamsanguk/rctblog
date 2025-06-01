import React from 'react';
const Day41 = ()=>{
    return (
        <dl className="dayWrap">
            <dt className="daybutton">5/29</dt>
            <dd className="daycontent">
                <h3>nestjs repository</h3>
                <p>
                    DB에 sql문 처럼 접근하여 데이터를Create,Read,Update,Delete 전담 객체. 
                    nestjs는 typeorm과 함께 사용할때 repository패턴을 적극 활용한다
                    repo사용시 장점: 비즈니스 로직과 DB로직을 분리할 수 있다, 테스트코드 작성이 용이해진다,orm이 제공하는 기능을 
                    추상화하여 코드정리
                </p>
                
            </dd>
        </dl>
    )
}
export default Day41;