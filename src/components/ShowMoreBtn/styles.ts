import styled from "styled-components";
import { Color } from "ui";

const WrapperShowMoreBtn = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 25px;
`;

const StyledShowMoreBtn = styled.button`
  padding: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.WHITE};
  background: ${Color.BTN};
  border-radius: 10px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export { StyledShowMoreBtn, WrapperShowMoreBtn };
