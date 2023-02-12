import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'src/context/StoreContext';
import { windowsToTop } from 'src/utils/windowsToTop';
import styled from 'styled-components';
import DesktopStaking from '../../../assets/Token/destop_staking.png';

export const Staking = () => {
  const { t } = useTranslation();
  const { lang } = useStore();
  const navigate = useNavigate();
  return (
    <StakingContainer language={lang}>
      <SmallText dangerouslySetInnerHTML={{ __html: t('token.stakingplatform') }} />
      <LaunchButton
        dangerouslySetInnerHTML={{ __html: t('token.launch') }}
        onClick={() => {
          navigate('/staking');
          windowsToTop();
        }}
      />
      <DesktopImg src={DesktopStaking} alt="desktop-staking" />
    </StakingContainer>
  );
};
interface StakingContainerProps {
  language: string;
}

const StakingContainer = styled.div<StakingContainerProps>`
  padding-top: 14rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 840px;
  ${(props) =>
    props.language === '中文' &&
    `
      padding-top: 10rem;
    `}
  @media screen and (max-width: 1366px) {
    height: 720px;
  }
  @media screen and (max-width: 1092px) {
    height: 640px;
  }
  @media screen and (max-width: 892px) {
    padding-top: 16rem;
    ${(props) =>
      props.language === 'DE' &&
      `
      padding-top: 24rem;
    `}
    ${(props) =>
      props.language === '中文' &&
      `
      padding-top: 10rem;
    `}
  }

  @media screen and (max-width: 840px) {
    height: 540px;
  }

  @media screen and (max-width: 720px) {
    padding-top: 20rem;
    ${(props) =>
      props.language === 'DE' &&
      `
      padding-top: 24rem;
    `}
    ${(props) =>
      props.language === '中文' &&
      `
      padding-top: 10rem;
    `}
  }
  @media screen and (max-width: 640px) {
    height: 480px;
    padding-top: 28rem;
    ${(props) =>
      props.language === 'DE' &&
      `
      padding-top: 30rem;
    `}
    ${(props) =>
      props.language === '中文' &&
      `
      padding-top: 16rem;
    `}
  }

  @media screen and (max-width: 540px) {
    padding-top: 32rem;
    ${(props) =>
      props.language === 'DE' &&
      `
      padding-top: 44rem;
    `}
    ${(props) =>
      props.language === '中文' &&
      `
      padding-top: 22rem;
    `}
  }
  @media screen and (max-width: 540px) {
    height: 460px;
  }
  @media screen and (max-width: 480px) {
    height: 420px;
  }
  @media screen and (max-width: 420px) {
    padding-top: 38rem;
    height: 360px;
    ${(props) =>
      props.language === 'DE' &&
      `
      padding-top: 44rem;
    `}
    ${(props) =>
      props.language === '中文' &&
      `
      padding-top: 26rem;
    `}
  }
  @media screen and (max-width: 390px) {
    ${(props) =>
      props.language === 'ITA' &&
      `
      padding-top: 34rem;
    `}
    ${(props) =>
      props.language === 'FR' &&
      `
      padding-top: 34rem;
    `}
    ${(props) =>
      props.language === 'DE' &&
      `
      padding-top: 36rem;
    `}
    ${(props) =>
      props.language === '中文' &&
      `
      padding-top: 22rem;
    `}
  }
`;

const SmallText = styled.p`
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

const LaunchButton = styled.button`
  margin-top: 2rem;
  background: #262626 0% 0% no-repeat padding-box;
  border-radius: 31px;
  border: none;
  padding: 16px 20px;
  font-family: 'gotham-bold';
  font-size: 16px;
  transition: all linear 0.3s;
  text-transform: uppercase;
  color: #fff;

  &:hover {
    color: rgb(156, 153, 153);
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 640px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    padding: 12px 16px;
  }
`;

const DesktopImg = styled.img`
  padding-top: 2rem;
  width: 80%;
  padding-bottom: 3rem;
  @media screen and (max-width: 640px) {
    width: 100%;
  }

  /*@media screen and (max-width: 640px) {
    width: 120%;
    height: 120%;
  } */
`;
