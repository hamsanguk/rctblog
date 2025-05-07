import React from 'react';

const Day24: React.FC = () => {
    return (
        <>
            <dl className="dayWrap">
                <dt className="daybutton">day24</dt>
                <dd className="daycontent">
                    <p>
                        <h5>4/8 erc20과제 </h5>
                        <a href="https://github.com/hamsanguk/erc20">openzeppelin 주소</a> <br/>
                       contract폴더 안에 .sol 파일에서 erc20 토큰을 발행하는 코드를 openzeppelin 상속을 받아서 작성한다 <br/>
                       .sol파일을 배포후에 생성된 abi를 기반으로 web3.ts에서 import abi,address as contractAddress from abis/mytoken.json 상속을 받아 <br/>
                       openzeppelin의 매서드를 사용한다 web3에서. 
                    </p>
                    <p>
                        web3.ts는 abi와 상호작용 하는 라이브러리이며 openzeppelin의 erc20컨트랙트에서 상속받은 함수르을 web3.ts를 통해 호출이 가능하다.
                        전체흐름은 mytoken.sol 파일을 배포하고 배포된 주소와 abi를 기반으로 web3.ts에서 호출이나 상호작용이 가능하다.
                    </p>
                </dd>
            </dl>
        </>
    )
}
export default Day24;
