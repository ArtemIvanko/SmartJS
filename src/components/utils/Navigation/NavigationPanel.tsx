import styled from "@/DefaultTheme";
import { Typography } from "@mui/material";
import { Link } from "@shared/utils";
import { TabSection } from "@shared/TopicsList";
import { SECTIONS } from "@/common/types";

export const NavigationPanel = () => (
  <Root>
    <NavigationLinks />
    <NavSection>
      {SECTIONS.map(({ id, intro, links }) => (
        <NavItem key={id}>
          <TabSection id={id} />
          <Typography>{intro}</Typography>
          <StyledList>
            {links.map(({ href, label }) => (
              <li key={label}>
                <Link href={href}>
                  <Typography variant="body2">{label}</Typography>
                </Link>
              </li>
            ))}
          </StyledList>
        </NavItem>
      ))}
    </NavSection>
  </Root>
);

const NavigationLinks = () => (
  <div>
    {SECTIONS.map(({ id, title }) => (
      <Link key={id} href={`#${id}`}>
        <Typography variant="overline">{title}</Typography>
      </Link>
    ))}
  </div>
);

const Root = styled("div")({
  display: "flex",
  height: "100%",
  width: "100%",
  flexDirection: "column",
});

const NavSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  padding: "1rem",
  background: "whitesmoke",
});

const NavItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "0.5rem",
  background: "lightgray",
});

const StyledList = styled("ul")({
  columnCount: 3,
});
