import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="light"
      />
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
