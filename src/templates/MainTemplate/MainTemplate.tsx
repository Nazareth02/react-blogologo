import { Outlet } from "react-router-dom";
import { Footer, Header } from "components";
import { OutlerWrap, StyledMainTemplate } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <OutlerWrap>
        <Outlet />
      </OutlerWrap>
      <Footer />
    </StyledMainTemplate>
  );
};
