import React,{JSX} from "react";

const Day28 = ():JSX.Element=>{
    return (
        <>
            <dl className="dayWrap">
  <dt className="daybutton">4.14</dt>
  <dd className="daycontent">
    <h3>NFT ERC-721</h3>
    <p>
      온체인에 올라간 NFT는 토큰 아이디 표시만 있을 뿐, 다른 정보는 NFT가 무엇을 의미하는지 설명하는 JSON 형식의 메타데이터가 필수적입니다. <br />
      메타데이터로 가치와 의미가 부여됩니다.
    </p>

    <h3>OnChain과 OffChain</h3>
    <p>
      메타데이터를 저장하는 위치에 따라 방식이 나뉩니다. <br />
      <strong>OnChain:</strong> 블록체인 자체에 NFT 메타데이터를 저장하여 영구적으로 유지되며 변경이 불가합니다. <br />
      다만, 가스 비용이 높아 긴 데이터 저장이 어렵습니다.
    </p>
    <p>
      <strong>OffChain:</strong> 메타데이터를 IPFS(InterPlanetary File System), Arweave 같은 외부 저장소에 저장하고, <br />
      블록체인에는 해당 URL만 기록합니다. <br />
      비용 절감 및 확장성(일부 동적 변경 가능)의 효과가 있지만, 링크나 서버가 사라지면 NFT의 가치를 상실할 수 있습니다.
    </p>

    <h3>NFT 생성 과정</h3>
    <ol>
      <li>이미지 NFT를 생성하려면 .jpg/.png 파일이 필요합니다.</li>
      <li>이미지를 Storage에 저장 후 image 저장 주소를 얻습니다.</li>
      <li>Metadata를 구성하며 이미지 주소를 포함한 JSON 객체를 생성하고, 이를 다시 Storage에 저장합니다.</li>
      <li>NFT Contract를 통해 NFT를 민팅할 때 해당 메타데이터 주소를 tokenURI로 사용합니다.</li>
    </ol>

    <h4>Pinata를 이용한 NFT를 Kairos 테스트넷에 배포 후 OpenSea에 등록</h4>
    <p>
      <strong>준비:</strong> Kairos 테스트 토큰이 있는 Private Key, <code>config.ts</code>에 Kairos 네트워크 등록
    </p>
    <p>1. deploy → 2. mint</p>
    <hr />

    <p>
      <strong>pinata/upload.file.ts:</strong> 로컬 이미지 파일을 스트림 형태로 읽고, Pinata API를 통해 IPFS에 업로드 <br />
      반환값은 IPFS 이미지 URL(예: https://.../ipfs/CID)이며, 이 URL이 메타데이터에 들어갑니다.
    </p>
    <p>
      <strong>pinata/upload.metadata.ts:</strong> 위에서 얻은 이미지 URL을 포함한 JSON 메타데이터 객체를 생성하고, <br />
      해당 JSON을 다시 IPFS에 업로드하여 최종적으로 Token URI를 생성합니다.
    </p>
    <p>
      <strong>ethers.ts:</strong> Token URI를 NFT 민팅 함수에 전달하여 NFT를 생성합니다.
    </p>

    <h4>구조도 (Flow)</h4>
    <pre>
        {`graph TD
        A[upload.file.ts -> IPFS 이미지 업로드] --> B[upload.metadata.ts -> 메타데이터 업로드]
        B --> C[ethers.ts -> NFT 민팅 실행]
        C --> D[블록체인에 NFT 발행됨]`}
    </pre>
    <h3>Opensea에 자동 등록된 이유</h3>
    <p>
        모든 공개된 이더리움기반 nft를 자동 인식한다, <br />
        evm호환 네트워크, 공개된 컨트랙트 주소, <h4>표준 nft인터페이스 준수</h4>,
        메타데이터와 이미지의 공개 IPFS링크
    </p>
  </dd>
</dl>


        </>
    )
}
export default Day28;