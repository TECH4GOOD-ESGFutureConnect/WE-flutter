import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 100%;
  background-color: #F1F2F6;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 90%;
  height: 80px;
  margin-top: 10px;
  background-color: white;
  border-radius: 10px;
`;

export const TabIcon = styled.img`
  display: flex;
  width: 32px;
  height: 32px;
  margin-left: 12px;
`;

export const TabText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 12px;
  height: 50px
`;

export const TabTitle = styled.div`
  display: flex;
  font-size: 16px;
`;

export const TabContent = styled.div`
  display: flex;
  font-size: 12px;
`;




