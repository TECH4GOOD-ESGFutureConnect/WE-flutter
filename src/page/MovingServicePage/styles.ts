import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #F1F2F6;
  height: 100%;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 45px;
  padding-top: 10px;
  background-color: #F1F2F6;
`;


export const Category_CAR = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color: #285FB4;
  color: white;
  font-size: 14px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Category_OTHER = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color: #FDFCF8;
  color: 285FB4;
  font-size: 14px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ReservationText = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const GridTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 15px;
  column-gap: 15px;
  margin-top: 20px;
`;

export const ReservationBtn = styled.div`
  display: flex;
  margin-top: 60px;
  width: 358px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #285FB4;
  color: white;
  border-radius: 15px;
`;