import { Typography } from "@mui/material";

interface ITagSectionProps {
  id: string;
}

export const TabSection = ({ id }: ITagSectionProps) => {
  return (
    <div id={id}>
      <Typography variant="h5">The JavaScript language</Typography>
      <Typography variant="subtitle2">
        Here we learn JavaScript, starting from scratch and go on to advanced
        concepts like OOP. We concentrate on the language itself here, with the
        minimum of environment-specific notes.
      </Typography>
    </div>
  );
};
