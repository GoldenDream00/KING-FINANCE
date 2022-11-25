import { TokenomicsChart } from 'src/components/tokenomics-chart';
import { TokennChartInfo } from 'src/components/tokenomics-chart/chart-info';
import { LogoHeader } from 'src/config/images';
import styled from 'styled-components';

export const TokenGraph = () => {
  return (
    <TokenGraphContainer>
      <TokenDetails>
        <TokenInfo>
          <TokenAmount>
            <span style={{ fontFamily: 'gotham-bold' }}>100</span>
            <span style={{ fontFamily: 'gotham-thin' }}>.000.000</span>
          </TokenAmount>
          <TokenName>$King</TokenName>
        </TokenInfo>
        <TokenChart>
          <TokenomicsChart />
          <Img src={LogoHeader} />
          <TokennChartInfo />
        </TokenChart>
      </TokenDetails>
    </TokenGraphContainer>
  );
};

const TokenGraphContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 6rem;
  @media screen and (max-width: 480px) {
    padding-top: 3rem;
  }
`;

const TokenDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const TokenInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TokenAmount = styled.div`
  font-size: 120px;
  @media screen and (max-width: 1024px) {
    font-size: 90px;
  }
  @media screen and (max-width: 768px) {
    font-size: 65px;
  }
  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
  @media screen and (max-width: 360px) {
    font-size: 40px;
  }
`;

const TokenName = styled.div`
  font-size: 120px;
  text-transform: uppercase;
  font-family: 'gotham-bold';
  @media screen and (max-width: 1024px) {
    font-size: 90px;
  }
  @media screen and (max-width: 768px) {
    font-size: 65px;
  }

  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
  @media screen and (max-width: 360px) {
    font-size: 40px;
  }
`;

const TokenChart = styled.div`
  padding-top: 5rem;
  width: 100%;
  height: 510px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.black};
  font-size: 20px;
  @media screen and (max-width: 768px) {
    height: 420px;
  }
  @media screen and (max-width: 580px) {
    height: 360px;
  }
  @media screen and (max-width: 380px) {
    height: 330px;
  }
  @media screen and (max-width: 350px) {
    height: 300px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 70px;
  position: absolute;
  margin-bottom: 4rem;
  @media screen and (max-width: 840px) {
    margin-bottom: 8rem;
  }
  @media screen and (max-width: 768px) {
    height: 50px;
  }
  @media screen and (max-width: 640px) {
    margin-bottom: 11rem;
  }
  @media screen and (max-width: 580px) {
    height: 40px;
  }
  @media screen and (max-width: 380px) {
    height: 35px;
  }
`;
