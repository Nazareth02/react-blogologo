import styled from "styled-components";
import {
  AccountExistence,
  AuthSubmitButton,
  EmailLabel,
  InputGroup,
  PasswordLabel,
  SignPageLink,
  StyledHookForm,
  StyledInput,
} from "components/SignUpForm/styles";
import { Link } from "react-router-dom";
import { Color } from "ui";

const StyledSingInForm = styled(StyledHookForm)``;

const InputWrapper = styled(InputGroup)``;

const EmailSpan = styled(EmailLabel)``;

const PasswordSpan = styled(PasswordLabel)``;

const SingInInput = styled(StyledInput)``;

const SubmitButton = styled(AuthSubmitButton)``;

const AccountExistenceSpan = styled(AccountExistence)``;

const SignUpLink = styled(SignPageLink)``;

const ResetPasswordLink = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: ${Color.SIGN_TEXT};

  opacity: 0.8;
  transform: 0.4s;

  &:hover {
    opacity: 1;
  }
`;

export {
  StyledSingInForm,
  InputWrapper,
  SingInInput,
  EmailSpan,
  PasswordSpan,
  SubmitButton,
  AccountExistenceSpan,
  SignUpLink,
  ResetPasswordLink,
};
