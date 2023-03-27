import React from "react";
import { BurgerModalWrapper } from "../styles/header.styled";

interface IBurgerModalProps {
  className?: string;
  children: React.ReactNode;
}

const BurgerModal = ({ className, children }: IBurgerModalProps) => {
  return (
    <BurgerModalWrapper className={className}>{children}</BurgerModalWrapper>
  );
};

export default BurgerModal;
