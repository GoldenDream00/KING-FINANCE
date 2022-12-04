import styled from 'styled-components';

import { DeskVideo2 } from 'src/config/images';
import { useTranslation } from 'react-i18next';

export const Description = () => {
  const { t } = useTranslation();
  return (
    <DescriptionWrapper>
      <Details>
        <p dangerouslySetInnerHTML={{ __html: t('home.kingdetails') }} />
        <p dangerouslySetInnerHTML={{ __html: t('home.immerse') }} />
      </Details>
      <KingLogo>
        <video className="background-video" playsInline loop autoPlay muted id="my-video">
          <source src={DeskVideo2} type="video/mp4" id="background-video-source" />
          Your browser does not support the video tag.
        </video>
      </KingLogo>
    </DescriptionWrapper>
  );
};

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  height: 652px;
`;

const Details = styled.div`
  width: 80%;
  font-size: 20px;
  line-height: 2.5rem;
  font-family: 'gotham-thin';
  text-align: left;
  color: ${(props) => props.theme.white};

  p {
    margin: 0;

    .bold {
      /* font-weight: bold; */
      font-family: 'gotham-bold';
    }
  }

  @media screen and (max-width: 960px) {
    font-size: 16px;
  }

  @media screen and (max-width: 640px) {
    font-size: 14px;
    line-height: 1.875rem;
  }
`;

const KingLogo = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .background-video {
    @media screen and (max-width: 640px) {
      width: 85%;
    }
    @media screen and (max-width: 400px) {
      width: 80%;
      padding-top: 0;
    }
  }
`;
