import React, { useEffect, useState } from 'react';
import Logo from "../../../image/Logo.png";
import bellIcon from "../../../image/Header/bellIcon.svg";
import searchIcon from "../../../image/Header/searchIcon.svg";
import * as s from "./styles";
import { useLocation } from "react-router-dom";

const Header = () => {
  const url = useLocation();
  const [isCommunity, setIsCommunity] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isMypage, setIsMypage] = useState(false);
  const [isSubway, setIsSubway] = useState(false);
  const [isConvenient, setIsConvenient] = useState(false);
  const [isBus, setIsBus] = useState(false);

  const [headerText, setHeaderText] = useState("");

  useEffect(() => {
    if (url.pathname.includes("community")) {
      setIsCommunity(true);
      setIsMenu(false);
      setIsMoving(false);
      setIsSubway(false);
      setIsConvenient(false);
      setIsBus(false);
      setIsMypage(false);

      setHeaderText("커뮤니티");
      return;
    }

    if (url.pathname.includes("moving-service")) {
      setIsCommunity(false);
      setIsMenu(false);
      setIsMoving(true);
      setIsSubway(false);
      setIsConvenient(false);      
      setIsBus(false);
      setIsMypage(false);

      setHeaderText("이동서비스 예약");
      return;
    }
    if (url.pathname.includes("menu")) {
      setIsCommunity(false);
      setIsMenu(true);
      setIsMoving(false);
      setIsSubway(false);
      setIsConvenient(false);   
      setIsBus(false);
      setIsMypage(false);
      
      setHeaderText("메뉴");
      return;
    }

    if (url.pathname.includes("mypage")) {
      setIsCommunity(false);
      setIsMenu(false);
      setIsMoving(false);
      setIsSubway(false);
      setIsConvenient(false);   
      setIsBus(false);
      setIsMypage(true);
      
      setHeaderText("마이페이지");
      return;
    }

    if (url.pathname.includes("subway")) {
      setIsCommunity(false);
      setIsMenu(false);
      setIsMoving(false);
      setIsSubway(true);
      setIsConvenient(false);   
      setIsBus(false);
      setIsMypage(false);

      setHeaderText("지하철 내부지도");
      return;
    }

    if (url.pathname.includes("convenient")) {
      setIsCommunity(false);
      setIsMenu(false);
      setIsMoving(false);
      setIsSubway(false);
      setIsConvenient(true);   
      setIsBus(false);
      setIsMypage(false);

      setHeaderText("편의시설 위치");
      return;
    }

    if (url.pathname.includes("bus")) {
      setIsCommunity(false);
      setIsMenu(false);
      setIsMoving(false);
      setIsSubway(false);
      setIsConvenient(false);   
      setIsBus(true);
      setIsMypage(false);

      setHeaderText("저상버스 예약");
      return;
    }
  }, [url]);

  return (
    <s.Wrapper>
      <s.Container>
        <s.LogoImg src={Logo} alt='logo' />
        <s.HeaderTitle>{headerText}</s.HeaderTitle>
        <s.IconContainer>
          <s.IconImg src={searchIcon} alt='search' />
          <s.IconImg src={bellIcon} alt='bell' />
        </s.IconContainer>
      </s.Container>
    </s.Wrapper>
  )
}

export default Header;