import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const Structure = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Code structure</Typography>
      <Typography>
        The first thing we’ll study is the building blocks of code.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Statements</Typography>
      <Typography>
        Statements are syntax constructs and commands that perform actions.
      </Typography>
      <Typography>
        We’ve already seen a statement,{" "}
        <Highlight>alert('Hello, world!')</Highlight>, which shows the message
        “Hello, world!”. We can have as many statements in our code as we want.
        Statements can be separated with a semicolon. For example, here we split
        “Hello World” into two alerts:
      </Typography>
    </div>
    <div>
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography>
        Usually, statements are written on separate lines to make the code more
        readable:
      </Typography>
    </div>
    <div>
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography variant="h4">Semicolons</Typography>
      <Typography>
        A semicolon may be omitted in most cases when a line break exists. This
        would also work:
      </Typography>
    </div>
    <div>
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography>
        Here, JavaScript interprets the line break as an “implicit” semicolon.
        This is called an automatic semicolon insertion.{" "}
        <strong>
          In most cases, a newline implies a semicolon. But “in most cases” does
          not mean “always”!
        </strong>{" "}
        There are cases when a newline does not mean a semicolon. For example:
      </Typography>
    </div>
    <div>
      <IDEEmitter code="" />
    </div>
    <Typography>
      The code outputs <Highlight>6</Highlight> because JavaScript does not
      insert semicolons here. It is intuitively obvious that if the line ends
      with a plus <Highlight>"+"</Highlight>, then it is an “incomplete
      expression”, so a semicolon there would be incorrect. And in this case,
      that works as intended.{" "}
      <strong>
        But there are situations where JavaScript “fails” to assume a semicolon
        where it is really needed.
      </strong>{" "}
      Errors which occur in such cases are quite hard to find and fix.
    </Typography>
    <div>
      <InfoBox
        title="An example of an error"
        content={
          <>
            <Typography>
              If you’re curious to see a concrete example of such an error,
              check this code out:
            </Typography>
            <IDEEmitter code="" />
            <Typography>
              No need to think about the meaning of the brackets{" "}
              <Highlight>[]</Highlight> and <Highlight>forEach</Highlight> yet.
              We’ll study them later. For now, just remember the result of
              running the code: it shows <Highlight>Hello</Highlight>, then{" "}
              <Highlight>1</Highlight>, then <Highlight>2</Highlight>. Now let’s
              remove the semicolon after the <Highlight>alert</Highlight>:
            </Typography>
            <IDEEmitter code="" />
            <Typography>
              The difference compared to the code above is only one character:
              the semicolon at the end of the first line is gone. If we run this
              code, only the first <Highlight>Hello</Highlight> shows (and
              there’s an error, you may need to open the console to see it).
              There are no numbers any more. That’s because JavaScript does not
              assume a semicolon before square brackets{" "}
              <Highlight>[...]</Highlight>. So, the code in the last example is
              treated as a single statement. Here’s how the engine sees it:
            </Typography>
            <IDEEmitter code="" />
            <Typography>
              Looks weird, right? Such merging in this case is just wrong. We
              need to put a semicolon after <Highlight>alert</Highlight> for the
              code to work correctly. This can happen in other situations also.
            </Typography>
          </>
        }
      />
    </div>
    <div>
      <Typography>
        We recommend putting semicolons between statements even if they are
        separated by newlines. This rule is widely adopted by the community.
        Let’s note once again – it is possible to leave out semicolons most of
        the time. But it’s safer – especially for a beginner – to use them.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Comments</Typography>
      <Typography>
        As time goes on, programs become more and more complex. It becomes
        necessary to add comments which describe what the code does and why.
        Comments can be put into any place of a script. They don’t affect its
        execution because the engine simply ignores them.{" "}
        <strong>
          One-line comments start with two forward slash characters{" "}
        </strong>
        <Highlight>//</Highlight>. The rest of the line is a comment. It may
        occupy a full line of its own or follow a statement. Like here:
      </Typography>
    </div>
    <div>
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography>
        <strong>
          Multiline comments start with a forward slash and an asterisk{" "}
          <Highlight>/*</Highlight> and end with an asterisk and a forward slash{" "}
          <Highlight>*/</Highlight>.
        </strong>
        Like this:
      </Typography>
    </div>
    <div>
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography>
        The content of comments is ignored, so if we put code inside{" "}
        <Highlight>/* … */</Highlight>, it won’t execute. Sometimes it can be
        handy to temporarily disable a part of code:
      </Typography>
    </div>
    <div>
      <IDEEmitter code="" />
    </div>
    <div>
      <InfoBox
        title="Use hotkeys!"
        content="In most editors, a line of code can be commented out by pressing the Ctrl+/ hotkey for a single-line comment and something like Ctrl+Shift+/ – for multiline comments (select a piece of code and press the hotkey). For Mac, try Cmd instead of Ctrl and Option instead of Shift."
      />
    </div>
    <div>
      <InfoBox
        title="Nested comments are not supported!"
        content={
          <>
            <Typography>
              There may not be <Highlight>/*...*/</Highlight> inside another{" "}
              <Highlight>/*...*/</Highlight>. Such code will die with an error:
            </Typography>
            <IDEEmitter code="" />
          </>
        }
        isImportant
      />
    </div>
    <div>
      <Typography>Please, don’t hesitate to comment your code.</Typography>
      <Typography>
        Comments increase the overall code footprint, but that’s not a problem
        at all. There are many tools which minify code before publishing to a
        production server. They remove comments, so they don’t appear in the
        working scripts. Therefore, comments do not have negative effects on
        production at all. Later in the tutorial there will be a chapter Code
        quality that also explains how to write better comments.
      </Typography>
    </div>
  </StyledGlobalPage>
);
