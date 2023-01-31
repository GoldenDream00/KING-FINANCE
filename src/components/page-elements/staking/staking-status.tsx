import { useEffect, useState } from 'react';
import { getFreeData } from 'src/contract';
import styled from 'styled-components';

export const StakingStatus = () => {
  const [freeData, setFreeData] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const _freeData = await getFreeData();
      setFreeData(_freeData);
    })();
  }, []);
  return (
    <StakingStatusContainer>
      <StakingStatusText>
        <StakingStatusGroup1>
          <StatusText title="Total Locked" value={freeData[1] ?? 0} isFlag={true} />
          <StatusText title="User Rewards claimed" value={freeData[0] ?? 0} />
        </StakingStatusGroup1>
        <StakingStatusGroup2>
          <StatusText title="KING price" value="0.003564 $" />
          <StatusText title="APY" value="11.5%" />
          <StatusText title="TVL" value="1,257,492.604 $" />
        </StakingStatusGroup2>
      </StakingStatusText>
    </StakingStatusContainer>
  );
};

const StakingStatusContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StakingStatusText = styled.div`
  padding-top: 90px;
  display: flex;
  align-items: center;
  gap: 90px;

  @media screen and (max-width: 1024px) {
    gap: 35px;
    flex-direction: column;
  }
`;

interface StatusTextProps {
  title: string;
  value: string | number;
  isFlag?: boolean;
}

export const StatusText = (props: StatusTextProps) => {
  const { title, value, isFlag } = props;
  return (
    <StatusTextContainer>
      <StatusTitle flag={isFlag}>{title}</StatusTitle>
      <StatusValue>{value}</StatusValue>
    </StatusTextContainer>
  );
};

const StatusTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  @media screen and (max-width: 840px) {
    gap: 11px;
  }
`;

interface StatusTitleProps {
  flag?: boolean;
}

const StatusTitle = styled.div<StatusTitleProps>`
  color: #fed27d;
  font-size: 15px;
  text-align: center;
  font-family: 'gotham-bold';
  line-height: 20px;
  @media screen and (max-width: 840px) {
    width: ${(props) => (props.flag ?? false ? '48px' : '105px')};
  }
  @media screen and (max-width: 450px) {
    font-size: 13px;
  }
`;

const StatusValue = styled.div`
  font-size: 15px;
  font-family: 'gotham-thin';
  font-weight: 800;
  @media screen and (max-width: 450px) {
    font-size: 13px;
  }
`;

const StakingStatusGroup1 = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
  @media screen and (max-width: 960px) {
    gap: 47px;
  }
`;

const StakingStatusGroup2 = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
  @media screen and (max-width: 960px) {
    gap: 45px;
  }

  @media screen and (max-width: 540px) {
    gap: 30px;
  }

  @media screen and (max-width: 450px) {
    gap: 10px;
  }

  @media screen and (max-width: 390px) {
    gap: 0px;
  }
`;
