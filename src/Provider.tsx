import { ThemeProvider } from 'styled-components';
import { SmoothScrollProvider } from './provider/SmoothScroll';

import { COLORS, TEXT_SIZE } from './config/config';
import StoreProvider from './context/StoreContext';

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
      <SmoothScrollProvider>
        <StoreProvider>{children}</StoreProvider>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
};
