import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const NCO = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Nullish coalescing operator '??'</Typography>
      <InfoBox
        title="A recent addition"
        content="This is a recent addition to the language. Old browsers may need polyfills."
        isImportant
      />
      The nullish coalescing operator is written as two question marks{" "}
      <Highlight>??</Highlight>. As it treats <Highlight>null</Highlight> and{" "}
      <Highlight>undefined</Highlight> similarly, we’ll use a special term here,
      in this article. For brevity, we’ll say that a value is “defined” when
      it’s neither <Highlight>null</Highlight> nor{" "}
      <Highlight>undefined</Highlight>. The result of{" "}
      <Highlight>a ?? b</Highlight> is:
      <ul>
        <li>
          <Highlight>a</Highlight> if <Highlight>a</Highlight> is defined,
        </li>
        <li>
          <Highlight>b</Highlight> if <Highlight>a</Highlight> isn’t defined.
        </li>
      </ul>
      In other words, <Highlight>??</Highlight> returns the first argument if
      it’s not <Highlight>null/undefined</Highlight>. Otherwise, the second one.
      The nullish coalescing operator isn’t anything completely new. It’s just a
      nice syntax to get the first “defined” value of the two. We can rewrite{" "}
      <Highlight>result = a ?? b</Highlight> using the operators that we already
      know, like this:
      <IDEEmitter code="" />
      Now it should be absolutely clear what <Highlight>??</Highlight> does.
      Let’s see where it helps. The common use case for{" "}
      <Highlight>??</Highlight> is to provide a default value. For example, here
      we show <Highlight>user</Highlight> if its value isn’t{" "}
      <Highlight>null/undefined</Highlight>, otherwise{" "}
      <Highlight>Anonymous</Highlight>:
      <IDEEmitter code="" />
      Here’s the example with user assigned to a name:
      <IDEEmitter code="" />
      We can also use a sequence of ?? to select the first value from a list
      that isn’t null/undefined. Let’s say we have a user’s data in variables
      firstName, lastName or nickName. All of them may be not defined, if the
      user decided not to fill in the corresponding values. We’d like to display
      the user name using one of these variables, or show “Anonymous” if all of
      them are null/undefined. Let’s use the ?? operator for that:
    </div>
    <div>
      <Typography variant="h4">Comparison with ||</Typography>
      The OR <Highlight>||</Highlight> operator would return the right operand
      if the left one is falsy. In other words, it would return the right
      operand if the left operand is <Highlight>null</Highlight> or{" "}
      <Highlight>undefined</Highlight>. That’s not what we want in this task. We
      want to show <Highlight>user</Highlight> if it’s not{" "}
      <Highlight>null</Highlight> or <Highlight>undefined</Highlight>, otherwise{" "}
      <Highlight>Anonymous</Highlight>. The comparison is:
      <IDEEmitter code="" />
      Historically, the OR <Highlight>||</Highlight> operator was there first.
      It’s been there since the beginning of JavaScript, so developers were
      using it for such purposes for a long time. On the other hand, the nullish
      coalescing operator <Highlight>??</Highlight> was added to JavaScript only
      recently, and the reason for that was that people weren’t quite happy with{" "}
      <Highlight>||</Highlight>. The important difference between them is that:
      <ul>
        <li>
          <Highlight>||</Highlight> returns the right operand if the left one is
          falsy.
        </li>
        <li>
          <Highlight>??</Highlight> returns the right operand if the left one is{" "}
          <Highlight>null</Highlight> or <Highlight>undefined</Highlight>.
        </li>
      </ul>
      In other words, <Highlight>||</Highlight> doesn’t distinguish between{" "}
      <Highlight>false</Highlight>, <Highlight>0</Highlight>, an empty string{" "}
      <Highlight>""</Highlight> and <Highlight>null/undefined</Highlight>. They
      are all the same – falsy values. If any of these is the first argument of{" "}
      <Highlight>||</Highlight>, then we’ll get the second argument as the
      result. In practice though, we may want to use default value only when the
      variable is <Highlight>null/undefined</Highlight>. That is, when the value
      is really unknown/not set. For example, consider this:
      <IDEEmitter code="" />
      <ul>
        <li>
          <Highlight>||</Highlight> would replace <Highlight>user</Highlight>{" "}
          with <Highlight>""</Highlight> if it were <Highlight>null</Highlight>.
        </li>
        <li>
          <Highlight>??</Highlight> would keep it unchanged.
        </li>
      </ul>
      In practice, the zero height is often a valid value, that shouldn’t be
      replaced with the default. So ?? does just the right thing.
    </div>
    <div>
      <Typography variant="h4">Precedence</Typography>
      The nullish coalescing operator <Highlight>??</Highlight> has a very low
      precedence, lower than <Highlight>=</Highlight>, so it’s always grouped
      together with the variables on its left. This is very important in
      practice. For example, here we assign <Highlight>height</Highlight> to{" "}
      <Highlight>user.height</Highlight> if <Highlight>user</Highlight> exists
      and has <Highlight>height</Highlight>, and to{" "}
      <Highlight>defaultHeight</Highlight> otherwise:
      <IDEEmitter code="" />
      If we didn’t have the parentheses, then the code would work like this:
      <IDEEmitter code="" />
      The parentheses are required. Without them, the code would give a syntax
      error. So, always use parentheses to avoid problems with the precedence.
    </div>
    <div>
      <Typography variant="h4">Using ?? with && or ||</Typography>
      Due to safety reasons, JavaScript forbids using <Highlight>
        ??
      </Highlight>{" "}
      together with <Highlight>&&</Highlight> and <Highlight>||</Highlight>{" "}
      operators, unless the precedence is explicitly specified with parentheses.
      The code below triggers a syntax error:
      <IDEEmitter code="" />
      The limitation is surely debatable, it was added to the language
      specification with the purpose to avoid programming mistakes, when people
      start to switch from <Highlight>||</Highlight> to{" "}
      <Highlight>??</Highlight>. Use explicit parentheses to work around it:
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>
      The nullish coalescing operator <Highlight>??</Highlight> provides a
      short-circuiting way to choose a first “defined” value from a list. It’s
      useful when we want to use the first “defined” value from the list of
      variables or expressions. The result of <Highlight>a ?? b</Highlight> is
      <Highlight>a</Highlight> if <Highlight>a</Highlight> is not{" "}
      <Highlight>null</Highlight> or <Highlight>undefined</Highlight>, otherwise{" "}
      <Highlight>b</Highlight>. The operator is not a replacement for{" "}
      <Highlight>||</Highlight>. It’s used when we specifically want to handle{" "}
      <Highlight>null</Highlight> and <Highlight>undefined</Highlight> but not
      other falsy values. The precedence of <Highlight>??</Highlight> is very
      low, lower than <Highlight>=</Highlight>, so it’s always grouped with the
      variables on its left. To avoid syntax errors, use parentheses when using{" "}
      <Highlight>??</Highlight> with other operators like{" "}
      <Highlight>&&</Highlight> and <Highlight>||</Highlight>.
    </div>
  </StyledGlobalPage>
);
