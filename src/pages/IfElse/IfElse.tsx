import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const IfElse = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Conditional branching: if, '?'</Typography>
      Sometimes, we need to perform different actions based on different
      conditions. To do that, we can use the <Highlight>if</Highlight> statement
      and the conditional operator <Highlight>?</Highlight>, that’s also called
      a “question mark” operator.
    </div>
    <div>
      <Typography variant="h4">The "if" statement</Typography>
      The <Highlight>if(...)</Highlight> statement evaluates a condition in
      parentheses and, if the result is <Highlight>true</Highlight>, executes a
      block of code. For example:
      <IDEEmitter code="" />
      In the example above, the condition is a simple equality check (
      <Highlight>year == 2015</Highlight>), but it can be much more complex. If
      we want to execute more than one statement, we have to wrap our code block
      inside curly braces:
      <IDEEmitter code="" />
      We recommend wrapping your code block with curly braces{" "}
      <Highlight>{}</Highlight> every time you use an <Highlight>if</Highlight>{" "}
      statement, even if there is only one statement to execute. Doing so
      improves readability.
    </div>
    <div>
      <Typography variant="h4">Boolean conversion</Typography>
      The <Highlight>if</Highlight> statement evaluates the expression in the
      set of parentheses and converts the result to a boolean. In other words, a
      value is considered <Highlight>false</Highlight> if it is:
      <ul>
        <li>
          <Highlight>0</Highlight>
        </li>
        <li>
          <Highlight>null</Highlight>
        </li>
        <li>
          <Highlight>undefined</Highlight>
        </li>
        <li>
          <Highlight>false</Highlight>
        </li>
        <li>
          <Highlight>NaN</Highlight>
        </li>
        <li>an empty string: ""</li>
      </ul>
      So, the code under this condition would never execute:
      <IDEEmitter code="" />
      …and inside this condition – it always will:
      <IDEEmitter code="" />
      We can also pass a pre-evaluated boolean value to if, like this:
    </div>
    <div>
      <Typography variant="h4">The "else" clause</Typography>
      The <Highlight>if</Highlight> statement can contain an optional{" "}
      <Highlight>else</Highlight> block. It executes when the condition is{" "}
      <Highlight>false</Highlight>. For example:
      <IDEEmitter code="" />
      If we have more than two conditions to check, we can use the{" "}
      <Highlight>else if</Highlight> clause. For example:
      <IDEEmitter code="" />
      In the example above, the first <Highlight>if</Highlight> block checks
      whether <Highlight>num</Highlight> is less than zero. If it is, the code
      inside the block will execute. If not, the <Highlight>else if</Highlight>{" "}
      block will check whether <Highlight>num</Highlight> is greater than zero.
      If it is, the code inside the block will execute. If not, the code inside
      the <Highlight>else</Highlight> block will execute.
    </div>
    <div>
      <Typography variant="h4">The "conditional" operator '?'</Typography>
      The conditional operator <Highlight>?</Highlight> is a more concise way to
      write an <Highlight>if</Highlight> statement. It is also called a
      “question mark” operator. The operator is represented by a question mark
      <Highlight>?</Highlight> and a colon <Highlight>:</Highlight>. The syntax
      is:
      <IDEEmitter code="" />
      The code above is equivalent to:
      <IDEEmitter code="" />
      The conditional operator is sometimes used as a shortcut for an{" "}
      <Highlight>if</Highlight> statement. For example:
      <IDEEmitter code="" />
      The code above is equivalent to:
      <IDEEmitter code="" />
      The conditional operator can also be used for multiple branches. For
      example:
      <IDEEmitter code="" />
      The code above is equivalent to:
      <IDEEmitter code="" />
      <InfoBox
        title="Please note:"
        content={
          <>
            <Typography>
              In the example above, you can avoid using the question mark
              operator because the comparison itself returns true/false:
            </Typography>
            <IDEEmitter code="" />
          </>
        }
      />
    </div>
    <div>
      <Typography variant="h4">Several conditions: “else if”</Typography>
      If we have several conditions to check, we can use the{" "}
      <Highlight>else if</Highlight> clause. For example:
      <IDEEmitter code="" />
      In the example above, the first <Highlight>if</Highlight> block checks
      whether <Highlight>num</Highlight> is less than zero. If it is, the code
      inside the block will execute. If not, the <Highlight>else if</Highlight>{" "}
      block will check whether <Highlight>num</Highlight> is greater than zero.
      If it is, the code inside the block will execute. If not, the code inside
      the <Highlight>else</Highlight> block will execute.
    </div>
    <div>
      <Typography variant="h4">Multiple "?"</Typography>
      A sequence of question mark operators can return a value that depends on
      more than one condition. For example:
      <IDEEmitter code="" />
      The code above is equivalent to:
      <IDEEmitter code="" />
      The code above is equivalent to:
      <IDEEmitter code="" />
      It may be difficult at first to grasp what’s going on. But after a closer
      look, we can see that it’s just an ordinary sequence of tests:
      <ol>
        <li>
          The first question mark checks whether <Highlight>age</Highlight> is
          less than 3.
        </li>
        <li>
          If it is, the result is <Highlight>"Hi, baby!"</Highlight>.
        </li>
        <li>
          Otherwise, the second question mark checks whether{" "}
          <Highlight>age</Highlight> is less than 18.
        </li>
        <li>
          If it is, the result is <Highlight>"Hello!"</Highlight>.
        </li>
        <li>
          Otherwise, the result is <Highlight>"Greetings!"</Highlight>.
        </li>
      </ol>
      Here’s how this looks using if..else:
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography variant="h4">Non-traditional use of ‘?’</Typography>
      The conditional operator <Highlight>?</Highlight> allows us to evaluate
      expressions based on a condition. But it’s not limited to that. The
      operator can also return a value. For example:
      <IDEEmitter code="" />
      Depending on the condition <Highlight>company == 'Netscape'</Highlight>,
      either the first or the second expression after the{" "}
      <Highlight>?</Highlight> gets executed and shows an alert. We don’t assign
      a result to a variable here. Instead, we execute different code depending
      on the condition.{" "}
      <strong>
        It’s not recommended to use the question mark operator in this way.
      </strong>{" "}
      The notation is shorter than the equivalent <Highlight>if</Highlight>{" "}
      statement, which appeals to some programmers. But it is less readable.
      Here is the same code using <Highlight>if</Highlight> for comparison:
      <IDEEmitter code="" />
      Our eyes scan the code vertically. Code blocks which span several lines
      are easier to understand than a long, horizontal instruction set. The
      purpose of the question mark operator ? is to return one value or another
      depending on its condition. Please use it for exactly that. Use if when
      you need to execute different branches of code.
    </div>
  </StyledGlobalPage>
);
