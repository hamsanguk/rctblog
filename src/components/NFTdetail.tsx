import React from "react";
import { useParams } from "react-router-dom";

const NFTDetail = () => {
  const { id } = useParams();

  // 실제 데이터 조회는 getNFTList에서 받아온 후 상태관리로 넘겨주거나
  // 별도로 API로 가져오도록 구성할 수 있습니다

  return (
    <div>
      <h2>NFT 상세 보기</h2>
      <p>토큰 ID: {id}</p>
      {/* 여기에 이미지, 설명 등 렌더링 */}
    </div>
  );
};

export default NFTDetail;
