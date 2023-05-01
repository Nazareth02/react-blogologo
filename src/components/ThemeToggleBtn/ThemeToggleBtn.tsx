import { memo, useCallback, useEffect, useState } from "react";
import { Button, SwitchRound } from "./styles";
import { useToggle } from "hooks";

interface TogglerProps {
  handleClick: () => void;
  activeTheme: string;
}

export const ThemeToggleBtn = memo(({ activeTheme }: TogglerProps) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const [isDarkTheme, toggleDarkTheme] = useToggle(activeTheme === "dark");
  const handleTheme = () => {
    if (activeTheme === "dark") {
      toggleTheme();
    } else {
      toggleTheme();
    }
    toggleDarkTheme();
  };
  return (
    <Button type="button" onClick={handleTheme} $isDarkTheme={isDarkTheme}>
      <SwitchRound $isDarkTheme={isDarkTheme}></SwitchRound>
    </Button>
  );
});
