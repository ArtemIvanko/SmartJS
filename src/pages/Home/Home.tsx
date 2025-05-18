import { useLocation, useNavigate } from "react-router-dom";
import { TopicsList } from "@shared/TopicsList";
import { SECTIONS } from "@/common/types";
import { Pages } from "@/common/types/Pages/pages";
import { WebConsole } from "@/pages/WebConsole/WebConsole";
import styled from "@/DefaultTheme";
import { useCallback, useState } from "react";
import { NavButton } from "@shared/utils";

export const Home = () => {
  const location = useLocation();
  const history = useNavigate();
  const [currentLocation, setCurrentLocation] = useState(location.hash);

  const isValidHash = SECTIONS.flatMap((section) =>
    section.tabs.flatMap((tab) => tab.links),
  ).some((link) => link.href === location.hash);

  const handleNav = useCallback(
    (direction: "prev" | "next") => {
      const currentIndex = SECTIONS.flatMap((section) =>
        section.tabs.flatMap((tab) => tab.links),
      ).findIndex((link) => link.href === currentLocation);
      const nextIndex =
        direction === "prev" ? currentIndex - 1 : currentIndex + 1;
      const nextLocation = SECTIONS.flatMap((section) =>
        section.tabs.flatMap((tab) => tab.links),
      )[nextIndex]?.href;
      if (nextLocation) {
        setCurrentLocation(nextLocation);
        history(nextLocation);
      }
    },
    [currentLocation, history],
  );

  return (
    <div>
      {isValidHash && Pages[location.hash] ? (
        <>
          <NavButton onClick={() => handleNav("prev")} $direction="prev" />
          <Root>
            <WebConsole />
            {Pages[location.hash]()}
          </Root>
          <NavButton onClick={() => handleNav("next")} $direction="next" />
        </>
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
