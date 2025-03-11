import React, { JSX } from "react";

const Day7 = (): JSX.Element => {
    return (
        <dl className="dayWrap">
            <dt className="daybutton">25.2.11 day 7</dt>
            <dd className="daycontent">
                <h4>git 프로젝트 버전관리 도구, 분산형 버전관리 시스템</h4>
                <dl>
                    <dt>필요한 이유</dt>
                    <dd>파일이 변경되면 변경 이력과 변경 사항 확인 가능</dd>
                    <dd>이전 버전으로 돌아갈 수 있다</dd>
                    <dd>협업을 할 때 유용하다</dd>
                    <dd>데이터 손실 시 저장소에서 백업 가능</dd>
                </dl>
                <p>
                    git의 파일 관리를 위한 사용되는 공간들 [working dir - staging - repository].
                    <br />
                    - working directory (modified): 로컬상의 실제 위치, git은 파일을 추적하고는 있지만 저장소 반영은 안 되는 상태.
                    <br />
                    - staging area: commit 준비된 파일들 임시 저장 공간. `git add`로 이곳에 온다.
                    <br />
                    - repository: git이 관리하는 데이터베이스, `git commit`으로 저장되며 기록된다.
                    <br />
                    코드 작성 후 저장소에 올라가는 공식 명령어: `git add`, `git commit`, `git push`.
                </p>
                <p>
                    git branch
                    <br />
                    같은 분기점에서 시작하여 서로 다른 코드를 작성해야 되는 협업에서 사용된다. 분기된 코드에서 또 분기가 가능하며 이때는 분기 기준이 되는 브랜치에서 시작하도록 주의.
                    <br />
                    `git checkout -b branchname`: 현재 코드에서 브랜치 생성 후 바로 이동.
                    <br />
                    `git checkout branchname`: `branchname`의 브랜치로 이동.
                    <br />
                    `git branch`: branch들의 이름 보기.
                </p>
                <p>
                    git merge
                    <br />
                    branch된 코드를 하나의 코드로 병합할 때 사용.
                    <br />
                    merge 시도할 때 실패하는 이유는 branch 협업 시 같은 곳에 수정 사항이 발생, 일치하지 않아서 발생한다.
                    <br />
                    해결 방안: `git fetch --all`: 모든 원격 저장소 내용을 로컬에 최신화.
                    <br />
                    `git pull origin main(branch)`: 원격 저장소(origin)의 내용을 브랜치 코드로 가져오기.
                </p>
            </dd>
        </dl>
    );
};

export default Day7;
