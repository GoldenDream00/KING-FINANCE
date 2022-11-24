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
  DeskPlayearn,
  MobilePlayearn,
  DeskBoxKingpad,
  MobileBoxKingPad,
  KingPad,
  DeskBoxKingland,
  MobileBoxKingland,
  KingLand
} from 'src/config/images';

export const LandingDetails = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <LandingDetailsWrapper>
      <Metaverse data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        <KingFlokiLogo />
        <MetaverseTitle>
          <div className="awesome-game">An awesome game in the</div>
          <div className="metaverse-letter">Metaverse</div>
          <button className="metaverse-play-button">Play Now</button>
        </MetaverseTitle>
      </Metaverse>
      <Game>
        <div className="nft-game" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
          <img src={DeskNftGame} className="desktop-nft-game-gif" alt="nft-game-gif" />
          <img src={MobileNftGame} className="mobile-nft-game-gif" alt="nft-game-gif" />
          <div className="background-overlay">
            <div className="in-game-nfts">
              <div className="in-game">In game</div>
              <div className="nfts">NFTs</div>
            </div>
            <button className="mint-button">Mint Now</button>
          </div>
        </div>
        <div className="play-to-earn" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
          <video className="desktop-background-video" playsInline loop autoPlay muted id="my-video">
            <source src={DeskPlayearn} type="video/mp4" id="background-video-source" />
            Your browser does not support the video tag.
          </video>
          <video className="mobile-background-video" playsInline loop autoPlay muted id="my-video">
            <source src={MobilePlayearn} type="video/mp4" id="background-video-source" />
            Your browser does not support the video tag.
          </video>
          <div className="background-overlay">
            <div className="to-earn">
              <div className="play-to">Play to</div>
              <div className="earn">EARN</div>
            </div>
            <button className="play-button">Play Now</button>
          </div>
        </div>
      </Game>
      <KingPadSection data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        <img src={DeskBoxKingpad} className="desktop-box-kingpad" alt="desktop-box-kingpad" />
        <img src={MobileBoxKingPad} className="mobile-box-kingpad" alt="mobile-box-kingpad" />
        <div className="background-overlay">
          <div className="kingpad-details">
            <div className="kingpad-logo">
              <img src={KingPad} alt="king-pad" className="king-pad" />
            </div>
            <div className="safe-place">
              <p>A safe place</p>
              <p>to join the best.</p>
            </div>
            <button className="comming-soon">COMING SOON</button>
          </div>
        </div>
      </KingPadSection>
      <KingLandSection data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
        <img src={DeskBoxKingland} className="desktop-box-kingland" alt="desktop-box-kingland" />
        <img src={MobileBoxKingland} className="mobile-box-kingland" alt="mobile-box-kingland" />
        <div className="background-overlay">
          <div className="kingland-details">
            <div className="kingland-logo">
              <img src={KingLand} alt="king-land" className="king-land" />
            </div>
            <div className="real-estate">
              <p>Be the king of </p>
              <p>your Real Estate</p>
            </div>
            <button className="comming-soon">COMING SOON</button>
          </div>
        </div>
      </KingLandSection>
    </LandingDetailsWrapper>
  );
};

const LandingDetailsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-content: space-between;

  gap: 1rem;

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
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    align-items: center;
    -webkit-aligm-items: center;
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
      padding: 10px 12px;
      font-size: 18px;
    }

    @media screen and (max-width: 640px) {
      padding: 10px 12px;
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

      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    .mobile-nft-game-gif {
      width: 100%;
      height: 100%;
      display: none;

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

          @media screen and (max-width: 640px) {
            font-size: 1rem;
          }

          @media screen and (max-width: 480px) {
            font-size: 1.5rem;
          }
        }

        .nfts {
          margin-top: 0.5rem;
          font-family: 'gotham-bold';
          font-size: 5rem;

          @media screen and (max-width: 768px) {
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
        font-size: 20px;
        transition: all linear 0.3s;
        text-transform: uppercase;
        color: #fff;

        &:hover {
          color: rgb(156, 153, 153);
        }

        @media screen and (max-width: 1024px) {
          padding: 10px 12px;
          font-size: 18px;
        }

        @media screen and (max-width: 640px) {
          padding: 10px 12px;
          font-size: 15px;
        }
      }
    }
  }

  .play-to-earn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      width: 300px;
    }

    .desktop-background-video {
      width: 100%;
      height: 100%;
      display: block;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    .mobile-background-video {
      width: 100%;
      height: 100%;
      display: none;

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

          @media screen and (max-width: 640px) {
            font-size: 1rem;
          }

          @media screen and (max-width: 480px) {
            font-size: 1.5rem;
          }
        }

        .earn {
          margin-top: 0.5rem;
          font-family: 'gotham-bold';
          font-size: 5rem;

          @media screen and (max-width: 768px) {
            font-size: 2.5rem;
          }
        }
      }

      .play-button {
        background: #191919 0% 0% no-repeat padding-box;
        border-radius: 31px;
        padding: 18px 24px;
        font-family: 'gotham-bold';
        font-size: 20px;
        transition: all linear 0.3s;
        color: #fff;
        text-transform: uppercase;
        border: none;

        &:hover {
          color: rgb(156, 153, 153);
        }

        @media screen and (max-width: 1024px) {
          padding: 10px 12px;
          font-size: 18px;
        }

        @media screen and (max-width: 640px) {
          padding: 10px 12px;
          font-size: 15px;
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
    align-items: flex-end;
    margin-right: 5rem;
    gap: 1rem;
    top: 0;
    font-family: 'gotham-bold';

    @media screen and (max-width: 640px) {
      margin-right: 0;
      justify-content: flex-start;
      margin-top: 1.5rem;
      align-items: center;
    }

    .kingpad-details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;

      @media screen and (max-width: 1366px) {
        gap: 1rem;
      }

      @media screen and (max-width: 840px) {
        gap: 1.5rem;
      }

      @media screen and (max-width: 640px) {
        gap: 1rem;
        align-items: center;
      }

      .kingpad-logo {
        .king-pad {
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
        }
      }

      .safe-place {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        @media screen and (max-width: 1366px) {
          font-size: 25px;
        }

        @media screen and (max-width: 840px) {
          font-size: 20px;
          margin-top: -10px;
        }

        @media screen and (max-width: 640px) {
          flex-direction: row;
          margin-top: 0;
        }

        @media screen and (max-width: 480px) {
          flex-direction: row;
          font-size: 15px;
        }
      }

      .comming-soon {
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
      }
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
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;

  @media screen and (max-width: 640px) {
    justify-content: center;
    -webkit-justify-content: center;
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
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: flex-end;
    -webkit-align-items: flex-end;
    margin-right: 5rem;
    gap: 1rem;
    top: 0;
    font-family: 'gotham-bold';

    @media screen and (max-width: 640px) {
      margin-right: 0;
      justify-content: flex-start;
      -webkit-justify-content: flex-start;
      margin-top: 1.5rem;
      align-items: center;
    }

    .kingland-details {
      display: flex;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      align-items: flex-start;
      -webkit-align-items: flex-start;
      gap: 2rem;

      @media screen and (max-width: 1366px) {
        gap: 1rem;
      }

      @media screen and (max-width: 840px) {
        gap: 1.5rem;
      }

      @media screen and (max-width: 640px) {
        gap: 1rem;
        align-items: center;
      }

      .kingland-logo {
        .king-land {
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
        }
      }

      .real-estate {
        display: flex;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        flex-direction: column;
        -webkit-flex-direction: column;
        align-items: flex-start;
        -webkit-align-items: flex-start;
        gap: 0.5rem;

        @media screen and (max-width: 1366px) {
          font-size: 25px;
        }

        @media screen and (max-width: 840px) {
          font-size: 20px;
          margin-top: -10px;
        }

        @media screen and (max-width: 640px) {
          flex-direction: row;
          -webkit-flex-direction: row;
          margin-top: 0;
        }

        @media screen and (max-width: 480px) {
          -webkit-flex-direction: row;
          font-size: 15px;
        }
      }

      .comming-soon {
        background: #191919 0% 0% no-repeat padding-box;
        border-radius: 31px;
        padding: 16px 24px;
        font-family: 'gotham-bold';
        font-size: 15px;
        transition: all linear 0.3s;
        color: #fff;
        border: none;
        text-transform: uppercase;

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
      }
    }
  }
`;
