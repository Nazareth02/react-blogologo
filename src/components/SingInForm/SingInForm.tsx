import { ErrorMessage, InputErrorText } from "components";
import { Loader } from "components";
import { memo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes";
import { useAppDispatch, useAppSelector, getUser, fetchSignInUser } from "store";
import { SingInFormValues } from "types";
import {
  AccountExistenceSpan,
  EmailSpan,
  InputWrapper,
  PasswordSpan,
  ResetPasswordLink,
  SignUpLink,
  SingInInput,
  StyledSingInForm,
  SubmitButton,
} from "./styles";
import { validateEmail } from "utils";

export const SignInForm = memo(() => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { isLoading, errorMessage } = useAppSelector(getUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SingInFormValues>();

  const onSubmit: SubmitHandler<SingInFormValues> = async (authFormValues) => {
    await dispatch(fetchSignInUser(authFormValues)).unwrap();
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
            <SingInInput placeholder="Your email" type="text" {...register("email", validateEmail())} />
            {errors.email?.message && <InputErrorText message={errors.email.message} />}
          </EmailSpan>

          <PasswordSpan>
            Password
            <SingInInput
              placeholder="Your password"
              type="password"
              {...register("password", { required: true, maxLength: 20 })}
            />
            {errors.password?.message && <InputErrorText message={errors.password.message} />}
          </PasswordSpan>
        </InputWrapper>
      )}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <ResetPasswordLink to={ROUTES.HOME + ROUTES.RESET}>Forgot password?</ResetPasswordLink>
      <SubmitButton type="submit"> {isLoading ? "Loading..." : "Sign In"}</SubmitButton>
      <AccountExistenceSpan>
        Don’t have an account? <SignUpLink to={ROUTES.HOME + ROUTES.SIGN_UP}>Sign Up</SignUpLink>
      </AccountExistenceSpan>
    </StyledSingInForm>
  );
});
