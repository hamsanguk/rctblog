import React from 'react';
import CodeArea from './CodeArea';

const solidityCode = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract AccessControlExample is AccessControl {
    // 역할 정의 (각 역할은 고유한 bytes32 해시값)
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant DOCTOR_ROLE = keccak256("DOCTOR_ROLE");
    bytes32 public constant PATIENT_ROLE = keccak256("PATIENT_ROLE");
    bytes32 public constant RESEARCHER_ROLE = keccak256("RESEARCHER_ROLE");

    // 예: 환자가 가진 진료 기록 (간단히 mapping으로 표현)
    mapping(address => string[]) public patientRecords;

    constructor() {
        // 배포자는 ADMIN 권한과 DEFAULT_ADMIN 권한을 모두 가짐
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
    }

    // 관리자만 역할을 부여 가능
    function grantDoctor(address account) external onlyRole(ADMIN_ROLE) {
        grantRole(DOCTOR_ROLE, account);
    }

    function grantPatient(address account) external onlyRole(ADMIN_ROLE) {
        grantRole(PATIENT_ROLE, account);
    }

    function grantResearcher(address account) external onlyRole(ADMIN_ROLE) {
        grantRole(RESEARCHER_ROLE, account);
    }

    // 의사만 환자 기록을 등록할 수 있음
    function addMedicalRecord(address patient, string memory record) external onlyRole(DOCTOR_ROLE) {
        patientRecords[patient].push(record);
    }

    // 환자만 자신의 기록을 열람 (여기선 단순히 길이 확인)
    function getRecordCount() external view onlyRole(PATIENT_ROLE) returns (uint) {
        return patientRecords[msg.sender].length;
    }

    // 연구자만 기록 열람 요청 가능
    function requestAccessToRecord(address patient) external onlyRole(RESEARCHER_ROLE) returns (string memory) {
        require(patientRecords[patient].length > 0, "No records");
        return "Request sent to patient"; // 실제 로직은 요청 테이블 관리
    }
}
`;

const Day48 = ()=>{
    return (
        <dl className="dayWrap">
            <dt className="daybutton">6/10</dt>
            <dd className="daycontent">
              <h3>OppenzeppelineAccessControl</h3>
              <p>
                권한을 부여받은 account만 function을 실행시킬 수 있도록 contract에 제어 및 관리 기능을 적용하는 방법
                구현하는 기본 기능
                1. 역할명 정하기 (doctor, patient, admin,...)
                2. account에 정해진 권한이 부여됐는지 확인 가능해야
                3. 권한을 부여하는건 Owner(contract creater)가 최초로 가져야 된다
                4. 권한부여(grantRole)와 권한취소(revokeRole)를 구현한다
                5. 함수에 적용할 modifier구현하기
              </p>
              <CodeArea code={solidityCode}/>
              <p>
              </p>
              

            </dd>
        </dl>
    )
}
export default Day48;