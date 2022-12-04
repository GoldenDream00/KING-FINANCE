import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export const Container = ({ children, className }: ContainerProps) => {
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  position: relative;
`;

const ContainerWrapper = styled.div`
  width: 100%;

  max-width: 1160px;
  position: relative;

  @media screen and (max-width: 1366px) {
    max-width: 900px;
  }

  @media screen and (max-width: 1092px) {
    max-width: 768px;
  }

  @media screen and (max-width: 840px) {
    max-width: 640px;
  }

  @media screen and (max-width: 640px) {
    max-width: 450px;
  }

  @media screen and (max-width: 480px) {
    max-width: 360px;
  }

  @media screen and (max-width: 420px) {
    max-width: 300px;
  }
`;
