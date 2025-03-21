import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const Loops = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Loops: while and for</Typography>
      We often need to repeat actions. For example, outputting goods from a list
      one after another or just running the same code for each number from 1 to
      10. Loops are a way to repeat the same code multiple times.
      <InfoBox
        title="The for…of and for…in loops"
        content={
          <>
            A small announcement for advanced readers. This article covers only
            basic loops: <Highlight>while</Highlight>,{" "}
            <Highlight>do..while</Highlight> and{" "}
            <Highlight>for(..;..;..)</Highlight>. If you came to this article
            searching for other types of loops, here are the pointers:
            <ul>
              <li>See for…in to loop over object properties.</li>
              <li>
                See for…of and iterables for looping over arrays and iterable
                objects.
              </li>
            </ul>
            Otherwise, please read on.
          </>
        }
      />
    </div>
    <div>
      <Typography variant="h4">The “while” loop</Typography>
      The <Highlight>while</Highlight> loop has the following syntax:
      <IDEEmitter code="" />
      While the condition is truthy, the code from the loop body is executed.
      For instance, the loop below outputs <Highlight>i</Highlight> while{" "}
      <Highlight>{"i < 3"}</Highlight>:
      <IDEEmitter code="" />A single execution of the loop body is called an
      iteration. The loop in the example above makes three iterations. If i++
      was missing from the example above, the loop would repeat (in theory)
      forever. In practice, the browser provides ways to stop such loops, and in
      server-side JavaScript, we can kill the process. Any expression or
      variable can be a loop condition, not just comparisons: the condition is
      evaluated and converted to a boolean by while. For instance, a shorter way
      to write while (i != 0) is while (i):
      <IDEEmitter code="" />
      <InfoBox
        title="Curly braces are not required for a single-line body"
        content={
          <>
            If the loop body has a single statement, we can omit the curly
            braces {"{…}"}:
            <IDEEmitter code="" />
          </>
        }
      />
    </div>
    <div>
      <Typography variant="h4">The “do…while” loop</Typography>
      The <Highlight>do..while</Highlight> loop is a variant of the while loop.
      This loop will execute the code block once, before checking if the
      condition is true, then it will repeat the loop as long as the condition
      is true. The syntax:
      <IDEEmitter code="" />
      The loop will first execute the body, then check the condition, and, while
      it’s truthy, execute it again and again. For example:
      <IDEEmitter code="" />
      This form of syntax should only be used when you want the body of the loop
      to execute at least once regardless of the condition being truthy.
      Usually, the other form is preferred: while(…) {"{…}"}.
    </div>
    <div>
      <Typography variant="h4">The “for” loop</Typography>
      The <Highlight>for</Highlight> loop is the most concise loop in
      JavaScript. It includes three expressions and a statement:
      <IDEEmitter code="" />
      The loop below runs <Highlight>i</Highlight> from 0 up to (but not
      including) 3:
      <IDEEmitter code="" />
      Let’s examine the for statement part-by-part:
      {/*//TODO: Create a table*/}
      The general loop algorithm works like this:
      <IDEEmitter code="" />
      The <Highlight>for</Highlight> loop is often a better choice than a{" "}
      <Highlight>while</Highlight> loop because it keeps the loop counter
      <Highlight>i</Highlight> within the loop construct. That’s less room for
      error. The <Highlight>for</Highlight> loop declares the variable right in
      the loop. The variable is visible only inside the loop. If we don’t need
      the current <Highlight>i</Highlight> value inside the loop, we can omit
      the second part:
      <IDEEmitter code="" />
      <InfoBox
        title="Inline variable declaration"
        content={
          <>
            Here, the “counter” variable i is declared right in the loop. This
            is called an “inline” variable declaration. Such variables are
            visible only inside the loop.
            <IDEEmitter code="" />
            Instead of defining a variable, we could use an existing one:
            <IDEEmitter code="" />
          </>
        }
      />
    </div>
    <div>
      <Typography variant="h4">Skipping parts</Typography>
      Any part of for can be skipped. For instance, to make an infinite loop:
      <IDEEmitter code="" />
      To skip the initialization and/or finalization, we can also use
      <Highlight>;</Highlight>:
      <IDEEmitter code="" />
      This loop is an optimized version of the previous one. It does the same,
      but looks a bit more concise. We can actually remove all parts:
      <IDEEmitter code="" />
      This creates an infinite loop, exactly the same as while (true).
    </div>
    <div>
      <Typography variant="h4">Breaking the loop</Typography>
      Normally, a loop exits when its condition becomes falsy. But we can force
      the exit at any time using the special <Highlight>break</Highlight>{" "}
      directive. For example, the loop below asks the user for a series of
      numbers, “breaking” when no number is entered:
      <IDEEmitter code="" />
      The <Highlight>break</Highlight> directive is activated at the line (*) if
      the user enters an empty line or cancels the input. It stops the loop
      immediately, passing control to the first line after the loop. Here the
      loop is broken, and the control goes to the alert. The{" "}
      <Highlight>break</Highlight> directive is the only way to exit a loop
      before the loop condition becomes falsy.
    </div>
    <div>
      <Typography variant="h4">Continue to the next iteration</Typography>
      The <Highlight>continue</Highlight> directive is a “lighter version” of
      break. It doesn’t stop the whole loop. Instead, it stops the current
      iteration and forces the loop to start a new one (if the condition
      allows). The loop below uses <Highlight>continue</Highlight> to output
      only odd values:
      <IDEEmitter code="" />
      The <Highlight>continue</Highlight> directive is a more elegant way to
      skip the current iteration than using <Highlight>if</Highlight>.
      <InfoBox
        title="The continue directive helps decrease nesting"
        content={
          <>
            A loop that shows odd values could look like this:
            <IDEEmitter code="" />
            From a technical point of view, this is identical to the example
            above. Surely, we can just wrap the code in an if block instead of
            using continue. But as a side effect, this created one more level of
            nesting (the alert call inside the curly braces). If the code inside
            of if is longer than a few lines, that may decrease the overall
            readability.
          </>
        }
      />
      <InfoBox
        title="No break/continue to the right side of ‘?’"
        content={
          <>
            Please note that break/continue aren’t allowed inside a ternary
            operator <Highlight>?</Highlight>. For example, the following code
            will not work as expected:
            <IDEEmitter code="" />
            The <Highlight>break</Highlight> directive has to be inside the loop
            construct, and the construct can be a block{" "}
            <Highlight>{"{…}"}</Highlight> or a single statement. It can’t be
            part of an expression.
          </>
        }
        isImportant
      />
    </div>
    <div>
      <Typography variant="h4">Labels for break/continue</Typography>
      Sometimes we need to exit from multiple nested loops at once. Or to
      continue outer loops from within an inner one. We can do that using a
      label. A label is an identifier with a colon before a loop:
      <IDEEmitter code="" />
      The <Highlight>break</Highlight> directive can be used with a label. In
      the example below, when <Highlight>break outer</Highlight> is executed, it
      breaks out of both loops at once:
      <IDEEmitter code="" />
      The same label can be used for <Highlight>continue</Highlight> as well. It
      causes the next iteration of the labeled loop:
      <IDEEmitter code="" />
      Labels do not allow to “jump” anywhere. They only provide a way to refer
      to a loop from inside it. An example of an incorrect use of a label:
      <IDEEmitter code="" />
      <InfoBox
        title="Labels do not allow to “jump” anywhere"
        content={
          <>
            Labels do not allow us to jump into an arbitrary place in the code.
            For example, it is impossible to do this:
            <IDEEmitter code="" />
            The goto directive is a JavaScript reserved word. It was never
            implemented in JavaScript, and it is reserved for possible future
            use. So, there’s no way to jump to a label, and labels can only be
            used with break and continue.
          </>
        }
        isImportant
      />
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>
      Loops are a way to repeat the same code multiple times. There are several
      types of loops in JavaScript. Here we discuss the{" "}
      <Highlight>while</Highlight>, <Highlight>do..while</Highlight>, and{" "}
      <Highlight>for</Highlight> loops.
      <ul>
        <li>
          The <Highlight>while</Highlight> loop loops through a block of code as
          long as a specified condition is true.
        </li>
        <li>
          The <Highlight>do..while</Highlight> loop is a variant of the while
          loop. This loop will execute the code block once, before checking if
          the condition is true, then it will repeat the loop as long as the
          condition is true.
        </li>
        <li>
          The <Highlight>for</Highlight> loop is the most concise loop in
          JavaScript. It includes three expressions and a statement.
        </li>
      </ul>
    </div>
  </StyledGlobalPage>
);
