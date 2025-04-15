import React,{JSX,useState} from "react";
import Web3 from "web3";
import "../css/MintNft.css"
import {loginMetamask,getNFTList} from "../utils/web3MintNFT"

const MintNft = ():JSX.Element=>{
    const [mintBtnHide,setMintBtnHide] = useState<boolean>(false);//메타마스크 연결상태 확인 setMintBtnHide(!mintBtnHide);

     const connectWalletclick = ()=>{
        // 메타마스크 연결페이지 오픈
       loginMetamask();
    };
    
     
{/* 최초 페이지 사용자의wallet연결하기버튼 연결하면=> 해당 지갑의 nft(이미지와 함께)목록을 불러오고, 각 nft카드를 클릭했을때 보내기,description설명,
업로드된 해당 이미지
들어온 해당 페이지에는 mint버튼이 있고 다른페이지로 이동되어 파일불러오기 불러오는 동안 로딩페이지 */}

    return (<>
        <div className="wrap">
            {!mintBtnHide ? <button onClick={connectWalletclick}>Connect Wallet</button>:false}
            {/*mintBtnHide ? :false*/}
            <div>
                {/* 해당 지갑의 nft(이미지와 함께)목록을 불러온다 */}
                <div className="nftCard">
                    <div className="imgWrap"><img src="" alt="" /></div>
                    <p></p>
                </div>
            </div>
           
        </div>
        
    </>)
}
export default MintNft;