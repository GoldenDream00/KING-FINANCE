import { PageWrapper, Container } from 'src/components/container/container';
import { Description } from 'src/components/page-elements/home/description';
import { EcoSystem } from 'src/components/page-elements/home/ecosystem';

export const Home = () => {
  return (
    <PageWrapper>
      <Container>
        <Description />
      </Container>
      <EcoSystem />
    </PageWrapper>
  );
};
