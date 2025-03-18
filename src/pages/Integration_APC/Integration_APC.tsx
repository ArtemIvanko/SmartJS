import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const Integration_APC = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Interaction: alert, prompt, confirm</Typography>
      <Typography>
        As we’ll be using the browser as our demo environment, let’s see a
        couple of functions to interact with the user:{" "}
        <Highlight>alert</Highlight>, <Highlight>prompt</Highlight> and
        <Highlight>confirm</Highlight>.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">alert</Typography>
      <Typography>
        This one we’ve seen already. It shows a message and waits for the user
        to press “OK”. For example:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        The mini-window with the message is called a modal window. The word
        “modal” means that the visitor can’t interact with the rest of the page,
        press other buttons, etc, until they have dealt with the window. In this
        case – until they press “OK”.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">prompt</Typography>
      <Typography>
        The function <Highlight>prompt</Highlight> shows a modal window with a
        text message, an input field for the visitor, and the buttons OK/Cancel.
        Here’s an example:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        It shows a modal window with a text message, an input field for the
        visitor, and the buttons OK/Cancel. <Highlight>title</Highlight> The
        text to show the visitor.
        <Highlight>default</Highlight> An optional second parameter, the initial
        value for the input field.
      </Typography>
    </div>
    <div>
      <InfoBox
        title="The square brackets in syntax [...]"
        content="The square brackets around default in the syntax above denote that the parameter is optional, not required."
      />
    </div>
    <div>
      <Typography>
        The visitor can type something in the prompt input field and press OK.
        Then we get that text in the <Highlight>result</Highlight>. Or they can
        cancel the input by pressing Cancel or hitting the{" "}
        <Highlight>Esc</Highlight> key, then we get <Highlight>null</Highlight>{" "}
        as the <Highlight>result</Highlight>. The call to{" "}
        <Highlight>prompt</Highlight> returns the text from the input field or{" "}
        <Highlight>null</Highlight> if the input was canceled. For instance:
      </Typography>
      <IDEEmitter code="" />
      <InfoBox
        title="In IE: always supply a default"
        content={
          <>
            <Typography>
              The second parameter is optional, but if we don’t supply it,
              Internet Explorer will insert the text{" "}
              <Highlight>"undefined"</Highlight> into the prompt. Run this code
              in Internet Explorer to see:
            </Typography>
            <IDEEmitter code="" />
            <Typography>
              So, for prompts to look good in IE, we recommend always providing
              the second argument:
            </Typography>
            <IDEEmitter code="" />
          </>
        }
        isImportant
      />
    </div>
    <div>
      <Typography variant="h4">confirm</Typography>
      <Typography>
        The function <Highlight>confirm</Highlight> shows a modal window with a
        question and two buttons: OK and Cancel. The result is true if OK is
        pressed and false otherwise. For example:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        The call to <Highlight>confirm</Highlight> returns true if the visitor
        clicks “OK” and false if they click “Cancel”.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">
        Summary: interaction: alert, prompt, confirm
      </Typography>
      <Typography>
        The <Highlight>alert</Highlight>, <Highlight>prompt</Highlight> and{" "}
        <Highlight>confirm</Highlight> functions allow us to interact with the
        user. They are modal, meaning that they block the execution of the
        script until the user closes them.
      </Typography>
    </div>
  </StyledGlobalPage>
);
