import styled from "@/DefaultTheme";

export const Highlight = styled("strong")(({ theme }) => ({
  backgroundColor: theme.palette.divider,
  padding: "0.5rem",
  borderRadius: "4px",
  color: theme.palette.text.primary,
  fontSize: "0.8rem",
}));
