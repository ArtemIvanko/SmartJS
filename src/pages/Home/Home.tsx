import { useLocation } from "react-router-dom";
import { TopicsList } from "@shared/TopicsList";
import { SECTIONS } from "@/common/types";
import { Pages } from "@/common/types/Pages/pages";
import styled from "@/DefaultTheme";

export const Home = () => {
  const location = useLocation();

  const isValidHash = SECTIONS.flatMap((section) =>
    section.tabs.flatMap((tab) => tab.links),
  ).some((link) => link.href === location.hash);

  return (
    <div>
      {isValidHash && Pages[location.hash] ? (
        <Root>
          {Pages[location.hash]()}
        </Root>
      ) : (
        <TopicsList />
      )}
    </div>
  );
};

const Root = styled("div")({
  display: "flex",
  gap: "2rem",
  width: "100%",
  height: "100vh",
  paddingBottom: "5rem",
});
