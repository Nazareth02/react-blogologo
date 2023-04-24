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
  NameLabel,
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
          <NameLabel>
            Name
            <StyledInput
              placeholder="Your name"
              type="name"
              {...register("userName", {
                required: "Name is required",
                maxLength: { value: 20, message: "Too many symbols" },
              })}
            />
          </NameLabel>
          <EmailLabel>
            Email
            <StyledInput
              placeholder="Your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                maxLength: { value: 30, message: "*max characters: 30" },
                pattern: { value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Enter a valid email" },
              })}
            />
          </EmailLabel>

          <PasswordLabel>
            Password
            <StyledInput
              placeholder="Your password"
              type="password"
              {...register("password", {
                required: "Password is required",
                maxLength: { value: 30, message: "*max characters: 30" },
                minLength: {
                  value: 6,
                  message: "*min characters: 6",
                },
              })}
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
