import { memo } from "react";
import { AuthSubmitButton, InputGroup, StyledHookForm, StyledInput } from "./styles";
import { fetchSignUpUser, getUser, useAppDispatch, useAppSelector } from "store";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage, Loader } from "components";
import { useNavigate } from "react-router-dom";
import { AuthFormValues } from "types/types";

export const SignUpPage = memo(() => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { isLoading, errorMessage } = useAppSelector(getUser);

  const { register, handleSubmit, reset } = useForm<AuthFormValues>();

  const onSubmit: SubmitHandler<AuthFormValues> = async (authFormValues) => {
    await dispatch(fetchSignUpUser(authFormValues)).unwrap();
    await reset();
    await navigate("/");
  };

  return (
    <StyledHookForm onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <Loader />
      ) : (
        <InputGroup>
          <StyledInput type="email" {...register("email", { required: true, maxLength: 30 })} />
          <StyledInput type="password" {...register("password", { required: true, maxLength: 20 })} />
        </InputGroup>
      )}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <AuthSubmitButton type="submit"> {isLoading ? "Loading..." : "Submit form"}</AuthSubmitButton>
    </StyledHookForm>
  );
});
