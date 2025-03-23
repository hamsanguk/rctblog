import React, { useState } from 'react';

interface DayData {
  day: string;
  title: string;
  content: string[];
}

const BlogComponent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // 열린 dl 항목의 인덱스를 추적

  const dayData: DayData[] = [
    {
      day: 'day28',
      title: '형사재판에 토큰시스템을 적용한 가상백서',
      content: [
        '토큰이코노미는 크립토이코노미에 포함된다',
        '토큰이코노미 3요소: Tokens, Back-up-Reinforcer, specified target behavior',
        '기존토큰이코노미의 문제점: 비합리적인 토큰의 교환가치, 투명하지못한 발행/지급/기록 등',
        '사법 시스템에 대한 불신과 판사의 불공정한 판결 문제',
        '시스템의 목적: 사법의 공정성 향상 및 판결의 투명성 강화'
      ]
    },
    {
      day: 'day27',
      title: '온체인데이터',
      content: [
        '온체인데이터: 스마트컨트렉트 실행, 트랜잭션 정보, 계정상태 등 블록체인 네트워크상의 모든 활동',
        '트랜잭션 데이터, 블록데이터, 상태 데이터',
        '블록체인 노드와 상호작용하는 방법: web3.js, Ether.js, RPC 사용',
        '개발 과정: TestRPC → TestNet → MainNet'
      ]
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // 클릭한 항목을 열거나 닫기
  };

  return (
    <div>
      {dayData.map((data, index) => (
        <dl key={index}>
          <dt className="daybutton" onClick={() => handleToggle(index)}>
            {data.day}
          </dt>
          {openIndex === index && (
            <dd className="daycontent">
              <h1>{data.title}</h1>
              <p>{data.content.join(' ')}</p>
            </dd>
          )}
        </dl>
      ))}
    </div>
  );
};

export default BlogComponent;
