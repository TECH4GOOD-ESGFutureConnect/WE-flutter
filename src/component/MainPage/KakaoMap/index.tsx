import styled from '@emotion/styled';
import { useEffect } from 'react';
const { kakao }: any = window;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };
    const map = new kakao.maps.Map(container, options);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          const lat = position.coords.latitude; // 위도
          const lon = position.coords.longitude; // 경도
          
          const locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          map.setCenter(locPosition);  
        });
      
    } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);  
      map.setCenter(locPosition);  
    }
  }, []);


  
  return (
    <Wrapper id='map'>KakaoMap</Wrapper>
  )
}

export default KakaoMap;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;