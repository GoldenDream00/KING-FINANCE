import styled from 'styled-components';
import { MemberCard } from './member-card';
import img1 from '../../../assets/Team/desktop/1.png';
import img2 from '../../../assets/Team/desktop/2.png';
import img3 from '../../../assets/Team/desktop/3.png';
import img4 from '../../../assets/Team/desktop/4.png';
import img5 from '../../../assets/Team/desktop/5.png';
import img6 from '../../../assets/Team/desktop/6.png';

const members = [
  {
    img: img1,
    name: 'Travladd',
    job: 'COO Co-Founder',
    telegram: 'https://t.me/TRAVLADD',
    twitter: 'https://twitter.com/OfficialTravlad'
  },
  {
    img: img2,
    name: 'Benson',
    job: 'CEO Founder',
    telegram: 'https://t.me/BensonCryptoLTD',
    twitter: 'https://twitter.com/BensonCryptoLTD'
  },
  {
    img: img3,
    name: 'Krakovia',
    job: 'Solidity developer',
    telegram: 'https://t.me/karola96',
    twitter: 'https://twitter.com/krakovia_evm'
  },
  {
    img: img4,
    name: 'Ercolino',
    job: 'Creative designer',
    telegram: 'https://t.me/erco_lino',
    twitter: 'https://twitter.com/erco_lino'
  },
  {
    img: img5,
    name: 'Katowice',
    job: 'Solidity developer',
    telegram: 'https://t.me/Katerina_978',
    twitter: 'https://twitter.com/katerina_978'
  },
  {
    img: img6,
    name: 'Araki',
    job: 'Web3 Developer',
    telegram: 'https://t.me/tolmany21',
    twitter: 'https://twitter.com/tolmany21'
  }
];

export const TeamMembers = () => {
  return (
    <TeamMembersContainer>
      <MemberCards>
        {members.map((member, index) => (
          <MemberCard
            img={member.img}
            name={member.name}
            job={member.job}
            telegram={member.telegram}
            twitter={member.twitter}
            key={index}
          />
        ))}
      </MemberCards>
    </TeamMembersContainer>
  );
};

const TeamMembersContainer = styled.div`
  width: 100%;
  height: 800px;
  @media screen and (max-width: 1366px) {
    height: 640px;
  }
  @media screen and (max-width: 560px) {
    height: 900px;
  }
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  @media screen and (max-width: 480px) {
    padding-bottom: 0rem;
  }
`;

const MemberCards = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 1100px) {
    gap: 2rem;
  }
  @media screen and (max-width: 960px) {
    gap: 5px;
  }
  @media screen and (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
