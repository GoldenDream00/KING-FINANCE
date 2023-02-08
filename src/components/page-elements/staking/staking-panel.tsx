/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { StatusText } from './staking-status';
import { approve, compound, getUserData, tokenDeposit, withdraw } from 'src/contract';
import { Spinner } from 'src/components/spinner';
import { useAccount } from 'wagmi';
import { useWeb3Store } from 'src/context/Web3Context';
import { commaSeparators } from 'src/utils/commaSeparators';
import { StakingInfoIcon } from 'src/config/images';
import { StakingInfoModal } from 'src/components/modal/staking';
import { BlacklistAddresses } from 'src/components/constants/blacklist';

export const StakingPanel = () => {
  const [editState, setEditState] = useState({
    tokenAmount: 0,
    withdrawAmount: 0
  });
  const [isLoad, setLoad] = useState(false);

  const [unlockIn, setUnlockIn] = useState<string>('00 : 00 : 00 : 00');
  const [deposited, setDeposited] = useState<string | number>('0.0000');
  const [pendingReward, setPendingReward] = useState<string | number>('0.0000');
  const [kingBalance, setKingBalance] = useState<string | number>('0.00');
  const [isApprove, setApprove] = useState(false);
  const [isFlag, setFlag] = useState(false);
  const [isStakingModalOpen, setStakingModalOpen] = useState(false);

  const { isConnected, address } = useAccount();

  const { isInitialized } = useWeb3Store();
  const [isSpecialUser, setSpecialUser] = useState(false);

  useEffect(() => {
    if (isConnected) {
      checkSpeicalUser();
    }
  }, [isConnected]);

  const checkSpeicalUser = () => {
    const blacklist = BlacklistAddresses;
    for (let i = 0; i < blacklist.length; i++) {
      if (blacklist[i] === address) {
        setSpecialUser(true);
      }
    }
  };

  const getData = async () => {
    if (isInitialized && address !== undefined) {
      const userData = await getUserData(address);
      if (userData !== undefined) {
        setDeposited(commaSeparators(userData[0]));
        setPendingReward(commaSeparators(userData[2]));
        if (!isFlag) {
          handleTime(parseInt(userData[1]));
          setFlag(true);
        }
        setApprove(userData[3]);
        setKingBalance(userData[4]);
        setTimeout(() => {
          (async () => {
            await getData();
          })();
        }, 6000);
      }
    } else {
      setKingBalance('0.00');
      setUnlockIn('00 : 00 : 00 : 00');
      setPendingReward('0.0000');
      setDeposited('0.0000');
    }
  };
  useEffect(() => {
    getData();
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
          setTimeout(() => handleTime(timeStamp), 1000);
        }
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
        toast.success(successMsg);
        setLoad(false);
      })
      .catch((err) => {
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
          <StakingInfo onClick={() => setStakingModalOpen(true)}>
            <Img src={StakingInfoIcon} alt="info-icon" />
          </StakingInfo>
          <KingBalanceCircle>
            <KingBalanceTitle>$King Balance</KingBalanceTitle>
            <KingBalanceValue>{commaSeparators(kingBalance)}</KingBalanceValue>
          </KingBalanceCircle>
          <KingBalanceText>
            <StatusText title="Pending reward" value={commaSeparators(pendingReward)} />
            <StatusText title="Deposited" value={commaSeparators(deposited)} />
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
                {isApprove && isConnected ? (
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
                  disabled={parseFloat(deposited.toString()) === 0 || isLoad || !isConnected}
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
                type={'text'}
                placeholder="Amount"
                disabled={unlockIn !== 'over' || !isConnected}
                value={unlockIn !== 'over' ? unlockIn : editState.withdrawAmount === 0 ? '' : editState.withdrawAmount}
                onChange={(e) => handleEditState('withdrawAmount', e.currentTarget.value)}
              />
              <KingPanelButtons>
                <KingPanelButton
                  disabled={unlockIn !== 'over' || !isConnected || isLoad || isSpecialUser}
                  onClick={() =>
                    handleAsync(async () => await withdraw(editState.withdrawAmount), 'Successfully withdrawn')
                  }
                >
                  {isLoad ? <Spinner /> : isSpecialUser ? 'I LOVE KING' : 'Withdraw'}
                </KingPanelButton>
              </KingPanelButtons>
            </KingPanelAction>
            <StakingInfoModal isState={isStakingModalOpen} setState={setStakingModalOpen} />
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
  position: relative;
  @media screen and (max-width: 1024px) {
    padding-top: 40px;
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

const StakingInfo = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
