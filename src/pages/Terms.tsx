import { ExternalLinks } from 'src/components/page-elements/home/external-links';
import { TermsContext } from 'src/components/TextContent/terms';
import { PrivacyContainer, TextContent } from './Privacy';

export const Terms = () => {
  return (
    <PrivacyContainer>
      <TextContent>
        <TermsContext />
      </TextContent>
      <ExternalLinks />
    </PrivacyContainer>
  );
};
