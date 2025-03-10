import { Tooltip, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import styled from "@/DefaultTheme";

interface InfoBoxProps {
  title: string;
  content: string;
}

export const InfoBox = ({ title, content }: InfoBoxProps) => (
  <Root>
    <Typography variant="h5">
      <TitleBox>
        <Tooltip title={title} children={<InfoIcon />} />
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
}));

const TitleBox = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
});
