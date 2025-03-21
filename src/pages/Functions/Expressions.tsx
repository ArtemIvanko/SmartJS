import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const Expressions = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Function Expressions</Typography>
      Function expressions are another way to define a function in JavaScript.
      They are defined using the <Highlight>function</Highlight> keyword
      followed by a name (optional) and a pair of parentheses containing the
      function's parameters. The function's body is enclosed in curly braces.
      The syntax for a function expression is as follows:
      <IDEEmitter code="" />
      There is another syntax for creating a function that is called a Function
      Expression. It allows us to create a new function in the middle of any
      expression. For example:
      <IDEEmitter code="" />
      In this example, we have a function expression that is assigned to a new
      variable called <Highlight>add</Highlight>. The function takes two
      parameters, <Highlight>a</Highlight> and <Highlight>b</Highlight>, and
      returns their sum. We can then call the function by using the variable{" "}
      <Highlight>add</Highlight> and passing in the arguments{" "}
      <Highlight>2</Highlight> and <Highlight>3</Highlight>.
    </div>
    <div>
      <Typography variant="h4">Function is a value</Typography>
      Let’s reiterate: no matter how the function is created, a function is a
      value. Both examples above store a function in the sayHi variable. We can
      copy a function to another variable:
      <IDEEmitter code="" />
      Please note that the last line does not run the function, because there
      are no parentheses after sayHi. There are programming languages where any
      mention of a function name causes its execution, but JavaScript is not
      like that. In JavaScript, a function is a value, so we can deal with it as
      a value. The code above shows its string representation, which is the
      source code. Surely, a function is a special value, in the sense that we
      can call it like sayHi(). But it’s still a value. So we can work with it
      like with other kinds of values. We can copy a function to another
      variable:
      <IDEEmitter code="" />
      Here, the function is copied to another variable, named func. And then
      it’s called using this new name. The output is the same as before.
      <InfoBox
        title="Why is there a semicolon at the end?"
        content={
          <>
            You might wonder, why do Function Expressions have a semicolon ; at
            the end, but Function Declarations do not:
            <IDEEmitter code="" />
            The answer is simple: Function Declarations are made for human use.
            We write them to declare functions and include them in our code. The
            JavaScript engine does not expect a semicolon after it. But a
            Function Expression is used inside an expression. So when a Function
            Expression is created as a part of a larger expression, it is
            necessary to add a semicolon at the end of the expression. In
            practice, it is always safe to add a semicolon ; after a function
            expression.
          </>
        }
      />
    </div>
    <div>
      <Typography variant="h4">Callback Functions</Typography>
      Function expressions are often used as callback functions. A callback
      function is a function that is passed as an argument to another function
      and is executed inside that function. For example:
      <IDEEmitter code="" />
      In this example, we have a function called{" "}
      <Highlight>doSomething</Highlight> that takes two arguments: a number and
      a callback function. The <Highlight>doSomething</Highlight> function calls
      the callback function and passes the number as an argument. We can then
      call the <Highlight>doSomething</Highlight> function and pass in a number
      argument and a function expression as the callback function. The callback
      function will be executed inside the <Highlight>doSomething</Highlight>{" "}
      function. The function should ask the question and, depending on the
      user’s answer, call yes() or no():
      <IDEEmitter code="" />
      In practice, such functions are quite useful. The major difference between
      a real-life ask and the example above is that real-life functions use more
      complex ways to interact with the user than a simple confirm. In the
      browser, such functions usually draw a nice-looking question window. But
      that’s another story. The arguments showOk and showCancel of ask are
      called callback functions or just callbacks. The idea is that we pass a
      function and expect it to be “called back” later if necessary. In our
      case, showOk becomes the callback for “yes” answer, and showCancel for
      “no” answer. We can use Function Expressions to write an equivalent,
      shorter function:
      <IDEEmitter code="" />
      Here, functions are declared right inside the ask(...) call. They have no
      name, and so are called anonymous. Such functions are not accessible
      outside of ask (because they are not assigned to variables), but that’s
      just what we want here. Such code appears in our scripts very naturally,
      it’s in the spirit of JavaScript.
      <InfoBox
        title="A function is a value representing an “action”"
        content="Regular values like strings or numbers represent the data. A function can be perceived as an action. We can pass it between variables and run when we want."
      />
    </div>
    <div>
      <Typography variant="h4">
        Function Expression vs Function Declaration
      </Typography>
      There is a subtle but important difference between function expressions
      and function declarations. Function expressions are not hoisted, which
      means they are not available until the interpreter reaches the line of
      code where they are defined. For example:
      <IDEEmitter code="" />
      In this example, we have a function expression that is assigned to a
      variable called <Highlight>add</Highlight>. If we try to call the function
      before the variable is defined, we will get an error. This is because
      function expressions are not hoisted. On the other hand, function
      declarations are hoisted, which means they are available before the
      interpreter reaches the line of code where they are defined. For example:
      <IDEEmitter code="" />
      The more subtle difference is when a function is created by the JavaScript
      engine. A Function Expression is created when the execution reaches it and
      is usable only from that moment. Once the execution flow passes to the
      right side of the assignment let sum = function… – here we go, the
      function is created and can be used (assigned, called, etc. ) from now on.
      Function Declarations are different. A Function Declaration can be called
      earlier than it is defined. For example, a global Function Declaration is
      visible in the whole script, no matter where it is. That’s due to internal
      algorithms. When JavaScript prepares to run the script, it first looks for
      global Function Declarations in it and creates the functions. We can think
      of it as an “initialization stage”. And after all Function Declarations
      are processed, the code is executed. So it has access to these functions.
      For example, this works:
      <IDEEmitter code="" />
      The code works, because the global function is created when JavaScript
      prepares to start the script. So it’s already there before the code
      reaches it. …And this doesn’t work:
      <IDEEmitter code="" />
      The code above doesn’t work, because it uses a Function Expression. At the
      start of the script, when JavaScript is preparing to run it, neither sum
      nor sayHi is known. So, if we run the code, we’ll get an error like “sum
      is not a function”. The Function Declaration sum is created when
      JavaScript is preparing to start the script. And the assignment let sum =
      function… is just an assignment, without any invocation. So sum is a
      variable containing a function. But the Function Expression sayHi() is
      created when the execution reaches it and works only from that moment.
      <InfoBox
        title="When to choose Function Declaration versus Function Expression?"
        content={
          <>
            As a rule of thumb, when we need to declare a function, the first
            thing to consider is Function Declaration syntax. It gives more
            freedom in how to organize our code, because we can call such
            functions before they are declared. That’s also better for
            readability, as it’s easier to look up{" "}
            <Highlight>function f(…) {"{…}"}</Highlight> in the code than{" "}
            <Highlight>let f = function(…) {"{…}"};</Highlight>. Function
            Declarations are more “eye-catching”. …But if a Function Declaration
            does not suit us for some reason, or we need a conditional
            declaration (we’ve just seen an example), then Function Expression
            should be used.
          </>
        }
      />
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>
      Function expressions are another way to define a function in JavaScript.
      They are defined using the <Highlight>function</Highlight> keyword
      followed by a name (optional) and a pair of parentheses containing the
      function's parameters. The function's body is enclosed in curly braces.
      Function expressions are often used as callback functions, which are
      functions that are passed as arguments to other functions and are executed
      inside those functions. Function expressions are not hoisted, which means
      they are not available until the interpreter reaches the line of code
      where they are defined. Function declarations, on the other hand, are
      hoisted, which means they are available before the interpreter reaches the
      line of code where they are defined. As a rule of thumb, when we need to
      declare a function, the first thing to consider is Function Declaration
      syntax. It gives more freedom in how to organize our code, because we can
      call such functions before they are declared. That’s also better for
      readability, as it’s easier to look up{" "}
      <Highlight>function f(…) {"{…}"}</Highlight> in the code than{" "}
      <Highlight>let f = function(…) {"{…}"};</Highlight>. Function Declarations
      are more “eye-catching”. …But if a Function Declaration does not suit us
      for some reason, or we need a conditional declaration (we’ve just seen an
      example), then Function Expression should be used.
    </div>
  </StyledGlobalPage>
);
