import styled from "styled-components";

const StyledHookForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  max-width: 624px;
  max-height: 472px;
  padding: 40px;
  margin: auto;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
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
  color: #313037;

  background: #ffffff;
  border: 1px solid rgba(49, 48, 55, 0.1);
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;

const AuthSubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  max-width: 544px;
  width: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;

  background: #6c1bdb;
  border-radius: 4px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export { InputGroup, StyledInput, AuthSubmitButton, StyledHookForm };
