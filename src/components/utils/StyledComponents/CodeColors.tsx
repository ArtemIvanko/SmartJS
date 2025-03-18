import styled from "@/DefaultTheme";

export const Tags = styled("code")(({ theme }) => ({
  padding: "0.2rem 0.5rem",
  borderRadius: "4px",
  backgroundColor: theme.palette.divider,
  color: theme.palette.warning.light,
  fontSize: "0.8rem",
}));

export const Method = styled("code")(({ theme }) => ({
  padding: "0.2rem 0.5rem",
  borderRadius: "4px",
  backgroundColor: theme.palette.divider,
  color: theme.palette.success.light,
  fontSize: "0.8rem",
}));

export const Property = styled("code")(({ theme }) => ({
  padding: "0.2rem 0.5rem",
  borderRadius: "4px",
  backgroundColor: theme.palette.divider,
  color: theme.palette.info.main,
  fontSize: "0.8rem",
}));

export const String = styled("code")(({ theme }) => ({
  padding: "0.2rem 0.5rem",
  borderRadius: "4px",
  backgroundColor: theme.palette.divider,
  color: theme.palette.text.primary,
  fontSize: "0.8rem",
}));

export const Highlight = styled("strong")(({ theme }) => ({
  backgroundColor: theme.palette.divider,
  padding: "0.5rem",
  borderRadius: "4px",
  color: theme.palette.text.primary,
  fontSize: "0.8rem",
}));
