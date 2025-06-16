import React from 'react';
import CodeArea from './CodeArea';

const bucketPrincipal = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}`;

const Day49 =  ()=>{
    return(
        <dl className="dayWrap">
            <dt className="daybutton">6/16</dt>
            <dd className="daycontent">
                <h2>AWS</h2>
                <p>
                    아마존이 만든 클라우드 컴퓨팅 서비스 플랫폼으로 서버,저장소,네트워크,DB,CDN,S3(정적파일저장소),cloudFront(globalCDN)등 여러 기능 제공
                </p>
                <ul>
                    <li>
                        서버:EC2 가상서버(웹 백엔드 등 실행 가능)
                    </li>
                    <li>
                        정적 파일 저장:S3 클라우드 드라이브처럼 이미지, 문서 저장 가능
                    </li>
                    <li>
                        도메인:Route 53 도메인 구입,연결
                    </li>
                    <li>
                        배포 자동화:github와 연동해 코드 자동배포 가능(Amplify)
                    </li>
                    <li>
                        AI,빅데이터:이미지 분석,번역,데이터 분석 도구 제공
                    </li>
                </ul>
                <h3>S3 bucket</h3>
                <p>
                    react에서 npm run build하면, 정적파일들이 생성 이 파일들은 서버에서 특별한 로직없이 그대로 사용자에게
                    주면 되서 S3와 같은 정적 파일 호스팅 서비스에 매우 적합. 
                    버킷생성시 지역을 아시아 태평양, 퍼블릭 액세스 차단 설정에서 액세스 차단이 비활성화로 되어야 공개가 된다. 
                    빌드된 파일을 s3에 업로드 - 속성/정적 웹사이트 호스팅 활성화 체크 - 권한 탭에서 퍼블릭 사용자에게 GetObject권한 부여
                </p>
                <CodeArea code={bucketPrincipal}/>
                <p>
                    배포된 주소는 속성탭 맨아래
                    주의사항
                    보안정책:정적웹 호스팅시,퍼블릭 읽기 권한이 필요(or CloudFront+OAC 사용)
                    라우팅문제:spa의 경우 404 에러페이지를 index.html로 설정해야 재대로 작동
                    HTTPS미지원:S3웹 호스팅 URL은 기본적으로 http만 지원, https를 원하면 CloudFront를 이용
                </p>
                <h3>CloudFront</h3>
                <p>
                    s3웹사이트를 빠르고 안전하게 전세계에 제공하기 위한 aws의 cdn으로 웹콘텐츠(html,js,css,image,영상)를 전 세계 사용자에게
                    더 빠르고 안정적으로 전달하는 역할
                    빠른 응답속도:사용자의 위치와 가까운 서버(엣지 로케이션)에서 콘텐츠를 제공
                    원본 서버 부하 감소:케시를 통해 서버 호출 횟수 줄이기 - 비용절감
                    보안강화:https,ssl 인증서,waf,signedURL 지원
                    전 세계 400 이상의 엣지 로케이션 보유/ 다양한 콘텐츠(정적파일,API응답,동영상 스트리밍 등) 지원
                </p>
                <p>
                    기존 s3로 모든 퍼블릭 요청을 이제는 cloudfront로 대체되서 다시 수정할것이
                    속성: 정적 웹 호스팅:비활성화
                    권한: 퍼블릭 액세스 차단(버킷 설정):활성화
                    버킷 정책:cloudfront배포 후 정책으로 변경
                </p>
                <p>
                    배포 생성 과정: 배포생성 클릭/ s3 엔드포인트를 선택/ create new oac/
                     기본 캐시 동작:호스팅 비용을 최적화하는데 사용되는 기본값인 자동으로 객체 압축 yes,
                     http요청을 자동으로 리디렉트 하도록 설정(redirect http to https)
                     방화벽(waf):개인프로젝트에서는 권장 않하지만 실무에서는 활용
                     기본값 루트객체: 뷰어가 특정 객체 대신 루드 url을 요청할때 반환할 객체(파일 이름)
                    배포생성 클릭
                </p>
                <h4>cloudfront 배포후</h4>
                <p>
                    정책 복사: 안뜨면 배포된 cloudFront를 눌러 원본 - 선택 - 편집 을 누르면 정책을 확인 가능
                    복사하고 s3버킷 권한으로 이동 해서 정책 붙어넣기
                    배포된 도메인을 cloudfront에서 확인
                </p>
            </dd>
        </dl>
    )
} 
export default Day49;