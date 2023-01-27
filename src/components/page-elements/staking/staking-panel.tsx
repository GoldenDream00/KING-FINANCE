import styled from 'styled-components';
import { StatusText } from './staking-status';

export const StakingPanel = () => {
  return (
    <StakingPanelContainer>
      <StakingPanelWrapper>
        <StakingBalancePanel>
          <KingBalanceCircle>
            <KingBalanceTitle>$King Balance</KingBalanceTitle>
            <KingBalanceValue>123.456</KingBalanceValue>
          </KingBalanceCircle>
          <KingBalanceText>
            <StatusText title="Pending reward" value="123.456" />
            <StatusText title="Deposited" value="123.456" />
            <StatusText title="Unlock in" value="14 | 12 | 04 | 33" />
          </KingBalanceText>
        </StakingBalancePanel>
        <StakingField>
          <KingPanel>
            <KingPanelTitle>Stake $King</KingPanelTitle>
            <KingPanelAction>
              <KingPanelInput type="number" placeholder="Amount" />
              <KingPanelButtons>
                <KingPanelButton>Approve</KingPanelButton>
                <KingPanelButton disabled={true}>Compound</KingPanelButton>
              </KingPanelButtons>
            </KingPanelAction>
          </KingPanel>
          <KingPanel>
            <KingPanelTitle>Withdraw $King</KingPanelTitle>
            <KingPanelAction>
              <KingPanelInput type="number" placeholder="Amount" disabled={true} />
              <KingPanelButtons>
                <KingPanelButton disabled={true}>Withdraw</KingPanelButton>
              </KingPanelButtons>
            </KingPanelAction>
          </KingPanel>
        </StakingField>
      </StakingPanelWrapper>
    </StakingPanelContainer>
  );
};

const StakingPanelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const StakingPanelWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  height: 550px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 100%;
  }
`;

const StakingBalancePanel = styled.div`
  width: 336px;
  border-radius: 30px;
  background: #171717 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    height: 480px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

const StakingField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const KingPanel = styled.div`
  width: 572px;
  height: 100%;
  background: #171717 0% 0% no-repeat padding-box;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 23px;
  @media screen and (max-width: 1024px) {
    width: 336px;
    height: 210px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

const KingBalanceCircle = styled.div`
  width: 242px;
  height: 242px;
  border-radius: 50%;
  background: #000000 0% 0% no-repeat padding-box;
  border: 4px solid #fed27d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 14px;
  @media screen and (max-width: 1024px) {
    width: 190px;
    height: 190px;
  }
`;

const KingBalanceTitle = styled.div`
  font-size: 20px;
  color: #fed27d;
  width: 140px;
  text-align: center;
  text-transform: uppercase;
  font-family: 'gotham-bold';
`;

const KingBalanceValue = styled.div`
  font-size: 18px;
  text-align: center;
`;

const KingBalanceText = styled.div`
  padding-top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
`;

const KingPanelTitle = styled.div`
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  font-family: 'gotham-book';
`;

const KingPanelAction = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  @media screen and (max-width: 450px) {
    width: 210px;
  }
`;

const KingPanelInput = styled.input`
  background: #000000 0% 0% no-repeat padding-box;
  border: 2px solid #fed27d;
  border-radius: 29px;
  height: 57px;
  color: #ffffff;
  font-size: 15px;
  text-align: center;
  opacity: ${(props) => (props.disabled ?? false ? 0.5 : 1)};
  @media screen and (max-width: 1024px) {
    height: 44px;
  }
`;

const KingPanelButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const KingPanelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 18px;
  width: 100%;
  height: 57px;
  border: none;
  background: #fed27d 0% 0% no-repeat padding-box;
  border-radius: 29px;
  font-family: 'gotham-bold';
  opacity: ${(props) => (props.disabled ?? false ? 0.5 : 1)};
  @media screen and (max-width: 1024px) {
    height: 44px;
    font-size: 14px;
  }
`;
