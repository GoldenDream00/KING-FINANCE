import { PageWrapper, Container } from 'src/components/container/container';
import { KingFinance } from 'src/components/page-elements/home/kingfinance';
import { Description } from 'src/components/page-elements/home/description';
import { EcoSystem } from 'src/components/page-elements/home/ecosystem';
import { LandingDetails } from 'src/components/page-elements/home/landing-detail';
import { ExternalLinks } from 'src/components/page-elements/home/external-links';

export const Home = () => {
  return (
    <>
      <PageWrapper>
        <KingFinance />
        <Container>
          <Description />
        </Container>
        <EcoSystem />
        <Container>
          <LandingDetails />
          <ExternalLinks />
        </Container>
      </PageWrapper>
    </>
  );
};
