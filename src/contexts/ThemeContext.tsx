// ThemeContext.tsx
import React, { createContext, useContext, useState } from "react";

// Define the type for your context
interface ThemeContextType {
  theme: string;
  setTheme: (newTheme: string) => void;
}

// Create context with an undefined default
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


// Provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return context;
};
