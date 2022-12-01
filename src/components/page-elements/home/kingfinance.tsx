import { useTranslation } from 'react-i18next';
import { DeskVideo1, MobileVideo1, TabletVideo1 } from 'src/config/images';
import styled from 'styled-components';

export const KingFinance = () => {
  const { t } = useTranslation();
  return (
    <KingWrapper>
      <VideoSection>
        <DesktopVideo playsInline loop autoPlay muted id="my-video">
          <source src={DeskVideo1} type="video/mp4" id="background-video-source" />
          Your browser does not support the video tag.
        </DesktopVideo>
        <TabletVideo playsInline loop autoPlay muted id="my-video">
          <source src={TabletVideo1} type="video/mp4" id="background-video-source" />
          Your browser does not support the video tag.
        </TabletVideo>
        <MobileVideo playsInline loop autoPlay muted id="my-video">
          <source src={MobileVideo1} type="video/mp4" id="background-video-source" />
          Your browser does not support the video tag.
        </MobileVideo>
        <VideoOverlay>
          <KingFinanceLetters>
            <KingFinanceLetter>
              <span style={{ fontFamily: 'gotham-bold' }}>King</span>
              <span style={{ fontFamily: 'gotham-thin', marginLeft: '12px' }}>Finance</span>
            </KingFinanceLetter>
            <BottomLetter>
              {t('home.unique')}. {t('home.visionary')}. {t('home.powerful')}
            </BottomLetter>
          </KingFinanceLetters>
        </VideoOverlay>
      </VideoSection>
    </KingWrapper>
  );
};

const KingWrapper = styled.div`
  height: calc(100vh - 95px);
  @media screen and (max-width: 840px) {
    height: calc(100vh - 152px);
  }
  @media screen and (max-width: 640px) {
    height: calc(100vh - 172px);
  }
  @media screen and (max-width: 480px) {
    height: calc(100vh - 165px);
  }
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoSection = styled.div`
  position: relative;
  height: 100%;
`;
const DesktopVideo = styled.video`
  width: auto;
  height: 100%;
  display: block;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const TabletVideo = styled.video`
  width: auto;
  height: 100%;
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
  }

  @media screen and (max-width: 394px) {
    display: none;
  }
`;

const MobileVideo = styled.video`
  width: auto;
  display: none;

  @media screen and (max-width: 394px) {
    display: block;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 0;
  bottom: 0;
  height: 100%;
`;

const KingFinanceLetters = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 7rem;
  text-transform: 'uppercase';
  letter-spacing: -1.27px;
  text-transform: uppercase;
  font-weight: 100;
  color: ${(props) => props.theme.white};

  @media screen and (max-width: 1366px) {
    font-size: 6rem;
  }

  @media screen and (max-width: 1092px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 540px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 2.5rem;
  }
`;

const KingFinanceLetter = styled.div`
  margin: 0;
`;

const BottomLetter = styled.p`
  font-size: 30px;
  font-family: 'gotham-book';
  text-transform: none;
  padding-top: 2rem;
  @media screen and (max-width: 1092px) {
    font-size: 25px;
  }

  @media screen and (max-width: 540px) {
    font-size: 20px;
  }

  @media screen and (max-width: 360px) {
    font-size: 15px;
  }
`;
