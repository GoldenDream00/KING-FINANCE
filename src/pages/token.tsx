import { PageWrapper, Container } from 'src/components/container/container';
import { ExternalLinks } from 'src/components/page-elements/home/external-links';
import { Exclusive } from 'src/components/page-elements/token/exclusive';
import { Staking } from 'src/components/page-elements/token/staking';
import { TokenGraphSection } from 'src/components/page-elements/token/token-graph';

export const Token = () => {
  return (
    <PageWrapper>
      <Container>
        <TokenGraphSection />
      </Container>
      <Exclusive />
      <Container>
        <Staking />
        <ExternalLinks />
      </Container>
    </PageWrapper>
  );
};
