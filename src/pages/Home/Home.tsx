import styled from "@/DefaultTheme";
import { Typography } from "@mui/material";

export const Home = () => {
  return (
    <Root>
      <HomeMenu>
        <Typography variant="h2">JavaScript</Typography>
        <Typography>The Modern JavaScript Tutorial</Typography>
        <SubContent>
          <Typography variant="subtitle1">
            The modern JavaScript course for everyone! Master JavaScript with
            projects, challenges and theory. Many courses in one!
          </Typography>
        </SubContent>
      </HomeMenu>
      <Content>123</Content>
    </Root>
  );
};

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
}));

const HomeMenu = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "20rem",
  width: "100%",
  background: theme.palette.secondary.light,
}));

const Content = styled("div")(({ theme }) => ({
  background: theme.palette.primary.light,
  width: "100%",
  height: "100%",
}));

const SubContent = styled("div")({
  width: "300px",
  textAlign: "end",
  textTransform: "uppercase",
});
