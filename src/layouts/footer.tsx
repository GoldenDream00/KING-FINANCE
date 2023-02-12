import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  DeskBgMain,
  DeskFooterLogo,
  DiscordIcon,
  GitbookIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon
} from 'src/config/images';
import { windowsToTop } from 'src/utils/windowsToTop';
import styled from 'styled-components';
import { PageWrapper } from '../components/container/container';

export const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <FooterContainer>
        <FooterBackground src={DeskBgMain} alt="logo-header" />
      </FooterContainer>
      <FooterContent>
        <KingLogo
          src={DeskFooterLogo}
          alt="king-logo"
          onClick={() => {
            navigate('/');
            windowsToTop();
          }}
        />

        <CopyRight>
          <Element
            onClick={() => {
              navigate('/privacy');
              windowsToTop();
            }}
          >
            {t('home.privacy')}
          </Element>
          <Line>|</Line>
          <Element
            onClick={() => {
              navigate('/terms');
              windowsToTop();
            }}
          >
            {t('home.terms')}
          </Element>
        </CopyRight>
        <SocialLinkGroup>
          <a href={'https://t.me/KlNGfinance'} rel="noopener noreferrer" target={'_blank'}>
            <SocialIcon src={TelegramIcon} />
          </a>
          <a href={'https://twitter.com/kingfinance'} rel="noopener noreferrer" target={'_blank'}>
            <SocialIcon src={TwitterIcon} />
          </a>
          <a href={'https://www.youtube.com/@kingfinanceco'} rel="noopener noreferrer" target={'_blank'}>
            <SocialIcon src={YoutubeIcon} />
          </a>
          <a href="https://king-finance.gitbook.io/king-whitepaper/" rel="noopener noreferrer" target={'_blank'}>
            <SocialIcon src={GitbookIcon} />
          </a>
          <a href={'https://discord.gg/kingfinance'} rel="noopener noreferrer" target={'_blank'}>
            <SocialIcon src={DiscordIcon} />
          </a>
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
  cursor: pointer;
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
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.white};
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

const Line = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.white};
`;

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
