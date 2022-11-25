import styled from 'styled-components';
import { TokenData } from 'src/components/tokenomics-chart/data';

interface TokenStatusProps {
  color: string;
  amount: number;
  name: string;
}

export const TokennChartInfo = () => {
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
  gap: 3rem;
  @media screen and (max-width: 840px) {
    grid-template-columns: auto auto;
  }
`;
const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media screen and (max-width: 640px) {
    align-items: flex-start;
  }
`;
const TokenColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const TokenInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: row;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;
const TokenAmount = styled.div`
  padding: 0.1rem;
  font-size: 16px;
  color: ${(prop) => prop.theme.white};
`;
