import { memo } from "react";
import { Portal } from "components";
import { PortalTarget } from "components";
import {
  ModalWrapper,
  StyledModal,
  Head,
  CloseModalBtn,
  ModalContent,
  ContentText,
  ContentTitle,
  OkModalBtn,
} from "./styles";

interface ModalProps {
  handleToggle: () => void;
}

export const Modal = memo(({ handleToggle }: ModalProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <ModalWrapper
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{
          type: "tween",
          stiffness: 5,
          damping: 1,
        }}
      >
        <StyledModal>
          <Head>
            <CloseModalBtn onClick={handleToggle} />
          </Head>
          <ModalContent>
            <ContentTitle>Password recovery</ContentTitle>
            <ContentText>
              Resetting your password is easy. For further steps, check the email and follow the
              instructions.
            </ContentText>
            <OkModalBtn onClick={handleToggle}>OK</OkModalBtn>
          </ModalContent>
        </StyledModal>
      </ModalWrapper>
    </Portal>
  );
});
