import { StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const DevConsole = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Developer Console</Typography>
      <Typography>
        Code is prone to errors. You will quite likely make errors… Oh, what am
        I talking about? You are absolutely going to make errors, at least if
        you’re a human, not a robot. But in the browser, users don’t see errors
        by default. So, if something goes wrong in the script, we won’t see
        what’s broken and can’t fix it. To see errors and get a lot of other
        useful information about scripts, “developer tools” have been embedded
        in browsers. Most developers lean towards Chrome or Firefox for
        development because those browsers have the best developer tools. Other
        browsers also provide developer tools, sometimes with special features,
        but are usually playing “catch-up” to Chrome or Firefox. So most
        developers have a “favorite” browser and switch to others if a problem
        is browser-specific. Developer tools are potent; they have many
        features. To start, we’ll learn how to open them, look at errors, and
        run JavaScript commands.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Google Chrome</Typography>
      <Typography>
        To open the developer console in Chrome, right-click on the page and
        select “Inspect” from the context menu. Or press F12. The console is
        usually open by default. If not, then you can find it in the “Console”
        tab.
      </Typography>
      <img
        src="https://javascript.info/article/devtools/chrome.png"
        alt="console-image"
      />
      <Typography>
        The exact look of developer tools depends on your version of Chrome. It
        changes from time to time but should be similar.
      </Typography>
      <ul>
        <li>
          <Typography>
            The “Console” tab shows the output from console.log and other
            JavaScript commands.
          </Typography>
        </li>
        <li>
          <Typography>
            The “Elements” tab shows the HTML of the current page.
          </Typography>
        </li>
        <li>
          <Typography>
            The “Sources” tab is for debugging JavaScript. We’ll look at it
            later.
          </Typography>
        </li>
        <li>
          <Typography>
            The “Network” tab is for network operations. We’ll also look at it
            later.
          </Typography>
        </li>
        <li>
          <Typography>
            The “Performance” tab is for profiling the performance of the page.
            We’ll also look at it later.
          </Typography>
        </li>
        <li>
          <Typography>
            The “Application” tab is for working with web storage, service
            workers, and other things.
          </Typography>
        </li>
        <li>
          <Typography>
            The “Security” tab is for debugging security issues.
          </Typography>
        </li>
        <li>
          <Typography>
            The “Audits” tab is for running performance audits.
          </Typography>
        </li>
      </ul>
    </div>
    <div>
      <Typography>
        Below the error message, there is a blue {">"} symbol. It marks a
        “command line” where we can type JavaScript commands. Press Enter to run
        them. Now we can see errors, and that’s enough for a start. We’ll come
        back to developer tools later and cover debugging more in-depth in the
        chapter Debugging in the browser.
      </Typography>
    </div>
    <div>
      <InfoBox
        title="Multi-line input"
        content="Usually, when we put a line of code into the console, and then press Enter, it executes.To insert multiple lines, press Shift+Enter. This way one can enter long fragments of JavaScript code."
      />
    </div>
    <div>
      <Typography variant="h4">Firefox</Typography>
      <Typography>
        To open the developer console in Firefox, right-click on the page and
        select “Inspect Element” from the context menu. Or press F12. The
        console is usually open by default. If not, then you can find it in the
        “Console” tab.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Safari</Typography>
      <Typography>
        To open the developer console in Safari, you first need to enable the
        Develop menu. To do that, go to Safari → Preferences → Advanced and
        check “Show Develop menu in menu bar”. After that, you can open the
        console by selecting Develop → Show Error Console.
      </Typography>
      <img
        src="https://javascript.info/article/devtools/safari.png"
        alt="console-image"
      />
      <Typography>
        The console is usually open by default. If not, then you can find it in
        the “Console” tab.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>
      <Typography>
        Developer tools are a powerful feature of modern browsers. They allow us
        to do many different tasks, from seeing live changes in the browser to
        debugging JavaScript, CSS, and performance issues. The most popular
        browser for development is Chrome, but other browsers also have
        developer tools. The exact look of developer tools depends on the
        browser version, but they all have similar features.
      </Typography>
    </div>
  </StyledGlobalPage>
);
