import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const Functions = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Functions</Typography>
      Quite often we need to perform a similar action in many places of the
      script. For example, we need to show a nice-looking message when a visitor
      logs in, logs out and maybe somewhere else. Functions are the main
      “building blocks” of the program. They allow the code to be called many
      times without repetition. We’ve already seen examples of built-in
      functions, like alert(message), prompt(message, default) and
      confirm(question). But we can create functions of our own as well.
    </div>
    <div>
      <Typography variant="h4">Function Declaration</Typography>
      To create a function we can use a function declaration. It looks like
      this:
      <IDEEmitter code="" />
      The <Highlight>function</Highlight> keyword goes first, then goes the name
      of the function, then a list of parameters between the parentheses (empty
      in the example above) and finally the code of the function, also known as
      the function body, between curly braces. For instance, this function does
      nothing, just shows a message:
      <IDEEmitter code="" />
      To run the function, we should call it. The code above defines the
      function, but to see the message, we need to call it. Like this:
      <IDEEmitter code="" />
      Here we will see the message "Hello, World!". The call{" "}
      <Highlight>sayHi() </Highlight> executes the code of the{" "}
      <Highlight>sayHi</Highlight> function. We can call it as many times as we
      want. Functions are reusable. They can be called not only at the place
      where they are declared, but in any place of the script.
    </div>
    <div>
      <Typography variant="h4">Local Variables</Typography>
      A variable declared inside a function is only visible inside that
      function. For example:
      <IDEEmitter code="" />
      The function <Highlight>sayHi</Highlight> uses a local variable{" "}
      <Highlight>name</Highlight>. It exists only inside that function. We can’t
      access it from outside or from other functions. In this example, the
      attempt to read <Highlight>name</Highlight> from outside of the function
      gives an error.
    </div>
    <div>
      <Typography variant="h4">Outer Variables</Typography>
      A function can access an outer variable as well, for example:
      <IDEEmitter code="" />
      In the code above, the function <Highlight>showMessage()</Highlight> can
      access the outer variable <Highlight>message</Highlight>. We can call{" "}
      <Highlight>showMessage()</Highlight> and it will show "Hello, John!".
      <InfoBox
        title="Global variables"
        content="Variables declared outside of any function, such as the outer userName in the code above, are called global. Global variables are visible from any function (unless shadowed by locals). It’s a good practice to minimize the use of global variables. Modern code has few or no globals. Most variables reside in their functions. Sometimes though, they can be useful to store project-level data."
      />
    </div>
    <div>
      <Typography variant="h4">Parameters</Typography>
      We can pass arbitrary data to functions using parameters (also called
      function arguments) . In the example below, the function{" "}
      <Highlight>showMessage(from, text)</Highlight> is called with two
      arguments: <Highlight>from</Highlight> and <Highlight>text</Highlight>:
      <IDEEmitter code="" />
      Here <Highlight>from</Highlight> and <Highlight>text</Highlight> are
      function parameters. We can call the function, and pass arbitrary data to
      it. For instance:
      <IDEEmitter code="" />
      The function will show "Ann: Hello!". Here <Highlight>
        from
      </Highlight> and <Highlight>text</Highlight> will be the values of the
      corresponding arguments.
    </div>
    <div>
      <Typography variant="h4">Default values</Typography>
      If a parameter is not provided, then its value becomes{" "}
      <Highlight>undefined</Highlight>. For instance, the aforementioned
      function <Highlight>showMessage(from, text)</Highlight> can be called with
      a single argument:
      <IDEEmitter code="" />
      In this case, the function will use <Highlight>undefined</Highlight> for
      <Highlight>text</Highlight>, because it’s not provided. We can specify a
      default value for a parameter if not provided. That’s done using =:
      <IDEEmitter code="" />
      If an argument is not provided, then <Highlight>text</Highlight> becomes
      "no text given". In other words, the default value is used if the
      parameter is missing.
      <InfoBox
        title="Evaluation of default parameters"
        content="In JavaScript, a default parameter is evaluated every time the function is called without the respective parameter. In the example above, anotherFunction() isn’t called at all, if the text parameter is provided. On the other hand, it’s independently called every time when text is missing."
      />
      <InfoBox
        title="Default parameters in old JavaScript code"
        content={
          <>
            Several years ago, JavaScript didn’t support the syntax for default
            parameters. So people used other ways to specify them. Nowadays, we
            can come across them in old scripts. For example, an explicit check
            for <Highlight>undefined</Highlight>:
            <IDEEmitter code="" />
            Or using the || operator:
            <IDEEmitter code="" />
          </>
        }
      />
    </div>
    <div>
      <Typography variant="h4">Alternative default parameters</Typography>
      If we want to use a truly default value, then we can specify it in the
      body of the function:
      <IDEEmitter code="" />
      In the example above, if <Highlight>text</Highlight> is not provided, then
      <Highlight>text = 'empty'</Highlight> is used. The function will show
      "Ann: empty".
    </div>
    <div>
      <Typography variant="h4">Returning a value</Typography>
      A function can return a value back into the calling code. The simplest
      example would be a function that sums two values:
      <IDEEmitter code="" />
      The <Highlight>return</Highlight> statement is used to give a value back.
      The calling code gets it. There may be many occurrences of return in a
      single function. For instance:
      <IDEEmitter code="" />
      When the function meets <Highlight>return</Highlight>, it stops executing
      and returns the value. The rest of the code is ignored.
      <InfoBox
        title="A function with an empty return or without it returns undefined"
        content={
          <>
            If a function does not return a value, it is the same as if it
            returns undefined:
            <IDEEmitter code="" />
            An empty return is also the same as return undefined:
            <IDEEmitter code="" />
          </>
        }
      />
      <InfoBox
        title="Never add a newline between return and the value"
        content={
          <>
            For a long expression in return, it might be tempting to put it on a
            separate line, like this:
            <IDEEmitter code="" />
            That doesn’t work, because JavaScript does not allow an implicit
            semicolon before return. So, the code above actually means:
            <IDEEmitter code="" />
            So, the function returns nothing. To fix the issue, we can put the
            expression in parentheses:
            <IDEEmitter code="" />
          </>
        }
        isImportant
      />
    </div>
    <div>
      <Typography variant="h4">Naming a function</Typography>A function is a
      value in JavaScript. A special “function value”.
      <Highlight>typeof</Highlight> operator returns "function" for functions.
      We can copy a function to another variable:
      <IDEEmitter code="" />
      Here, the function is copied to the variable <Highlight>func</Highlight>.
      Now we can use it as a function or even pass it as an argument. It is a
      widespread practice to start a function with a verbal prefix which vaguely
      describes the action. There must be an agreement within the team on the
      meaning of the prefixes. For instance, functions that start with "show"
      usually show something. Function starting with…
      <ul>
        <li>"get…" – return a value,</li>
        <li>"calc…" – calculate something,</li>
        <li>"create…" – create something,</li>
        <li>"check…" – check something and return a boolean, etc.</li>
      </ul>
      <InfoBox
        title="One function – one action"
        content={
          <>
            A function should do exactly what is suggested by its name, no more.
            Two independent actions usually deserve two functions, even if they
            are usually called together (in that case we can make a 3rd function
            that calls those two). A few examples of breaking this rule:
            <ul>
              <li>
                <Highlight>getAge</Highlight> – would be bad if it shows an
                alert with the age.
              </li>
              <li>
                <Highlight>createForm</Highlight> – would be strange if it
                modifies the document.
              </li>
              <li>
                <Highlight>checkPermission</Highlight> – would be weird if it
                changes the user (it should only check).
              </li>
            </ul>
            These examples assume common meanings of prefixes. You and your team
            are free to agree on other meanings, but usually they’re not much
            different. In any case, you should have a firm understanding of what
            a prefix means, what a prefixed function can and cannot do. All
            same-prefixed functions should obey the rules. And the team should
            share the knowledge.
          </>
        }
      />
      <InfoBox
        title="Ultrashort function names"
        content="Functions that are used very often sometimes have ultrashort names. For example, the jQuery framework defines a function with $. The Lodash library has its core function named _. These are exceptions. Generally function names should be concise and descriptive."
      />
    </div>
    <div>
      <Typography variant="h4">Functions == Comments</Typography>
      Functions are the main tool to structure the code. Instead of having a
      script made of top-level statements, we can divide it into functions. It’s
      a good practice to make functions that do only one thing. If that “one
      thing” is big, maybe it’s worth dividing it into smaller functions.
      Functions are not just for code reuse. They also make the code more
      readable and understandable. They can be a form of documentation. When we
      see a function, we should only think about the code inside the function.
      We should not have to go inside to understand what the function does. The
      name of the function should be descriptive enough. A separate function is
      not only easier to test and debug – its very existence is a great comment!
      For instance, compare the two functions showPrimes(n) below. Each one
      outputs prime numbers up to n. The first variant uses a label:
      <IDEEmitter code="" />
      The second variant uses a separate function{" "}
      <Highlight>isPrime(n)</Highlight> to test for primality:
      <IDEEmitter code="" />
      The second variant is much easier to understand. The function{" "}
      <Highlight>isPrime(n)</Highlight> is self-descriptive. It’s clear that it
      checks for primality. The main code is clean and easy to read. We can
      easily understand what’s going on by reading the function names.
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>
      Functions are the main “building blocks” of the program. They allow the
      code to be called many times without repetition. We can use functions to
      structure the code, to divide it into parts. Functions are the main tool
      to define interfaces, so that different parts of the code can communicate
      with each other. Functions allow us to reuse the code. We can define a
      function and then call it from other parts of the script. We can pass
      arbitrary data to functions using parameters. We can return a value from a
      function using the <Highlight>return</Highlight> statement. To make a
      function we can use a function declaration. It looks like this:
      <IDEEmitter code="" />
    </div>
  </StyledGlobalPage>
);
