import { useEffect, useRef, useState } from "react";
import styled from "@/DefaultTheme";

export const WebConsole = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<
    { type: string; message: string; command?: string }[]
  >([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    inputRef.current?.focus();

    workerRef.current = new Worker("/worker.js");

    workerRef.current.onmessage = (e) => {
      setOutput((prev) => [...prev, e.data]);
    };

    return () => workerRef.current?.terminate();
  }, []);

  const executeCommand = () => {
    if (!input.trim()) return;

    workerRef.current?.postMessage(input);

    setOutput((prev) => [...prev, { type: "command", message: input }]);
    setHistory((prev) => [...prev, input]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      executeCommand();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        setHistoryIndex((prev) => prev + 1);
        setInput(history[history.length - 1 - (historyIndex + 1)] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        setHistoryIndex((prev) => prev - 1);
        setInput(history[history.length - historyIndex] || "");
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <ConsoleContainer>
      <OutputContainer>
        {output.map((entry, index) => (
          <Output key={index} type={entry.type}>
            {entry.type === "command" && (
              <Command>&gt; {entry.message}</Command>
            )}
            {entry.type === "result" && <Result>{entry.message}</Result>}
            {entry.type === "log" && <Log>{entry.message}</Log>}
            {entry.type === "warn" && <Warn>{entry.message}</Warn>}
            {entry.type === "error" && <Error>{entry.message}</Error>}
            {entry.type === "table" && (
              <Table>
                <pre>{entry.message}</pre>
              </Table>
            )}
          </Output>
        ))}
      </OutputContainer>
      <InputContainer>
        <Prompt>&gt;</Prompt>
        <Input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          autoFocus
        />
      </InputContainer>
    </ConsoleContainer>
  );
};

const ConsoleContainer = styled("div")`
  width: 1000%;
  max-width: 800px;
  background: #222;
  color: #fff;
  font-family: monospace;
  padding: 10px;
  border-radius: 5px;
  overflow-y: auto;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const OutputContainer = styled("div")`
  flex: 1;
  overflow-y: auto;
`;

const Output = styled("div")<{ type: string }>`
  margin-bottom: 5px;
  color: ${({ type }) =>
    type === "log"
      ? "#0f0"
      : type === "warn"
        ? "orange"
        : type === "error"
          ? "red"
          : "#fff"};
`;

const Command = styled("div")`
  color: #0f0;
`;

const Result = styled("div")`
  color: white;
`;

const Log = styled("div")`
  color: lightgreen;
`;

const Warn = styled("div")`
  color: yellow;
`;

const Error = styled("div")`
  color: red;
`;

const Table = styled("div")`
  color: cyan;
  font-family: monospace;
`;

const InputContainer = styled("div")`
  display: flex;
  align-items: center;
`;

const Prompt = styled("div")`
  color: #0f0;
  margin-right: 5px;
`;

const Input = styled("textarea")`
  width: 100%;
  background: transparent;
  color: white;
  border: none;
  font-family: monospace;
  outline: none;
  resize: none;
  font-size: 16px;
`;
