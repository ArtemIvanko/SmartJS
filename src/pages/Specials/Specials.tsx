import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";

export const Specials = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">JavaScript specials</Typography>
      This chapter describes the most important features of JavaScript. It
      explains the core concepts, such as variables, data types, and operators,
      and describes the control structures that form the core of the language.
      The chapter also explains the functions and objects that are built into
      the language, and shows how to use them to perform tasks and manipulate
      data.
    </div>
    <div>
      <Typography variant="h4">Code Structure</Typography>
      Statements are delimited with a semicolon:
      <IDEEmitter code="" />
      Usually, a line-break is also treated as a delimiter, so that would also
      work:
      <IDEEmitter code="" />
      That’s called “automatic semicolon insertion”. Sometimes it doesn’t work,
      for instance:
      <IDEEmitter code="" />
      Most codestyle guides agree that we should put a semicolon after each
      statement. Semicolons are not required after code blocks{" "}
      <Highlight>{"{ ... }"}</Highlight> and syntax constructs with them like
      loops:
      <IDEEmitter code="" />
      …But even if we can put an “extra” semicolon somewhere, that’s not an
      error. It will be ignored. More in: Code structure.
    </div>
    <div>
      <Typography variant="h4">Strict Mode</Typography>
      Strict mode is a way to introduce better error-checking into your code.
      When you use strict mode, you cannot use undeclared variables. It also
      prevents you from using reserved words as variable names. Strict mode is a
      way to introduce better error-checking into your code. When you use strict
      mode, you cannot use undeclared variables. It also prevents you from using
      reserved words as variable names. To fully enable all features of modern
      JavaScript, we should start scripts with{" "}
      <Highlight>"use strict"</Highlight>.
      <IDEEmitter code="" />
      The directive must be at the top of a script or at the beginning of a
      function body. Without "use strict", everything still works, but some
      features behave in a different way. For example, the value of{" "}
      <Highlight>this</Highlight> in a function will be the global object, not{" "}
      <Highlight>undefined</Highlight>.
    </div>
    <div>
      <Typography variant="h4">Variables</Typography>A variable is a “named
      storage” for data. We can use variables to store goodies, visitors, and
      other data. To create a variable in JavaScript, use the{" "}
      <Highlight>let</Highlight> keyword. The statement below creates (in other
      words: declares) a variable with the name “message”:
      <IDEEmitter code="" />
      Now, we can put some data into it by using the <Highlight>
        =
      </Highlight>{" "}
      operator:
      <IDEEmitter code="" />
      To declare a constant (unchanging) variable, use{" "}
      <Highlight>const</Highlight> instead of <Highlight>let</Highlight>:
      <IDEEmitter code="" />
      An attempt to change a constant variable will result in an error.
    </div>
    <div>
      <Typography variant="h4">Interaction: alert, prompt, confirm</Typography>
      There are three functions that show messages:
      <ul>
        <li>
          <Highlight>alert</Highlight> – shows a message.
        </li>
        <li>
          <Highlight>prompt</Highlight> – shows a message asking the user to
          input text. It returns the text or, if Cancel button or Esc is
          clicked,
          <Highlight>null</Highlight>.
        </li>
        <li>
          <Highlight>confirm</Highlight> – shows a message and waits for the
          user to press “OK” or “Cancel”. It returns <Highlight>true</Highlight>{" "}
          for OK and <Highlight>false</Highlight> for Cancel/Esc.
        </li>
      </ul>
      The syntax:
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography variant="h4">Operators</Typography>
      An operator is a keyword or character that tells the JavaScript engine to
      perform a specific operation. For example, the <Highlight>
        +
      </Highlight>{" "}
      operator adds two numbers together. JavaScript has many operators for
      performing different tasks. The most common operators are:
      <ul>
        <li>
          <Highlight>+</Highlight> – Addition
        </li>
        <li>
          <Highlight>-</Highlight> – Subtraction
        </li>
        <li>
          <Highlight>*</Highlight> – Multiplication
        </li>
        <li>
          <Highlight>/</Highlight> – Division
        </li>
        <li>
          <Highlight>%</Highlight> – Modulus
        </li>
        <li>
          <Highlight>++</Highlight> – Increment
        </li>
        <li>
          <Highlight>--</Highlight> – Decrement
        </li>
        <li>
          <Highlight>**</Highlight> – Exponentiation
        </li>
      </ul>
    </div>
    <div>
      <Typography variant="h4">Loops</Typography>
      Loops are a way to repeat the same code multiple times. JavaScript has
      three types of loops:
      <ul>
        <li>
          <Highlight>for</Highlight> – loops through a block of code a number of
          times
        </li>
        <li>
          <Highlight>while</Highlight> – loops through a block of code while a
          specified condition is true
        </li>
        <li>
          <Highlight>do...while</Highlight> – loops through a block of code once
          and then repeats the loop while a specified condition is true
        </li>
      </ul>
    </div>
    <div>
      <Typography variant="h4">The “switch” construct</Typography>
      The “switch” construct can replace multiple if checks. It uses === (strict
      equality) for comparisons. For instance:
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography variant="h4">Functions</Typography>
      A function is a block of code that can be called by name. The code inside
      a function is executed when the function is invoked. JavaScript functions
      do not perform type checking on the passed arguments. JavaScript functions
      do not perform type checking on the passed arguments. You can call a
      function by using the function name followed by parentheses. Function
      names can contain letters, digits, underscores, and dollar signs (same
      rules as variables). The parentheses may include parameter names separated
      by commas:
      <IDEEmitter code="" />
    </div>
  </StyledGlobalPage>
);
