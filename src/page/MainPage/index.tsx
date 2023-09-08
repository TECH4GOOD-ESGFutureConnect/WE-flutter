import KakaoMap from "../../component/MainPage/KakaoMap";
import SlideUp from "../../component/MainPage/SlideUp";
import * as s from "./styles";

const MainPage = () => {
  return (
    <s.Wrapper>
      <s.InputContainer>
        <s.InputStart placeholder="보라매병원역 2번출구"/>
        <s.InputEnd placeholder="보라매 SKT 타워" />
      </s.InputContainer>
      <KakaoMap />
      <SlideUp />
    </s.Wrapper>
  )
}

export default MainPage;