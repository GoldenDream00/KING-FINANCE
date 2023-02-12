import { ExternalLinks } from 'src/components/page-elements/home/external-links';
import { PrivacyContext } from 'src/components/TextContent/privacy';
import styled from 'styled-components';

export const Privacy = () => {
  return (
    <PrivacyContainer>
      <TextContent>
        <PrivacyContext />
      </TextContent>
      <ExternalLinks />
    </PrivacyContainer>
  );
};

export const PrivacyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 10rem;
  max-width: 965px;
  @media screen and (max-width: 640px) {
    padding-top: 5rem;
  }
`;

export const TextContent = styled.div`
  text-align: left;
  font-size: 17px;
  line-height: 25px;
  font-family: 'gotham-book';
  padding-left: 90px;
  padding-right: 90px;
  padding-bottom: 5rem;
  @media screen and (max-width: 540px) {
    font-size: 12px;
    padding-left: 60px;
    padding-right: 60px;
  }
  @media screen and (max-width: 390px) {
    font-size: 12px;
    padding-left: 40px;
    padding-right: 40px;
  }
`;
