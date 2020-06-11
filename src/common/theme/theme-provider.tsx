import React from 'react';
import { ThemeContext } from './theme-context';

interface ThemeProps {
  children?: React.ReactNode;
}

export const Theme: React.FC<ThemeProps> = props => {
  return (
    <ThemeContext.Provider value={{ color: 'red' }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
