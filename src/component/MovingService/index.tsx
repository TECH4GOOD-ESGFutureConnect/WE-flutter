import * as s from "./styles";
import carIcon from "../../image/MovingService/carIcon.svg";

const MovingServiceComponent = () => {
  return (
    <s.Wrapper>
      <s.InfoContainer>
        <s.Name>이은수</s.Name>
        <s.Car>아반떼</s.Car>
        <s.Phone>02-271-2727</s.Phone>
      </s.InfoContainer>
      <s.CarIcon src={carIcon} alt='car' />
    </s.Wrapper>
  )
}

export default MovingServiceComponent;