import styled from "@/DefaultTheme";
import { ReactNode } from "react";

interface IDEEmitterProps {
  code: string | ReactNode;
  result?: string;
}

export const IDEEmitter = ({ code, result }: IDEEmitterProps) => (
  <Root>
    <CodeContainer>
      <pre>
        <code>{code}</code>
      </pre>
    </CodeContainer>
    <div>{result}</div>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  border: `1px solid ${theme.palette.divider}`,
  gap: "1rem",
  margin: "1rem 0",
}));

const CodeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "1rem",
  borderRadius: "4px",
  backgroundColor: theme.palette.divider,
}));
