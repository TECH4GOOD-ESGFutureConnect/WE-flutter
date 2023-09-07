import Header from "../../component/Common/Header";
import * as s from "./styles";
import addIcon from "../../image/Menu/addIcon.svg";
import busIcon from "../../image/Menu/busIcon.svg";
import communityIcon from "../../image/Menu/communityIcon.svg";
import convenientIcon from "../../image/Menu/convenientIcon.svg";
import mapIcon from "../../image/Menu/mapIcon.svg";
import {useNavigate} from "react-router-dom";

const MenuPage = () => {
  const navigate = useNavigate();

  const onClickAdd = () => navigate('/');
  const onClickCommunity = () => navigate('/community');
  const onClickMap = () => navigate('/subway');
  const onClickBus = () => navigate('/bus');
  const onClickConvenient = () => navigate('/convenient');

  return (
    <s.Wrapper>
      <Header />
      
      <s.TabContainer>
        <s.Tab onClick={onClickAdd}>
          <s.TabIcon src={addIcon} alt="add"/>
          <s.TabText>
            <s.TabTitle>즐겨찾기</s.TabTitle>
            <s.TabContent>내가 자주 가는 위험 지역 확인하기</s.TabContent>
          </s.TabText>
        </s.Tab>

        <s.Tab onClick={onClickCommunity}>
          <s.TabIcon src={busIcon} alt="bus"/>
          <s.TabText>
            <s.TabTitle>커뮤니티</s.TabTitle>
            <s.TabContent>위험 정보 바로바로 알리기</s.TabContent>
          </s.TabText>
        </s.Tab>

        <s.Tab onClick={onClickMap}>
          <s.TabIcon src={communityIcon} alt="community"/>
          <s.TabText>
            <s.TabTitle>지하철 내부 이동 지도</s.TabTitle>
            <s.TabContent>이동약자를 위한 지하철 내부 편의 지도</s.TabContent>
          </s.TabText>
        </s.Tab>

        <s.Tab onClick={onClickBus}>
          <s.TabIcon src={convenientIcon} alt="convenient"/>
          <s.TabText>
            <s.TabTitle>저상버스 예약</s.TabTitle>
            <s.TabContent>손쉽게 저상버스를 예약</s.TabContent>
          </s.TabText>
        </s.Tab>

        <s.Tab onClick={onClickConvenient}>
          <s.TabIcon src={mapIcon} alt="map"/>
          <s.TabText>
            <s.TabTitle>편의시설 위치</s.TabTitle>
            <s.TabContent>내 주변 위치 편의시설 알아보기</s.TabContent>
          </s.TabText>
        </s.Tab>
      </s.TabContainer>
    </s.Wrapper>
  )
}

export default MenuPage;