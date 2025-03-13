import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const DataTypes = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Data Types</Typography>
      <Typography>
        A value in JavaScript is always of a certain type. For example, a string
        or a number. There are eight basic data types in JavaScript. Here, we’ll
        cover them in general and in the next chapters we’ll talk about each of
        them in detail. We can put any type in a variable. For example, a
        variable can at one moment be a string and then store a number:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        Programming languages that allow such things, such as JavaScript, are
        called “dynamically typed”, meaning that there exist data types, but
        variables are not bound to any of them.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Number</Typography>
      <IDEEmitter code="" />
      <Typography>
        The number type represents both integer and floating point numbers.
        There are many operations for numbers, e.g. multiplication{" "}
        <Highlight>*</Highlight>, division <Highlight>/</Highlight>, addition{" "}
        <Highlight>+</Highlight>, subtraction <Highlight>-</Highlight>, and so
        on. Besides regular numbers, there are so-called “special numeric
        values” which also belong to this data type:{" "}
        <Highlight>Infinity</Highlight>, <Highlight>-Infinity</Highlight> and
        <Highlight>NaN</Highlight>.
      </Typography>
      <ul>
        <li>
          <Typography>
            <Highlight>Infinity</Highlight> represents the mathematical Infinity
            ∞. It is a special value that’s greater than any number. We can get
            it as a result of division by zero:
          </Typography>
          <IDEEmitter code="" />
          <Typography>Or just reference it directly:</Typography>
          <IDEEmitter code="" />
        </li>
        <li>
          <Typography>
            <Highlight>NaN</Highlight> represents a computational error. It is a
            result of an incorrect or an undefined mathematical operation, for
            instance:
          </Typography>
          <IDEEmitter code="" />
          <Typography>
            <Highlight>NaN</Highlight> is sticky. Any further mathematical
            operation on NaN returns NaN:
          </Typography>
          <IDEEmitter code="" />
          <Typography>
            So, if there’s a <Highlight>NaN</Highlight> somewhere in a
            mathematical expression, it propagates to the whole result (there’s
            only one exception to that: <Highlight>NaN ** 0</Highlight> is{" "}
            <Highlight>1</Highlight>).
          </Typography>
        </li>
      </ul>
      <InfoBox
        title="Mathematical operations are safe"
        content="Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc. The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result."
      />
      <Typography>
        Special numeric values formally belong to the “number” type. Of course
        they are not numbers in the common sense of this word. We’ll see more
        about working with numbers in the chapter Numbers.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">BigInt</Typography>
      {/*TODO: Created a root numbers*/}
      <Typography>
        In JavaScript, the “number” type cannot safely represent integer values
        larger than
        <Highlight>(253-1)</Highlight> (that’s{" "}
        <Highlight>9007199254740991</Highlight>), or less than{" "}
        <Highlight>-(253-1)</Highlight> for negatives. To be really precise, the
        “number” type can store larger integers (up to{" "}
        <Highlight>1.7976931348623157 * 10308</Highlight>), but outside of the
        safe integer range <Highlight>±(253-1)</Highlight> there’ll be a
        precision error, because not all digits fit into the fixed 64-bit
        storage. So an “approximate” value may be stored. For example, these two
        numbers (right above the safe range) are the same:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        So to say, all odd integers greater than <Highlight>(253-1)</Highlight>
        can’t be stored at all in the “number” type. For most purposes{" "}
        <Highlight>±(253-1)</Highlight>
        range is quite enough, but sometimes we need the entire range of really
        big integers, e.g. for cryptography or microsecond-precision timestamps.
        BigInt type was recently added to the language to represent integers of
        arbitrary length. A BigInt value is created by appending n to the end of
        an integer:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        As <Highlight>BigInt</Highlight> numbers are rarely needed, we don’t
        cover them here, but devoted them a separate chapter BigInt. Read it
        when you need such big numbers.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">String</Typography>
      <Typography>
        A string in JavaScript must be surrounded by quotes.
      </Typography>
      <IDEEmitter code="" />
      <Typography>In JavaScript, there are 3 types of quotes.</Typography>
      <ul>
        <li>
          <Typography>
            Double quotes: <Highlight>"Hello"</Highlight>.
          </Typography>
        </li>
        <li>
          <Typography>
            Single quotes: <Highlight>'Hello'</Highlight>.
          </Typography>
        </li>
        <li>
          <Typography>
            Backticks: <Highlight>`Hello`</Highlight>. They allow us to embed
            expressions into a string by wrapping them in{" "}
            <Highlight>${"{}"}</Highlight>.
          </Typography>
        </li>
      </ul>
      <IDEEmitter code="" />
      <Typography>
        The expression inside <Highlight>{"${…}"}</Highlight> is evaluated and
        the result becomes a part of the string. We can put anything in there: a
        variable like <Highlight>name</Highlight> or an arithmetical expression
        like <Highlight>1 + 2</Highlight> or something more complex. Please note
        that this can only be done in backticks. Other quotes don’t have this
        embedding functionality!
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        We’ll cover strings more thoroughly in the chapter Strings.
      </Typography>
    </div>
    <div>
      <InfoBox
        title="There is no character type."
        content="In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is called “char”. In JavaScript, there is no such type. There’s only one type: string. A string may consist of zero characters (be empty), one character or many of them."
      />
    </div>
    <div>
      <Typography variant="h4">Boolean</Typography>
      <Typography>
        The boolean type has only two values: <Highlight>true</Highlight> and{" "}
        <Highlight>false</Highlight>. This type is commonly used to store yes/no
        values: <Highlight>true</Highlight> means “yes, correct”, and{" "}
        <Highlight>false</Highlight>
        means “no, incorrect”. For instance:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        Boolean values also come as a result of comparisons:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        We’ll cover booleans more deeply in the chapter Logical operators.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">null</Typography>
      <Typography>
        The special <Highlight>null</Highlight> value does not belong to any of
        the types described above. It forms a separate type of its own which
        contains only the <Highlight>null</Highlight> value:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        In JavaScript, <Highlight>null</Highlight> is not a “reference to a
        non-existing object” or a “null pointer” like in some other languages.
        It’s just a special value which represents “nothing”, “empty” or “value
        unknown”. The code above states that the value is unknown or empty.
      </Typography>
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography variant="h4">undefined</Typography>
      <Typography>
        The special value <Highlight>undefined</Highlight> stands apart. It
        makes a type of its own, just like <Highlight>null</Highlight>. The
        meaning of <Highlight>undefined</Highlight> is “value is not assigned”.
        If a variable is declared, but not assigned, then its value is
        <Highlight>undefined</Highlight>:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        The code above generates the same result as if the variable was not
        declared at all. We’ll cover <Highlight>undefined</Highlight> more
        deeply in the chapter Undefined value.
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        Technically, it is possible to explicitly assign{" "}
        <Highlight>undefined</Highlight> to a variable:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        …But we don’t recommend doing that. Normally, one uses{" "}
        <Highlight>null</Highlight> to assign an “empty” or “unknown” value to a
        variable, while <Highlight>undefined</Highlight> is reserved as a
        default initial value for unassigned things.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Object and Symbol</Typography>
      <Typography>
        The <Highlight>object</Highlight> type is special. All other types are
        called “primitive”, because their values can contain only a single thing
        (be it a string or a number or whatever). In contrast, objects are used
        to store collections of data and more complex entities. We’ll address
        objects in detail in the chapter Objects.
      </Typography>
      <Typography>
        The <Highlight>symbol</Highlight> type is used to create unique
        identifiers for objects. We’ll cover it in the chapter Symbol type.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">The typeof operator</Typography>
      <Typography>
        The <Highlight>typeof</Highlight> operator returns the type of the
        argument. It’s useful when we want to process values of different types
        differently or just want to do a quick check.
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        The last three lines may need additional explanation:
      </Typography>
      <ul>
        <li>
          <Typography>
            <Highlight>typeof null</Highlight> =={" "}
            <Highlight>'object'</Highlight> – this is an officially recognized
            error in <Highlight>typeof</Highlight>, it’s not actually an object.
            It’s a special value, but very primitive.
          </Typography>
        </li>
        <li>
          <Typography>
            <Highlight>typeof alert</Highlight> =={" "}
            <Highlight>'function'</Highlight> – functions are treated specially.
            We’ll deal with them later in the chapter Functions.
          </Typography>
        </li>
        <li>
          <Highlight>Math</Highlight> is a built-in object that provides
          mathematical operations. We will learn it in the chapter Numbers.
          Here, it serves just as an example of an object.
        </li>
      </ul>
    </div>
    <div>
      <InfoBox
        title="The typeof(x) syntax"
        content="You may also come across another syntax: typeof(x). It’s the same as typeof x. To put it clear: typeof is an operator, not a function. The parentheses here aren’t a part of typeof. It’s the kind of parentheses used for mathematical grouping. Usually, such parentheses contain a mathematical expression, such as (2 + 2), but here they contain only one argument (x). Syntactically, they allow to avoid a space between the typeof operator and its argument, and some people like it. Some people prefer typeof(x), although the typeof x syntax is much more common."
      />
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>
      <Typography>There are 8 basic data types in JavaScript.</Typography>
      <ul>
        <li>
          <Typography>
            <Highlight>number</Highlight> for numbers of any kind: integer or
            floating-point, integers are limited by ±(253-1).
          </Typography>
        </li>
        <li>
          <Typography>
            <Highlight>bigint</Highlight> is for integer numbers of arbitrary
            length.
          </Typography>
        </li>
        <li>
          <Typography>
            <Highlight>string</Highlight> for strings. A string may have zero or
            more characters, there’s no separate single-character type.
          </Typography>
        </li>
        <li>
          <Typography>
            <Highlight>boolean</Highlight> for true/false.
          </Typography>
        </li>
        <li>
          <Typography>
            <Highlight>null</Highlight> for unknown values – a standalone type
            that has a single value <Highlight>null</Highlight>.
          </Typography>
        </li>
        <li>
          <Typography>
            <Highlight>undefined</Highlight> for unassigned values – a
            standalone type that has a single value{" "}
            <Highlight>undefined</Highlight>.
          </Typography>
        </li>
        <li>
          <Typography>
            <Highlight>object</Highlight> for more complex data structures.
          </Typography>
        </li>
        <li>
          <Typography>
            <Highlight>symbol</Highlight> for unique identifiers.
          </Typography>
        </li>
      </ul>
      <Typography>
        The typeof operator allows us to see which type is stored in a variable.
      </Typography>
      <ul>
        <li>Usually used as typeof x, but typeof(x) is also possible.</li>
        <li>Returns a string with the name of the type, like "string".</li>
        <li>
          For null returns "object" – this is an error in the language, it’s not
          actually an object.
        </li>
      </ul>
      <Typography>
        In the next chapters, we’ll concentrate on primitive values and once
        we’re familiar with them, we’ll move on to objects.
      </Typography>
    </div>
  </StyledGlobalPage>
);
