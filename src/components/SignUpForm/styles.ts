import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Media } from "ui";

const StyledHookForm = styled.form`
  display: flex;
  flex-direction: column;
  place-content: center;
  gap: 30px;

  max-width: 624px;
  padding: 40px;
  margin: 72px auto 152px;

  border-radius: 16px;
  background-color: ${Color.HEADER};

  ${Media.PRE_MOBILE} {
    gap: 20px;
    padding: 30px;
    margin: 42px auto 80px;
  }
  ${Media.MOBILE_L} {
    margin: 32px auto 20px;
  }
`;

const InputGroup = styled.div`
  display: grid;
  grid-gap: 40px;
  width: 100%;

  ${Media.MOBILE_L} {
    grid-gap: 30px;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 18px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  background: #ffffff;
  border: 1px solid rgba(49, 48, 55, 0.1);
  border-radius: 4px;
  &:focus {
    outline: none;
  }

  ${Media.PRE_MOBILE} {
    font-size: 14px;
  }
  ${Media.MOBILE_L} {
    padding: 12px;
    font-size: 12px;
  }
`;

const AuthSubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  margin-top: 48px;

  max-width: 544px;
  width: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  background: ${Color.PRIMARY};
  border-radius: 4px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
  }

  ${Media.PRE_MOBILE} {
    margin-top: 28px;
    font-size: 16px;
  }
  ${Media.MOBILE_L} {
    padding: 12px 20px;

    margin-top: 20px;
    font-size: 14px;
  }
`;

const EmailLabel = styled.label`
  display: grid;
  grid-gap: 8px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: ${Color.FONT};

  ${Media.PRE_MOBILE} {
    font-size: 14px;
  }
  ${Media.MOBILE_L} {
    font-size: 12px;
  }
`;

const NameLabel = styled(EmailLabel)``;

const PasswordLabel = styled.label`
  display: grid;
  grid-gap: 8px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: ${Color.FONT};

  ${Media.PRE_MOBILE} {
    font-size: 14px;
  }
  ${Media.MOBILE_L} {
    font-size: 12px;
  }
`;

const AccountExistence = styled.span`
  font-family: "Inter";
  font-style: normal;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #8d8e97;

  ${Media.PRE_MOBILE} {
    font-size: 14px;
  }
  ${Media.MOBILE_L} {
    font-size: 12px;
  }
`;

const SignPageLink = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  opacity: 0.8;

  color: ${Color.SIGN_TEXT};

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }

  ${Media.PRE_MOBILE} {
    font-size: 14px;
  }
  ${Media.MOBILE_L} {
    font-size: 12px;
  }
`;

export {
  AuthSubmitButton,
  StyledInput,
  StyledHookForm,
  InputGroup,
  PasswordLabel,
  EmailLabel,
  AccountExistence,
  SignPageLink,
  NameLabel,
};
