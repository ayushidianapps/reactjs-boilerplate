import { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        isThemeDark,
        setIsThemeDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
