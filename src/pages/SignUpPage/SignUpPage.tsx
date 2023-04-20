import { memo } from "react";
import { AuthSubmitButton, InputGroup, StyledHookForm, StyledInput } from "./styles";
import { fetchSignUpUser, getUser, useAppDispatch, useAppSelector } from "store";
import { useForm } from "react-hook-form";

export const SignUpPage = memo(() => {
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector(getUser);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    dispatch(fetchSignUpUser(data));
  };

  return (
    <StyledHookForm onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <StyledInput type="email" {...register("email", { required: true, maxLength: 30 })} />
        <StyledInput type="password" {...register("password", { required: true, maxLength: 20 })} />
      </InputGroup>

      <AuthSubmitButton type="submit">Submit form</AuthSubmitButton>
    </StyledHookForm>
  );
});
