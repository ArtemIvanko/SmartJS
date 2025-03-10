import styled from "@/DefaultTheme";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { TopicsList } from "@shared/TopicsList";
import { SECTIONS } from "@/common/types";
import { Pages } from "@/common/types/Pages/pages";

export const Home = () => {
  const location = useLocation();

  const isValidHash = SECTIONS.flatMap((section) =>
    section.tabs.flatMap((tab) => tab.links),
  ).some((link) => link.href === location.hash);

  return (
    <Root>
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

      {isValidHash && Pages[location.hash] ? (
        Pages[location.hash]()
      ) : (
        <TopicsList />
      )}
    </Root>
  );
};

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
});

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
