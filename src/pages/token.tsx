import { PageWrapper, Container } from 'src/components/container/container';
import { TokenGraph } from 'src/components/page-elements/token/token-graph';

export const Token = () => {
  return (
    <PageWrapper>
      <Container>
        <TokenGraph />
      </Container>
    </PageWrapper>
  );
};
