// src/utils/pinata.ts



export const uploadToPinata = async (file: File): Promise<string> => {
  const JWT = process.env.REACT_APP_PINATA_JWT;
  if (!JWT) throw new Error("Pinata JWT가 설정되지 않았습니다.");

  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`파일 업로드 실패: ${errorText}`);
  }

  const data = await response.json();
  return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
};

export const uploadMetadataToPinata = async (
  name: string,
  description: string,
  imageUrl: string
): Promise<string> => {
  const JWT = process.env.REACT_APP_PINATA_JWT;
  if (!JWT) throw new Error("Pinata JWT가 설정되지 않았습니다.");

  const metadata = {
    name,
    description,
    image: imageUrl,
    attributes: [
      { trait_type: 'Rarity', value: 'iron' },
      { trait_type: 'Power', value: 100 },//임의 고정값
    ],

  };

  const response = await fetch("https://api.pinata.cloud/pinning/pinJSONToIPFS", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${JWT}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(metadata),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`메타데이터 업로드 실패: ${errorText}`);
  }

  const data = await response.json();
  return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
};
// API Key
// 7fd0b298b1d7426db279
// API Secret
// 08056fd92c163a51cede92af79db30d80c6d631a323e19ba3dc10986201d14ec
// JWT
// (Secret access token)
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxYmNhMWViMi01YjI5LTRmNTktOTljYi1jMzM0ODAwYjYyY2MiLCJlbWFpbCI6Imd0ZDUzMDlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjdmZDBiMjk4YjFkNzQyNmRiMjc5Iiwic2NvcGVkS2V5U2VjcmV0IjoiMDgwNTZmZDkyYzE2M2E1MWNlZGU5MmFmNzlkYjMwZDgwYzZkNjMxYTMyM2UxOWJhM2RjMTA5ODYyMDFkMTRlYyIsImV4cCI6MTc3NjMyMjA4Mn0.h24pnxy60qb0mKVUeJJPV6DmU55_jzHSj-2SkZ5t0x4
