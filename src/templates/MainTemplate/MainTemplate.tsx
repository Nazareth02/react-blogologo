import { Outlet } from "react-router-dom";
import { Footer, Header } from "components";
import { StyledMainTemplate, MainTemplateWrapper, OutletWrap } from "./styles";
import { memo, useCallback, useEffect, useState } from "react";

export const MainTemplate = memo(() => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <StyledMainTemplate>
      <MainTemplateWrapper>
        <Header />
        <OutletWrap>
          <Outlet />
        </OutletWrap>
      </MainTemplateWrapper>
      <Footer activeTheme={theme} handleToggle={toggleTheme} />
    </StyledMainTemplate>
  );
});
