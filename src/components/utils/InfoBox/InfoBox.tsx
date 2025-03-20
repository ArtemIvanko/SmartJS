import { Tooltip, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import styled from "@/DefaultTheme";
import { ReactNode } from "react";

interface InfoBoxProps {
  title: string;
  content: string | ReactNode;
  isImportant?: boolean;
}

export const InfoBox = ({ title, content, isImportant }: InfoBoxProps) => (
  <Root>
    <Typography variant="h5">
      <TitleBox>
        <Tooltip
          title={title}
          children={isImportant ? <WarningIcon /> : <InfoIcon />}
        />
        {title}
      </TitleBox>
    </Typography>
    <Typography variant="body2">{content}</Typography>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  border: `0.5rem solid ${theme.palette.secondary.bg}`,
  borderRadius: "0.5rem",
  padding: "1rem",
  margin: "1rem 0",
}));

const TitleBox = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
});
