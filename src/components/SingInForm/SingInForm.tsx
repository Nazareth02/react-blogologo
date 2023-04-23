import { ErrorMessage } from "components";
import { Loader } from "components";
import { memo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes";
import { useAppDispatch, useAppSelector, getUser, fetchSignUpUser } from "store";
import { AuthFormValues } from "types";
import {
  AccountExistenceSpan,
  EmailSpan,
  InputWrapper,
  PasswordSpan,
  SignUpLink,
  SingInInput,
  StyledSingInForm,
  SubmitButton,
} from "./styles";

export const SignInForm = memo(() => {
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
    <StyledSingInForm onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <Loader />
      ) : (
        <InputWrapper>
          <EmailSpan>
            Email
            <SingInInput
              placeholder="Your email"
              type="email"
              {...register("email", { required: true, maxLength: 30 })}
            />
          </EmailSpan>

          <PasswordSpan>
            Password
            <SingInInput
              placeholder="Your password"
              type="password"
              {...register("password", { required: true, maxLength: 20 })}
            />
          </PasswordSpan>
        </InputWrapper>
      )}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <SubmitButton type="submit"> {isLoading ? "Loading..." : "Submit form"}</SubmitButton>
      <AccountExistenceSpan>
        Don’t have an account? <SignUpLink to={ROUTES.HOME + ROUTES.SIGN_UP}>Sign Up</SignUpLink>
      </AccountExistenceSpan>
    </StyledSingInForm>
  );
});
