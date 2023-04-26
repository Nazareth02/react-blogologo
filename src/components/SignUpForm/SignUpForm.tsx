import { ErrorMessage, InputErrorText } from "components";
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
  NameLabel,
} from "./styles";
import { fetchSignUpUser, getUser, resetError, useAppDispatch, useAppSelector } from "store";
import { useForm, SubmitHandler } from "react-hook-form";
import { ROUTES } from "routes";
import { AuthFormValues } from "types";
import { useLocation, useNavigate } from "react-router-dom";
import { memo, useEffect } from "react";
import { validateEmail, validateName, validatePassword } from "utils";

export const SignUpForm = memo(() => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { isLoading, errorMessage } = useAppSelector(getUser);

  useEffect(() => {
    if (errorMessage) dispatch(resetError());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFormValues>();

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
          <NameLabel>
            Name
            <StyledInput placeholder="Your name" type="name" {...register("userName", validateName())} />
            {errors.userName?.message && <InputErrorText message={errors.userName.message} />}
          </NameLabel>
          <EmailLabel>
            Email
            <StyledInput placeholder="Your email" type="text" {...register("email", validateEmail())} />
            {errors.email?.message && <InputErrorText message={errors.email.message} />}
          </EmailLabel>

          <PasswordLabel>
            Password
            <StyledInput
              placeholder="Your password"
              type="password"
              {...register("password", validatePassword())}
            />
            {errors.password?.message && <InputErrorText message={errors.password.message} />}
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
