import { Container, PageWrapper } from 'src/components/container/container';
import { TeamIntro } from 'src/components/page-elements/team/team-intro';

export const Team = () => {
  return (
    <PageWrapper>
      <Container>
        <TeamIntro />
      </Container>
    </PageWrapper>
  );
};
