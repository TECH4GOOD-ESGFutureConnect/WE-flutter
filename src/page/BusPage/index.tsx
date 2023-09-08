import React from 'react';
import * as s from "./styles";
import Header from '../../component/Common/Header';
import BusComponent from '../../component/Bus/BusComponent';

const BusPage = () => {
  return (
    <s.Wrapper>
      <Header />
      <s.CategoryContainer>
        <s.Category_SELECT>보라매병원역</s.Category_SELECT>
        <s.Category_N>양재역</s.Category_N>
        <s.Category_N>홍대입구역</s.Category_N>
        <s.Category_N>상도역</s.Category_N>
      </s.CategoryContainer>

      <BusComponent />
    </s.Wrapper>
  )
}

export default BusPage;