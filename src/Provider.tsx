import { ThemeProvider } from 'styled-components';
import { COLORS, TEXT_SIZE } from './config/config';
import StoreProvider from './context/StoreContext';
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
      <StoreProvider>
        {/* <SmoothProvider> */}
        {children}
        {/* </SmoothProvider> */}
      </StoreProvider>
    </ThemeProvider>
  );
};
