import { createContext, useState, useContext, useEffect } from 'react';
import { localStorageGet, localStorageSet } from '../utils/localStorage';

interface StoreContextProps {
  lang: string;
  setLang: (value: string) => void;
}

const StoreContext = createContext<StoreContextProps | null>(null);

const StoreProvider = (props: any) => {
  const [lang, setLang] = useState<string>(localStorageGet('lang'));

  const loadLang = () => {
    setLang(localStorageGet('lang') === '' ? 'ENG' : localStorageGet('lang'));
  };

  const setLanguage = (language: string) => {
    setLang(language);
    localStorageSet('lang', language);
  };

  useEffect(() => {
    loadLang();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        lang,
        setLang: setLanguage
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("can't find context");
  }
  return context;
};
