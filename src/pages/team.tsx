import { useEffect } from 'react';
import { Container, PageWrapper } from 'src/components/container/container';
import { ExternalLinks } from 'src/components/page-elements/home/external-links';
import { TeamIntro } from 'src/components/page-elements/team/team-intro';
import { TeamMembers } from 'src/components/page-elements/team/team-members';

export const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageWrapper>
      <Container>
        <TeamIntro />
        <TeamMembers />
        <ExternalLinks />
      </Container>
    </PageWrapper>
  );
};
