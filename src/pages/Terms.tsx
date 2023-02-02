import { useEffect } from 'react';
import { ExternalLinks } from 'src/components/page-elements/home/external-links';
import { TermsContext } from 'src/components/TextContent/terms';
import { PrivacyContainer, TextContent } from './Privacy';

export const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PrivacyContainer>
      <TextContent>
        <TermsContext />
      </TextContent>
      <ExternalLinks />
    </PrivacyContainer>
  );
};
