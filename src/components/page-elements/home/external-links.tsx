import styled from 'styled-components';

import { CmcIcon, BscscanIcon, CoingeckoIcon, MediakitZip, AssureSvg, CertikSvg } from 'src/config/images';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CopyToClipboard from 'src/components/CopyToClipboard';
import { windowsToTop } from 'src/utils/windowsToTop';

export const ExternalLinks = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ExternalLinkWrapper>
        <a href={'https://coinmarketcap.com/currencies/king-finance/'} rel="noopener noreferrer" target={'_blank'}>
          <div className="medium-link">
            <img src={CmcIcon} alt="medium-link-icon" className="link-icon" />
          </div>
        </a>
        <a href="https://www.coingecko.com/en/coins/king-finance" rel="noopener noreferrer" target={'_blank'}>
          <div className="coingecko-link">
            <img src={CoingeckoIcon} alt="coingecko-link-icon" className="link-icon" />
          </div>
        </a>
        <a
          href={'https://bscscan.com/token/0x74f08af7528ffb751e3a435ddd779b5c4565e684'}
          rel="noopener noreferrer"
          target={'_blank'}
        >
          <div className="bscscan-link">
            <img src={BscscanIcon} alt="bscscan-link-icon" className="link-icon" />
          </div>
        </a>
        <a href={'https://www.certik.com/projects/king'} rel="noopener noreferrer" target={'_blank'}>
          <div className="certik-link">
            <img src={CertikSvg} alt="certik-link-icon" className="link-icon" />
          </div>
        </a>
        <a href={'https://assuredefi.com/projects/king-finance/'} rel="noopener noreferrer" target={'_blank'}>
          <div className="assuredefi-link">
            <img src={AssureSvg} alt="assuredefi-link-icon" className="link-icon" />
          </div>
        </a>
      </ExternalLinkWrapper>
      <CopyToClipboard>
        {({ copy }) => (
          <ContractAddy onClick={() => copy(' 0x74f08af7528ffb751e3a435ddd779b5c4565e684')}>
            CA: 0x74f08af7528ffb751e3a435ddd779b5c4565e684
          </ContractAddy>
        )}
      </CopyToClipboard>
      <ExternalButtons>
        <div
          className="token-button"
          onClick={() => {
            navigate('/token');
            windowsToTop();
          }}
        >
          {t('home.token')}
        </div>
        <div
          className="token-button"
          onClick={() => {
            navigate('/team');
            windowsToTop();
          }}
        >
          {t('home.team')}
        </div>
        <ALink href={'https://king-finance.gitbook.io/king-whitepaper/'} rel="noopener noreferrer" target={'_blank'}>
          <div className="token-button">{t('home.docs')}</div>
        </ALink>
        <ALink href={MediakitZip} rel="noopener noreferrer" target={'_blank'}>
          <div className="token-button">{t('home.mediakit')}</div>
        </ALink>
        <ALink href={'https://kingpass.finance'} rel="noopener noreferrer" target={'_blank'}>
          <div className="token-button">{t('home.kingpass')}</div>
        </ALink>
      </ExternalButtons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${(props) => props.theme.white};

  width: 100%;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const ExternalLinkWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  -webkit-justify-content: center;
  gap: 4rem;
  .link-icon {
    width: 60px;
    height: 60px;
  }

  @media screen and (max-width: 768px) {
    gap: 3rem;

    .link-icon {
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (max-width: 480px) {
    gap: 26px;

    .link-icon {
      width: 40px;
      height: 40px;
    }
  }
`;

const ExternalButtons = styled.div`
  max-width: 650px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: ${(props) => props.theme.white};
  text-rendering: optimizeLegibility;
  z-index: 100;
  .token-button {
    cursor: pointer;
    color: ${(props) => props.theme.white};
    height: 100%;
    width: 100%;
    font-size: 20px;
    font-family: 'gotham-book';
    text-transform: none;
    padding-top: 0.5rem;
    @media screen and (max-width: 768px) {
      padding-top: 0.1rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const ALink = styled.a`
  outline: none;
  text-decoration: none;
  width: 100%;
`;

const ContractAddy = styled.div`
  font-family: 'gotham-thin';
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
  @media screen and (max-width: 720px) {
    font-size: 15px;
  }

  @media screen and (max-width: 540px) {
    font-size: 11px;
  }
`;
