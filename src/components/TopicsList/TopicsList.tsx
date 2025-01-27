import { Typography } from "@mui/material";
import styled from "@/DefaultTheme";
import { NavigationPanel } from "@shared/utils";

export const TopicsList = () => {
  return (
    <Content>
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

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "auto",
  height: "100%",
  background: theme.palette.primary.light,
  gap: "1rem",
  padding: "3rem",
}));
