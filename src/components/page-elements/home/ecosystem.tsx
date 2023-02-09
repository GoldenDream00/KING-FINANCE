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
import { useTranslation } from 'react-i18next';
import { useStore } from 'src/context/StoreContext';

export const EcoSystem = () => {
  const [bgSvg, setBgSvg] = useState(DeskBgMain);
  const { t } = useTranslation();
  const { lang } = useStore();
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
      <EcoSystemWrapper language={lang}>
        <BackgroundSVG src={bgSvg} alt="desktop-background-svg" />
        <EcoSystemContainer>
          <WholeSystem dangerouslySetInnerHTML={{ __html: t('home.ecosystem') }} />
          <KingLogos>
            <a href={'https://kingfloki.finance'} rel="noopener noreferrer" target={'_blank'}>
              <KingFlokiWrapper onMouseOver={() => changeBg(1)} onMouseOut={() => changeBg(0)} />
            </a>
            <a href={'https://kingpad.finance'} rel="noopener noreferrer" target={'_blank'}>
              <KingPadWrapper onMouseOver={() => changeBg(2)} onMouseOut={() => changeBg(0)} />
            </a>
            <a href={'https://kingland.finance'} rel="noopener noreferrer" target={'_blank'}>
              <KingLandWrapper onMouseOver={() => changeBg(3)} onMouseOut={() => changeBg(0)} />
            </a>
          </KingLogos>
        </EcoSystemContainer>
      </EcoSystemWrapper>
      <ConnectWrapper>
        <ConnectWithKing>
          <ConnectLetter>{t('home.connectwithking')}</ConnectLetter>
          <SocialLinkGroup>
            <SocialBox href={'https://t.me/KlNGfinance'} rel="noopener noreferrer" target="_blank">
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
            <SocialBox href={'https://twitter.com/kingfinance'} rel="noopener noreferrer" target="_blank">
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
            <SocialBox href={'https://www.youtube.com/@kingfinanceco'} rel="noopener noreferrer" target="_blank">
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
            <SocialBox
              href={'https://king-finance.gitbook.io/king-whitepaper/'}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                id="Layer_2"
                className="social-icon"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24.2 23.5"
                fill="currentColor"
              >
                <g id="svg2575">
                  <g id="gitbook-icon" transform="translate(0 0)">
                    <path
                      id="Path_31018"
                      className="st0"
                      d="M10.9,17.3c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7
                      C10.3,17.6,10.6,17.3,10.9,17.3C10.9,17.3,10.9,17.3,10.9,17.3 M21.4,13.1c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7
                      s0.7,0.3,0.7,0.7C22.1,12.8,21.8,13.1,21.4,13.1 M21.4,10.4c-1.1,0-2.1,0.9-2.1,2.1c0,0.2,0,0.4,0.1,0.6l-6.8,3.6
                      c-0.4-0.6-1-0.9-1.7-0.9c-0.8,0-1.5,0.4-1.9,1.1l-6.1-3.2c-0.6-0.4-1.1-1.4-1.1-2.4c0-0.5,0.2-0.9,0.5-1c0.2-0.1,0.4-0.1,0.6,0
                      l0,0c1.6,0.9,7,3.6,7.2,3.7c0.4,0.1,0.5,0.2,1.1-0.1l11-5.7c0.2-0.1,0.4-0.2,0.4-0.5c0-0.3-0.3-0.5-0.3-0.5
                      c-0.6-0.3-1.6-0.7-2.5-1.2c-2-0.9-4.3-2-5.3-2.5c-0.9-0.5-1.6-0.1-1.7,0l-0.2,0.1C8.1,6.1,2.1,9.1,1.7,9.3c-0.6,0.4-1,1.1-1,2
                      c-0.1,1.5,0.7,3,1.7,3.5l6.5,3.4c0.1,1,1,1.8,2,1.8c1.1,0,2-0.9,2.1-2l7.1-3.9c0.9,0.7,2.2,0.5,2.9-0.4s0.5-2.2-0.4-2.9
                      C22.3,10.5,21.9,10.4,21.4,10.4"
                    />
                  </g>
                </g>
              </svg>
            </SocialBox>
            <SocialBox href={'https://discord.gg/kingfinance'} rel="noopener noreferrer" target="_blank">
              <svg
                id="Layer_2"
                className="social-icon"
                data-name="Layer 2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <g id="svg2575">
                  <g id="discord-icon" transform="translate(0 0)">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />{' '}
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

interface EcoSystemWrapperProps {
  language: string;
}

const EcoSystemWrapper = styled.div<EcoSystemWrapperProps>`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  position: relative;
  margin-top: 7rem;

  ${(props) =>
    props.language === '中文' &&
    `
      margin-top: 0rem;
    `}

  color: ${(props) => props.theme.white};

  @media screen and (max-width: 1092px) {
    margin-top: 9rem;

    ${(props) =>
      props.language === '中文' &&
      `
      margin-top: 0rem;
    `}
  }

  @media screen and (max-width: 640px) {
    height: 280px;
    margin-top: 6rem;

    ${(props) =>
      props.language === 'FR' &&
      `
      margin-top: 0rem;
    `}

    ${(props) =>
      props.language === '中文' &&
      `
      margin-top: -4rem;
    `}
  }

  @media screen and (max-width: 480px) {
    ${(props) =>
      props.language === 'FR' &&
      `
        margin-top: 5rem;
    `}
  }

  @media screen and (max-width: 420px) {
    height: 200px;
    margin-top: 5rem;

    ${(props) =>
      props.language === 'FR' &&
      `
      margin-top: 3rem;
    `}

    ${(props) =>
      props.language === 'DE' &&
      `
      margin-top: 7rem;
    `}

    ${(props) =>
      props.language === '中文' &&
      `
      margin-top: -4rem;
    `}
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
  text-align: center;

  @media screen and (max-width: 640px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }

  @media screen and (max-width: 420px) {
    font-size: 12px;
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;

  z-index: 1;
  width: 100%;
  height: 100px;
`;

const ConnectLetter = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 2rem;
  color: ${(props) => props.theme.white};
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  @media screen and (max-width: 350px) {
    font-size: 10px;
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

const SocialBox = styled.a`
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
  color: ${(props) => props.theme.white};
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
