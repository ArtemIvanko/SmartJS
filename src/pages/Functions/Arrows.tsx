import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const Arrows = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Arrow Functions</Typography>
      There’s another very simple and concise syntax for creating functions,
      that’s often better than Function Expressions. It’s called “arrow
      functions”, because it looks like this:
      <IDEEmitter code="" />
      This creates a function <Highlight>func</Highlight> that accepts arguments{" "}
      <Highlight>arg1..argN</Highlight>, then evaluates the{" "}
      <Highlight>expression</Highlight> on the right side with their use and
      returns its result. In other words, it’s the shorter version of:
      <IDEEmitter code="" />
      Let’s see a concrete example:
      <IDEEmitter code="" />
      As you can see, the arrow function is much shorter than{" "}
      <Highlight>sayHi = function</Highlight>. The arrow function is clearly
      better, because:
      <ul>
        <li>It’s shorter</li>
        <li>
          It has no <Highlight>this</Highlight>
        </li>
        <li>It’s more readable</li>
      </ul>
      The last point is especially important. When a function is short, it’s
      easier to understand what it does. Arrow functions are usually single-line
      expressions, so they are more compact.
    </div>
    <div>
      <Typography variant="h4">Multiline arrow functions</Typography>
      If we need to write a multiline function, we should use a “normal”
      function with <Highlight>return</Highlight>:
      <IDEEmitter code="" />
      Here <Highlight>return</Highlight> is required. But if we use curly braces
      <Highlight>{"{"}</Highlight> <Highlight>{"}"}</Highlight>, then we need an
      explicit <Highlight>return</Highlight>:
      <IDEEmitter code="" />
      <InfoBox
        title="More to come"
        content="Here we praised arrow functions for brevity. But that’s not all! Arrow functions have other interesting features. To study them in-depth, we first need to get to know some other aspects of JavaScript, so we’ll return to arrow functions later in the chapter Arrow functions revisited. For now, we can already use arrow functions for one-line actions and callbacks."
      />
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>
      Arrow functions are handy for one-liners. They come in two flavors:
      <ul>
        <li>
          <Highlight>Without curly braces</Highlight>: (arg1, arg2, ...argN)
          =&gt; expression – the right side is an expression: the function
          evaluates it and returns the result.
        </li>
        <li>
          <Highlight>With curly braces</Highlight>: (arg1, arg2, ...argN) =&gt;{" "}
          {"{"} body {"}"}. In this case, we need an explicit{" "}
          <Highlight>return</Highlight> to return something.
        </li>
      </ul>
    </div>
  </StyledGlobalPage>
);
