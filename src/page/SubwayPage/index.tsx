import * as s from "./styles";
import Header from '../../component/Common/Header';
import subway from "../../image/Subway/Subway.png";

const SubwayPage = () => {
  return (
    <s.Wrapper>
      <Header />
      <s.CategoryContainer>
        <s.Category_GANGNAM>강남역</s.Category_GANGNAM>
        <s.Category_OTHERS>홍대입구역</s.Category_OTHERS>
        <s.Category_OTHERS>신도림역</s.Category_OTHERS>
        <s.Category_OTHERS>사당역</s.Category_OTHERS>
      </s.CategoryContainer>
      <s.SubwayImg src={subway} alt="subway" />
    </s.Wrapper>
  )
}

export default SubwayPage;