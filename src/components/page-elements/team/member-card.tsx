import { TelegramIcon, TwitterIcon } from 'src/config/images';
import styled from 'styled-components';

interface MemberCardProps {
  img: string;
  name: string;
  job: string;
  telegram?: string;
  twitter?: string;
}

export const MemberCard = ({ img, name, job, telegram, twitter }: MemberCardProps) => {
  return (
    <CardContainer>
      <Avatar src={img} alt="avatar" />
      <CardDetails>
        <Name>{name}</Name>
        <Job>{job}</Job>
        <Links>
          <Twitter href={twitter} rel="noopener noreferrer" target={'_blank'}>
            <img src={TwitterIcon} alt="twitter" />
          </Twitter>
          <Telegram href={telegram} rel="noopener noreferrer" target={'_blank'}>
            <img src={TelegramIcon} alt="telegram" />
          </Telegram>
        </Links>
      </CardDetails>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 840px) {
    width: 220px;
  }
  @media screen and (max-width: 720px) {
    width: 180px;
  }
  @media screen and (max-width: 560px) {
    width: 220px;
  }
  @media screen and (max-width: 480px) {
    width: 180px;
  }
  @media screen and (max-width: 400px) {
    width: 140px;
  }
`;

const Avatar = styled.img`
  width: 100%;
  height: auto;
`;
const CardDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3px;
  gap: 10px;
`;

const Name = styled.div`
  font-size: 18px;
  font-family: 'gotham-bold';
`;

const Job = styled.div`
  font-size: 13px;
  font-family: 'gotham-thin';
  letter-spacing: 0.1px;
`;

const Links = styled.div`
  display: flex;
  gap: 10px;
`;

const Twitter = styled.a`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const Telegram = styled.a`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
