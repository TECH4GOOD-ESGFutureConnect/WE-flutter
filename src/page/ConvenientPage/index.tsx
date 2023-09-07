import React from 'react';
import * as s from "./styles";
import Header from '../../component/Common/Header';
import ConvenientComponent from '../../component/Convenient';

const ConvenientPage = () => {
  return (
    <s.Wrapper>
      <Header />
      <s.CategoryContainer>
        <s.Category_SELECT>전체</s.Category_SELECT>
        <s.Category_N>전동휠체어 충전소</s.Category_N>
        <s.Category_N>베리어프리 스토어</s.Category_N>
      </s.CategoryContainer>

      <ConvenientComponent />
      
    </s.Wrapper>
  )
}

export default ConvenientPage;