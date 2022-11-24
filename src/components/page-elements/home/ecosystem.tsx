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
    <>
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
      <ConnectWrapper>
        <ConnectWithKing>
          <ConnectLetter>Connect With King</ConnectLetter>
          <SocialLinkGroup>
            <SocialBox>
              <svg
                className="social-icon"
                id="Layer_2"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22.83 21.47"
                fill="currentColor"
              >
                <g id="svg2575">
                  <path
                    id="headericon_tg"
                    data-name="headericon tg"
                    className="cls-1"
                    d="M21.16,.24L.89,8.9S-.07,9.26,0,9.92s.86,.96,.86,.96l5.1,1.87h0L18.21,4.28s.71-.47,.68,0c0,0,.13,.08-.25,.47S9.02,14.18,9.02,14.18l-.66,6.16v.02c.18,.07,.39,.04,.54-.08l3.3-3.27,5.14,4.29c.63,.36,1.43,.14,1.79-.48,.04-.07,.08-.15,.1-.23L22.83,.76c0-1.32-1.67-.52-1.67-.52Z"
                  />
                </g>
              </svg>
            </SocialBox>
            <SocialBox>
              <svg
                id="Layer_2"
                className="social-icon"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 28.95 23.12"
                fill="currentColor"
              >
                <g id="svg2575">
                  <g id="icon_twitter" data-name="icon twitter">
                    <path
                      id="Path_317"
                      data-name="Path 317"
                      className="cls-1"
                      d="M28.94,2.74c-1.09,.47-2.24,.78-3.41,.92,1.23-.72,2.16-1.87,2.61-3.23-1.17,.68-2.44,1.16-3.77,1.42C23.24,.66,21.67,0,20.04,0c-3.25-.03-5.91,2.58-5.94,5.84,0,.45,.05,.89,.15,1.33-4.76-.23-9.2-2.44-12.24-6.1-.53,.89-.8,1.9-.8,2.93,0,1.96,1,3.79,2.64,4.86-.94-.03-1.86-.28-2.69-.73v.07c.02,2.8,2.01,5.2,4.76,5.72-.88,.23-1.79,.27-2.68,.1,.8,2.39,3.02,4.02,5.55,4.05-2.11,1.63-4.71,2.51-7.38,2.5-.47,0-.95-.03-1.42-.08,2.72,1.72,5.88,2.63,9.1,2.62,9.18,.15,16.75-7.17,16.9-16.36,0-.08,0-.17,0-.25,0-.25,0-.51-.02-.76,1.16-.82,2.16-1.85,2.96-3.02"
                    />
                  </g>
                </g>
              </svg>
            </SocialBox>
            <SocialBox>
              <svg
                id="Layer_2"
                className="social-icon"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 33.03 23.12"
                fill="currentColor"
              >
                <g id="svg2575">
                  <g id="icon_youtube" data-name="icon youtube">
                    <path
                      id="Path_24913"
                      data-name="Path 24913"
                      className="cls-3"
                      d="M32.34,3.61c-.38-1.42-1.5-2.54-2.92-2.92-2.57-.69-12.9-.69-12.9-.69,0,0-10.32,0-12.9,.69-1.42,.38-2.54,1.5-2.92,2.92C.21,6.23-.02,8.89,0,11.56c-.02,2.67,.21,5.33,.69,7.95,.38,1.42,1.5,2.54,2.92,2.92,2.58,.69,12.9,.69,12.9,.69,0,0,10.33,0,12.9-.69,1.42-.38,2.54-1.5,2.92-2.92,.47-2.62,.71-5.28,.69-7.95,.02-2.67-.21-5.33-.69-7.95M13.21,16.51V6.6l8.58,4.96-8.58,4.96Z"
                    />
                  </g>
                </g>
              </svg>
            </SocialBox>
            <SocialBox>
              <svg
                id="Layer_2"
                className="social-icon"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24.17 23.52"
                fill="currentColor"
              >
                <g id="svg2575">
                  <g id="icon_github" data-name="icon github">
                    <path
                      id="Path_24899"
                      data-name="Path 24899"
                      className="cls-1"
                      d="M24.16,12.28C24.27,5.61,18.95,.11,12.28,0,5.61-.11,.11,5.22,0,11.89c-.08,5.23,3.2,9.92,8.15,11.62,.34-.17,.58-.5,.62-.88,0-.65-.01-2.33-.01-2.33-.42,.06-.85,.09-1.27,.09-1.23,.08-2.36-.67-2.77-1.83-.27-.66-.74-1.22-1.36-1.58-.31-.2-.38-.43-.02-.5,1.67-.31,2.1,1.85,3.21,2.2,.77,.24,1.6,.17,2.33-.18,.1-.62,.45-1.17,.96-1.53-2.84-.27-4.52-1.23-5.39-2.78l-.09-.17-.22-.49-.07-.18c-.28-.87-.41-1.78-.39-2.69-.05-1.27,.43-2.51,1.33-3.41-.37-1.13-.29-2.35,.21-3.42,0,0,1.23-.25,3.55,1.38,2.03-.53,4.15-.57,6.2-.12,.97-.63,2.75-1.52,3.47-1.27,.48,.98,.57,2.11,.25,3.16,1.01,1.06,1.56,2.47,1.52,3.93,0,.82-.11,1.64-.31,2.44l-.1,.35s-.06,.16-.12,.32l-.08,.17c-.84,1.81-2.57,2.48-5.35,2.76,.9,.56,1.16,1.25,1.16,3.14s-.03,2.14-.02,2.58c.06,.37,.28,.69,.6,.87,4.86-1.6,8.16-6.13,8.18-11.24Z"
                    />
                  </g>
                </g>
              </svg>
            </SocialBox>
            <SocialBox>
              <svg
                id="Layer_2"
                className="social-icon"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 33.11 18.68"
                fill="currentColor"
              >
                <g id="svg2575">
                  <g id="icon_coingecko" data-name="icon github">
                    <path
                      id="Path_29891"
                      data-name="Path 29891"
                      className="cls-1"
                      d="M18.68,9.4c-.03,5.16-4.24,9.31-9.4,9.28C4.12,18.64-.03,14.44,0,9.28,.03,4.14,4.2,0,9.34,0c5.17,.02,9.35,4.23,9.34,9.4"
                    />
                    <path
                      id="Path_29892"
                      data-name="Path 29892"
                      className="cls-1"
                      d="M28.92,9.4c0,4.89-2.09,8.85-4.67,8.85s-4.67-3.96-4.67-8.85S21.67,.55,24.25,.55s4.67,3.96,4.67,8.85"
                    />
                    <path
                      id="Path_29893"
                      data-name="Path 29893"
                      className="cls-1"
                      d="M33.11,9.4c0,4.38-.73,7.93-1.64,7.93s-1.65-3.55-1.65-7.93,.73-7.93,1.64-7.93,1.64,3.55,1.64,7.93"
                    />
                  </g>
                </g>
              </svg>
            </SocialBox>
          </SocialLinkGroup>
        </ConnectWithKing>
      </ConnectWrapper>
    </>
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

export const ConnectWrapper = styled.div`
  width: 100%;

  color: ${(props) => props.theme.white};
`;

const ConnectWithKing = styled.div`
  letter-spacing: 2.6px;
  padding-top: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3rem;

  z-index: 1;
`;

const ConnectLetter = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  text-align: center;
  color: ${(props) => props.theme.white};
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

  @media screen and (max-width: 350px) {
    font-size: 14px;
  }
`;

const SocialLinkGroup = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 480px) {
    gap: 20px;
  }

  @media screen and (max-width: 360px) {
    gap: 10px;
  }
`;

const SocialBox = styled.div`
  background: #272727 0% 0% no-repeat padding-box;
  border-radius: 18px;
  width: 60px;
  height: 60px;
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 360px) {
    width: 45px;
    height: 45px;

    .social-icon {
      width: 20px;
      height: 20px;
    }
  }

  .social-icon {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${(props) => props.theme.white};

    .social-icon {
      color: ${(props) => props.theme.blackAlt};
    }
  }
`;
