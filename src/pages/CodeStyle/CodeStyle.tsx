import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const CodeStyle = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Coding Style</Typography>
      Our code must be as clean and easy to read as possible. That is actually
      the art of programming – to take a complex task and code it in a way that
      is both correct and human-readable. A good code style greatly assists in
      that.
    </div>
    <div>
      <Typography variant="h4">Syntax</Typography>
      Here is a cheat sheet with some suggested rules (see below for more
      details):
    </div>
    <div>
      <img
        src="https://javascript.info/article/coding-style/syntax-cheatsheet.png"
        alt="Syntax Cheat Sheet"
      />
    </div>
    <div>
      Now let’s discuss the rules and reasons for them in detail.
      <InfoBox
        title="There are no “you must” rules"
        content="Nothing is set in stone here. These are style preferences, not religious dogmas."
        isImportant
      />
    </div>
    <div>
      <Typography variant="h4">Curly Braces</Typography>
      In most JavaScript projects curly braces are written in “Egyptian” style
      with the opening brace on the same line as the corresponding keyword – not
      on a new line. There should also be a space before the opening bracket,
      like this:
      <IDEEmitter code="" />A single-line construct, such as{" "}
      <Highlight>if (condition) doSomething()</Highlight>, is an important edge
      case. Should we use braces at all? Here are the annotated variants so you
      can judge their readability for yourself:
      <ol>
        <li>
          😠 Beginners sometimes do that. Bad! Curly braces are not needed:
          <IDEEmitter code="" />
        </li>
        <li>
          😠 Split to a separate line without braces. Never do that, easy to
          make an error when adding new lines:
          <IDEEmitter code="" />
        </li>
        <li>
          😏 One line without braces – acceptable, if it’s short:
          <IDEEmitter code="" />
        </li>
        <li>
          😃 The best variant:
          <IDEEmitter code="" />
        </li>
      </ol>
      For a very brief code, one line is allowed, e.g.{" "}
      <Highlight>if (cond) return null</Highlight>. But a code block (the last
      variant) is usually more readable.
    </div>
    <div>
      <Typography variant="h4">Line Length</Typography>
      No one likes to read a long horizontal line of code. It’s best practice to
      split them. For example:
      <IDEEmitter code="" />
      And, for if statements:
      <IDEEmitter code="" />
      The maximum line length should be agreed upon at the team-level. It’s
      usually 80 or 120 characters.
    </div>
    <div>
      <Typography variant="h4">Indents</Typography>
      There are two types of indents:
      <ul>
        <li>Horizontal indents (spaces in the beginning of the line)</li>
        <li>Vertical indents (empty lines between code blocks)</li>
      </ul>
    </div>
    <div>
      <Typography variant="h4">Semicolons</Typography>
      JavaScript allows omitting semicolons at the end of lines. But it’s a good
      practice to use them. They make the code more readable.
    </div>
    <div>
      <Typography variant="h4">Nesting Levels</Typography>
      Try to avoid nesting code too many levels deep. For example, in the loop,
      it’s sometimes a good idea to use the continue directive to avoid extra
      nesting. For example, instead of adding a nested if conditional like this:
      <IDEEmitter code="" />
      We can write:
      <IDEEmitter code="" />A similar thing can be done with if/else and return.
      For example, two constructs below are identical. Option 1:
      <IDEEmitter code="" />
      Option 2:
      <IDEEmitter code="" />
      The second one is more readable because the “special case” of{" "}
      <Highlight>n {"<"} 0</Highlight> is handled early on. Once the check is
      done we can move on to the “main” code flow without the need for
      additional nesting.
    </div>
    <div>
      <Typography variant="h4">Function Placement</Typography>
      If you are writing several “helper” functions and the code that uses them,
      there are three ways to organize the functions.
      <ol>
        <li>
          Declare the functions above the code that uses them:
          <IDEEmitter code="" />
        </li>
        <li>
          Or, declare the functions below the code that uses them:
          <IDEEmitter code="" />
        </li>
        <li>Mixed: a function is declared where it’s first used.</li>
      </ol>
      Most of time, the second variant is preferred. That’s because when reading
      code, we first want to know what it does. If the code goes first, then it
      becomes clear from the start. Then, maybe we won’t need to read the
      functions at all, especially if their names are descriptive of what they
      actually do.
    </div>
    <div>
      <Typography variant="h4">Style Guides</Typography>A style guide contains
      general rules about “how to write” code, e.g. which quotes to use, how
      many spaces to indent, the maximal line length, etc. A lot of minor
      things. When all members of a team use the same style guide, the code
      looks uniform, regardless of which team member wrote it. Of course, a team
      can always write their own style guide, but usually there’s no need to.
      There are many existing guides to choose from. Some popular choices:
      <ul>
        <li>Google JavaScript Style Guide</li>
        <li>Airbnb JavaScript Style Guide</li>
        <li>StandardJS</li>
      </ul>
      If you’re a novice developer, start with the cheat sheet at the beginning
      of this chapter. Then you can browse other style guides to pick up more
      ideas and decide which one you like best.
    </div>
    <div>
      <Typography variant="h4">Automated Linters</Typography>A good code style
      Linters are tools that can automatically check the style of your code and
      make improving suggestions. The great thing about them is that
      style-checking can also find some bugs, like typos in variable or function
      names. Because of this feature, using a linter is recommended even if you
      don’t want to stick to one particular “code style”. Here are some
      well-known linting tools:
      <ul>
        <li>ESLint – for JavaScript</li>
        <li>Stylelint – for CSS</li>
        <li>Pylint – for Python</li>
        <li>And many others</li>
      </ul>
      All of them can do the job. The author uses ESLint. Most linters are
      integrated with many popular editors: just enable the plugin in the editor
      and configure the style. For instance, for ESLint you should do the
      following:
      <ol>
        <li>Install ESLint globally or locally in your project.</li>
        <li>
          Create a configuration file, e.g. <Highlight>.eslintrc</Highlight>.
        </li>
        <li>Set up the rules in the configuration file.</li>
        <li>Integrate ESLint with your editor.</li>
      </ol>
      Here’s an example of an .eslintrc file:
      <IDEEmitter code="" />
      Here the directive "extends" denotes that the configuration is based on
      the “eslint:recommended” set of settings. After that, we specify our own.
      It is also possible to download style rule sets from the web and extend
      them instead. See https://eslint.org/docs/user-guide/getting-started for
      more details about installation. Also certain IDEs have built-in linting,
      which is convenient but not as customizable as ESLint.
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>A good code style is
      important. It makes the code more readable and helps to prevent errors.
      There are many style guides to choose from. The author recommends starting
      with the cheat sheet at the beginning of this chapter and then moving on
      to more detailed guides. Using a linter is also recommended. It can
      automatically check the style of your code and make suggestions for
      improvement.
    </div>
  </StyledGlobalPage>
);
