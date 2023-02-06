import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Modal from 'react-responsive-modal';
import { Staking1Icon, Staking2Icon, Staking3Icon } from '../../config/images';

interface ModalProps {
  isState: boolean;
  setState: (value: boolean) => void;
}

interface SidebarProps {
  setState: (value: boolean) => void;
}

export const StakingInfoModal = (props: ModalProps) => {
  const { isState, setState } = props;

  return (
    <Modal open={isState} onClose={() => setState(false)}>
      <ModalContainer>
        <CloseButton setState={setState} />
        <ModalWrapper>
          <PrimaryLabel>Staking Info</PrimaryLabel>
          <SecondaryLabel>Every action increase your lock time</SecondaryLabel>
          <StakingItemContainer>
            <StakingItem icon={Staking1Icon} title="deposit" content="set/reset to 30 days lock" />
            <StakingItem icon={Staking2Icon} title="compound" content="+ 5 days lock" />
            <StakingItem icon={Staking3Icon} title="withdraw" content="Only when unlock time is finished" />
          </StakingItemContainer>
          <FinalLabel>TOKENS GET LOCKED WHEN YOU DEPOSIT KEEP THAT IN MIND BEFORE USING THIS</FinalLabel>
        </ModalWrapper>
      </ModalContainer>
    </Modal>
  );
};

const CloseButton = ({ setState }: SidebarProps) => {
  return (
    <CloseButtonContainer onClick={() => setState(false)}>
      <MdClose style={{ width: '24px', height: '24px' }} />
      Close
    </CloseButtonContainer>
  );
};

const CloseButtonContainer = styled.div`
  cursor: pointer;
  width: 27px;
  height: 27px;
  font-family: 'gotham-bold';
  font-size: 8px;
  color: #ffffff;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 20px;
`;

interface StakingItemProps {
  icon: string;
  title: string;
  content: string;
}

const StakingItem = (props: StakingItemProps) => {
  const { icon, title, content } = props;
  return (
    <StakingItemWrapper>
      <ItemIcon>
        <Img src={icon} alt="item-icon" />
      </ItemIcon>
      <ItemTitle>{title}</ItemTitle>
      <ItemContent>{content}</ItemContent>
    </StakingItemWrapper>
  );
};

const ModalContainer = styled.div`
  width: 572px;
  height: 420px;
  @media screen and (max-width: 640px) {
    width: 327px;
    height: 364px;
  }
`;

const ModalWrapper = styled.div`
  padding: 27px 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 27px 15px;
  }
`;

const PrimaryLabel = styled.div`
  color: #ffd06e;
  font-size: 25px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 640px) {
    font-size: 17px;
  }
`;

const SecondaryLabel = styled.div`
  font-size: 15px;
  text-align: center;
  padding-top: 9px;
  @media screen and (max-width: 640px) {
    font-size: 12px;
  }
`;

const StakingItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-top: 60px;
  @media screen and (max-width: 640px) {
    padding-top: 45px;
  }
`;

const StakingItemWrapper = styled.div`
  max-width: 118px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 640px) {
    gap: 5px;
  }
`;

const ItemIcon = styled.div`
  width: 75px;
  height: 75px;
  @media screen and (max-width: 640px) {
    width: 50px;
    height: 50px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const ItemTitle = styled.div`
  font-size: 15px;
  color: #ffce5a;
  text-transform: uppercase;
  text-align: center;
  padding-top: 10px;
  @media screen and (max-width: 640px) {
    font-size: 12px;
    padding-top: 5px;
    line-height: 15px;
  }
`;

const ItemContent = styled.div`
  padding-top: 3px;
  font-size: 13px;
  color: #ffffff;
  text-align: center;
  height: 38px;
  @media screen and (max-width: 640px) {
    font-size: 10px;
    padding-top: 0px;
    max-width: 95px;
    line-height: 12px;
  }
`;

const FinalLabel = styled.div`
  padding-top: 57px;
  font-size: 15px;
  max-width: 350px;
  text-align: center;
  @media screen and (max-width: 640px) {
    font-size: 12px;
    padding-top: 44px;
    line-height: 16px;
  }
`;
