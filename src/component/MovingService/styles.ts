import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 102px;
  border-radius: 10px;
  background-color: white;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Name = styled.div`
  display: flex;
  font-size: 16px;
`;

export const Car = styled.div`
  display: flex;
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 7px;
  padding-bottom: 7px;
  background-color: #55C1DF;
  border-radius: 10px;
  color: white;
`;

export const Phone = styled.div`
  display: flex;
  font-size: 12px;
`;

export const CarIcon = styled.img`
  display: flex;
  width: 81px;
  height: 30px;
  margin-left: 10px;
`;