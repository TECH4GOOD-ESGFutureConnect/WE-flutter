import { useState } from "react";
import AnimateHeight from "react-animate-height";
import dragLine from "../../../image/SlideUp/dragLine.svg";
import contactHorizontalLine from "../../../image/SlideUp/contactHorizontalLine.svg";
import contactIcon from "../../../image/SlideUp/contactIcon.svg";
import afterStar from "../../../image/SlideUp/afterStar.svg";
import beforeStar from "../../../image/SlideUp/beforeStar.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { DangerousImg, RecommnedImg } from "../../../assets/CarouselData/carouselImage";
import * as s from "./styles";

const SlideUp = () => {
  const [slideHeight, setSlideHeight] = useState(295);
  let isResizing = false; // 드래그 중 여부를 추적하는 플래그
  let startY = 0; // 터치 시작 위치

  const handleTouchStart = (e: any) => {
    isResizing = true;
    startY = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    isResizing = false;
  };

  const handleTouchMove = (e: any) => {
    if (!isResizing) return;

    const deltaY = e.touches[0].clientY - startY;
    const newHeight = slideHeight - deltaY * 30;

    // 일정 값 이상으로 위로 움직였을 때 height를 690으로 고정
    if (newHeight > 690) {
      setSlideHeight(690);
    }
    
    // 일정 값 이상으로 아래로 움직였을 때 height를 295로 고정
    else if (newHeight < 295) {
      setSlideHeight(295);
    }
    
    else {
      setSlideHeight(newHeight);
    }

    startY = e.touches[0].clientY;
  };
  const handleMouseDown = () => {
    isResizing = true;
  };

  const handleMouseUp = () => {
    isResizing = false;
  };

  const handleMouseOut = () => {
    isResizing = false;
  };

  const handleMouseMove = (e: any) => {
    if (!isResizing) return;

    let newHeight = slideHeight - e.movementY * 30;
    if (newHeight >= 500) newHeight = 690;
    if (newHeight < 500) newHeight = 295;
    
    setSlideHeight(newHeight);
  };

  const dangerousSlides = DangerousImg.map((img, idx) => (
    <s.SlideImageWrapper key={img.alt}>
      <s.SlideImage src={img.url} alt={img.alt}/>
      <s.SlideDescribe>{img.describe}</s.SlideDescribe>
      {/* {
        idx%2 === 0 ?
        <s.AddStartIcon src={afterStar} alt="add" /> :
        <s.AddStartIcon src={beforeStar} alt="not add" />
      } */}
    </s.SlideImageWrapper>
  ));
  const recommendSlides = RecommnedImg.map((img, idx) => (
    <s.SlideImageWrapper key={img.alt}>
      <s.SlideTitle>{img.name}</s.SlideTitle>
      <s.SlideDescribe>{img.describe}</s.SlideDescribe>
      <s.SlideImage src={img.url} alt={img.alt}/>
      {/* {
        idx%2 === 0 ?
        <s.AddStartIcon src={afterStar} alt="add" /> :
        <s.AddStartIcon src={beforeStar} alt="not add" />
      } */}
    </s.SlideImageWrapper>
  ));

  const [currentIndex, setCurrentIndex] = useState(0);
  function handleChange(index: number) {
    setCurrentIndex(index);
  }

  return (
    <s.Wrapper
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      <AnimateHeight 
        duration={100} 
        height={slideHeight} 
        style={{
          backgroundColor: "#FDFCF8",
          borderRadius: "30px 30px 0px 0px"
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
        onMouseMove={handleMouseMove}
      >
        <s.SliderContainer>
          <s.Dragline src={dragLine} alt="drag" />
          <s.SliderTitle>경로 안내</s.SliderTitle>
          <s.Row1>
            <s.Column1>총 걸리는 시간</s.Column1>
            <s.TimeAndDistance>
              <s.Time>15분</s.Time>
              <s.Distance>300m</s.Distance>
            </s.TimeAndDistance>

            <s.ContactContainer>
              <s.ContactIconWrapper>
                <s.ContactIcon src={contactIcon} alt="contact" />
                <s.ContactText>긴급 전화</s.ContactText>
              </s.ContactIconWrapper>
              <s.ContactHorizontalLine 
                src={contactHorizontalLine}
                alt="horizontalLine"
              />
            </s.ContactContainer>
          </s.Row1>

          <s.Row2>
            <s.Column2>주변 위험 정보</s.Column2>
          </s.Row2>
          <Carousel
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            selectedItem={currentIndex}
            onChange={handleChange}
          >
            {dangerousSlides}
          </Carousel>

          <s.Row3>
            <s.Column3>추천 플레이스</s.Column3>
          </s.Row3>
          <Carousel
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            selectedItem={currentIndex}
            onChange={handleChange}
          >
            {recommendSlides}
          </Carousel>
        </s.SliderContainer>

      </AnimateHeight>
    </s.Wrapper>
  )
}

export default SlideUp;