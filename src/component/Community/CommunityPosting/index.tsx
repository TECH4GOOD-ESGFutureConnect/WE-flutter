import * as s from "./styles";
import { communityData } from '../../../assets/Community/communityData';
import replyIcon from "../../../image/Community/replyIcon.svg";

const CommunityPosting = () => {
  return (
    <s.Wrapper>
      {
        communityData.map((data) => {
          if (data.type === "위험신고") {
            return (
              <s.Container>
                <s.TopContainer>
                  <s.Report>{data.type}</s.Report>
                  <s.Time>{data.time}</s.Time>
                </s.TopContainer>
                <s.TitleAndContent>
                  <s.Title>{data.title}</s.Title>
                  <s.Content>{data.content}</s.Content>
                </s.TitleAndContent>
                <s.ReplyWrapper>
                  <s.IconImg src={replyIcon} alt='reply' />
                  <s.ReplyCnt>{data.reply}</s.ReplyCnt>
                </s.ReplyWrapper>
              </s.Container>
            )
          } else {
            return (
              <s.Container>
                <s.TopContainer>
                  <s.Information>{data.type}</s.Information>
                  <s.Time>{data.time}</s.Time>
                </s.TopContainer>
                <s.TitleAndContent>
                  <s.Title>{data.title}</s.Title>
                  <s.Content>{data.content}</s.Content>
                </s.TitleAndContent>
                <s.ReplyWrapper>
                  <s.IconImg src={replyIcon} alt='reply' />
                  <s.ReplyCnt>{data.reply}</s.ReplyCnt>
                </s.ReplyWrapper>
              </s.Container>
            )
          }
        })
      }
    </s.Wrapper>
  )
}

export default CommunityPosting;
