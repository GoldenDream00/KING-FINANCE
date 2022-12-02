import { useTranslation } from 'react-i18next';
import {
  DeskBgMain,
  DeskFooterLogo,
  GithubIcon,
  MediumIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon
} from 'src/config/images';
import styled from 'styled-components';
import { PageWrapper } from '../components/container/container';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <FooterContainer>
        <FooterBackground src={DeskBgMain} />
      </FooterContainer>
      <FooterContent>
        <KingLogo src={DeskFooterLogo} />

        <CopyRight>
          <Element>{t('home.cookie')}</Element>
          <Line>|</Line>
          <Element>{t('home.privacy')}</Element>
          <Line>|</Line>
          <Element>{t('home.terms')}</Element>
        </CopyRight>
        <SocialLinkGroup>
          <SocialIcon src={TelegramIcon} />
          <SocialIcon src={TwitterIcon} />
          <SocialIcon src={YoutubeIcon} />
          <SocialIcon src={GithubIcon} />
          <SocialIcon src={MediumIcon} />
        </SocialLinkGroup>
      </FooterContent>
    </PageWrapper>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  padding-top: 7rem;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 1280px) {
    height: 350px;
  }

  @media screen and (max-width: 960px) {
    height: 300px;
  }

  @media screen and (max-width: 640px) {
    padding-top: 0;
  }
`;

const FooterBackground = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 640px) {
    height: 60%;
  }
`;

const FooterContent = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 960px) {
    gap: 2rem;
  }

  @media screen and (max-width: 640px) {
    gap: 1.5rem;
  }
`;

const KingLogo = styled.img`
  width: 100px;
  height: 100px;
  @media screen and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }
  @media screen and (max-width: 640px) {
    width: 60px;
    height: 60px;
  }
`;

const CopyRight = styled.div`
  display: flex;

  font-family: 'gotham-book';
  gap: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  @media screen and (max-width: 640px) {
    gap: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
    gap: 5px;
  }
`;

const Element = styled.button`
  background: none;
  min-height: 28px;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  font-family: 'gotham-book';
  text-transform: none;
  width: fit-content;
  font-size: 15px;
  padding-top: 0.1rem;
  text-align: center;
  @media screen and (max-width: 540px) {
    font-size: 13px;
  }
  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;

const Line = styled.div``;

const SocialLinkGroup = styled.div`
  display: flex;
  gap: 4rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 480px) {
    gap: 2rem;
  }
`;

const SocialIcon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;
