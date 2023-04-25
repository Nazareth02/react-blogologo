import { memo } from "react";
import { ResetEmail, ResetInput, ResetSubmitButton, StyledResetForm } from "./styles";
import { InputErrorText, Loader } from "components";
import { ErrorMessage } from "components";
import { fetchResetUser, getUser, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { ROUTES } from "routes";
import { ResetFormValues } from "types";
import { validateEmail } from "utils";

export const ResetForm = memo(() => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { isLoading, errorMessage } = useAppSelector(getUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetFormValues>();

  const onSubmit: SubmitHandler<ResetFormValues> = async (authFormValues) => {
    await dispatch(fetchResetUser(authFormValues)).unwrap();
    await reset();
    // await navigate(ROUTES.HOME + ROUTES.ACCOUNT);
  };

  return (
    <StyledResetForm onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <Loader />
      ) : (
        <ResetEmail>
          Email
          <ResetInput placeholder="Your email" type="text" {...register("email", validateEmail())} />
          {errors.email?.message && <InputErrorText message={errors.email.message} />}
        </ResetEmail>
      )}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <ResetSubmitButton type="submit"> {isLoading ? "Loading..." : "Reset password"}</ResetSubmitButton>
    </StyledResetForm>
  );
});
