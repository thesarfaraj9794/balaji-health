"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  mounted: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  // ==========================================
  // DEFAULT THEME = LIGHT
  // ==========================================

  const [theme, setThemeState] =
    useState<Theme>("light");

  const [mounted, setMounted] =
    useState(false);

  // ==========================================
  // LOAD SAVED THEME
  // ==========================================

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") as Theme | null;

    // If user has previously selected a theme,
    // restore it. Otherwise always use LIGHT.
    const initialTheme: Theme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : "light";

    const timeoutId = window.setTimeout(() => {
      setThemeState(initialTheme);

      document.documentElement.classList.toggle(
        "dark",
        initialTheme === "dark"
      );

      setMounted(true);
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  // ==========================================
  // SET THEME
  // ==========================================

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );

    localStorage.setItem(
      "theme",
      newTheme
    );
  };

  // ==========================================
  // TOGGLE THEME
  // ==========================================

  const toggleTheme = () => {
    setTheme(
      theme === "light"
        ? "dark"
        : "light"
    );
  };

  // ==========================================
  // PROVIDER
  // ==========================================

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mounted,
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// ==========================================
// USE THEME
// ==========================================

export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}