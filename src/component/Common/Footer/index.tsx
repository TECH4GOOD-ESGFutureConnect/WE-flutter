import { useEffect, useState } from "react";
import * as s from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import community_black from "../../../image/Footer/Black/community_black.svg";
import home_black from "../../../image/Footer/Black/home_black.svg";
import menu_black from "../../../image/Footer/Black/menu_black.svg";
import moving_black from "../../../image/Footer/Black/moving_black.svg";
import mypage_black from "../../../image/Footer/Black/mypage_black.svg";
import community_blue from "../../../image/Footer/Blue/community_blue.svg";
import home_blue from "../../../image/Footer/Blue/home_blue.svg";
import menu_blue from "../../../image/Footer/Blue/menu_blue.svg";
import moving_blue from "../../../image/Footer/Blue/moving_blue.svg";
import mypage_blue from "../../../image/Footer/Blue/mypage_blue.svg";

const Footer = () => {
  const url = useLocation();
  const navigate = useNavigate();
  const [isMain, setIsMain] = useState(true);
  const [isCommunity, setIsCommunity] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isMypage, setIsMypage] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    if (url.pathname === '/') {
      setIsMain(true);
      setIsCommunity(false);
      setIsMoving(false);
      setIsMypage(false);
      setIsMenu(false);
      return;
    }

    if (url.pathname.includes("community")) {
      setIsMain(false);
      setIsCommunity(true);
      setIsMoving(false);
      setIsMypage(false);
      setIsMenu(false);
      return;
    }

    if (url.pathname.includes("moving-service")) {
      setIsMain(false);
      setIsCommunity(false);
      setIsMoving(true);
      setIsMypage(false);
      setIsMenu(false);
      return;
    }

    if (url.pathname.includes("mypage")) {
      setIsMain(false);
      setIsCommunity(false);
      setIsMoving(false);
      setIsMypage(true);
      setIsMenu(false);
      return;
    }

    if (url.pathname.includes("menu")) {
      setIsMain(false);
      setIsCommunity(false);
      setIsMoving(false);
      setIsMypage(false);
      setIsMenu(true);
      return;
    }
  }, [url]);

  const onClickMain = () => navigate("/");
  const onClickCommunity = () => navigate("/community");
  const onClickMoving = () => navigate("/moving-service");
  const onClickMypage = () => navigate("/mypage");
  const onClickMenu = () => navigate("/menu");

  return (
    <s.Wrapper>
      <s.ItemContainer onClick={onClickMain}>
        {
          isMain ? 
            <s.Icon src={home_blue} alt="home" /> : 
            <s.Icon src={home_black} alt="home" /> 
        }
        <s.IconText isSelected={isMain}>홈</s.IconText>
      </s.ItemContainer>

      <s.ItemContainer onClick={onClickCommunity}>
        {
          isCommunity ? 
            <s.Icon src={community_blue} alt="community" /> : 
            <s.Icon src={community_black} alt="community" /> 
        }
        <s.IconText isSelected={isCommunity}>커뮤니티</s.IconText>
      </s.ItemContainer>

      <s.ItemContainer onClick={onClickMoving}>
        {
          isMoving ? 
            <s.Icon src={moving_blue} alt="moving" /> : 
            <s.Icon src={moving_black} alt="moving" /> 
        }
        <s.IconText isSelected={isMoving}>이동서비스</s.IconText>
      </s.ItemContainer>

      <s.ItemContainer onClick={onClickMypage}>
        {
          isMypage ? 
            <s.Icon src={mypage_blue} alt="mypage" /> : 
            <s.Icon src={mypage_black} alt="mypage" /> 
        }
        <s.IconText isSelected={isMypage}>마이페이지</s.IconText>
      </s.ItemContainer>

      <s.ItemContainer onClick={onClickMenu}>
        {
          isMenu ? 
            <s.Icon src={menu_blue} alt="menu" /> : 
            <s.Icon src={menu_black} alt="menu" /> 
        }
        <s.IconText isSelected={isMenu}>메뉴</s.IconText>
      </s.ItemContainer>

    </s.Wrapper>
  )
}

export default Footer