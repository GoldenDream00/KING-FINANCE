import { useTranslation } from 'react-i18next';
import { DeskBgMain } from 'src/config/images';
import { useStore } from 'src/context/StoreContext';
import styled from 'styled-components';

export const Exclusive = () => {
  const { t } = useTranslation();
  const { lang } = useStore();
  return (
    <ExclusiveWrapper>
      <BackgroundSVG src={DeskBgMain} alt="desktop-background-svg" />
      <ExclusiveContainer language={lang}>
        <SmallText dangerouslySetInnerHTML={{ __html: t('token.exclusive') }} />
        <TextBox dangerouslySetInnerHTML={{ __html: t('token.tokendetails1') }} />
        <TextBox dangerouslySetInnerHTML={{ __html: t('token.tokendetails2') }} />
        <TextBox dangerouslySetInnerHTML={{ __html: t('token.tokendetails3') }} />
      </ExclusiveContainer>
    </ExclusiveWrapper>
  );
};

const ExclusiveWrapper = styled.div`
  width: 100%;
  height: 450px;
  padding-top: 7rem;
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
interface ExclusiveContainerProps {
  language: string;
}

const ExclusiveContainer = styled.div<ExclusiveContainerProps>`
  position: absolute;
  top: 0;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  width: 100%;
  height: 100%;
  font-family: 'gotham-thin';

  @media screen and (max-width: 1096px) {
    gap: 2rem;
  }

  @media screen and (max-width: 893px) {
    padding-top: 12rem;
    ${(props) =>
      props.language === 'DE' &&
      `
      padding-top: 15rem;
    `}

    ${(props) =>
      props.language === '中文' &&
      `
      padding-top: 8rem;
    `}
  }

  @media screen and (max-width: 720px) {
    gap: 1.5rem;
    padding-top: 15rem;
    ${(props) =>
      props.language === '中文' &&
      `
      padding-top: 8rem;
    `}
  }
  @media screen and (max-width: 640px) {
    gap: 1.5rem;
    padding-top: 18rem;
    ${(props) =>
      props.language === '中文' &&
      `
      padding-top: 11rem;
    `}
  }

  @media screen and (max-width: 540px) {
    padding-top: 20rem;
    ${(props) =>
      props.language === '中文' &&
      `
      padding-top: 14rem;
    `}

    ${(props) =>
      props.language === 'DE' &&
      `
      padding-top: 26rem;
    `}
  }

  @media screen and (max-width: 420px) {
    padding-top: 24rem;
    ${(props) =>
      props.language === 'DE' &&
      `
      padding-top: 26rem;
    `}
    ${(props) =>
      props.language === '中文' &&
      `
      padding-top: 16rem;
    `}
  }

  @media screen and (max-width: 390px) {
    padding-top: 22rem;
    ${(props) =>
      props.language === '中文' &&
      `
      padding-top: 14rem;
    `}
  }
`;

const SmallText = styled.p`
  font-size: 25px;
  padding-bottom: 2rem;
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

const TextBox = styled.div`
  font-size: 18px;
  z-index: 100;

  color: ${(props) => props.theme.white};
  max-width: 840px;
  line-height: 2.375rem;
  @media screen and (max-width: 1092px) {
    max-width: 700px;
  }
  @media screen and (max-width: 892px) {
    max-width: 600px;
  }
  @media screen and (max-width: 720px) {
    max-width: 500px;
  }
  @media screen and (max-width: 640px) {
    max-width: 400px;
    font-size: 13px;
  }
  @media screen and (max-width: 540px) {
    max-width: 300px;
  }
  @media screen and (max-width: 390px) {
    max-width: 250px;
    font-size: 12px;
    line-height: 1.875rem;
  }
  .bold {
    font-family: 'gotham-book';
    font-weight: bold;
  }
`;
