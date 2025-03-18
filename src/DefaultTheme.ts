import {
  createBreakpoints,
  createStyled,
  MUIStyledCommonProps,
} from "@mui/system";
import { createTheme, responsiveFontSizes } from "@mui/material";

export enum FontFamily {
  Primary = "'Ysabeau SC', sans-serif",
  Secondary = "'Belanosima', sans-serif",
}

const basicHeadingStyles = {
  fontFamily: FontFamily.Secondary,
  fontWeight: 500,
};

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
});

const scrollbarStyles = {
  "*::-webkit-scrollbar": {
    display: "none",
  },
};

let defaultTheme = createTheme({
  breakpoints,
  palette: {
    primary: {
      main: "#1E1E1E",
      light: "whitesmoke",
      dark: "#004DA7",
      logo: "#FF5733",
      bg: "#EAEAEA",
    },
    secondary: {
      main: "#FAFAFA",
      light: "cornsilk",
      dark: "#8BC6BB",
      bg: "#999999",
    },
    error: {
      main: "#B51010",
    },
    info: {
      main: "rgba(0,0,0,0.1)",
    },
    success: {
      main: "#148314",
    },
    warning: {
      main: "#FFD700",
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
    },
    background: {
      default: "#FAFAFA",
    },
    divider: "#efefef",
  },
  typography: {
    fontFamily: FontFamily.Primary,
    h1: basicHeadingStyles,
    h2: basicHeadingStyles,
    h3: basicHeadingStyles,
    h4: { fontWeight: 600 },
    h5: basicHeadingStyles,
    h6: basicHeadingStyles,
    subtitle1: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 100,
      fontSize: "1rem",
      fontFamily: FontFamily.Secondary,
    },
    button: {
      fontFamily: FontFamily.Secondary,
      fontWeight: 600,
    },
    overline: {
      fontFamily: FontFamily.Secondary,
      fontWeight: 600,
    },
    caption: {
      fontFamily: FontFamily.Secondary,
      textTransform: "uppercase",
      fontSize: "0.5rem",
      fontWeight: 200,
      letterSpacing: "0.5rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: scrollbarStyles,
    },
  },
});

defaultTheme = responsiveFontSizes(defaultTheme);

const _styled = createStyled({ defaultTheme });

const styled = ((component: any, config: any) => {
  config = {
    shouldForwardProp: (prop: string) => !prop.startsWith("$"),
    ...config,
  };
  return _styled(component, config);
}) as typeof _styled;

export type ThemeType = typeof defaultTheme;

export interface IStyledCommonProps extends MUIStyledCommonProps<ThemeType> {
  theme: ThemeType;
}

export { defaultTheme };

export default styled;
