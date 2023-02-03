import { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';

import {
  BoxBgKingFloki,
  BoxBgKingFlokiTablet,
  BoxBgKingFlokiMobile,
  LogoKingFloki,
  DeskNftGame,
  MobileNftGame,
  KingPassPng,
  KingPassMobilePng,
  DeskBoxKingpad,
  MobileBoxKingPad,
  KingPad,
  DeskBoxKingland,
  MobileBoxKingland,
  KingLand
} from 'src/config/images';
import { useTranslation } from 'react-i18next';
import { useStore } from 'src/context/StoreContext';

export const LandingDetails = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const { t } = useTranslation();
  const { lang } = useStore();
  return (
    <LandingDetailsWrapper>
      <Metaverse data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        <KingFlokiLogo />
        <MetaverseTitle>
          <div className="awesome-game">{t('home.awesomegame')}</div>
          <div className="metaverse-letter">{t('home.metaverse')}</div>
          <a href={'https://www.kingflokiworld.com'} rel="noopener noreferrer" target="_blank">
            <button className="metaverse-play-button">{t('home.playnow')}</button>
          </a>
        </MetaverseTitle>
      </Metaverse>
      <Game>
        <div className="nft-game" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
          <img src={DeskNftGame} className="desktop-nft-game-gif" alt="nft-game-gif" />
          <img src={MobileNftGame} className="mobile-nft-game-gif" alt="nft-game-gif" />
          <div className="background-overlay">
            <div className="in-game-nfts">
              <div className="in-game">{t('home.ingame')}</div>
              <div className="nfts">NFTs</div>
            </div>
            <a href={'https://kingfloki.finance/wearable'} rel="noopener noreferrer" target="_blank">
              <button className="mint-button">{t('home.mintnow')}</button>
            </a>
          </div>
        </div>
        <div className="play-to-earn" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
          <img src={KingPassPng} className="desktop-nft-game-gif" alt="nft-game-gif" />
          <img src={KingPassMobilePng} className="mobile-nft-game-gif" alt="nft-game-gif" />
          <div className="background-overlay">
            <div className="to-earn">
              <div className="play-to">{t('home.playto')} </div>
              <EarnText language={lang}> {t('home.earn')}</EarnText>
            </div>
            <a href={'https://www.kingpass.finance'} rel="noopener noreferrer " target="_blank">
              <button className="play-button">{t('home.playnow')}</button>
            </a>
          </div>
        </div>
      </Game>
      <KingPadSection data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        <img src={DeskBoxKingpad} className="desktop-box-kingpad" alt="desktop-box-kingpad" />
        <img src={MobileBoxKingPad} className="mobile-box-kingpad" alt="mobile-box-kingpad" />
        <div className="background-overlay">
          <KingpadDetails language={lang}>
            <KingLogo src={KingPad} alt="king-pad" className="king-pad" />
            <KingDetailText language={lang}>
              <p>{t('home.safeplace')} </p>
              <p> {t('home.jointhebest')}</p>
            </KingDetailText>
            <a href={'https://kingpad.finance/'} rel="noopener noreferrer" target="_blank">
              <ComingSoonBtn>{t('home.comingsoon')}</ComingSoonBtn>
            </a>
          </KingpadDetails>
        </div>
      </KingPadSection>
      <KingLandSection data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        <img src={DeskBoxKingland} className="desktop-box-kingland" alt="desktop-box-kingland" />
        <img src={MobileBoxKingland} className="mobile-box-kingland" alt="mobile-box-kingland" />
        <div className="background-overlay">
          <KingpadDetails language={lang}>
            <KingLogo src={KingLand} alt="king-land" className="king-land" />
            <KingDetailText language={lang}>
              <p>{t('home.beking')}</p>
              <p>{t('home.realestate')}</p>
            </KingDetailText>
            <a href={'https://kingland.finance/'} rel="noopener noreferrer" target="_blank">
              <ComingSoonBtn>{t('home.comingsoon')}</ComingSoonBtn>
            </a>
          </KingpadDetails>
        </div>
      </KingLandSection>
    </LandingDetailsWrapper>
  );
};

const LandingDetailsWrapper = styled.div`
  width: 100%;
  height: 1620px;

  @media screen and (max-width: 1366px) {
    height: 1400px;
  }

  @media screen and (max-width: 1092px) {
    height: 1200px;
  }

  @media screen and (max-width: 840px) {
    height: 1000px;
  }

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 640px) {
    height: 1520px;
  }

  @media screen and (max-width: 480px) {
    height: 1280px;
  }

  @media screen and (max-width: 420px) {
    height: 1100px;
  }

  display: flex;
  flex-direction: column;
  align-content: space-between;

  gap: 1rem;
  padding-top: 7rem;

  color: ${(props) => props.theme.white};
`;

const Metaverse = styled.div`
  background-image: url(${BoxBgKingFloki});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  width: 100%;
  height: 430px;
  object-fit: cover;
  border-radius: 50px;
  position: relative;

  @media screen and (max-width: 960px) {
    background-image: url(${BoxBgKingFlokiTablet});
    height: 300px;
  }

  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
  }

  @media screen and (max-width: 480px) {
    background-image: url(${BoxBgKingFlokiMobile});
    background-position: center center;
    gap: 1rem;
  }
`;

const MetaverseTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  position: absolute;
  top: 4rem;
  right: 11rem;

  @media screen and (max-width: 1024px) {
    top: 1.5rem;
    right: 4rem;
  }

  @media screen and (max-width: 640px) {
    position: unset;
  }

  .awesome-game {
    font-size: 25px;
    font-family: 'gotham-bold';

    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
  }

  .metaverse-letter {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-family: 'gotham-bold';
    font-weight: bold;
    letter-spacing: 0.5px;

    @media screen and (max-width: 480px) {
      font-size: 40px;
    }
  }

  .metaverse-play-button {
    background: #191919 0% 0% no-repeat padding-box;
    border-radius: 31px;
    border: none;
    padding: 18px 24px;
    font-family: 'gotham-bold';
    font-size: 20px;
    transition: all linear 0.3s;
    text-transform: uppercase;
    margin-top: 1rem;
    color: #fff;

    &:hover {
      color: rgb(156, 153, 153);
    }

    @media screen and (max-width: 1024px) {
      padding: 18px 24px;
      font-size: 18px;
    }

    @media screen and (max-width: 640px) {
      padding: 18px 24px;
      font-size: 15px;
    }

    @media screen and (max-width: 420px) {
      padding: 12px 16px;
      font-size: 15px;
    }
  }
`;

const KingFlokiLogo = styled.div`
  background-image: url(${LogoKingFloki});
  background-size: 100%;
  background-position: top center;
  background-repeat: no-repeat;
  width: 11rem;
  height: 12rem;
  position: absolute;
  top: -5rem;
  left: 4rem;

  @media screen and (max-width: 1024px) {
    width: 9rem;
    height: 10rem;
    top: -4rem;
    left: 3rem;
  }

  @media screen and (max-width: 640px) {
    height: 8rem;
    position: unset;
    width: 7.5rem;
    margin-top: -4.5rem;
  }
`;

const Game = styled.div`
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  gap: 1rem;

  .nft-game {
    position: relative;
    display: flex;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;

    @media screen and (max-width: 768px) {
      width: 300px;
    }

    .desktop-nft-game-gif {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 15%;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    .mobile-nft-game-gif {
      width: 100%;
      height: 100%;
      display: none;
      border-radius: 60px;

      @media screen and (max-width: 480px) {
        border-radius: 35px;
      }

      @media screen and (max-width: 768px) {
        display: block;
      }
    }

    .background-overlay {
      position: absolute;
      width: 100%;
      height: 90%;
      z-index: 1;
      display: flex;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flex;
      flex-direction: column;
      -webkit-flex-direction: column;
      align-items: center;
      -webkit-align-items: center;
      justify-content: space-between;
      -webkit-justify-content: space-between;
      gap: 1rem;

      .in-game-nfts {
        .in-game {
          font-family: 'gotham-bold';
          font-size: 2.5rem;
          text-align: center;

          @media screen and (max-width: 840px) {
            font-size: 1rem;
          }

          @media screen and (max-width: 480px) {
            font-size: 1.25rem;
          }
        }

        .nfts {
          margin-top: 0.5rem;
          font-family: 'gotham-bold';
          font-size: 5rem;
          text-align: center;

          @media screen and (max-width: 840px) {
            font-size: 2.5rem;
          }
        }
      }

      .mint-button {
        background: #191919 0% 0% no-repeat padding-box;
        border-radius: 31px;
        border: none;
        padding: 18px 24px;
        font-family: 'gotham-bold';
        font-size: 15px;
        transition: all linear 0.3s;
        text-transform: uppercase;
        color: #fff;

        &:hover {
          color: rgb(156, 153, 153);
        }

        @media screen and (max-width: 1024px) {
          padding: 18px 24px;
          font-size: 18px;
        }

        @media screen and (max-width: 640px) {
          padding: 12px 24px;
          font-size: 11px;
        }

        @media screen and (max-width: 420px) {
          padding: 12px 16px;
          font-size: 10px;
        }
      }
    }
  }

  .play-to-earn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 768px) {
      width: 300px;
    }
    .desktop-nft-game-gif {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 15%;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    .mobile-nft-game-gif {
      width: 100%;
      height: 100%;
      display: none;
      border-radius: 60px;

      @media screen and (max-width: 480px) {
        border-radius: 35px;
      }

      @media screen and (max-width: 768px) {
        display: block;
      }
    }
    .background-overlay {
      position: absolute;
      width: 100%;
      height: 90%;
      z-index: 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      .to-earn {
        .play-to {
          font-family: 'gotham-bold';
          font-size: 2.5rem;

          @media screen and (max-width: 840px) {
            font-size: 1rem;
          }

          @media screen and (max-width: 480px) {
            font-size: 1.25rem;
          }
        }
      }

      .play-button {
        background: #191919 0% 0% no-repeat padding-box;
        border-radius: 31px;
        border: none;
        padding: 18px 24px;
        font-family: 'gotham-bold';
        font-size: 15px;
        transition: all linear 0.3s;
        text-transform: uppercase;
        color: #fff;

        &:hover {
          color: rgb(156, 153, 153);
        }

        @media screen and (max-width: 1024px) {
          padding: 18px 24px;
          font-size: 18px;
        }

        @media screen and (max-width: 640px) {
          padding: 12px 24px;
          font-size: 11px;
        }

        @media screen and (max-width: 420px) {
          padding: 12px 16px;
          font-size: 10px;
        }
      }
    }
  }
`;

const KingPadSection = styled.div`
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;

  object-fit: cover;
  border-radius: 50px;
  position: relative;
  display: flex;

  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 640px) {
    justify-content: center;
  }

  .desktop-box-kingpad {
    max-width: 100%;
    height: auto;
    display: block;

    @media screen and (max-width: 640px) {
      display: none;
    }
  }

  .mobile-box-kingpad {
    display: none;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 640px) {
      display: block;
    }
  }

  .background-overlay {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    top: 0;
    font-family: 'gotham-bold';
    font-size: 36px;

    @media screen and (max-width: 640px) {
      margin-right: 0;
      justify-content: flex-start;
      margin-top: 1.5rem;
      align-items: center;
    }
  }
`;

const KingLandSection = styled.div`
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 640px) {
    justify-content: center;
  }

  .desktop-box-kingland {
    max-width: 100%;
    height: auto;
    display: block;

    @media screen and (max-width: 640px) {
      display: none;
    }
  }

  .mobile-box-kingland {
    display: none;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 640px) {
      display: block;
    }
  }

  .background-overlay {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    top: 0;
    font-family: 'gotham-bold';
    font-size: 36px;

    @media screen and (max-width: 640px) {
      margin-right: 0;
      justify-content: flex-start;
      -webkit-justify-content: flex-start;
      margin-top: 1.5rem;
      align-items: center;
    }

    .kingland-details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      margin-left: 40rem;

      @media screen and (max-width: 1366px) {
        margin-left: 35rem;
      }

      @media screen and (max-width: 1092px) {
        margin-left: 30rem;
      }

      @media screen and (max-width: 840px) {
        margin-left: 25rem;
      }

      @media screen and (max-width: 640px) {
        align-items: center;
        margin-left: 0;
      }
    }
  }
`;
interface EarnTextProps {
  language: string;
}

const EarnText = styled.div<EarnTextProps>`
  margin-top: 0.5rem;
  font-family: 'gotham-bold';
  font-size: 4rem;
  text-transform: uppercase;
  text-align: center;
  @media screen and (max-width: 1366px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 840px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 640px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }

  ${(props) =>
    props.language === 'DE' &&
    `
      @media screen and (max-width: 1092px) {
        font-size: 3.5rem;
      }
      @media screen and (max-width: 840px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 640px) {
        font-size: 2rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 420px) {
        font-size: 1rem;
      }
    `}

  ${(props) =>
    props.language === 'ITA' &&
    `
      @media screen and (max-width: 1092px) {
        font-size: 3.5rem;
      }
      @media screen and (max-width: 840px) {
        font-size: 3rem;
      }
      @media screen and (max-width: 640px) {
        font-size: 2rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 420px) {
        font-size: 1rem;
      }
    `}

  ${(props) =>
    props.language === 'ESP' &&
    `
      @media screen and (max-width: 420px) {
        font-size: 2rem;
      }
  `}

    ${(props) =>
    props.language === 'FR' &&
    `
      @media screen and (max-width: 480px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 420px) {
        font-size: 1.5rem;
      }
  `}
`;

const KingpadDetails = styled.div<EarnTextProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-left: 40rem;

  @media screen and (max-width: 1366px) {
    margin-left: 35rem;
  }

  @media screen and (max-width: 1092px) {
    margin-left: 30rem;
  }

  @media screen and (max-width: 840px) {
    margin-left: 25rem;
  }

  @media screen and (max-width: 640px) {
    align-items: center;
    margin-left: 0;
  }

  ${(props) =>
    props.language === 'DE' &&
    `
      gap: 0.5rem;
      @media screen and (max-width: 640px) {
        gap: 1rem;
      }
  `}
`;

const KingDetailText = styled.div<EarnTextProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 1366px) {
    font-size: 25px;
  }

  @media screen and (max-width: 840px) {
    font-size: 20px;
    margin-top: -10px;
  }

  @media screen and (max-width: 640px) {
    margin-top: 0;
    text-align: center;
    gap: 7px;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const KingLogo = styled.img`
  width: 100px;
  height: 100px;

  @media screen and (max-width: 1366px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (max-width: 840px) {
    width: 60px;
    height: 60px;
  }
`;

const ComingSoonBtn = styled.button`
  background: #191919 0% 0% no-repeat padding-box;
  border-radius: 31px;
  padding: 16px 24px;
  font-family: 'gotham-bold';
  font-size: 15px;
  transition: all linear 0.3s;
  color: #fff;
  border: none;
  text-transform: uppercase;
  margin-top: 3px;

  &:hover {
    color: rgb(156, 153, 153);
  }

  @media screen and (max-width: 1366px) {
    font-size: 15px;
    padding: 12px 18px;
  }

  @media screen and (max-width: 840px) {
    font-size: 12px;
    padding: 8px 12px;
  }

  @media screen and (max-width: 640px) {
    font-size: 15px;
    padding: 12px 18px;
  }
`;
