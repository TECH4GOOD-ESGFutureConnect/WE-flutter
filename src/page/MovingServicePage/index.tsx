import Header from "../../component/Common/Header";
import MovingServiceComponent from "../../component/MovingService";
import * as s from "./styles";

const MovingServicePage = () => {
  return (
    <s.Wrapper>
      <Header />

      <s.CategoryContainer>
        <s.Category_CAR>자동차</s.Category_CAR>
        <s.Category_OTHER>택시</s.Category_OTHER>
        <s.Category_OTHER>장애인 콜택시</s.Category_OTHER>
        <s.Category_OTHER>장애인 이동버스</s.Category_OTHER>
      </s.CategoryContainer>

      <s.ReservationText>예약가능 : 6명</s.ReservationText>

      <s.GridTable>
        <MovingServiceComponent />
        <MovingServiceComponent />
        <MovingServiceComponent />
        <MovingServiceComponent />
        <MovingServiceComponent />
        <MovingServiceComponent />
      </s.GridTable>

      <s.ReservationBtn>예약하기</s.ReservationBtn>
    </s.Wrapper>
  )
}

export default MovingServicePage;