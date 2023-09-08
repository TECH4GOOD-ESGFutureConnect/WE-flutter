import styled from '@emotion/styled';
import map from "../../../image/Main/map.png";
import { useEffect } from 'react';
const { kakao }: any = window;
const { Tmapv3 }: any = window;


const KakaoMap = () => {
  // useEffect(() => {
  //   const container = document.getElementById('map');
  //   const options = {
  //     center: new kakao.maps.LatLng(33.450701, 126.570667),
  //     level: 3
  //   };
  //   const map = new kakao.maps.Map(container, options);
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //         const lat = position.coords.latitude; // 위도
  //         const lon = position.coords.longitude; // 경도
          
  //         const locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
  //         map.setCenter(locPosition);  
  //       });
      
  //   } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
  //     const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);  
  //     map.setCenter(locPosition);  
  //   }
  // }, []);

  useEffect(() => {
    let map: any;
    //지도 초기화
    function initTmap(){
       // map 생성
       // Tmapv3.Map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
       map = new Tmapv3.Map("map_div", {
          center : new Tmapv3.LatLng(37.56608518555381,127.018035138335),
          width : "390px",   // 지도의 넓이
          height : "844px",   // 지도의 높이
          zoom : 16   // 지도 줌레벨
       });
 
       var marker = new Tmapv3.Marker({
          position: new Tmapv3.LatLng(37.56650259939697,127.01721167564429),   //Marker의 중심좌표 설정.
          map: map   //Marker가 표시될 Map 설정..
       });
       var marker = new Tmapv3.Marker({
          position: new Tmapv3.LatLng(37.565734081969055,127.01857464551969),   //Marker의 중심좌표 설정.
          map: map   //Marker가 표시될 Map 설정..
       });
       var marker = new Tmapv3.Marker({
          position: new Tmapv3.LatLng(37.565932392523465,127.01734364032791),   //Marker의 중심좌표 설정.
          icon: "/resources/images/x2.png",
          map: map   //Marker가 표시될 Map 설정..
       });
       
       map.on("ConfigLoad", function() {
            addPolyline();
              addA();
        });
       
    }
    function addPolyline(){
       var polyline = new Tmapv3.Polyline({
          path: [
             new Tmapv3.LatLng(37.56650259939697,127.01721167564429),   // 선의 꼭짓점 좌표
             new Tmapv3.LatLng(37.56563545234123,127.01739370822949),
                 new Tmapv3.LatLng(37.56569943682425,127.01808393001602),// 선의 꼭짓점 좌표
             new Tmapv3.LatLng(37.565734081969055,127.01857464551969),   // 선의 꼭짓점 좌표
             
          ],
          strokeColor: "#daf542",
          strokeWeight: 6,
          direction: true,
          map: map // 지도 객체
       });
    }
 
     function addA(){
             var polyline = new Tmapv3.Polyline({
                 path: [
                     new Tmapv3.LatLng(37.56648587424123,127.01722562313125),   // 선의 꼭짓점 좌표
                     new Tmapv3.LatLng(37.56645185754031,127.01626002788589),
                     new Tmapv3.LatLng(37.565529148602174,127.01637268066452),// 선의 꼭짓점 좌표
                     new Tmapv3.LatLng(37.56575025961939,127.01856136322067),   // 선의 꼭짓점 좌표
 
                 ],
                 strokeColor: "#d128872",
                 strokeWeight: 6,
                 direction: true,
                 map: map // 지도 객체
             });
         }
    initTmap();
  }, []);


  
  return (
    <Wrapper id='map_div'></Wrapper>
    
  )
}

export default KakaoMap;

const Wrapper = styled.div`
  display: flex;
`;