import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const TypeConversion = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Type Conversion</Typography>
      Most of the time, operators and functions automatically convert the values
      given to them to the right type. For example, <Highlight>
        alert
      </Highlight>{" "}
      automatically converts any value to a string to show it. Mathematical
      operations convert values to numbers. There are also cases when we need to
      explicitly convert a value to the expected type.
      <InfoBox
        title="Not talking about objects yet"
        content="In this chapter, we won’t cover objects. For now, we’ll just be talking about primitives. Later, after we learn about objects, in the chapter Object to primitive conversion we’ll see how objects fit in."
      />
    </div>
    <div>
      <Typography variant="h4">String Conversion</Typography>
      String conversion happens when we need the string form of a value. For
      example, <Highlight>alert(value)</Highlight> does it to show the value. We
      can also call the <Highlight>String(value)</Highlight> function to convert
      a value to a string:
      <IDEEmitter code="" />
      The <Highlight>String(value)</Highlight> function is called String. It
      converts the value to a string.
    </div>
    <div>
      <Typography variant="h4">Numeric Conversion</Typography>
      Numeric conversion happens in mathematical functions and expressions
      automatically. For example, when division <Highlight>/</Highlight> is
      applied to non-numbers:
      <IDEEmitter code="" />
      We can use the <Highlight>Number(value)</Highlight> function to explicitly
      convert a value to a number:
      <IDEEmitter code="" />
      The <Highlight>Number(value)</Highlight> function explicitly converts
      values to numbers.
      <Typography>Numeric conversion rules:</Typography>
      {/*TODO: Create a table for numeric conversion rules*/}
      Examples:
      <IDEEmitter code="" />
      The <Highlight>undefined</Highlight> is converted to{" "}
      <Highlight>NaN</Highlight>.
    </div>
    <div>
      <Typography variant="h4">Boolean Conversion</Typography>
      Boolean conversion is the simplest one. It happens in logical operations
      (later we’ll meet conditionals and other similar things) but can also be
      performed explicitly with a call to <Highlight>Boolean(value)</Highlight>
      <Typography>The conversion rule:</Typography>
      <ul>
        <li>
          Values that are intuitively “empty”, like 0, an empty string, null,
          undefined, and NaN, become false.
        </li>
        <li>All other values become true.</li>
      </ul>
      Examples:
      <IDEEmitter code="" />
      <InfoBox
        title="Please note: the string with zero '0' is true"
        content={
          <>
            <Typography>
              Some languages (namely PHP) treat <Highlight>"0"</Highlight> as{" "}
              <Highlight>false</Highlight>. But in JavaScript, a non-empty
              string is always <Highlight>true</Highlight>.
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
          <Highlight>String(value)</Highlight> converts the value to a string.
        </li>
        <li>
          <Highlight>Number(value)</Highlight> converts the value to a number.
        </li>
        <li>
          <Highlight>Boolean(value)</Highlight> converts the value to a boolean,
          sometimes explicitly.
        </li>
      </ul>
      Numeric conversion happens in mathematical functions and expressions
      automatically. Boolean conversion happens in logical operations, but we
      can also do it explicitly.
      <Typography>The conversion follows the rules:</Typography>
      {/*TODO: Create a table for numeric conversion rules*/}
      Boolean Conversion – Occurs in logical operations. Can be performed with
      Boolean(value). Follows the rules:
      {/*TODO: Create a table for numeric conversion rules*/}
    </div>
  </StyledGlobalPage>
);
