import React, { createContext, useState } from 'react';

// Створення контексту
export const ThemeContext = createContext();

// Компонент провайдера, який зберігає стан теми
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light');

  // Функція для перемикання теми
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Значення, яке буде доступне для споживачів цього контексту
  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};