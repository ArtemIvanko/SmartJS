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
    <div>
      {isValidHash && Pages[location.hash] ? (
        <div>Pages[location.hash]()</div>
      ) : (
        <TopicsList />
      )}
    </div>
  );
};
