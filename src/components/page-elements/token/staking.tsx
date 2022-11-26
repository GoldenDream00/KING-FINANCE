import styled, { css } from 'styled-components';
import DesktopStaking from '../../../assets/Token/destop_staking.png';
import Tabletstaking from '../../../assets/Token/tablet_staking.png';
import MobileStaking from '../../../assets/Token/mobile_staking.png';

export const Staking = () => {
  return (
    <StakingContainer>
      <SmallText>
        <span className="bold">Staking </span>
        platform
      </SmallText>
      <LaunchButton>Launch App</LaunchButton>
      <DesktopImg src={DesktopStaking} alt="desktop-staking" />
      {/* <TabletImg src={Tabletstaking} alt="tablet-staking" />
      <MobileImg src={MobileStaking} alt="mobile-staking" /> */}
    </StakingContainer>
  );
};

const StakingContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 640px) {
    padding-top: 12rem;
  }

  @media screen and (max-width: 540px) {
    padding-top: 16rem;
  }
  @media screen and (max-width: 420px) {
    padding-top: 18rem;
  }
  @media screen and (max-width: 390px) {
    padding-top: 22rem;
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
  background: #191919 0% 0% no-repeat padding-box;
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
  height: 80%;
  @media screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
  }

  /*@media screen and (max-width: 640px) {
    width: 120%;
    height: 120%;
  } */
`;
