import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const LogicalOperators = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Logical Operators</Typography>
      There are four logical operators in JavaScript: <Highlight>
        ||
      </Highlight>{" "}
      (OR), <Highlight>&&</Highlight> (AND), <Highlight>!</Highlight> (NOT),
      <Highlight>??</Highlight> (Nullish Coalescing). Here we cover the first
      three, the <Highlight>??</Highlight> operator is in the next article.
      Although they are called “logical”, they can be applied to values of any
      type, not only boolean. Their result can also be of any type. Let’s see
      the details.
    </div>
    <div>
      <Typography variant="h4">OR (||)</Typography>
      The “OR” operator is represented with two vertical line symbols:
      <IDEEmitter code="" />
      In the case of <Highlight>||</Highlight>, the result is{" "}
      <Highlight>true</Highlight> unless both values are{" "}
      <Highlight>false</Highlight>. Let’s see the examples:
      <IDEEmitter code="" />
      As we can see, the result is <Highlight>true</Highlight> except for the
      last case, where both variables are <Highlight>false</Highlight>. For
      example:
      <IDEEmitter code="" />
      Most of the time, <Highlight>||</Highlight> is used in an if statement to
      test if a variable has a value. Here’s an example:
      <IDEEmitter code="" />
      We can pass the first truthy value to a variable using the OR operator:
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography variant="h4">OR “||” finds the first truthy value</Typography>
      The logic described above is somewhat classical. Now, let’s see the real
      power of <Highlight>||</Highlight>. The “OR” <Highlight>||</Highlight>{" "}
      operator does the following:
      <ul>
        <li>Evaluates operands from left to right.</li>
        <li>
          For each operand, converts it to a boolean. If the result is true,
        </li>
        <li>Stops and returns the original value of that operand.</li>
      </ul>
      In other words, <Highlight>||</Highlight> returns the first truthy value
      from the list of operands. Or, if no truthy value is found, it returns the
      last value. For instance:
      <IDEEmitter code="" />
      In the example above, the first truthy value is <Highlight>1</Highlight>.
      It gets returned immediately, and the rest of the operands are ignored.
      The result is the same as if we wrote:
      <IDEEmitter code="" />
      This leads to some interesting usage compared to a “pure, classical,
      boolean-only OR”.
      <ol>
        <li>
          <Highlight>
            Getting the first truthy value from a list of variables or
            expressions.
          </Highlight>
          For instance, let’s say we need to choose the first truthy value from
          a list of variables or expressions. Here is how it can be done:
          <IDEEmitter code="" />
        </li>
        <li>
          <Highlight>Short-circuit evaluation</Highlight> is the ability to stop
          evaluation of an expression when the result is already clear. Another
          feature of <Highlight>||</Highlight> is that it executes only as many
          operands as it needs to. That is, it stops when it finds the first
          truthy value and returns it. This is called “short-circuit”
          evaluation. For instance:
          <IDEEmitter code="" />
        </li>
      </ol>
    </div>
    <div>
      <Typography variant="h4">AND (&&)</Typography>
      The AND operator is represented with two ampersands:
      <IDEEmitter code="" />
      In the case of <Highlight>&&</Highlight>, the result is{" "}
      <Highlight>true</Highlight> if both values are <Highlight>true</Highlight>
      . Otherwise, the result is <Highlight>false</Highlight>. Let’s see the
      examples:
      <IDEEmitter code="" />
      As we can see, the result is <Highlight>true</Highlight> only when both
      variables are <Highlight>true</Highlight>. For example:
      <IDEEmitter code="" />
      The AND <Highlight>&&</Highlight> operator does the following:
      <ul>
        <li>Evaluates operands from left to right.</li>
        <li>
          If an operand is <Highlight>false</Highlight>, stops and returns that
          operand.
        </li>
        <li>
          If all operands have been evaluated (i.e. all were{" "}
          <Highlight>true</Highlight>
          ), returns the last operand.
        </li>
      </ul>
      In other words, <Highlight>&&</Highlight> returns the first falsy value or
      the last value if none were found. For instance:
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography variant="h4">
        AND “&&” finds the first falsy value or the last value
      </Typography>
      The AND operator <Highlight>&&</Highlight> does the following:
      <ul>
        <li>Evaluates operands from left to right.</li>
        <li>
          If an operand is <Highlight>false</Highlight>, returns it immediately.
        </li>
        <li>
          If no <Highlight>false</Highlight> value, returns the last value.
        </li>
      </ul>
      In other words, <Highlight>&&</Highlight> returns the first falsy value or
      the last value if none were found. For instance:
      <IDEEmitter code="" />
      In the example above, the first falsy value is <Highlight>0</Highlight>.
      The evaluation stops at it, and the value gets returned. The rest of the
      operands are ignored. The result is the same as if we wrote:
      <IDEEmitter code="" />
      <InfoBox
        title="Precedence of AND && is higher than OR ||"
        content={
          <>
            The precedence of AND <Highlight>&&</Highlight> is higher than OR .
            So the code <Highlight>a && b || c && d</Highlight> is essentially
            the same as if the <Highlight>&&</Highlight> were in parentheses:{" "}
            <Highlight>(a && b) || (c && d)</Highlight>.
          </>
        }
      />
      <InfoBox
        title="Don’t replace if with || or &&"
        content={
          <>
            Sometimes, people use <Highlight>||</Highlight> instead of if For
            example:
            <IDEEmitter code="" />
            The action in the <Highlight>||</Highlight> chain is executed only
            if a is falsy. But if a is falsy, it’s better to make it explicit
            using if:
            <IDEEmitter code="" />
            Although the code is longer, it’s more readable and easier to
            understand.
          </>
        }
        isImportant
      />
    </div>
    <div>
      <Typography variant="h4">NOT (!)</Typography>
      The boolean NOT operator is represented with an exclamation sign:
      <IDEEmitter code="" />
      The operator accepts a single argument and does the following:
      <ul>
        <li>
          If the operand is true, returns <Highlight>false</Highlight>.
        </li>
        <li>
          If the operand is false, returns <Highlight>true</Highlight>.
        </li>
      </ul>
      For instance:
      <IDEEmitter code="" />A double NOT <Highlight>!!</Highlight> is sometimes
      used for converting a value to boolean type:
      <IDEEmitter code="" />
      That is, the first NOT converts the value to a boolean and returns the
      inverse, and the second NOT inverses it again. In the end, we have a plain
      value-to-boolean conversion.
    </div>
  </StyledGlobalPage>
);
