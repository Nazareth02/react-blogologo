import styled from "styled-components";
import { Color } from "ui";

const StyledTabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 40px;
  text-align: center;

  color: ${Color.SECONDARY};
  border-bottom: 1px solid ${Color.SECONDARY_EXTRALIGHT};
`;
export { StyledTabs };
