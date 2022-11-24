import styled from 'styled-components';

import { CmcIcon, BscscanIcon, CoingeckoIcon } from 'src/config/images';

export const ExternalLinks = () => {
  return (
    <Wrapper>
      <ExternalLinkWrapper>
        <div className="medium-link">
          <img src={CmcIcon} alt="medium-link-icon" className="link-icon" />
        </div>
        <div className="coingecko-link">
          <img src={CoingeckoIcon} alt="coingecko-link-icon" className="link-icon" />
        </div>
        <div className="bscscan-link">
          <img src={BscscanIcon} alt="bscscan-link-icon" className="link-icon" />
        </div>
      </ExternalLinkWrapper>
      <ExternalButtons>
        <div className="token-button">Token</div>
        <div className="token-button">Team</div>
        <div className="token-button">Docs</div>
        <div className="token-button">Media Kit</div>
        <div className="token-button">King Pass</div>
      </ExternalButtons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${(props) => props.theme.white};

  width: 100%;
  padding-top: 4rem;
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  flex-direction: column;
  align-items: center;
  gap: 7rem;
`;

const ExternalLinkWrapper = styled.div`
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  width: 100%;
  justify-content: center;
  -webkit-justify-content: center;
  gap: 6rem;
  .link-icon {
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: 768px) {
    gap: 4rem;

    .link-icon {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (max-width: 480px) {
    gap: 3rem;

    .link-icon {
      width: 40px;
      height: 40px;
    }
  }
`;

const ExternalButtons = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  font-size: 20px;
  font-family: 'gotham-book';
  text-align: center;

  .token-button {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;
