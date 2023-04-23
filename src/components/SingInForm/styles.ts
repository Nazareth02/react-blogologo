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

const StyledSingInForm = styled(StyledHookForm)``;

const InputWrapper = styled(InputGroup)``;

const EmailSpan = styled(EmailLabel)``;

const PasswordSpan = styled(PasswordLabel)``;

const SingInInput = styled(StyledInput)``;

const SubmitButton = styled(AuthSubmitButton)``;

const AccountExistenceSpan = styled(AccountExistence)``;

const SignUpLink = styled(SignPageLink)``;

export {
  StyledSingInForm,
  InputWrapper,
  SingInInput,
  EmailSpan,
  PasswordSpan,
  SubmitButton,
  AccountExistenceSpan,
  SignUpLink,
};
