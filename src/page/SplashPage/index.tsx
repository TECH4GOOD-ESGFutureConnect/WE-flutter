import * as s from "./styles";
import splash from "../../image/SplashPage/splash.png";

const SplashPage = () => {
  return (
    <s.Wrapper>
      <s.SplashImg src={splash} alt="splash" />
    </s.Wrapper>
  )
}

export default SplashPage;