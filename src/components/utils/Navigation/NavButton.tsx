import styled from "@/DefaultTheme";
import { Button } from "@mui/material";
import { ReactNode } from "react";

interface NavButtonProps {
  onClick: () => void;
  $direction: "prev" | "next";
  children: ReactNode;
}

export const NavButton = ({ onClick, $direction }: NavButtonProps) => (
  <StyledButton onClick={onClick} $direction={$direction}>
    {$direction === "prev" ? "<" : ">"}
  </StyledButton>
);

const StyledButton = styled(Button)<{ $direction: "prev" | "next" }>(
  ({ $direction }) => ({
    position: "fixed",
    top: "50%",
    zIndex: 1000,
    fontSize: "4rem",
    right: $direction === "next" ? "0" : "auto",
  }),
);
