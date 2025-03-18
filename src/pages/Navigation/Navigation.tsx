import { Divider, Typography } from "@mui/material";
import JSLogo from "@assets/images/js-logo.webp";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import styled from "@/DefaultTheme";
import { BRAND_NAME, BRAND_TAGLINE } from "@/common/constant";
import { Link } from "@shared/utils";

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
            <Link href={"/"}>
              <LogoNameContainer>
                <Typography variant="h4">{BRAND_NAME}</Typography>
                <Typography variant="caption">{BRAND_TAGLINE}</Typography>
              </LogoNameContainer>
              <LogoImageContainer>
                <LogoImage src={JSLogo} alt="JS Logo" />
              </LogoImageContainer>
            </Link>
          </LogoContainer>
        </NavigationItem>
        <DarkModeIcon />
      </NavigationContent>
    </NavigationContainer>
  );
};

const NavigationContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
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
