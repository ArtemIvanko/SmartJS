import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const Switch = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">The "switch" statement</Typography>
      The switch statement is used to perform different actions based on
      different conditions. It gives you a way to write more concise code than
      using a series of if...else statements.
    </div>
    <div>
      <Typography variant="h4">Syntax</Typography>
      The <Highlight>switch</Highlight> statement is written as follows:
      <IDEEmitter code="" />
      <ul>
        <li>
          The expression is evaluated once. The value of the expression is
          compared with the values of each case.
        </li>
        <li>
          If there is a match, the block of code associated with that case is
        </li>
      </ul>
    </div>
    <div>
      <Typography variant="h4">Example</Typography>
      An example of switch (the executed code is highlighted):
      <IDEEmitter code="" />
      Here is how the switch statement works: Here the{" "}
      <Highlight>switch</Highlight> starts to evaluate the expression. The value
      of the expression is <Highlight>2</Highlight>.
      <Highlight>case 1</Highlight> is not a match, so the execution continues
      to
      <Highlight>case 2</Highlight>. This is a match, so the code block is run.
      <InfoBox
        title="Any expression can be a switch/case argument"
        content={
          <>
            Both the switch expression and the case expressions can be any type
            of expression. You can use numbers, strings, or even objects. This
            allows for very flexible code. For example, you can use a string as
            the switch expression and a string as a case expression:
            <IDEEmitter code="" />
          </>
        }
      />
    </div>
    <div>
      <Typography variant="h4">Grouping of “case”</Typography>
      If you have multiple cases that should run the same code, you can group
      them together by omitting the break statement:
      <IDEEmitter code="" />
      The <Highlight>switch</Highlight> statement starts to evaluate the
      expression. The value of the expression is <Highlight>2</Highlight>.
      <Highlight>case 1</Highlight> is not a match, so the execution continues
      to <Highlight>case 2</Highlight>. This is a match, so the code block is
      run. The <Highlight>break</Highlight> statement is omitted, so the code of
      the next case will also be executed (the{" "}
      <Highlight>console.log("Hello")</Highlight> statement). The{" "}
      <Highlight>break</Highlight> statement is omitted, so the code of the next
      case will also be executed (the{" "}
      <Highlight>console.log("World")</Highlight> statement).
    </div>
    <div>
      <Typography variant="h4">Type matters</Typography>
      The <Highlight>switch</Highlight> statement uses strict comparison (===).
      The values must be of the same type to match. A strict comparison can only
      be true if the operands are of the same type. The following example would
      not work:
      <IDEEmitter code="" />
      <ul>
        <li>
          The value of <Highlight>day</Highlight> is{" "}
          <Highlight>"Monday"</Highlight>.
        </li>
        <li>
          The first case is <Highlight>case 1</Highlight> with the value{" "}
          <Highlight>1</Highlight>.
        </li>
        <li>
          The second case is <Highlight>case "Monday"</Highlight> with the value{" "}
          <Highlight>"Monday"</Highlight>.
        </li>
        <li>
          The value of <Highlight>day</Highlight> is a string, and the value of{" "}
          <Highlight>case 1</Highlight> is a number.
        </li>
        <li>
          The <Highlight>switch</Highlight> statement uses strict comparison, so
          the values must be of the same type to match.
        </li>
        <li>
          This will display <Highlight>default</Highlight> because no case
          matches.
        </li>
      </ul>
    </div>
  </StyledGlobalPage>
);
