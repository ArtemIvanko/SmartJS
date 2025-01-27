import styled from "@/DefaultTheme";
import { Typography } from "@mui/material";
import { TopicsList } from "@shared/TopicsList";

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
      <TopicsList />
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

const SubContent = styled("div")({
  width: "300px",
  textAlign: "end",
  textTransform: "uppercase",
});
