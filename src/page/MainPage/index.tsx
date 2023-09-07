import KakaoMap from "../../component/MainPage/KakaoMap";
import SlideUp from "../../component/MainPage/SlideUp";
import * as s from "./styles";

const MainPage = () => {
  return (
    <s.Wrapper>
      <KakaoMap />
      <SlideUp />
    </s.Wrapper>
  )
}

export default MainPage;