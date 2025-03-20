import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const StrictMode = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">The modern mode, "use strict"</Typography>
      For a long time, JavaScript evolved without compatibility issues. New
      features were added to the language while old functionality didn’t change.
      That had the benefit of never breaking existing code. But the downside was
      that any mistake or an imperfect decision made by JavaScript’s creators
      got stuck in the language forever. This was the case until 2009 when
      ECMAScript 5 (ES5) appeared. It added new features to the language and
      modified some of the existing ones. To keep the old code working, most
      such modifications are off by default. You need to explicitly enable them
      with a special directive: <Highlight>"use strict"</Highlight>.
    </div>
    <div>
      <Typography variant="h4">“use strict”</Typography>
      The directive looks like a string: <Highlight>
        "use strict"
      </Highlight> or <Highlight>'use strict'</Highlight>. When it is located at
      the top of a script, the whole script works the “modern” way. For example:
      <IDEEmitter code="" />
      Quite soon we’re going to learn functions (a way to group commands), so
      let’s note in advance that <Highlight>"use strict"</Highlight> can be put
      at the beginning of a function. Doing that enables strict mode in that
      function only. But usually people use it for the whole script.
      <InfoBox
        title="Ensure that “use strict” is at the top"
        content={
          <>
            <Typography>
              Please make sure that <Highlight>"use strict"</Highlight> is at
              the top of your scripts, otherwise strict mode may not be enabled.
              Strict mode isn’t enabled here:
            </Typography>
            <IDEEmitter code="" />
            <Typography>
              Only comments may appear above <Highlight>"use strict"</Highlight>
              .
            </Typography>
          </>
        }
        isImportant
      />
      <InfoBox
        title="There’s no way to cancel use strict"
        content="There is no directive like 'no use strict' that reverts the engine to old behavior. Once we enter strict mode, there’s no going back."
        isImportant
      />
    </div>
    <div>
      <Typography variant="h4">Browser console</Typography>
      When you use a developer console to run code, please note that it doesn’t{" "}
      <Highlight>use strict</Highlight> by default. Sometimes, when use strict
      makes a difference, you’ll get incorrect results. So, how to actually{" "}
      <Highlight>use strict</Highlight>
      in the console? First, you can try to press Shift+Enter to input multiple
      lines, and put use strict on top, like this:
      <IDEEmitter code="" />
      It works in most browsers, namely Firefox and Chrome. If it doesn’t, e.g.
      in an old browser, there’s an ugly, but reliable way to ensure{" "}
      <Highlight>use strict</Highlight>. Put it inside this kind of wrapper:
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography variant="h4">Should we “use strict”?</Typography>
      The question may sound obvious, but it’s not so. One could recommend to
      start scripts with <Highlight>"use strict"</Highlight>… But you know
      what’s cool? Modern JavaScript supports “classes” and “modules” – advanced
      language structures (we’ll surely get to them), that enable{" "}
      <Highlight>use strict</Highlight> automatically. So we don’t need to add
      the <Highlight>"use strict"</Highlight> directive, if we use them.
      <Typography>
        <strong>
          So, for now <Highlight>"use strict"</Highlight>; is a welcome guest at
          the top of your scripts. Later, when your code is all in classes and
          modules, you may omit it.
        </strong>{" "}
        As of now, we’ve got to know about <Highlight>use strict</Highlight>
        in general. In the next chapters, as we learn language features, we’ll
        see the differences between the strict and old modes. Luckily, there
        aren’t many and they actually make our lives better. All examples in
        this tutorial assume strict mode unless (very rarely) specified
        otherwise.
      </Typography>
    </div>
  </StyledGlobalPage>
);
