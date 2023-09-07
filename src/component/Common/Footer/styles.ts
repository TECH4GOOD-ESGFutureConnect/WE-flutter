import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  width: 390px;
  height: 88px;
  background-color: #F1F2F6;
  z-index: 10;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

export const Icon = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
`;

export interface IIsSelect {
  isSelected: boolean
}

export const IconText = styled.div<IIsSelect>`
  display: flex;
  font-size: 10px;
  color: ${(props) => props.isSelected ? '#285FB4' : "#6E6E6E"};
`;