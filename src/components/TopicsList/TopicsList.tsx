import { Typography } from "@mui/material";
import styled from "@/DefaultTheme";
import { NavigationPanel } from "@shared/utils";

export const TopicsList = () => {
  return (
    <Content>
      <HomeMenu>
        <Typography variant="h2">JavaScript</Typography>
        <Typography>The Modern JavaScript Tutorial</Typography>
        <SubContent>
          <Typography variant="subtitle1">
            The modern JavaScript course for everyone! Master JavaScript with
            projects, challenges, and theory. Many courses in one!
          </Typography>
        </SubContent>
      </HomeMenu>
      <Typography variant="h5">
        How it's done now. From the basics to advanced topics with simple, but
        detailed explanations.
      </Typography>
      <Typography variant="caption">Table of contents</Typography>
      <Typography variant="subtitle2">
        Main course contains 2 parts which cover JavaScript as a programming
        language and working with a browser. There are also additional series of
        thematic articles.
      </Typography>
      <NavigationPanel />
    </Content>
  );
};

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

const SubContent = styled("div")({
  width: "300px",
  textAlign: "end",
  textTransform: "uppercase",
});

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "auto",
  height: "100%",
  background: theme.palette.primary.light,
  gap: "1rem",
  padding: "3rem",
}));
