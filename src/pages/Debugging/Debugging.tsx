import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const Debugging = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Debugging</Typography>
      Before writing more complex code, let’s talk about debugging. Debugging is
      the process of finding and fixing errors within a script. All modern
      browsers and most other environments support debugging tools – a special
      UI in developer tools that makes debugging much easier. It also allows to
      trace the code step by step to see what exactly is going on. We’ll be
      using Chrome here, because it has enough features, most other browsers
      have a similar process.
    </div>
    <div>
      <Typography variant="h4">The “sources” panel</Typography>
      Your Chrome version may look a little bit different, but it still should
      be obvious what’s there.
      <ol>
        <li>Open the page with the script you need to debug.</li>
        <li>
          Press F12, then select <Highlight>“Console”</Highlight> in the menu.
        </li>
        <li>
          Click the <Highlight>“sources”</Highlight> tab.
        </li>
      </ol>
      Here’s what you should see if you are doing it for the first time:
    </div>
    <div>
      <img
        src="https://javascript.info/article/debugging-chrome/1-chrome-sources.png"
        alt="Chrome sources"
      />
    </div>
    <div>
      The toggler button opens the tab with files. Let’s click it and select
      hello.js in the tree view. Here’s what should show up:
    </div>
    <div>
      <img
        src="https://javascript.info/article/debugging-chrome/2-chrome-sources.png"
        alt="Chrome sources"
      />
    </div>
    <div>
      The Sources panel has 3 parts:
      <ol>
        <li>
          The left panel displays the script files. If you click on a file, its
          content will be shown in the editor.
        </li>
        <li>
          The central panel is the editor. You can change the code here, add
          console.log calls, etc.
        </li>
        <li>The right panel shows the call stack, variables, and so on.</li>
      </ol>
    </div>
    <div>
      <Typography variant="h4">Console</Typography>
      If we press <Highlight>Esc</Highlight>, then a console opens below. We can
      type commands there and press <Highlight>Enter</Highlight> to execute.
      After a statement is executed, its result is shown below. For example,
      here <Highlight>1+2</Highlight> results in <Highlight>3</Highlight>, while
      the function call <Highlight>hello("debugger")</Highlight> returns
      nothing, so the result is <Highlight>undefined</Highlight>:
    </div>
    <div>
      <Typography variant="h4">Breakpoints</Typography>
      Let’s examine what’s going on within the code of the example page. In
      hello.js, click at line number 4. Yes, right on the 4 digit, not on the
      code. Congratulations! You’ve set a breakpoint. Please also click on the
      number for line 8. It should look like this (blue is where you should
      click):
    </div>
    <div>
      <img
        src="https://javascript.info/article/debugging-chrome/3-chrome-sources.png"
        alt="Chrome sources"
      />
    </div>
    <div>
      A breakpoint is a point of code where the debugger will automatically
      pause the JavaScript execution. While the code is paused, we can examine
      current variables, execute commands in the console etc. In other words, we
      can debug it. We can always find a list of breakpoints in the right panel.
      That’s useful when we have many breakpoints in various files. It allows us
      to:
      <ul>
        <li>Enable/disable breakpoints.</li>
        <li>Remove breakpoints.</li>
        <li>Jump to the line where the breakpoint is set.</li>
      </ul>
      <InfoBox
        title="Conditional breakpoints"
        content="
      Right click on the line number allows to create a conditional breakpoint. It only triggers when the given expression, that you should provide when you create it, is truthy. That’s handy when we need tostop only for a certain variable value or for certain function parameters."
      />
    </div>
    <div>
      <Typography variant="h4">The command "debugger"</Typography>
      We can also pause the code by using the debugger command in it, like this:
      <IDEEmitter code="" />
      Such command works only when the development tools are open, otherwise the
      browser ignores it.
    </div>
    <div>
      <Typography variant="h4">Pause and look around</Typography>
      Now, let’s reload the page. The script execution will pause at the first
      line of the script. We can see the paused script in the editor:
    </div>
    <div>
      <img
        src="https://javascript.info/article/debugging-chrome/4-chrome-sources.png"
        alt="Chrome sources"
      />
    </div>
    <div>
      Please open the informational dropdowns to the right (labeled with
      arrows). They allow you to examine the current code state:
      <ol>
        <li>
          <Highlight>Scope</Highlight> shows the current variables.
        </li>
        <li>
          <Highlight>Closure</Highlight> shows the current closures.
        </li>
        <li>
          <Highlight>this</Highlight> shows the current value of this.
        </li>
      </ol>
    </div>
    {/*TODO: Created Tracing the execution section with custom icons*/}
    <div>
      <Typography variant="h4">Logging</Typography>
      To output something to console from our code, there’s console.log
      function. For instance, this outputs values from 0 to 4 to console:
      <IDEEmitter code="" />
      Regular users don’t see that output, it is in the console. To see it,
      either open the Console panel of developer tools or press Esc while in
      another panel: that opens the console at the bottom. If we have enough
      logging in our code, then we can see what’s going on from the records,
      without the debugger.
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>
      As we can see, there are three main ways to pause a script:
      <ol>
        <li>By setting breakpoints in the debugger.</li>
        <li>By using the debugger statement.</li>
        <li>By using the console.log function for logging.</li>
      </ol>
      When paused, we can debug: examine variables and trace the code to see
      where the execution goes wrong. There are many more options in developer
      tools than covered here. The full manual is at
      https://developers.google.com/web/tools/chrome-devtools. The information
      from this chapter is enough to begin debugging, but later, especially if
      you do a lot of browser stuff, please go there and look through more
      advanced capabilities of developer tools. Oh, and also you can click at
      various places of dev tools and just see what’s showing up. That’s
      probably the fastest route to learn dev tools. Don’t forget about the
      right click and context menus!
    </div>
  </StyledGlobalPage>
);
