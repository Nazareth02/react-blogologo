import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

const StyledSearchForm = styled.form``;

const SearchInputWrapper = styled.div`
  position: relative;
  display: flex;
`;

const SearchInput = styled(motion.input)`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  background: ${Color.WHITE};
  border: 1px solid ${Color.FOOTER_TEXT};
  border-radius: 4px 0 0 4px;
  &:focus {
    outline: none;
  }
`;

const SubmitSearchButton = styled.button`
  padding: 0 5px;

  background-color: ${Color.PRIMARY};
  color: ${Color.WHITE};

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  border: 1px solid ${Color.PRIMARY};
  border-radius: 0 4px 4px 0;
`;

export { StyledSearchForm, SearchInput, SearchInputWrapper, SubmitSearchButton };
