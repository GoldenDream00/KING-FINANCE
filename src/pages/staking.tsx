import { useEffect } from 'react';
import { ExternalLinks } from 'src/components/page-elements/home/external-links';
import { StakingPanel } from 'src/components/page-elements/staking/staking-panel';
import { StakingStatus } from 'src/components/page-elements/staking/staking-status';
import { StakingText } from 'src/components/page-elements/staking/staking-text';

export const Staking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <StakingText />
      <StakingStatus />
      <StakingPanel />
      <ExternalLinks />
    </>
  );
};
