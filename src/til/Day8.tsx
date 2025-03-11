import React, { JSX } from "react";

const Day8 = (): JSX.Element => {
    return (
        <dl className="dayWrap">
            <dt className="daybutton">25.2.12 day 8</dt>
            <dd className="daycontent">
                <h4>HTML5는 웹의 최신 표준</h4>

                <h4>SEO (Search Engine Optimization): 검색엔진 최적화</h4>
                <p>
                    관연 키워드로 웹사이트에서 검색이 되었을 때, 검색된 페이지 최상단에 노출시켜 사용자 유입 증가 목적으로 최적화하는 작업.
                    <br />
                    검색엔진(google, bing)은 검색 키워드와 연관된 내용을 사용자에게 제공하기 위해 색인(index)과 분석을 한다. SEO는 이 과정을 위해 이해한다.
                    <br />
                    SEO에 중요한 태그들:
                    <br />
                    header: `title`, `meta`.
                    <br />
                    body: 특징은 의미가 부여된(sementic Tag) 태그를 사용하여 검색 엔진이 사이트를 쉽게 분석할 수 있도록 의도한다.
                    <br />
                    예: `h(n)`, `nav`, `main`, `article`, `section`, `footer`.
                </p>
            </dd>
        </dl>
    );
};

export default Day8;
