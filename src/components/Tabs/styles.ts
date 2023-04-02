import styled from "styled-components";
import { Color } from "ui";

const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 40px;
  text-align: center;

  color: ${Color.FONT};
  border-bottom: 1px solid ${Color.NAV};
`;
export { StyledTabs };
