import { useTranslation } from 'react-i18next';
import CopyToClipboard from 'src/components/CopyToClipboard';
import { DeskTopTokenChart, MobileTokenChart } from 'src/components/tokenomics-chart';
import { TokenChartInfo } from 'src/components/tokenomics-chart/chart-info';
import { LogoHeader } from 'src/config/images';
import styled, { css } from 'styled-components';

export const TokenGraphSection = () => {
  const { t } = useTranslation();
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
        <DeskChartContainer>
          <DeskTopTokenChart />
          <Img src={LogoHeader} />
        </DeskChartContainer>
        <MobileChartContainer>
          <MobileTokenChart />
          <Img src={LogoHeader} />
        </MobileChartContainer>
        <TokenChartInfo />
        <MediumText>{t('token.contractaddress')}</MediumText>
        <CopyToClipboard>
          {({ copy }) => (
            <ContractAddy onClick={() => copy(' 0x74f08af7528ffb751e3a435ddd779b5c4565e684')}>
              0x74f08aF7528Ffb751e3A435ddD779b5C4565e684
            </ContractAddy>
          )}
        </CopyToClipboard>
        <MediumText style={{ paddingTop: '4rem' }}>{t('token.buyking')}</MediumText>
        <SmallText>{t('token.newlisting')}</SmallText>
      </TokenDetails>
    </TokenGraphContainer>
  );
};

const TokenGraphContainer = styled.div`
  width: 100%;
  height: 100%;
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

const TokenChart = css`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.black};
  font-size: 20px;
  z-index: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 70px;
  position: absolute;
  margin-bottom: 2rem;

  @media screen and (max-width: 420px) {
    height: 60px;
  }
`;

const DeskChartContainer = styled.div`
  ${TokenChart}
  width: 100%;
  height: 510px;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileChartContainer = styled.div`
  ${TokenChart}
  width: 560px;
  height: 560px;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 640px) {
    width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 420px) {
    width: 450px;
    height: 450px;
  }
`;

const MediumText = styled.div`
  color: ${(prop) => prop.theme.white};
  font-size: 25px;
  padding-top: 7rem;
  font-family: 'gotham-bold';
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 22px;
    padding-top: 5rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 15px;
    padding-top: 3rem;
  }
`;

const SmallText = styled.div`
  padding-top: 1.375rem;
  width: 100%;
  height: 100%;
  text-align: center;
  color: ${(prop) => prop.theme.white};
  font-size: 15px;
  @media screen and (max-width: 420px) {
    font-size: 13px;
  }
`;

const ContractAddy = styled.div`
  padding-top: 1.375rem;
  width: 100%;
  height: 100%;
  text-align: center;
  color: ${(prop) => prop.theme.white};
  font-size: 15px;
  cursor: pointer;
  font-family: 'gotham-bold';
  @media screen and (max-width: 420px) {
    font-size: 13px;
  }
`;
