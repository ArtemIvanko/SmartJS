import { Divider, Typography } from "@mui/material";
import JSLogo from "@assets/images/js-logo.webp";
import styled from "@/DefaultTheme";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <LogoContainer>
        <LogoNameContainer>
          <Typography variant="h4">Creative</Typography>
          <Typography variant="caption">JavaScript</Typography>
        </LogoNameContainer>
        <LogoImageContainer>
          <LogoImage src={JSLogo} alt="JS Logo" />
        </LogoImageContainer>
      </LogoContainer>
      <Divider />
    </NavigationContainer>
  );
};

const NavigationContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  background: theme.palette.primary.main,
  color: theme.palette.secondary.main,
}));

const LogoNameContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
  padding: "0.25rem 1rem",
});

const LogoImageContainer = styled("div")({
  width: "60px",
  height: "60px",
});

const LogoImage = styled("img")({
  width: "100%",
  height: "100%",
});
