/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { StatusText } from './staking-status';
import { approve, compound, getKingBalance, getUserData, isApproved, tokenDeposit, withdraw } from 'src/contract';
import { Spinner } from 'src/components/spinner';
import { useAccount } from 'wagmi';
import { useWeb3Store } from 'src/context/Web3Context';

export const StakingPanel = () => {
  const [editState, setEditState] = useState({
    tokenAmount: 0,
    withdrawAmount: 0
  });
  const [isLoad, setLoad] = useState(false);

  const [unlockIn, setUnlockIn] = useState<string>('');
  const [deposited, setDeposited] = useState<string | number>(0);
  const [pendingReward, setPendingReward] = useState<string | number>(0);
  const [kingBalance, setKingBalance] = useState<string | number>(0);
  const [isApprove, setApprove] = useState(false);
  const [isFlag, setFlag] = useState(false);

  const { isConnected, address } = useAccount();

  const { isInitialized } = useWeb3Store();

  const getData = async () => {
    const userData = await getUserData(address);

    if (userData !== undefined) {
      setDeposited(userData[0].toString());
      setPendingReward(userData[2].toString());
      console.log({ userData });
      if (!isFlag) {
        handleTime(parseInt(userData[1].toString()));
        setFlag(true);
      }
    }

    // setApprove(userData[4]);
  };

  useEffect(() => {
    if (isInitialized) {
      getData();
      // const kingBalance = await getKingBalance(address);
      // setKingBalance(kingBalance);
    }
  }, [isInitialized, isConnected, isLoad]);

  const handleTime = (timeStamp: number) => {
    if (timeStamp !== 0) {
      const now = Math.floor(Date.now() / 1000);
      const remain = Number(timeStamp) - now;
      if (remain < 0) {
        setUnlockIn('over');
      } else {
        let days: string | number = Math.floor(remain / 86400);
        let hours: string | number = Math.floor((remain - days * 86400) / 3600);
        let minutes: string | number = Math.floor((remain - days * 86400 - hours * 3600) / 60);
        let seconds: string | number = remain - days * 86400 - hours * 3600 - minutes * 60;
        if (days < 10) {
          days = '0' + days;
        }
        if (hours < 10) {
          hours = '0' + hours;
        }
        if (minutes < 10) {
          minutes = '0' + minutes;
        }
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
        const res = days + ' : ' + hours + ' : ' + minutes + ' : ' + seconds;
        if (res !== unlockIn) {
          setUnlockIn(res);
        }
        setTimeout(() => handleTime(timeStamp), 1000);
      }
    }
  };

  const handleEditState = (prop: string, value: string | number | boolean) => {
    setEditState({ ...editState, [prop]: value });
  };

  const handleAsync = (func: () => Promise<void>, successMsg: string) => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises, no-async-promise-executor
    const promise = new Promise(async function (resolve, reject) {
      try {
        setLoad(true);
        await func();
        resolve('');
      } catch (err) {
        reject(err);
      }
    });
    promise
      .then((result) => {
        console.log({ result });
        toast.success(successMsg);
        setLoad(false);
      })
      .catch((err) => {
        console.log({ err });
        const revertData = err.reason;
        toast.error(`Transaction failed: ${revertData ?? err}`);
        setLoad(false);
      });
  };

  const tokenApprove = async () => {
    await approve();
    setApprove(true);
  };

  return (
    <StakingPanelContainer>
      <StakingPanelWrapper>
        <StakingBalancePanel>
          <KingBalanceCircle>
            <KingBalanceTitle>$King Balance</KingBalanceTitle>
            <KingBalanceValue>{kingBalance}</KingBalanceValue>
          </KingBalanceCircle>
          <KingBalanceText>
            <StatusText title="Pending reward" value={pendingReward ?? 0} />
            <StatusText title="Deposited" value={deposited ?? 0} />
            <StatusText title="Unlock in" value={unlockIn === 'over' ? 'Lock time over' : unlockIn} />
          </KingBalanceText>
        </StakingBalancePanel>
        <StakingField>
          <KingPanel>
            <KingPanelTitle>Stake $King</KingPanelTitle>
            <KingPanelAction>
              <KingPanelInput
                type="number"
                placeholder="Amount"
                value={editState.tokenAmount === 0 ? '' : editState.tokenAmount}
                onChange={(e) => handleEditState('tokenAmount', e.currentTarget.value)}
              />
              <KingPanelButtons>
                {isApprove ? (
                  <KingPanelButton
                    disabled={isLoad}
                    onClick={() =>
                      handleAsync(async () => await tokenDeposit(editState.tokenAmount), 'Successfully Deposited')
                    }
                  >
                    {isLoad ? <Spinner /> : 'Deposit'}
                  </KingPanelButton>
                ) : (
                  <KingPanelButton
                    disabled={!isConnected ? true : isLoad}
                    onClick={() => handleAsync(async () => await tokenApprove(), 'Successfully Approved')}
                  >
                    {isLoad ? <Spinner /> : 'Approve'}
                  </KingPanelButton>
                )}
                <KingPanelButton
                  disabled={parseFloat(deposited.toString()) === 0 || isLoad}
                  onClick={() => handleAsync(async () => await compound(), 'Successfully compounded')}
                >
                  {isLoad ? <Spinner /> : 'Compound'}
                </KingPanelButton>
              </KingPanelButtons>
            </KingPanelAction>
          </KingPanel>
          <KingPanel>
            <KingPanelTitle>Withdraw $King</KingPanelTitle>
            <KingPanelAction>
              <KingPanelInput
                type={unlockIn !== 'over' ? 'text' : 'number'}
                placeholder="Amount"
                disabled={unlockIn !== 'over'}
                value={unlockIn !== 'over' ? unlockIn : editState.withdrawAmount === 0 ? '' : editState.withdrawAmount}
                onChange={(e) => handleEditState('withdrawAmount', e.currentTarget.value)}
              />
              <KingPanelButtons>
                <KingPanelButton
                  disabled={unlockIn !== 'over'}
                  onClick={() =>
                    handleAsync(async () => await withdraw(editState.withdrawAmount), 'Successfully withdrawn')
                  }
                >
                  {isLoad ? <Spinner /> : 'Withdraw'}
                </KingPanelButton>
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
  outline: none;
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
