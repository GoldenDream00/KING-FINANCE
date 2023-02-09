import React, { useState, useRef, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import styled, { css } from 'styled-components';

import { Container } from '../components/container/container';

import { LogoHeader, MenuKingfloki, MenuKingland, MenuKingpad } from '../config/images';

import { useTranslation } from 'react-i18next';
import { useStore } from '../context/StoreContext';
import { CustomConnectButton } from 'src/components/button';

export const Header = () => {
  const { t, i18n } = useTranslation();

  const mbDropRef = useRef<HTMLDivElement>(null);
  const DsDropRef = useRef<HTMLDivElement>(null);

  const [isDeskOpen, deskSetOpen] = useState(false);
  const [isMobOpen, mobSetOpen] = useState(false);

  const { lang, setLang } = useStore();

  const navigate = useNavigate();

  const handleClickOutside = (event: React.MouseEvent<HTMLElement>) => {
    if (mbDropRef.current != null && !mbDropRef.current.contains(event.target as any)) {
      mobSetOpen(false);
    }
    if (DsDropRef.current != null && !DsDropRef.current.contains(event.target as any)) {
      deskSetOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', (event) => handleClickOutside(event as any));
  }, [mbDropRef, DsDropRef]);

  useEffect(() => {
    setLang(lang);
  }, [lang]);

  const LanguageChoose = (e: any) => {
    let language = e.target.innerHTML;
    switch (language) {
      case 'ENGLISH':
        setLang('ENG');
        language = 'English';
        break;
      case 'ESPAÑOL':
        setLang('ESP');
        language = 'Spanish';
        break;
      case 'ITALIANO':
        setLang('ITA');
        language = 'Italian';
        break;
      case 'FRANÇAIS':
        setLang('FR');
        language = 'French';
        break;
      case 'DEUTSCH':
        setLang('DE');
        language = 'German';
        break;
      case '中文':
        setLang('中文');
        language = 'Chinese';
        break;
      default:
        break;
    }
    i18n.changeLanguage(language);
    deskSetOpen(false);
    mobSetOpen(false);
  };

  return (
    <Container>
      <HeaderContent>
        <DesktopLogo src={LogoHeader} alt="logo-header" onClick={() => navigate('/')} />
        <RectButtonGroup>
          <LogoButtons>
            <MobileLogo src={LogoHeader} alt="mobile-header-logo" onClick={() => navigate('/')} />
            <RectButtons>
              <RectButton onClick={() => navigate('/staking')}>{t('home.staking')}</RectButton>

              <MobileDropDownContainer data-aria-expanded={isMobOpen} ref={mbDropRef}>
                <DropdownButton className="dbtn" onClick={() => mobSetOpen(!isMobOpen)}>
                  {lang}
                  {!isMobOpen ? (
                    <span className="material-symbols-rounded">keyboard_arrow_down</span>
                  ) : (
                    <span className="material-symbols-rounded">keyboard_arrow_up</span>
                  )}
                </DropdownButton>
                <DropDownContent className="dcontent" style={{ transform: isMobOpen ? 'scale(1)' : 'scale(0)' }}>
                  <DropdownItem onClick={LanguageChoose}>ENGLISH</DropdownItem>
                  <DropdownItem onClick={LanguageChoose}>ESPAÑOL</DropdownItem>
                  <DropdownItem onClick={LanguageChoose}>ITALIANO</DropdownItem>
                  <DropdownItem onClick={LanguageChoose}>FRANÇAIS</DropdownItem>
                  <DropdownItem onClick={LanguageChoose}>DEUTSCH</DropdownItem>
                  <DropdownItem onClick={LanguageChoose}>中文</DropdownItem>
                </DropDownContent>
              </MobileDropDownContainer>
              <MobileWalletButton>
                <CustomConnectButton />
              </MobileWalletButton>
            </RectButtons>
          </LogoButtons>

          <ButtonGroup>
            <a href={'https://kingfloki.finance'} rel="noopener noreferrer" target={'_blank'}>
              <KingFlokiButton className="btn-kingfloki" />
            </a>
            <a href={'https://kingland.finance'} rel="noopener noreferrer" target={'_blank'}>
              <KingLandButton className="btn-kingland" />
            </a>
            <a href={'https://kingpad.finance'} rel="noopener noreferrer" target={'_blank'}>
              <KingPadButton className="btn-kingpad" />
            </a>
          </ButtonGroup>
          <DesktopDropDownContainer data-aria-expanded={isDeskOpen} ref={DsDropRef}>
            <DropdownButton className="dbtn" onClick={() => deskSetOpen(!isDeskOpen)}>
              {lang}
              {!isDeskOpen ? (
                <span className="material-symbols-rounded">keyboard_arrow_down</span>
              ) : (
                <span className="material-symbols-rounded">keyboard_arrow_up</span>
              )}
            </DropdownButton>
            <DropDownContent className="dcontent" style={{ transform: isDeskOpen ? 'scale(1)' : 'scale(0)' }}>
              <DropdownItem onClick={LanguageChoose}>ENGLISH</DropdownItem>
              <DropdownItem onClick={LanguageChoose}>ESPAÑOL</DropdownItem>
              <DropdownItem onClick={LanguageChoose}>ITALIANO</DropdownItem>
              <DropdownItem onClick={LanguageChoose}>FRANÇAIS</DropdownItem>
              <DropdownItem onClick={LanguageChoose}>DEUTSCH</DropdownItem>
              <DropdownItem onClick={LanguageChoose}>中文</DropdownItem>
            </DropDownContent>
          </DesktopDropDownContainer>
          <DeskWalletButton>
            <CustomConnectButton />
          </DeskWalletButton>
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
  cursor: pointer;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const RectButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  /* width: 100%; */
  min-width: 1px;
  gap: 10px;
  @media screen and (max-width: 1096px) {
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
  cursor: pointer;

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
  align-items: center;
  @media screen and (max-width: 480px) {
    gap: 0;
  }
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
  @media screen and (max-width: 480px) {
    font-size: 10px;
    padding: 0;
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
  width: 125px;
  height: 23px;

  transition: all linear 0.6s;

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

  @media screen and (max-width: 420px) {
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

  @media screen and (max-width: 420px) {
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

  @media screen and (max-width: 420px) {
    padding: 0;
    width: 100px;
    height: 36px;
    background-size: 80%;
  }
`;

const DropDownContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'gotham-bold';
  margin: 0 auto;
  position: relative;
  /* transition: all linear 0.6s;
  transition: height 0.35s cubic-bezier(0.65, 0.05, 0.36, 1); */

  &[data-aria-expanded='true'] {
    .dcontent {
      opacity: 1;
    }
  }
  &[data-aria-expanded='false'] {
    .dcontent {
      opacity: 0;
    }
  }
`;

const DropdownButton = styled.div`
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
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;

const DropDownContent = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  border-radius: 20px;
  background: #1d1d1d;
  letter-spacing: 0.875px;
  transition: all linear 0.2s;
  color: ${(props) => props.theme.white};

  text-transform: uppercase;
  top: 4rem;
  z-index: 100;

  @media screen and (max-width: 720px) {
    margin-left: -20px;
  }

  @media screen and (max-width: 420px) {
    margin-left: -20px;
  }

  @media screen and (max-width: 360px) {
    margin-left: -40px;
  }

  &:hover {
    .btn-kingfloki,
    .btn-kingland,
    .btn-kingpad {
      filter: grayscale(1) brightness(0.5);
    }
  }
`;
const DropdownItem = styled.div`
  padding: 15px 20px;

  cursor: pointer;
  color: ${(props) => props.theme.white};
  transition: all linear 0.6s;
  &:hover {
    /* filter: grayscale(0) !important; */
    color: ${(props) => props.theme.blackAlpha};
  }
`;

const DesktopDropDownContainer = styled.div`
  ${DropDownContainer};
  display: flex;
  @media screen and (max-width: 1096px) {
    display: none;
  }
`;

const MobileDropDownContainer = styled.div`
  ${DropDownContainer};
  display: none;
  @media screen and (max-width: 1096px) {
    display: flex;
  }
`;

const Alink = styled.a`
  outline: none;
  text-decoration: none;
`;

const DeskWalletButton = styled.div`
  display: block;
  @media screen and (max-width: 1096px) {
    display: none;
  }
`;

const MobileWalletButton = styled.div`
  display: none;
  @media screen and (max-width: 1096px) {
    display: block;
  }
`;
