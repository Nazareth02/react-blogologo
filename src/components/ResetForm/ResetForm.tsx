import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage, Modal } from "components";
import { memo, useEffect } from "react";
import { ResetEmail, ResetInput, ResetSubmitButton, StyledResetForm } from "./styles";
import { ResetFormValues } from "types";
import { validateEmail } from "utils";
import { InputErrorText, Loader } from "components";
import { fetchResetUser, getUser, resetError, useAppDispatch, useAppSelector } from "store";
import { useToggle } from "hooks";

export const ResetForm = memo(() => {
  const [isOpen, setOpen] = useToggle();

  const dispatch = useAppDispatch();

  const { isLoading, errorMessage } = useAppSelector(getUser);

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  const handleToggleModal = () => {
    setOpen();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetFormValues>();

  const onSubmit: SubmitHandler<ResetFormValues> = async (authFormValues) => {
    await dispatch(fetchResetUser(authFormValues)).unwrap();
    await setOpen();
    await reset();
  };

  const handleError = () => {
    errorMessage && <ErrorMessage message={errorMessage} />;
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
      <ResetSubmitButton type="submit" onSubmit={handleError}>
        {" "}
        {isLoading ? "Loading..." : "Reset password"}
      </ResetSubmitButton>
      {isOpen && <Modal handleToggle={handleToggleModal} />}
    </StyledResetForm>
  );
});
