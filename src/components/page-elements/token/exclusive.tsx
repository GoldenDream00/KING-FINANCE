import { DeskBgMain } from 'src/config/images';
import styled from 'styled-components';

export const Exclusive = () => {
  return (
    <ExclusiveWrapper>
      <BackgroundSVG src={DeskBgMain} alt="desktop-background-svg" />
      <ExclusiveContainer>
        <SmallText>
          An exclusive <span className="bold">use case</span>
        </SmallText>
        <TextBox>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </TextBox>
        <TextBox>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TextBox>
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

const ExclusiveContainer = styled.div`
  position: absolute;
  top: 0;
  padding-top: 5rem;
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
    padding-top: 7rem;
  }

  @media screen and (max-width: 640px) {
    gap: 1.5rem;
    padding-top: 10rem;
  }

  @media screen and (max-width: 540px) {
    padding-top: 14rem;
  }

  @media screen and (max-width: 420px) {
    padding-top: 16rem;
  }

  @media screen and (max-width: 390px) {
    padding-top: 20rem;
  }

  @media screen and (max-width: 390px) {
    padding-top: 15rem;
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

const TextBox = styled.div`
  font-size: 18px;
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
`;
