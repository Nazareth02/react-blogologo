import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "components";
import { memo, useEffect, useState } from "react";
import { ResetEmail, ResetInput, ResetSubmitButton, StyledResetForm } from "./styles";
import { ResetFormValues } from "types";
import { validateEmail } from "utils";
import { InputErrorText, Loader } from "components";
import { fetchResetUser, getUser, resetError, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "routes";

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

  useEffect(() => {
    if (errorMessage) dispatch(resetError());
  }, [dispatch]);

  const onSubmit: SubmitHandler<ResetFormValues> = async (authFormValues) => {
    await dispatch(fetchResetUser(authFormValues)).unwrap();
    // await toggleModal()

    await reset();
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
