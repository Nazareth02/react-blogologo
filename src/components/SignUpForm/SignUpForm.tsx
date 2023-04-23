import { ErrorMessage } from "components";
import { Loader } from "components";
import {
  StyledHookForm,
  InputGroup,
  StyledInput,
  AuthSubmitButton,
  EmailLabel,
  PasswordLabel,
  AccountExistence,
  SignPageLink,
} from "./styles";
import { fetchSignUpUser, getUser, useAppDispatch, useAppSelector } from "store";
import { useForm, SubmitHandler } from "react-hook-form";
import { ROUTES } from "routes";
import { AuthFormValues } from "types";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

export const SignUpForm = memo(() => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { isLoading, errorMessage } = useAppSelector(getUser);

  const { register, handleSubmit, reset } = useForm<AuthFormValues>();

  const onSubmit: SubmitHandler<AuthFormValues> = async (authFormValues) => {
    await dispatch(fetchSignUpUser(authFormValues)).unwrap();
    await reset();
    await navigate(ROUTES.HOME + ROUTES.ACCOUNT);
  };

  return (
    <StyledHookForm onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <Loader />
      ) : (
        <InputGroup>
          <EmailLabel>
            Email
            <StyledInput
              placeholder="Your email"
              type="email"
              {...register("email", { required: true, maxLength: 30 })}
            />
          </EmailLabel>

          <PasswordLabel>
            Password
            <StyledInput
              placeholder="Your password"
              type="password"
              {...register("password", { required: true, maxLength: 20 })}
            />
          </PasswordLabel>
        </InputGroup>
      )}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <AuthSubmitButton type="submit"> {isLoading ? "Loading..." : "Sign Up"}</AuthSubmitButton>
      <AccountExistence>
        Already have an account? <SignPageLink to={ROUTES.HOME + ROUTES.SIGN_IN}>Sign in</SignPageLink>
      </AccountExistence>
    </StyledHookForm>
  );
});
