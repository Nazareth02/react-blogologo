import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media } from "ui";

const ModalWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${Color.MODAL};
  opacity: 1;
  visibility: visible;
`;

const StyledModal = styled.div`
  max-width: 600px;
  max-height: 400px;
  display: block;
  margin: -200px 0 0 -300px;
  position: relative;
  top: 50%;
  left: 50%;
  background: ${Color.WHITE};
  border-radius: 15px;
  opacity: 1;
  ${Media.TABLET} {
    max-width: 300px;
    max-height: 200px;
    margin: -150px 0 0 -150px;
  }
`;

const Head = styled.div`
  max-width: 100%;
  max-height: 32px;
  padding: 24px 3%;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
  background: ${Color.PRIMARY};
  ${Media.TABLET} {
    padding: 18px 3%;
  }
`;

const CloseModalBtn = styled.button`
  width: 32px;
  height: 32px;
  float: right;
  cursor: pointer;
  &::before,
  ::after {
    content: "";
    width: 28px;
    height: 3px;
    display: block;
    background: ${Color.WHITE};
    ${Media.TABLET} {
      width: 20px;
      height: 3px;
    }
  }
  &::before {
    margin-top: -18px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &::after {
    margin-top: -3px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
`;

const ModalContent = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 50px;
  padding: 5%;
  ${Media.TABLET} {
    grid-gap: 10px;
  }
`;

const ContentTitle = styled.span`
  padding-bottom: 7px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  border-bottom: 2px solid ${Color.NAV};

  color: ${Color.SECONDARY};

  ${Media.TABLET} {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
`;
const ContentText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${Color.SECONDARY};

  ${Media.TABLET} {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
`;

const OkModalBtn = styled.button`
  justify-self: end;
  padding: 8px 20px;
  background: ${Color.PRIMARY};
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: ${Color.WHITE};

  border-radius: 4px;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
  }

  ${Media.TABLET} {
    margin-top: -10px;
    padding: 4px 10px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
`;

export {
  ModalWrapper,
  StyledModal,
  Head,
  CloseModalBtn,
  ModalContent,
  ContentText,
  ContentTitle,
  OkModalBtn,
};
