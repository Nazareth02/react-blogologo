import { memo } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useForm } from "react-hook-form";
import { AuthSubmitButton, InputGroup, StyledHookForm, StyledInput } from "./styles";

export const SignUpPage = memo(() => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ email, password }: any) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log(userCredential.user.email);
    });
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
