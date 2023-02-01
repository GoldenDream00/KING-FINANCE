import { useEffect, useState } from 'react';
import { getFreeData } from 'src/contract';
import styled from 'styled-components';

export const StakingStatus = () => {
  const [freeData, setFreeData] = useState<Array<string | number>>([]);
  const [kingPrice, setKingPrice] = useState(0);
  const [tvl, setTvl] = useState<string | number>(0);

  useEffect(() => {
    (async () => {
      const _freeData = await getFreeData();
      await getKingPrice();
      setFreeData(_freeData);
    })();
  }, []);

  useEffect(() => {
    if (kingPrice !== 0) {
      const totalLocked = freeData[0];
      const _tvl = (Number(totalLocked) * kingPrice).toFixed(2);
      setTvl(_tvl);
    }
  }, [freeData]);

  const getKingPrice = async () => {
    await fetch(
      'https://api.dev.dex.guru/v1/chain/56/tokens/0x74f08aF7528Ffb751e3A435ddD779b5C4565e684/market?api-key=UnK0BOsJoU3FhwiWcoIuBzGQVT3j_dw_656de3zEAAs'
    )
      .then((response) => {
        response.json().then((data) => {
          const price = data.price_usd.toFixed(5);
          setKingPrice(price);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <StakingStatusContainer>
      <StakingStatusText>
        <StakingStatusGroup1>
          <StatusText title="Total Locked" value={freeData[0] ?? 0} isFlag={true} />
          <StatusText title="User Rewards claimed" value={freeData[1] ?? 0} />
        </StakingStatusGroup1>
        <StakingStatusGroup2>
          <StatusText title="KING price" value={`${kingPrice ?? 0} $`} />
          <StatusText title="APY" value={`${freeData[2] ?? 0}%`} />
          <StatusText title="TVL" value={`${tvl} $`} />
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
