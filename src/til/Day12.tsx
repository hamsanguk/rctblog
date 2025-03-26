import React,{JSX} from "react";
import "../css/dayform.css";

const Day29 = (): JSX.Element => {
  return (
    <dl>
      <dt className="daybutton">3/14 Day 13</dt>
      <dd>
        <h3 className="daycontent">DApp 지갑</h3>
        <ul>
          <li>
            <h3>비결정적 월렛</h3>
          </li>
          <li>각 키가 독립적으로 생성되며, 시드 없이 무작위로 생성되고 재사용되지 않음</li>
          <li>
            <h3>결정적(시드) 월렛</h3>
          </li>
          <li>하나의 시드에서 모든 비밀키를 파생, 각 비밀키들은 특정 인덱스와의 조합으로 결정</li>
        </ul>
        <h4>HD 월렛</h4>
        <p>HD 월렛(계층적 결정적 월렛)은 BIP-32, BIP-39, BIP-44 표준을 따르며, 하나의 시드 문구에서 여러 개의 키를 파생할 수 있어 백업과 복구가 용이하다.</p>
      </dd>
    </dl>
  );
};

export default Day29;
