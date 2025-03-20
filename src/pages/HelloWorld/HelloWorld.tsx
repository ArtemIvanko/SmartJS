import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const HelloWorld = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Hello, World!</Typography>
      This part of the tutorial is about core JavaScript, the language itself.
      But we need a working environment to run our scripts and, since this book
      is online, the browser is a good choice. We’ll keep the amount of
      browser-specific commands (like alert) to a minimum so that you don’t
      spend time on them if you plan to concentrate on another environment (like
      Node.js). We’ll focus on JavaScript in the browser in the next part of the
      tutorial. So first, let’s see how we attach a script to a webpage. For
      server-side environments (like Node.js), you can execute the script with a
      command like <Highlight>"node my.js"</Highlight>.
    </div>
    <div>
      <Typography variant="h4">The "script" tag</Typography>
      To embed JavaScript into a webpage, you should use the script tag. It can
      be placed in the <Highlight>{"<head>"}</Highlight> section, or before the
      closing <Highlight>{"</body>"}</Highlight> tag. Like this:
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography variant="h4">Modern markup</Typography>
      The type attribute is not required. In modern HTML,{" "}
      <Highlight>{"<script>"}</Highlight> without type have the JavaScript MIME
      type by default. The old HTML standard, HTML4, required a script to have a
      type. Usually it was <Highlight>type="text/javascript"</Highlight>. It’s
      not required anymore. Also, the modern HTML standard totally changed the
      meaning of this attribute. Now, it can be used for JavaScript modules. But
      that’s an advanced topic, we’ll talk about modules in another part of the
      tutorial.
      <Typography>
        <strong>The language attribute: {"script language=…"}</strong>
      </Typography>
      This attribute was meant to show the language of the script. This
      attribute no longer makes sense because JavaScript is the default
      language. There is no need to use it.
      <Typography>
        <strong>Comments before and after scripts.</strong>
      </Typography>
      In really ancient books and guides, you may find comments inside{" "}
      <Highlight>{"<script>"}</Highlight> tags, like this:
      <IDEEmitter code="" />
      This trick isn’t used in modern JavaScript. These comments hide JavaScript
      code from old browsers that didn’t know how to process the{" "}
      <Highlight>{"<script>"}</Highlight> tag. Since browsers released in the
      last 15 years don’t have this issue, this kind of comment can help you
      identify really old code.
    </div>
    <div>
      <Typography variant="h4">External scripts</Typography>
      For bigger scripts, it’s recommended to write the code in an external
      script. The <Highlight>{"<script>"}</Highlight> tag has a src attribute,
      the value of which is the path to the script file. Here’s an example:
      Script files are attached to HTML with the <Highlight>src</Highlight>{" "}
      attribute:
      <IDEEmitter code="" />
      Here, <Highlight>/path/to/script.js</Highlight> is an absolute path to the
      script from the site root. One can also provide a relative path from the
      current page. For instance, <Highlight>src="script.js"</Highlight>, just
      like <Highlight>src="./script.js"</Highlight>, would mean a file
      "script.js" in the current folder. We can give a full URL as well. For
      instance:
      <IDEEmitter code="" />
      To attach several scripts, use multiple tags:
      <IDEEmitter code="" />
      <InfoBox
        title="Please note:"
        content={
          "As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files. The benefit of a separate file is that the browser will download it and store it in its cache. Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once. That reduces traffic and makes pages faster."
        }
      />
      <InfoBox
        title="If src is set, the script content is ignored."
        content={
          <>
            <Typography>
              A single <Highlight>{"<script>"}</Highlight> tag can’t have both
              the src attribute and code inside. This won’t work:
            </Typography>
            <IDEEmitter code="" />

            <Typography>
              We must choose either an external{" "}
              <Highlight>{"<script src=''>"}</Highlight> or a regular{" "}
              <Highlight>{"<script>"}</Highlight> with code. The example above
              can be split into two scripts to work:
            </Typography>
            <IDEEmitter code="" />
          </>
        }
        isImportant
      />
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>
      <ul>
        <li>
          We can use a <Highlight>{"<script>"}</Highlight> tag to add JavaScript
          code to a page.
        </li>
        <li>
          The <Highlight>type</Highlight> and <Highlight>language</Highlight>{" "}
          attributes are not required
        </li>
        <li>
          A script in an external file can be inserted with{" "}
          <Highlight>{"<script src='path/to/script.js'></script>"}</Highlight>.
        </li>
      </ul>
      There is much more to learn about browser scripts and their interaction
      with the webpage. But let’s keep in mind that this part of the tutorial is
      devoted to the JavaScript language, so we shouldn’t distract ourselves
      with browser-specific implementations of it. We’ll be using the browser as
      a way to run JavaScript, which is very convenient for online reading, but
      only one of many.
    </div>
  </StyledGlobalPage>
);
