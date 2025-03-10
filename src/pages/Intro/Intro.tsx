import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";
import { StyledGlobalPage } from "@shared/utils";

export const Intro = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">An Introduction to JavaScript</Typography>
      <Typography>
        Let’s see what’s so special about JavaScript, what we can achieve with
        it, and what other technologies play well with it.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">What is JavaScript?</Typography>
      <Typography>
        JavaScript is a programming language that enables you to interact with
        web pages. It is a language that is used to make web pages interactive.
        It is a language that is used to make web pages interactive.
      </Typography>
    </div>
    <InfoBox
      title="Why is it called JavaScript?"
      content={
        "When JavaScript was created, it initially had another name: “LiveScript”. But Java was very popular at that time, so it was decided that positioning a new language as a “younger brother” of Java would help.\n" +
        "\n" +
        "But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript, and now it has no relation to Java at all."
      }
    />
    <div>
      <Typography>
        Today, JavaScript can execute not only in the browser, but also on the
        server, or actually on any device that has a special program called the
        JavaScript engine. The browser has an embedded engine sometimes called a
        “JavaScript virtual machine”.
      </Typography>
      <Typography variant="subtitle2">
        Different engines have different “codenames”. For example:
      </Typography>
      <ul>
        <li>V8 – in Chrome and Opera.</li>
        <li>SpiderMonkey – in Firefox.</li>
        <li>ChakraCore – in Edge.</li>
        <li>JavaScriptCore – in Safari.</li>
        <li>Nashorn – for Java 8.</li>
        <li>…and others.</li>
      </ul>
      <Typography>
        The terms above are good to remember because they are used in developer
        articles on the internet. We’ll use them too. For instance, if “a
        feature X is supported by V8”, then it probably works in Chrome, Opera
        and Edge.
      </Typography>
    </div>
    <div>
      <InfoBox
        title="How do engines work?"
        content={
          <>
            <Typography>
              Engines are complicated. But the basics are easy.
            </Typography>
            <ul>
              <li>
                The engine (embedded if it’s a browser) reads (“parses”) the
                script.
              </li>
              <li>
                Then it converts (“compiles”) the script to the machine
                language.
              </li>
              <li>And then the machine code runs, pretty fast.</li>
            </ul>
            <Typography>
              The engine applies optimizations at each step of the process. It
              even watches the compiled script as it runs, analyzes the data
              that flows through it, and applies optimizations to produce even
              faster machine code.
            </Typography>
          </>
        }
      />
    </div>
    <div>
      <Typography variant="h4">What can in-browser JavaScript do?</Typography>
      <Typography>
        Modern JavaScript is a “safe” programming language. It does not provide
        low-level access to memory or CPU, because it was initially created for
        browsers which do not require it.
      </Typography>
      <Typography>
        JavaScript’s capabilities greatly depend on the environment it’s running
        in. For instance, Node.js supports functions that allow JavaScript to
        read/write arbitrary files, perform network requests, etc.
      </Typography>
      <Typography>
        In-browser JavaScript can do everything related to webpage manipulation,
        interaction with the user, and the webserver. For instance, in the
        browser:
      </Typography>
      <ul>
        <li>
          Add new HTML to the page, change the existing content, modify styles.
        </li>
        <li>React to user actions, run on mouse clicks, pointer movements.</li>
        <li>
          Send requests over the network to remote servers, download files.
        </li>
        <li>Read/write cookies.</li>
        <li>Store data locally on the user’s computer.</li>
      </ul>
    </div>
    <div>
      <Typography variant="h4">What JavaScript can’t do?</Typography>
      <Typography>
        There are many things that JavaScript can’t do. For instance, it cannot
        operate with files on the server, accept connections, etc.
      </Typography>
      <Typography>
        That’s a safety restriction. Imagine that you visit a website that can
        read files on your computer. That would be a disaster. Examples of such
        restrictions include:
      </Typography>
      <ul>
        <li>
          JavaScript on a webpage may not read/write arbitrary files on the hard
          disk, copy them or execute programs. It has no direct access to OS
          functions. Modern browsers allow it to work with files, but the access
          is limited and only provided if the user does certain actions, like
          “dropping” a file into a browser window or selecting it via an{" "}
          {"<input>"} tag. There are ways to interact with the camera/microphone
          and other devices, but they require a user’s explicit permission. So a
          JavaScript-enabled page may not sneakily enable a web-camera, observe
          the surroundings and send the information to the NSA.
        </li>
        <li>
          Different tabs/windows generally do not know about each other.
          Sometimes they do, for example when one window uses JavaScript to open
          the other one. But even in this case, JavaScript from one page may not
          access the other page if they come from different sites (from a
          different domain, protocol or port). This is called the “Same Origin
          Policy”. To work around that, both pages must agree for data exchange
          and must contain special JavaScript code that handles it. We’ll cover
          that in the tutorial. This limitation is, again, for the user’s
          safety. A page from{" "}
          <Typography variant="caption">http://anysite.com</Typography> which a
          user has opened must not be able to access another browser tab with
          the URL <Typography variant="caption">http://gmail.com</Typography>,
          for example, and steal information from there.
        </li>
        <li>
          JavaScript can easily communicate over the net to the server where the
          current page came from. But its ability to receive data from other
          sites/domains is crippled. Though possible, it requires explicit
          agreement (expressed in HTTP headers) from the remote side. Once
          again, that’s a safety limitation.
        </li>
        <img
          src="https://javascript.info/article/intro/limitations.svg"
          alt="What JavaScript can't do"
        />
      </ul>
      <Typography>
        Such limitations do not exist if JavaScript is used outside of the
        browser, for example on a server. Modern browsers also allow
        plugins/extensions which may ask for extended permissions.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">What makes JavaScript unique?</Typography>
      <Typography>
        JavaScript is the only browser technology that combines these three
        features:
      </Typography>
      <ul>
        <li>Full integration with HTML/CSS.</li>
        <li>Simple things are done simply.</li>
        <li>Support by all major browsers and enabled by default.</li>
      </ul>
      <Typography>
        JavaScript is the only browser technology that combines these three
        things. That’s what makes JavaScript unique. That’s why it’s the most
        widespread tool for creating browser interfaces. That said, JavaScript
        can be used to create servers, mobile applications, etc.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Languages “over” JavaScript</Typography>
      <Typography>
        The syntax of JavaScript does not suit everyone’s needs. Different
        people want different features. That’s to be expected, because projects
        and requirements are different for everyone. So, recently a plethora of
        new languages appeared, which are transpiled (converted) to JavaScript
        before they run in the browser. Modern tools make the transpilation very
        fast and transparent, actually allowing developers to code in another
        language and auto-converting it “under the hood”. Examples of such
        languages:
      </Typography>
      <ul>
        <li>
          <strong>CoffeeScript</strong> – a language that fixes many of
          JavaScript’s syntax issues.
        </li>
        <li>
          <strong>TypeScript</strong> – a language that adds a type system to
          JavaScript.
        </li>
        <li>
          <strong>Flow</strong> – a type checker for JavaScript.
        </li>
        <li>
          <strong>Dart</strong> – a language that is compiled to JavaScript and
          aims to replace it.
        </li>
        <li>
          <strong>And many others</strong>.
        </li>
      </ul>
      <Typography>
        We’ll cover some of these languages in the tutorial. But for now, let’s
        focus on JavaScript itself.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>
      <Typography>
        JavaScript is a language that is used to make web pages interactive. It
        can execute not only in the browser, but also on the server, or actually
        on any device that has a special program called the JavaScript engine.
      </Typography>
      <Typography>
        In-browser JavaScript can do everything related to webpage manipulation,
        interaction with the user, and the webserver.
      </Typography>
      <Typography>
        Modern JavaScript is a “safe” programming language. It does not provide
        low-level access to memory or CPU, because it was initially created for
        browsers which do not require it.
      </Typography>
      <Typography>
        JavaScript’s capabilities greatly depend on the environment it’s running
        in. For instance, Node.js supports functions that allow JavaScript to
        read/write arbitrary files, perform network requests, etc.
      </Typography>
      <Typography>
        JavaScript is the only browser technology that combines these three
        features: full integration with HTML/CSS, simple things are done simply,
        and support by all major browsers and enabled by default.
      </Typography>
    </div>
  </StyledGlobalPage>
);
