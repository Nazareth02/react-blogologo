import styled from "styled-components";
import { Color } from "ui";

const StyledMainTemplate = styled.div`
  background: ${Color.BACKGROUND};
`;
const MainTemplateWrapper = styled.div`
  min-height: 100vh;
`;
const OutletWrap = styled.div`
  padding: 72px 32px 0;
`;

export { StyledMainTemplate, OutletWrap, MainTemplateWrapper };
