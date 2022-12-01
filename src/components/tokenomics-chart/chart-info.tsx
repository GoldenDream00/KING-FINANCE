import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface TokenStatusProps {
  color: string;
  amount: number;
  name: string;
}

export const TokenChartInfo = () => {
  const { t } = useTranslation();
  const TokenData = [
    {
      id: `${t('token.staking')}`,
      label: `${t('token.staking')} 4%`,
      value: 4,
      color: '#B1B1B1'
    },
    {
      id: `${t('token.burned')}`,
      label: `${t('token.burned')} 20%`,
      value: 20,
      color: '#FEE496'
    },
    {
      id: `${t('token.holding')}`,
      label: `${t('token.holding')} 60%`,
      value: 60,
      color: '#FBA037'
    },
    {
      id: `${t('token.liquidity')}`,
      label: `${t('token.liquidity')} 16%`,
      value: 16,
      color: '#FFFFFF'
    }
  ];
  return (
    <InfoContainer>
      {TokenData.map((token, index) => (
        <TokenStatus color={token.color} amount={token.value} name={token.id} key={index} />
      ))}
    </InfoContainer>
  );
};

const TokenStatus = (props: TokenStatusProps) => {
  const { color, amount, name } = props;
  return (
    <StatusContainer>
      <TokenColor style={{ backgroundColor: color }} />
      <TokenInfo>
        <TokenAmount>{amount}%</TokenAmount>
        <TokenAmount>{name}</TokenAmount>
      </TokenInfo>
    </StatusContainer>
  );
};

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 100%;
  justify-content: center;
  gap: 15px;
  @media screen and (max-width: 840px) {
    grid-template-columns: auto auto;
  }
  margin-left: 2rem;
`;
const StatusContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
`;
const TokenColor = styled.div`
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const TokenInfo = styled.div`
  /* display: flex; */
  padding-right: 1rem;
  /* flex-direction: row; */
  font-size: 16px;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;
const TokenAmount = styled.div`
  font-size: 16px;
  color: ${(prop) => prop.theme.white};
  min-height: 1px;
  min-width: 1px;
  height: 25px;
  /* margin-bottom: 26px; */
  margin-left: 0.5rem;
`;
