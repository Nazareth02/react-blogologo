import { Outlet } from "react-router-dom";
import { Footer, Header } from "components";
import { StyledMainTemplate, MainTemplateWrapper, OutletWrap } from "./styles";
import { memo, useCallback, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { logOut, setAuth, useAppDispatch } from "store";
import { auth } from "../../firebase";

export const MainTemplate = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuth(user));
      } else {
        dispatch(logOut());
      }
    });
  }, [dispatch]);

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
