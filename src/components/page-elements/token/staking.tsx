import styled from 'styled-components';
import DesktopStaking from '../../../assets/Token/destop_staking.png';

export const Staking = () => {
  return (
    <StakingContainer>
      <SmallText>
        <span className="bold">Staking </span>
        platform
      </SmallText>
      <LaunchButton>Launch App</LaunchButton>
      <DesktopImg src={DesktopStaking} alt="desktop-staking" />
    </StakingContainer>
  );
};

const StakingContainer = styled.div`
  padding-top: 14rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 892px) {
    padding-top: 16rem;
  }

  @media screen and (max-width: 720px) {
    padding-top: 20rem;
  }
  @media screen and (max-width: 640px) {
    padding-top: 28rem;
  }

  @media screen and (max-width: 540px) {
    padding-top: 32rem;
  }
  @media screen and (max-width: 420px) {
    padding-top: 36rem;
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
  height: 80%;
  padding-bottom: 3rem;
  @media screen and (max-width: 640px) {
    width: 100%;
    height: 100%;
  }

  /*@media screen and (max-width: 640px) {
    width: 120%;
    height: 120%;
  } */
`;
