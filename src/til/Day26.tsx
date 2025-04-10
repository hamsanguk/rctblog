import React from "react";

const Day26 = ()=>{
    return(
        <div>
            <dl className="dayWrap">
                <dt className="daybutton">4/10</dt>
                <dd className="daycontent">
                    <h3>ERC-721</h3>
                    <p>
                        ERI/ERC
                        <h4>openzeppelin ERC-721필수함수 </h4>
                        ownerOf(): tokenId의 소유자 주소 반환함수 (nft는 개별적으로 구별되어, 각 토큰ID가 특정 주소에 귀속)<br />
                        transferFrom(),safeTransferFrom():nft전송함수인데 safe는 to주소가 컨트랙트면, 해당 컨트랙트가 erc-721을 지원하는 여부를 확인후 전송<br />
                        approve(): tokenId의 제어 권한을 to계정에게 부여하는 함수 <br />
                        setApprovalForAll():특정주소가 모든토큰의 관리할 권한을 승인한다. <br />
                        getApproved(),isApprovedForAll():특정토큰에 승인된계정(위임받은 계정)을 반환/ 특정owner의 모든토큰을 전송할수 있는 operator인지 확인 <br />
                        balanceOf():특정 주소가 보유한 erc-721의 개수 조회 함수
                        <h4>ERC-721필수 이벤트</h4>
                        전송 event Transfer(): nft가 주소에서 to주소로 전송될때 발생하는 이벤트<br />
                        승인 event Approval(): 특정 nft에 대한 사용 권한이 approved주소에 부요될 때 발생 <br />
                        전체 승인 event ApprovalForAll():owner가 operator에게 모든 nft권한을 부여하거나 해제시 발생 <br />
                    </p>
                    <p>
                        <h4>tokenURI</h4>
                        이미지나 파일을 블록체인에 직접 저장하게 되면 비효율적이므로 메타테이터.json을 저장하는 uri
                        nft의 메타데이터를 저장하는 uri <br />
                        
                    </p>
                </dd>
            </dl>
        </div>
    )
}

export default Day26;