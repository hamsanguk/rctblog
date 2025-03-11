import React, { JSX } from "react";

const Day6 = (): JSX.Element => {
    return (
        <dl className="dayWrap">
            <dt className="daybutton">25.2.10 day 6</dt>
            <dd className="daycontent">
                <h4>Internet 과 웹의 차이</h4>
                <p>
                    : 인터넷은 물리적인 네트워크 인프라이며, 웹은 인터넷상에서 정보를 표시한 서로 주고받거나 상호작용이 가능한 문서.
                    인터넷은 도로, 자동차는 웹으로 비유.
                </p>
                <ul>
                    <li>학계, 업계, 기술 전문가들에 의해 만들어진 Web n.0 개념</li>
                    <li>web 1.0(정적인 웹): 프린트되어진 게시판, 어떠한 상호작용 없이 정보 전달 목적</li>
                    <li>Web 2.0(동적인 소셜 웹): 개인이 데이터를 생성, 공유하거나 여러 상호작용이 가능해짐</li>
                    <li>Web 3.0: AI와 블록체인 기술이 추가 적용</li>
                    <li>Web3: 3.0에서 블록체인 기술만 세부적으로 적용</li>
                </ul>

                <h4>웹의 구성</h4>
                <p>
                    HTML(Hyper Text Markup Language): 웹의 기본 근간이 되는 웹의 뼈대. 문서 안에 텍스트, 이미지, 문서, 표 등을 태그를 통해 추가할 수 있다.
                    등장 당시 기존 문서에는 없었던 Hypertext라는 기능을 통해 해당 링크로 이동이 가능하였다.
                </p>

                <h4>HTTP</h4>
                <p>
                    클라이언트와 서버 간의 통신 규칙을 지정하는 프로토콜.
                    <br />
                    특징: 요청(request)과 응답(response)의 구조.
                    <br />
                    요청 메서드: get, post, pull, delete.
                    <br />
                    (상태 코드) 응답: 200번대 성공 응답 / 400번대 클라이언트 오류 / 500번대 서버 오류.
                </p>

                <h4>URL</h4>
                <p>
                    (Uniform Resource Locator): 서버와 리소스를 직접 지정하여 사용자가 원하는 지점으로 이동.
                    <br />
                    구성: https://도메인/경로?쿼리문자열#프래그먼트.
                    쿼리 문자열: 추가적인 요청 정보, 프래그먼트: 문서 내 특정 위치.
                    <br />
                    예시: https://www.example.com/page?id=123#section.
                </p>

                <h4>클라이언트와 서버</h4>
                <p>
                    클라이언트: 사용자가 서버와 상호작용을 위한 장치나 소프트웨어 UI, 요청 생성, 응답 처리, 캐시 기능, 동적 동작 지원.
                    주요 클라이언트 소프트웨어: 웹 브라우저 chrome, firefox, safari, edge.
                    모바일 애플리케이션: iOS 및 Android 용 앱.
                    서버: 클라이언트로부터 받은 요청을 식별하고 적절한 응답을 하는 역할.
                    <br />
                    - 특징: 항상 대기 상태, 데이터 저장 및 관리.
                    <br />
                    - 다양한 처리 능력: 정적 콘텐츠(html, css)와 동적 콘텐츠(api 호출, 데이터베이스 처리) 지원.
                </p>

                <h5>웹을 동물에 비유하면</h5>
                <ul>
                    <li>뼈, 골격의 역할을 하는 HTML.</li>
                    <li>동물의 피부색, 질감, 털의 색상, 길이를 조절하는 CSS.</li>
                    <li>동물이 움직이고 사냥할 수 있는 능력을 부여하는 JavaScript.</li>
                </ul>
            </dd>
        </dl>
    );
};

export default Day6;
