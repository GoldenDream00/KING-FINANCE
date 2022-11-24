import styled from 'styled-components';

import { Container } from '../components/container/container';

import { LogoHeader, MenuKingfloki, MenuKingland, MenuKingpad } from '../config/images';

export const Header = () => {
  return (
    <Container>
      <HeaderContent>
        <DesktopLogo src={LogoHeader} alt="logo-header" />
        <RectButtonGroup>
          <LogoButtons>
            <MobileLogo src={LogoHeader} alt="mobile-header-logo" />
            <RectButtons>
              <RectButton>Docs</RectButton>
              <RectButton>Staking</RectButton>
            </RectButtons>
          </LogoButtons>

          <ButtonGroup>
            <KingFlokiButton className="btn-kingfloki" />
            <KingLandButton className="btn-kingland" />
            <KingPadButton className="btn-kingpad" />
          </ButtonGroup>
        </RectButtonGroup>
      </HeaderContent>
    </Container>
  );
};

const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  /* position: absolute;
  top: 3rem; */
  padding-top: 3rem;

  @media screen and (max-width: 640px) {
    justify-content: center;
    gap: 0;
  }
`;

const DesktopLogo = styled.img`
  display: block;
  width: 75px;
  height: auto;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const RectButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  min-width: 1px;
  gap: 10px;
  @media screen and (max-width: 840px) {
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
  }
  @media screen and (max-width: 640px) {
    align-items: stretch;
  }
`;

const LogoButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MobileLogo = styled.img`
  display: none;
  margin-left: 1rem;

  @media screen and (max-width: 640px) {
    display: block;
    width: 60px;
    height: auto;
  }

  @media screen and (max-width: 420px) {
    width: 50px;
    height: auto;
  }
`;

const RectButtons = styled.div`
  display: flex;
  gap: 10px;
  font-family: 'gotham-bold';
`;

const RectButton = styled.div`
  background: #1d1d1d;
  border-radius: 28px;
  letter-spacing: 0.875px;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  border: none;
  padding: 0px 18px;
  height: 47px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 640px) {
    background: none;
    padding: 10px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: #1d1d1d 0% 0% no-repeat padding-box;
  border-radius: 31px;
  justify-content: center;

  &:hover {
    .btn-kingfloki,
    .btn-kingland,
    .btn-kingpad {
      filter: grayscale(1) brightness(0.5);
    }
  }
`;

const KingFlokiButton = styled.div`
  background-image: url(${MenuKingfloki});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center center;
  transition: all linear 0.6s;
  width: 125px;
  height: 23px;

  &:hover {
    filter: grayscale(0) !important;
  }

  padding: 12px 10px;

  @media screen and (max-width: 480px) {
    padding: 2px 8px;
    width: 100px;
    height: 36px;
    background-size: 80%;
  }

  @media screen and (max-width: 360px) {
    padding: 0;
    width: 100px;
    height: 36px;
    background-size: 80%;
  }
`;
const KingLandButton = styled.div`
  background-image: url(${MenuKingland});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center center;
  transition: all 0.6s linear;
  width: 125px;
  height: 23px;

  &:hover {
    filter: grayscale(0) !important;
  }

  padding: 12px 10px;

  @media screen and (max-width: 480px) {
    padding: 2px 8px;
    width: 100px;
    height: 36px;
    background-size: 80%;
  }

  @media screen and (max-width: 360px) {
    padding: 0;
    width: 100px;
    height: 36px;
    background-size: 80%;
  }
`;

const KingPadButton = styled.div`
  background-image: url(${MenuKingpad});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center center;
  transition: all linear 0.6s;
  width: 125px;
  height: 23px;

  &:hover {
    filter: grayscale(0) !important;
  }

  padding: 12px 10px;

  @media screen and (max-width: 480px) {
    padding: 2px 8px;
    width: 100px;
    height: 36px;
    background-size: 80%;
  }

  @media screen and (max-width: 360px) {
    padding: 0;
    width: 100px;
    height: 36px;
    background-size: 80%;
  }
`;
