import styled from 'styled-components';

import { Header } from './header';
import { Footer } from './footer';
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <MainContainer>
      <Header />
      {children}
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.black};

  margin: 0;
`;
