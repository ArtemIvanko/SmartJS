self.console = {
  log: (...args) => self.postMessage({ type: "log", message: args.join(" ") }),
  warn: (...args) =>
    self.postMessage({ type: "warn", message: args.join(" ") }),
  error: (...args) =>
    self.postMessage({ type: "error", message: args.join(" ") }),
  table: (data) =>
    self.postMessage({ type: "table", message: JSON.stringify(data, null, 2) }),
};

self.onmessage = (e) => {
  try {
    const result = eval(e.data);
    self.postMessage({ type: "result", message: String(result) });
  } catch (error) {
    self.postMessage({ type: "error", message: error.message });
  }
};
