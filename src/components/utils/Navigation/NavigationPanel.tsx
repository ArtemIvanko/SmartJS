import styled from "@/DefaultTheme";
import { Typography } from "@mui/material";
import { Link } from "@shared/utils";
import { SECTIONS } from "@/common/types";

export const NavigationPanel = () => (
  <Root>
    <NavigationLinks />
  </Root>
);

const NavigationLinks = () => (
  <div>
    {SECTIONS.map(({ id, intro, tabs }) => (
      <>
        <Typography variant="overline">{intro}</Typography>
        <ArticleList>
          {tabs.map((tab) => (
            <div key={tab.id}>
              <Typography variant="subtitle2">{tab.intro}</Typography>
              <LinksList>
                {tab.links.map((link) => (
                  <NavItem key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </NavItem>
                ))}
              </LinksList>
            </div>
          ))}
        </ArticleList>
      </>
    ))}
  </div>
);

const Root = styled("div")({
  display: "flex",
  height: "100%",
  width: "100%",
  flexDirection: "column",
});

const NavItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "0.5rem",
  background: "lightgray",
});

const ArticleList = styled("ul")({
  columnCount: 1,
});

const LinksList = styled("ul")({
  columnCount: 3,
});
