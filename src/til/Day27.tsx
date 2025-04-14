import React from "react";

const Day27 = ()=>{
    const code = `
function findAbbreviation(strA, strB) {
  const m = strA.length;
  const n = strB.length;

  // DP 테이블: dp[i][j]는 strA의 i번째까지, strB의 j번째까지 비교했을 때 가능한지
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  dp[0][0] = true;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j <= n; j++) {
      if (!dp[i][j]) continue;

      const aChar = strA[i];
      const upperA = aChar.toUpperCase();

      // 1. 소문자면 삭제 가능 (strB의 j를 건너뛴다)
      if (aChar !== upperA) {
        dp[i + 1][j] = true;
      }

      // 2. 현재 문자가 strB의 j번째 문자와 대소문자 관계 없이 같으면 매칭
      if (j < n && upperA === strB[j]) {
        dp[i + 1][j + 1] = true;
      }
    }
  }

  return dp[m][n];
}
  `;
    return(
        <div>
            <dl className="dayWrap">
                <dt className="daybutton">4/11</dt>
                <dd className="daycontent">
                    <h3>부족한 점</h3>
                    <p>
                        코딩 알고리즘을 구현 관련한 능력이 부족, 알고리즘 레퍼런스 코드를 이해하는 것도 집중이 않되어서 어려움을 느낌. <br />
                        해결방안: 짧은 알고리즘을 가진 함수부터 구간마다 주석설명하는 습관을 들이며, 구현이 끝나면 전체적인 코드를 구두로 설명하는 연습을 현재 강의에서 하고있는 알고리즘 단게까지 <br/>
                    </p>
                    <h4>예시</h4>
                    strA는 현재 문자이며 소문자에서 대문자변경이나 소문자 제거 선택지만 있다 strB는 strA로 부터 변경될 문자 
                    <p>
                        <pre>
                            <code>{code}</code>
                        </pre>
                                dp[i][j]는 strA의 i번째 까지와 strB의 j번째까지 비교했을 때 변환이 가능한지를 의미. <br/>
                                - dp[0][0]은  빈 문자열 간 매칭이므로 true로 시작 <br/>
                                - strA의 문자를 순차적으로  살펴보며 다음 상태로의 전의(transition)을 정의 <br/>
                                - 소문자 삭제, 대문자 변환 비교 가능, 대문자는 그대로 비교만 가능 <br/>
                    </p>
                    <pre>
                        <code>
                           
                        </code>
                    </pre>
                    <p>chainlink
                        js로 알고리즘 구현이 익숙하고 자연스러워 지면 솔리디티의 습득시간이 단축
                    </p>
                </dd>
            </dl>
        </div>
    )
}