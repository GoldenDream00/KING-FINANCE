import { useState } from 'react';
import styled from 'styled-components';

import {
  DeskBgMain,
  MobBgKingFloki,
  MobBgKingPad,
  MobBgKingland,
  KingFloki,
  KingPad,
  KingLand
} from 'src/config/images';

export const EcoSystem = () => {
  const [bgSvg, setBgSvg] = useState(DeskBgMain);

  const changeBg = (idx: number) => {
    console.log('hover');
    switch (idx) {
      case 0:
        setBgSvg(DeskBgMain);
        break;
      case 1:
        setBgSvg(MobBgKingFloki);
        break;
      case 2:
        setBgSvg(MobBgKingPad);
        break;
      case 3:
        setBgSvg(MobBgKingland);
        break;
      default:
        break;
    }
  };

  return (
    <EcoSystemWrapper>
      <BackgroundSVG src={bgSvg} alt="desktop-background-svg" />
      <EcoSystemContainer>
        <WholeSystem>
          <span className="bold">A coin </span>
          to drive the
          <span className="bold"> whole ecosystem</span>
        </WholeSystem>
        <KingLogos>
          <KingFlokiWrapper onMouseOver={() => changeBg(1)} onMouseOut={() => changeBg(0)} />
          <KingPadWrapper onMouseOver={() => changeBg(2)} onMouseOut={() => changeBg(0)} />
          <KingLandWrapper onMouseOver={() => changeBg(3)} onMouseOut={() => changeBg(0)} />
        </KingLogos>
      </EcoSystemContainer>
    </EcoSystemWrapper>
  );
};

const EcoSystemWrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  position: relative;

  color: ${(props) => props.theme.white};

  @media screen and (max-width: 640px) {
    height: 280px;
  }

  @media screen and (max-width: 420px) {
    height: 200px;
  }
`;

const BackgroundSVG = styled.img`
  width: 100%;
  height: 100%;
`;

const EcoSystemContainer = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  width: 100%;
  height: 100%;

  @media screen and (max-width: 960px) {
    gap: 2rem;
  }

  @media screen and (max-width: 640px) {
    gap: 1.5rem;
  }
`;

const WholeSystem = styled.p`
  font-size: 25px;
  font-family: 'gotham-thin';

  @media screen and (max-width: 640px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }

  .bold {
    font-family: 'gotham-book';
    font-weight: bold;
  }
`;

const KingLogos = styled.div`
  display: flex;
  gap: 7rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 640px) {
    gap: 4rem;
  }

  @media screen and (max-width: 480px) {
    gap: 2rem;
  }
`;

const KingFlokiWrapper = styled.div`
  background-image: url(${KingFloki});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  width: 120px;
  height: 120px;

  @media screen and (max-width: 640px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 480px) {
    width: 65px;
    height: 65px;
  }
`;

const KingPadWrapper = styled.div`
  background-image: url(${KingPad});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 120px;
  height: 120px;

  @media screen and (max-width: 640px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 480px) {
    width: 65px;
    height: 65px;
  }
`;

const KingLandWrapper = styled.div`
  background-image: url(${KingLand});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 120px;
  height: 125px;

  @media screen and (max-width: 640px) {
    width: 80px;
    height: 85px;
  }

  @media screen and (max-width: 480px) {
    width: 65px;
    height: 67px;
  }
`;
