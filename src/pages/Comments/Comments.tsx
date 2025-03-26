import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";

export const Comments = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Comments</Typography>
      As we know from the chapter Code structure, comments can be single-line:
      starting with <Highlight>//</Highlight> and multiline:{" "}
      <Highlight>/* ... */</Highlight>. We normally use them to describe how and
      why the code works. At first sight, commenting might be obvious, but
      novices in programming often use them wrongly.
    </div>
    <div>
      <Typography variant="h4">Bad comments</Typography>
      Novices tend to use comments to explain “what is going on in the code”.
      Like this:
      <IDEEmitter code="" />
      But in good code, the amount of such “explanatory” comments should be
      minimal. Seriously, the code should be easy to understand without them.
      There’s a great rule about that: “if the code is so unclear that it
      requires a comment, then maybe it should be rewritten instead”.
    </div>
    <div>
      <Typography variant="h4">Recipe: factor out functions</Typography>
      Sometimes it’s beneficial to replace a code piece with a function, like
      here:
      <IDEEmitter code="" />
      The better variant, with a factored out function isPrime:
      <IDEEmitter code="" />
      Now we can understand the code easily. The function itself becomes the
      comment. Such code is called self-descriptive.
    </div>
    <div>
      <Typography variant="h4">Recipe: create functions</Typography>
      And if we have a long “code sheet” like this:
      <IDEEmitter code="" />
      Then it might be a better variant to refactor it into functions like:
      <IDEEmitter code="" />
      Once again, functions themselves tell what’s going on. There’s nothing to
      comment. And also the code structure is better when split. It’s clear what
      every function does, what it takes and what it returns. In reality, we
      can’t totally avoid “explanatory” comments. There are complex algorithms.
      And there are smart “tweaks” for purposes of optimization. But generally
      we should try to keep the code simple and self-descriptive.
    </div>
    <div>
      <Typography variant="h4">Good comments</Typography>
      So, explanatory comments are usually bad. Which comments are good?
      <strong>Describe the architecture</strong>
      Provide a high-level overview of components, how they interact, what’s the
      control flow in various situations… In short – the bird’s eye view of the
      code. There’s a special language UML to build high-level architecture
      diagrams explaining the code. Definitely worth studying.
      <strong>Document function parameters and usage</strong>
      There’s a special syntax JSDoc to document a function: usage, parameters,
      returned value. For instance:
      <IDEEmitter code="" />
      Such comments allow us to understand the purpose of the function and use
      it the right way without looking in its code. By the way, many editors
      like WebStorm can understand them as well and use them to provide
      autocomplete and some automatic code-checking. Also, there are tools like
      JSDoc 3 that can generate HTML-documentation from the comments. You can
      read more information about JSDoc at https://jsdoc.app.
      <strong>Why is the task solved this way?</strong>
      What’s written is important. But what’s not written may be even more
      important to understand what’s going on. Why is the task solved exactly
      this way? The code gives no answer. If there are many ways to solve the
      task, why this one? Especially when it’s not the most obvious one. Without
      such comments the following situation is possible:
      <ol>
        <li>
          A developer writes a piece of code. It works, but it’s not obvious why
          it’s written this way.
        </li>
        <li>
          Another developer sees the code, doesn’t understand why it’s written
          this way, and rewrites it in a more “understandable” way.
        </li>
        <li>
          The first developer sees the new code, doesn’t understand why it’s
          written this way, and rewrites it back.
        </li>
      </ol>
      Comments that explain the solution are very important. They help to
      continue development the right way. Any subtle features of the code? Where
      they are used? If the code has anything subtle and counter-intuitive, it’s
      definitely worth commenting.
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>
      Comments are a powerful tool to have in our arsenal. They can make the
      code more readable and understandable. But they can also make it messy and
      redundant. So, we should use them wisely. The best code is
      self-descriptive and comments are only used where necessary. Good comments
      allow us to maintain the code well, come back to it after a delay and use
      it more effectively.
      <ul>
        <strong>Comment this:</strong>
        <li>
          When you need to explain “why” something is done in a certain way.
        </li>
        <li>When you need to explain the architecture.</li>
        <li>When you need to explain the usage of functions.</li>
        <li>When you need to explain the subtle features of the code.</li>
      </ul>
      <ul>
        <strong>Avoid comments:</strong>
        <li>
          That explain “what” the code does. The code should be
          self-descriptive.
        </li>
        <li>
          That are used to hide bad code. If you need a comment to explain what
          the code does, then the code should be rewritten.
        </li>
      </ul>
    </div>
  </StyledGlobalPage>
);
