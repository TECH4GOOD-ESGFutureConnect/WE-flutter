import React from 'react';
import * as s from "./styles";
import reservation from "../../image/Bus/reservation.svg";
import arrow from "../../image/Bus/arrow.svg";
import { busData } from '../../assets/Bus/busData';
import bus604 from "../../image/Bus/bus604.png";
import bus752 from "../../image/Bus/bus752.png";
import bus5515 from "../../image/Bus/bus5515.png";
import bus5623 from "../../image/Bus/bus5623.png";
import marker from "../../image/Bus/marker.svg";

const BusComponent = () => {
  return (
    <s.Wrapper>
      {
        busData.map((data, idx) => {
          if (data.busnum === "604번" || data.busnum === "752번") {
            return (
              <s.Container>
                <s.TopContainer>
                  <s.BusNum_Blue>{data.busnum}</s.BusNum_Blue>
                  <s.ReservationContainer>
                    <s.ReservationIcon 
                      src={reservation}
                      alt='reservation'
                    />
                    <s.ReservationText>예약하기</s.ReservationText>
                  </s.ReservationContainer>
                  <s.ArrowIcon
                    src={arrow}
                    alt='arrow'
                  />
                </s.TopContainer>

                <s.BottomContainer>
                  {
                    idx%4 === 0 ?
                    <s.BusImg src={bus604} alt='604' /> :
                    idx%4 === 1 ?
                    <s.BusImg src={bus5515} alt='5515' /> :
                    idx%4 === 2 ?
                    <s.BusImg src={bus5623} alt='5623' /> :
                    <s.BusImg src={bus752} alt='752' />
                  }
                  <s.BusInfo>
                    <s.BusLocationContainer>
                      <s.MarkerIcon src={marker} alt='marker' />
                      <s.BusLocation>{data.location}</s.BusLocation>
                    </s.BusLocationContainer>
                    <s.BusTime>{data.time}</s.BusTime>
                  </s.BusInfo>
                </s.BottomContainer>
              </s.Container>
            )
          } else {
            return (
              <s.Container>
                <s.TopContainer>
                  <s.BusNum_Green>{data.busnum}</s.BusNum_Green>
                  <s.ReservationContainer>
                    <s.ReservationIcon 
                      src={reservation}
                      alt='reservation'
                    />
                    <s.ReservationText>예약하기</s.ReservationText>
                  </s.ReservationContainer>
                  <s.ArrowIcon
                    src={arrow}
                    alt='arrow'
                  />
                </s.TopContainer>

                
                <s.BottomContainer>
                  {
                    idx%4 === 0 ?
                    <s.BusImg src={bus604} alt='604' /> :
                    idx%4 === 1 ?
                    <s.BusImg src={bus5515} alt='5515' /> :
                    idx%4 === 2 ?
                    <s.BusImg src={bus5623} alt='5623' /> :
                    <s.BusImg src={bus752} alt='752' />
                  }
                  <s.BusInfo>
                    <s.BusLocationContainer>
                      <s.MarkerIcon src={marker} alt='marker' />
                      <s.BusLocation>{data.location}</s.BusLocation>
                    </s.BusLocationContainer>
                    <s.BusTime>{data.time}</s.BusTime>
                  </s.BusInfo>
                </s.BottomContainer>
              </s.Container>
            )
          }
        })
      }
    </s.Wrapper>
  )
}

export default BusComponent;