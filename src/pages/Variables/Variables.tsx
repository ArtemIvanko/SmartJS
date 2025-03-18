import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const Variables = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Variables</Typography>
      <Typography>
        Most of the time, a JavaScript application needs to work with
        information. Here are two examples:
      </Typography>
      <ul>
        <li>
          An online shop – the information might include goods being sold and a
          shopping cart.
        </li>
        <li>
          A chat application – the information might include users, messages,
          and much more.
        </li>
      </ul>
      <Typography>Variables are used to store this information.</Typography>
    </div>
    <div>
      <Typography variant="h4">A variable</Typography>
      <Typography>
        A variable is a “named storage” for data. We can use variables to store
        goodies, visitors, and other data. To create a variable in JavaScript,
        use the<Highlight>let</Highlight> keyword. The statement below creates
        (in other words: declares) a variable with the name “message”:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        Now, we can put some data into it by using the assignment operator{" "}
        <Highlight>=</Highlight>:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        The string is now saved into the memory area associated with the
        variable. We can access it using the variable name:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        To be concise, we can combine the variable declaration and assignment
        into a single line:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        We can also declare multiple variables in one line:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        That might seem shorter, but we don’t recommend it. For the sake of
        better readability, please use a single line per variable. The multiline
        variant is a bit longer, but easier to read:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        Some people also define multiple variables in this multiline style:
      </Typography>
      <IDEEmitter code="" />
      <Typography>…Or even in the “comma-first” style:</Typography>
      <IDEEmitter code="" />
      <Typography>
        Technically, all these variants do the same thing. So, it’s a matter of
        personal taste and aesthetics.
      </Typography>
    </div>
    <div>
      <InfoBox
        title="var instead of let"
        content={
          <>
            <Typography>
              In older scripts, you may also find another keyword: var instead
              of let:
            </Typography>
            <IDEEmitter code="" />
            <Typography>
              The <Highlight>var</Highlight> keyword is almost the same as{" "}
              <Highlight>let</Highlight>. It also declares a variable but in a
              slightly different, “old-school” way. There are subtle differences
              between <Highlight>let</Highlight> and <Highlight>var</Highlight>,
              but they do not matter to us yet. We’ll cover them in detail in
              the chapter The old "var".
            </Typography>
          </>
        }
      />
    </div>
    <div>
      <Typography variant="h4">A real-life analogy</Typography>
      <Typography>
        We can easily grasp the concept of a “variable” if we imagine it as a
        “box” for data, with a uniquely-named sticker on it. For instance, the
        variable <Highlight>message</Highlight> can be imagined as a box
        labelled <Highlight>"message"</Highlight> with the value{" "}
        <Highlight>"Hello!"</Highlight> in it:
      </Typography>
    </div>
    <div>
      <img
        src="https://javascript.info/article/variables/variable.svg"
        alt="A box with the label 'message' and the value 'Hello!' in it."
      />
    </div>
    <div>
      <Typography>
        We can put any value in the box. We can also change it as many times as
        we want:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        When the value is changed, the old data is removed from the variable:
      </Typography>
    </div>
    <div>
      <img
        src="https://javascript.info/article/variables/variable-change.svg"
        alt=""
      />
    </div>
    <div>
      <Typography>
        We can also declare two variables and copy data from one into the other.
      </Typography>
      <IDEEmitter code="" />
      <InfoBox
        title="Declaring twice triggers an error"
        content={
          <>
            <Typography>
              A variable should be declared only once. A repeated declaration of
              the same variable is an error:
            </Typography>
            <IDEEmitter code="" />
            <Typography>
              Here, the second <Highlight>let</Highlight> causes the error:
            </Typography>
            <IDEEmitter code="" />
            <Typography>
              So, we should declare a variable once and then refer to it without
              let.
            </Typography>
          </>
        }
        isImportant
      />
    </div>
    <div>
      <InfoBox
        title="Functional languages"
        content="It’s interesting to note that there exist so-called pure functional programming languages, such as Haskell, that forbid changing variable values. In such languages, once the value is stored “in the box”, it’s there forever. If we need to store something else, the language forces us to create a new box (declare a new variable). We can’t reuse the old one. Though it may seem a little odd at first sight, these languages are quite capable of serious development. More than that, there are areas like parallel computations where this limitation confers certain benefits."
      />
    </div>
    <div>
      <Typography variant="h4">Variable naming</Typography>
      <Typography>
        There are two limitations on variable names in JavaScript:
      </Typography>
      <ul>
        <li>
          The name must contain only letters, digits, or the symbols{" "}
          <Highlight>$</Highlight> and <Highlight>_</Highlight>.
        </li>
        <li>The first character must not be a digit.</li>
      </ul>
      <Typography>Examples of valid names:</Typography>
      <IDEEmitter code="" />
      <Typography>
        When the name contains multiple words, camelCase is commonly used. That
        is: words go one after another, each word except first starting with a
        capital letter: myVeryLongName. What’s interesting – the dollar sign{" "}
        <Highlight>'$'</Highlight>
        and the underscore <Highlight>'_'</Highlight> can also be used in names.
        They are regular symbols, just like letters, without any special
        meaning. These names are valid:
      </Typography>
      <IDEEmitter code="" />
      <Typography>Examples of incorrect variable names:</Typography>
      <IDEEmitter code="" />
      <InfoBox
        title="Case matters"
        content="Variables named apple and APPLE are two different variables."
      />
    </div>
    <div>
      <InfoBox
        title="Non-Latin letters are allowed, but not recommended"
        content={
          <>
            <Typography>
              It is possible to use any language, including Cyrillic letters,
              Chinese logograms and so on, like this:
            </Typography>
            <IDEEmitter code="" />
            <Typography>
              Technically, there is no error here. Such names are allowed, but
              there is an international convention to use English in variable
              names. Even if we’re writing a small script, it may have a long
              life ahead. People from other countries may need to read it
              sometime.
            </Typography>
          </>
        }
      />
    </div>
    <div>
      <InfoBox
        title="Reserved names"
        content={
          <>
            <Typography>
              There is a list of reserved words, which cannot be used as
              variable names because they are used by the language itself. For
              example:<Highlight>let</Highlight>, <Highlight>class</Highlight>,{" "}
              <Highlight>return</Highlight>, and <Highlight>function</Highlight>{" "}
              are reserved. The code below gives a syntax error:
            </Typography>
            <IDEEmitter code="" />
          </>
        }
        isImportant
      />
    </div>
    <div>
      <InfoBox
        title="An assignment without use strict"
        content={
          <>
            <Typography>
              Normally, we need to define a variable before using it. But in the
              old times, it was technically possible to create a variable by a
              mere assignment of the value without using{" "}
              <Highlight>let</Highlight>. This still works now if we don’t put
              <Highlight>use strict</Highlight> in our scripts to maintain
              compatibility with old scripts.
            </Typography>
            <IDEEmitter code="" />
            <Typography>
              This is a bad practice and would cause an error in strict mode:
            </Typography>
            <IDEEmitter code="" />
          </>
        }
        isImportant
      />
    </div>
    <div>
      <Typography variant="h4">Constants</Typography>
      <Typography>
        To declare a constant (unchanging) variable, use{" "}
        <Highlight>const</Highlight> instead of <Highlight>let</Highlight>:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        Variables declared using <Highlight>const</Highlight> are called
        “constants”. They cannot be reassigned. An attempt to do so would cause
        an error:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        When a programmer is sure that a variable will never change, they can
        declare it with const to guarantee and communicate that fact to
        everyone.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Uppercase constants</Typography>
      <Typography>
        There is a widespread practice to use constants as aliases for
        difficult-to-remember values that are known before execution. Such
        constants are named using capital letters and underscores. For instance,
        let’s make constants for colors in so-called “web” (hexadecimal) format:
      </Typography>
      <IDEEmitter code="" />
      Benefits:
      <ul>
        <li>
          <Typography>
            <Highlight>RED</Highlight> is much easier to remember than{" "}
            <Highlight>"#FF0000"</Highlight>.
          </Typography>
        </li>
        <li>
          <Typography>
            It is much easier to mistype <Highlight>"#FF0000"</Highlight> than{" "}
            <Highlight>RED</Highlight>.
          </Typography>
        </li>
        <li>
          <Typography>
            When reading the code, <Highlight>RED</Highlight> is much more
            meaningful than <Highlight>"#FF0000"</Highlight>.
          </Typography>
        </li>
      </ul>
      <Typography>
        When should we use capitals for a constant and when should we name it
        normally? Let’s make that clear. Being a “constant” just means that a
        variable’s value never changes. But some constants are known before
        execution (like a hexadecimal value for red) and some constants are
        calculated in run-time, during the execution, but do not change after
        their initial assignment. For instance:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        The value of <Highlight>pageLoadTime</Highlight> is not known before the
        page load, so it’s named normally. But it’s still a constant because it
        doesn’t change after the assignment. In other words, capital-named
        constants are only used as aliases for “hard-coded” values.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Name things right</Typography>
      <Typography>
        Talking about variables, there’s one more extremely important thing. A
        variable name should have a clean, obvious meaning, describing the data
        that it stores. Variable naming is one of the most important and complex
        skills in programming. A glance at variable names can reveal which code
        was written by a beginner versus an experienced developer. In a real
        project, most of the time is spent modifying and extending an existing
        code base rather than writing something completely separate from
        scratch. When we return to some code after doing something else for a
        while, it’s much easier to find information that is well-labelled. Or,
        in other words, when the variables have good names. Please spend time
        thinking about the right name for a variable before declaring it. Doing
        so will repay you handsomely.
      </Typography>
      <Typography>Some good-to-follow rules are:</Typography>
      <ul>
        <li>
          <Typography>
            Use human-readable names like <Highlight>userName</Highlight> or{" "}
            <Highlight>shoppingCart</Highlight>.
          </Typography>
        </li>
        <li>
          <Typography>
            Stay away from abbreviations or short names like{" "}
            <Highlight>a</Highlight>, <Highlight>b</Highlight>,{" "}
            <Highlight>c</Highlight>, unless you really know what you’re doing.
          </Typography>
        </li>
        <li>
          <Typography>
            Make names concise but descriptive. For example,{" "}
            <Highlight>nameLength</Highlight> is better than{" "}
            <Highlight>lengthOfTheUserName</Highlight>.
          </Typography>
        </li>
        <li>
          <Typography>
            Avoid using names that are too generic or common, like{" "}
            <Highlight>data</Highlight> or <Highlight>value</Highlight>. They
            don’t tell anything about the data.
          </Typography>
        </li>
        <li>
          <Typography>
            Be consistent: if you use <Highlight>userName</Highlight> to store
            the user’s name, don’t use <Highlight>user</Highlight> in another
            place for the same purpose.
          </Typography>
        </li>
      </ul>
      <Typography>
        Sounds simple? Indeed it is, but creating descriptive and concise
        variable names in practice is not. Go for it.
      </Typography>
    </div>
    <div>
      <InfoBox
        title="Reuse or create?"
        content="And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones. As a result, their variables are like boxes into which people throw different things without changing their stickers. What’s inside the box now? Who knows? We need to come closer and check. Such programmers save a little bit on variable declaration but lose ten times more on debugging. An extra variable is good, not evil. Modern JavaScript minifiers and browsers optimize code well enough, so it won’t create performance issues. Using different variables for different values can even help the engine optimize your code."
      />
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>
      <Typography>
        We can declare variables to store data by using the{" "}
        <Highlight>var</Highlight>, <Highlight> let</Highlight>, or{" "}
        <Highlight>const</Highlight>
        keywords.
      </Typography>
      <ul>
        <li>
          <Typography>
            The <Highlight>let</Highlight> keyword is used to declare a variable
            that can be reassigned.
          </Typography>
        </li>
        <li>
          <Typography>
            The <Highlight>const</Highlight> keyword is used to declare a
            variable that cannot be reassigned.
          </Typography>
        </li>
        <li>
          <Typography>
            Variables should be named using human-readable names that describe
            the data they store.
          </Typography>
        </li>
      </ul>
      <Typography>
        Variables should be named in a way that allows us to easily understand
        what’s inside them.
      </Typography>
    </div>
  </StyledGlobalPage>
);
