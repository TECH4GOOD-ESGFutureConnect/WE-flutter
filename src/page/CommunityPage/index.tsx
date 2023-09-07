import Header from "../../component/Common/Header";
import CommunityPosting from "../../component/Community/CommunityPosting";
import * as s from "./styles";

const CommunityPage = () => {

  return (
    <s.Wrapper>
      <Header />
      <s.CategoryContainer>
        <s.Category_ALL>전체</s.Category_ALL>
        <s.Category_INFO>위험 정보</s.Category_INFO>
        <s.Category_REPORT>위험 신고</s.Category_REPORT>
        <s.Category_Q>질문</s.Category_Q>
      </s.CategoryContainer>

      <CommunityPosting />
    </s.Wrapper>
  )
}

export default CommunityPage;