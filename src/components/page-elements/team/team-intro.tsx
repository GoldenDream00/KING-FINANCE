import styled from 'styled-components';

export const TeamIntro = () => {
  return (
    <TeamIntroContainer>
      <KingTeam>
        <KingTeamLetter>
          <p style={{ fontFamily: 'gotham-bold' }}>King</p>
          <p style={{ fontFamily: 'gotham-thin' }}>Team</p>
        </KingTeamLetter>
        <MeetKing>
          <span style={{ fontFamily: 'gotham-thin' }}>Meet the</span>
          <span style={{ fontFamily: 'gotham-bold' }}> Kings</span>
        </MeetKing>
        <Details>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Details>
      </KingTeam>
    </TeamIntroContainer>
  );
};

const TeamIntroContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
`;

const KingTeam = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.white};

  @media screen and (max-width: 1092px) {
    padding-top: 5rem;
  }
  @media screen and (max-width: 390px) {
    padding-top: 3rem;
  }
`;

const KingTeamLetter = styled.div`
  font-size: 7rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: center;
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

  @media screen and (max-width: 390px) {
    flex-direction: column;
    justify-content: inherit;
    align-items: center;
  }
`;

const MeetKing = styled.div`
  font-size: 25px;
  font-family: 'gotham-book';
  text-transform: none;
  text-align: center;
  padding-top: 3rem;
  letter-spacing: 0.05rem;
  @media screen and (max-width: 1092px) {
    padding-top: 2rem;
    font-size: 20px;
  }
  @media screen and (max-width: 390px) {
    padding-top: 2rem;
    font-size: 15px;
  }
`;

const Details = styled.div`
  font-size: 21px;
  font-family: 'gotham-thin';
  letter-spacing: -0.21px;
  line-height: 2.25rem;
  max-width: 964px;
  padding-top: 3rem;
  @media screen and (max-width: 1092px) {
    padding-top: 2rem;
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    max-width: 580px;
    font-size: 17px;
  }
  @media screen and (max-width: 640px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
  @media screen and (max-width: 390px) {
    padding-top: 2rem;
    font-size: 13px;
    max-width: 220px;
  }
`;
