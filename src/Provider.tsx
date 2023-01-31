import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { COLORS, TEXT_SIZE } from './config/config';
import StoreProvider from './context/StoreContext';
import { Web3Provider } from './context/Web3Context';
import { SmoothProvider } from './provider/SmoothScroll';

interface ProviderProps {
  children: React.ReactNode;
}

const theme = {
  ...COLORS,
  ...TEXT_SIZE
};

export const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="light"
      />
      <StoreProvider>
        <Web3Provider>
          <SmoothProvider>{children}</SmoothProvider>
        </Web3Provider>
      </StoreProvider>
    </ThemeProvider>
  );
};
