import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const Operators = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Basic operators, maths</Typography>
      We know many operators from school. They are things like addition{" "}
      <Highlight>+</Highlight>, multiplication <Highlight>*</Highlight>,
      subtraction <Highlight>-</Highlight>, and so on. In this chapter, we’ll
      start with simple operators, then concentrate on JavaScript-specific
      aspects, not covered by school arithmetic.
    </div>
    <div>
      <Typography variant="h4">Terms: “unary”, “binary”, “operand”</Typography>
      Before we move on, let’s grasp some common terminology.
      <ul>
        <li>
          An operand – is what operators are applied to. For instance, in the
          multiplication of <Highlight>5 * 2</Highlight> there are two operands:
          the left operand is <Highlight>5</Highlight> and the right operand is
          <Highlight>2</Highlight>. Sometimes, people call these “arguments”
          instead of “operands”.
        </li>
        <li>
          An operator is unary if it has a single operand. For example, the
          unary negation <Highlight>-</Highlight> reverses the sign of a number:
          <IDEEmitter code="" />
        </li>
        <li>
          An operator is binary if it has two operands. The same minus exists in
          binary form as well:
          <IDEEmitter code="" />
          Formally, in the examples above we have two different operators that
          share the same symbol: the negation operator, a unary operator that
          reverses the sign, and the subtraction operator, a binary operator
          that subtracts one number from another.
        </li>
      </ul>
    </div>
    <div>
      <Typography variant="h4">Maths</Typography>
      The following math operations are supported:
      <ul>
        <li>
          <Highlight>+</Highlight> Addition
        </li>
        <li>
          <Highlight>-</Highlight> Subtraction
        </li>
        <li>
          <Highlight>*</Highlight> Multiplication
        </li>
        <li>
          <Highlight>/</Highlight> Division
        </li>
        <li>
          <Highlight>**</Highlight> Exponentiation (es2016)
        </li>
        <li>
          <Highlight>%</Highlight> Modulus (the remainder of a division)
        </li>
      </ul>
      The first four are straightforward, while % and ** need a few words about
      them.
    </div>
    <div>
      <Typography variant="h4">Remainder %</Typography>
      The remainder <Highlight>%</Highlight> is a special arithmetic operator
      that returns the remainder of a division. For instance:
      <IDEEmitter code="" />
      The result of <Highlight>a % b</Highlight> is the remainder of the integer
      division of <Highlight>a</Highlight> by <Highlight>b</Highlight>
      . For instance:
      <IDEEmitter code="" />
      The remainder operator is sometimes mistakenly referred to as “modulus”.
      It is very similar to modulus, but there is a key difference – the
      remainder can be negative, while modulus is always positive.
    </div>
    <div>
      <Typography variant="h4">Exponentiation **</Typography>
      The exponentiation operator <Highlight>**</Highlight> is a recent addition
      to the JavaScript language. For a natural number <Highlight>n</Highlight>,
      the result of <Highlight>a ** n</Highlight> is a multiplied by itself{" "}
      <Highlight>n</Highlight> times. For instance:
      <IDEEmitter code="" />
      The operator works for non-integer numbers as well. For instance, a
      fractional power:
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography variant="h4">String concatenation with binary +</Typography>
      Usually, the plus operator <Highlight>+</Highlight> sums numbers. But, if
      the binary <Highlight>+</Highlight> is applied to strings, it merges
      (concatenates) them:
      <IDEEmitter code="" />
      In the first line, JavaScript converts 2 to a string and then merges them.
    </div>
    <div>
      <Typography variant="h4">Numeric conversion, unary +</Typography>
      The plus <Highlight>+</Highlight> exists in two forms: the binary form
      that we used above and the unary form. The unary plus or, in other words,
      the plus operator <Highlight>+</Highlight>
      applied to a single value, doesn’t do anything to numbers. But if the
      operand is not a number, the unary plus converts it into a number. For
      example:
      <IDEEmitter code="" />
      The unary plus <Highlight>+</Highlight> applied to a single value would
      not do anything. But if the operand is not a number, the unary plus{" "}
      <Highlight>+</Highlight> converts it into a number. The conversion is
      obvious for strings. If the string is a valid number, the unary plus{" "}
      <Highlight>+</Highlight> returns the number as a number. If the string is
      not a valid number, the unary plus <Highlight>+</Highlight> returns{" "}
      <Highlight>NaN</Highlight>.
    </div>
    <div>
      <Typography variant="h4">Operator precedence</Typography>
      If an expression has more than one operator, the execution order is
      defined by their precedence, or, in other words, the order of operations.
      For instance, multiplication <Highlight>*</Highlight> has a higher
      precedence than addition <Highlight>+</Highlight>. So the operation{" "}
      <Highlight>1 + 2 * 2</Highlight> is evaluated as <Highlight>5</Highlight>,
      not <Highlight>6</Highlight>. Parentheses <Highlight>(…)</Highlight>{" "}
      override any precedence rules. They allow us to control the order of
      execution. Here’s an extract from the precedence table (you don’t need to
      remember this, but note that unary operators are higher than corresponding
      binary ones):
      {/*TODO: Create a table for operator precedence*/}
      As we can see, the “unary plus” has a priority of 14 which is higher than
      the 11 of “addition” (binary plus). That’s why, in the expression "+apples
      + +oranges", unary pluses work before the addition.
    </div>
    <div>
      <Typography variant="h4">Assignment</Typography>
      An assignment <Highlight>=</Highlight> is a process of storing a value in
      a variable. The <Highlight>=</Highlight> operator assigns the value of its
      right operand to its left operand. For example:
      <IDEEmitter code="" />
      The value of <Highlight>right</Highlight> is assigned to{" "}
      <Highlight>left</Highlight>.
    </div>
    <div>
      <Typography variant="h4">Assignment = returns a value</Typography>
      The fact of = being an operator, not a “magical” language construct has an
      interesting implication. All operators in JavaScript return a value.
      That’s obvious for + and -, but also true for =. The call x = value writes
      the value into x and then returns it. Here’s a demo that uses an
      assignment as part of a more complex expression:
      <IDEEmitter code="" />
      The code <Highlight>result = value</Highlight> writes the value into
      result and then returns it.
    </div>
    <div>
      <Typography variant="h4">Chaining assignments</Typography>
      An assignment can return a value. So we can chain assignments:
      <IDEEmitter code="" />
      The code <Highlight>a = b = c = 2 + 2</Highlight> sets{" "}
      <Highlight>c</Highlight>, <Highlight>b</Highlight>, and{" "}
      <Highlight>a</Highlight> to 4.
    </div>
    <div>
      <Typography variant="h4">Modify-in-place</Typography>
      We often need to apply an operator to a variable and store the new result
      in that same variable. For example:
      <IDEEmitter code="" />
      The last line is a shorter form of{" "}
      <Highlight>counter = counter + 1</Highlight>.
    </div>
    <div>
      <Typography variant="h4">Increment/decrement</Typography>
      Increment <Highlight>++</Highlight> increases a variable by 1:
      <IDEEmitter code="" />
      Decrement <Highlight>--</Highlight> decreases a variable by 1:
      <IDEEmitter code="" />
      They can be used inside expressions.
      <InfoBox
        title="Important:"
        content="Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error."
        isImportant
      />
      The operators ++ and -- can be placed either before or after a variable.
      <ul>
        <li>
          When the operator goes after the variable, it is in “postfix form”:
          <Highlight>counter++</Highlight>.
        </li>
        <li>
          The “prefix form” is when the operator goes before the variable:
          <Highlight>++counter</Highlight>.
        </li>
      </ul>
      Both of these statements do the same thing: increase counter by 1. Is
      there any difference? Yes, but we can only see it if we use the returned
      value of ++/--. Let’s clarify. As we know, all operators return a value.
      Increment/decrement is no exception. The prefix form returns the new value
      while the postfix form returns the old value (prior to
      increment/decrement). To see the difference, here’s an example:
      <IDEEmitter code="" />
      In the first line, the postfix form <Highlight>counter++</Highlight>
      returns the old value (the value before increment). That’s why the
      <Highlight>1</Highlight> is shown. In the second line, the prefix form{" "}
      <Highlight>++counter</Highlight>
      returns the new value after the increment.
      <Typography>
        In the line (*), the postfix form counter++ also increments counter but
        returns the old value (prior to increment). So, the alert shows 1. To
        summarize:
      </Typography>
      <ul>
        <li>
          If the result of increment/decrement is not used, there is no
          difference in which form to use:
          <IDEEmitter code="" />
        </li>
        <li>
          If we’d like to increase a value and immediately use the result of the
          operator, we need the prefix form:
          <IDEEmitter code="" />
        </li>
      </ul>
      <InfoBox
        title="Increment/decrement among other operators"
        content={
          <>
            <Typography>
              The operators ++/-- can be used inside expressions as well. Their
              precedence is higher than most other arithmetical operations. For
              instance:
            </Typography>
            <IDEEmitter code="" />
            <Typography>Compare with:</Typography>
            <IDEEmitter code="" />
            <Typography>
              Though technically okay, such notation usually makes code less
              readable. One line does multiple things – not good. While reading
              code, a fast “vertical” eye-scan can easily miss something like
              counter++ and it won’t be obvious that the variable increased. We
              advise a style of “one line – one action”:
            </Typography>
            <IDEEmitter code="" />
          </>
        }
      />
    </div>
    <div>
      <Typography variant="h4">Bitwise operators</Typography>
      Bitwise operators treat arguments as 32-bit integer numbers and work on
      the level of their binary representation. These operators are not
      JavaScript-specific. They are supported in most programming languages.
      <ul>
        <li>
          <Highlight>&</Highlight> AND
        </li>
        <li>
          <Highlight>|</Highlight> OR
        </li>
        <li>
          <Highlight>^</Highlight> XOR
        </li>
        <li>
          <Highlight>~</Highlight> NOT
        </li>
        <li>
          <Highlight>&lt;&lt;</Highlight> LEFT SHIFT
        </li>
        <li>
          <Highlight>&gt;&gt;</Highlight> RIGHT SHIFT
        </li>
        <li>
          <Highlight>&gt;&gt;&gt;</Highlight> ZERO-FILL RIGHT SHIFT
        </li>
      </ul>
      Bitwise operators are used in a few areas of JavaScript programming, such
      as:
      <ul>
        <li>
          The binary data processing and cryptography. For instance, the AES
          algorithm for encryption, etc.
        </li>
        <li>
          Low-level programming. For instance, device drivers and operating
          systems.
        </li>
        <li>
          Optimization. Sometimes, bitwise operators are used to improve the
          performance of the code.
        </li>
      </ul>
    </div>
    <div>
      <Typography variant="h4">Comma</Typography>
      The comma operator <Highlight>,</Highlight> allows us to evaluate several
      expressions, dividing them with a comma. Each of them is evaluated but
      only the result of the last one is returned. For example:
      <IDEEmitter code="" />
      Here, the first expression 1 + 2 is evaluated and its result is thrown
      away. Then, 3 + 4 is evaluated and returned as the result.
      <InfoBox
        title="Comma has a very low precedence"
        content={
          <>
            <Typography>
              The comma operator has a very low precedence, lower than{" "}
              <Highlight>=</Highlight>, so that parentheses are important:
            </Typography>
            <IDEEmitter code="" />
          </>
        }
      />
      Why do we need an operator that throws away everything except the last
      expression? Sometimes, people use it in more complex constructs to put
      several actions in one line. For example:
      <IDEEmitter code="" />
      Such tricks are used in many JavaScript frameworks. That’s why we’re
      mentioning them. But usually they don’t improve code readability so we
      should think well before using them.
    </div>
  </StyledGlobalPage>
);
