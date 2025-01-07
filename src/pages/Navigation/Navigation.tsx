import { Divider, Typography } from "@mui/material";
import JSLogo from "@assets/images/js-logo.webp";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import styled from "@/DefaultTheme";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationContent>
        <NavigationItem>
          <IconContainer>
            <LanguageIcon />
            EN
          </IconContainer>
          <Divider orientation="vertical" flexItem />
          <LogoContainer>
            <LogoNameContainer>
              <Typography variant="h4">Creative</Typography>
              <Typography variant="caption">JavaScript</Typography>
            </LogoNameContainer>
            <LogoImageContainer>
              <LogoImage src={JSLogo} alt="JS Logo" />
            </LogoImageContainer>
          </LogoContainer>
        </NavigationItem>
        <DarkModeIcon />
      </NavigationContent>
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

const NavigationContent = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.25rem 1rem",
});

const NavigationItem = styled("div")({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
});

const IconContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "0 0.25rem",
  alignItems: "center",
});

const LogoNameContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
});

const LogoImageContainer = styled("div")({
  width: "60px",
  height: "60px",
});

const LogoImage = styled("img")({
  width: "100%",
  height: "100%",
});
