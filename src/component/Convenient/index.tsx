import React from 'react'
import * as s from "./styles";
import arrow from "../../image/Convenient/arrow.svg";
import motowheel from "../../image/Convenient/motowheel.png";
import sinrim from "../../image/Convenient/sinrim.png";
import store from "../../image/Convenient/store.png";
import { convenientData } from '../../assets/Convenient/convenientData';

const ConvenientComponent = () => {
  return (
    <s.Wrapper>
      {
        convenientData.map((data, idx) => {
          return <s.Container>
            <s.TopContainer>
              <s.Type>{data.type}</s.Type>
              <s.ArrowIcon src={arrow} alt='arrow' />
            </s.TopContainer>

            <s.BottomContainer>
              {
                idx%3 === 0 ?
                <s.ConvenientImg src={motowheel} alt='moto' /> :
                idx%3 === 1 ?
                <s.ConvenientImg src={sinrim} alt='sinrim' /> :
                <s.ConvenientImg src={store} alt='sinrim' />
              }
              <s.TextContainer>
                <s.Location>{data.location}</s.Location>
                <s.DetailLocation>{data.location_detail}</s.DetailLocation>
              </s.TextContainer>
            </s.BottomContainer>
          </s.Container>
        })
      }
    </s.Wrapper>
  )
}

export default ConvenientComponent;