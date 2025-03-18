import { Highlight, IDEEmitter, StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";
import { InfoBox } from "@utils/InfoBox/InfoBox";

export const Comparisons = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Comparisons</Typography>
      <Typography>
        We know many comparison operators from maths. In JavaScript they are
        written like this:
      </Typography>
      <ul>
        <li>
          <Highlight>==</Highlight> - equal to
        </li>
        <li>
          <Highlight>!=</Highlight> - not equal to
        </li>
        <li>
          <Highlight>===</Highlight> - equal value and equal type
        </li>
        <li>
          <Highlight>!==</Highlight> - not equal value or not equal type
        </li>
        <li>
          <Highlight>&gt;</Highlight> - greater than
        </li>
        <li>
          <Highlight>&lt;</Highlight> - less than
        </li>
        <li>
          <Highlight>&gt;=</Highlight> - greater than or equal to
        </li>
        <li>
          <Highlight>&lt;=</Highlight> - less than or equal to
        </li>
      </ul>
      <Typography>
        In this article we’ll learn more about different types of comparisons,
        how JavaScript makes them, including important peculiarities. At the end
        you’ll find a good recipe to avoid “JavaScript quirks”-related issues.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Boolean is the result</Typography>
      <Typography>
        A comparison result is always a boolean. For instance:
      </Typography>
      <ul>
        <li>
          <Highlight>true</Highlight> – means “yes”, “correct” or “the truth”.
        </li>
        <li>
          <Highlight>false</Highlight> – means “no”, “wrong” or “not the truth”.
        </li>
      </ul>
      <IDEEmitter code="" />
      <Typography>
        A comparison result can be assigned to a variable, just like any value:
      </Typography>
      <IDEEmitter code="" />
    </div>
    <div>
      <Typography variant="h4">String comparison</Typography>
      <Typography>
        To see whether a string is greater than another, JavaScript uses the
        so-called “dictionary” or “lexicographical” order. In other words,
        strings are compared letter-by-letter.
      </Typography>
      <IDEEmitter code="" />
      <Typography>The algorithm to compare two strings is simple:</Typography>
      <ol>
        <li>Compare the first character of both strings.</li>
        <li>
          If the first character from the first string is greater (or less) than
          the other string’s, then the first string is greater (or less) than
          the second. We’re done.
        </li>
        <li>
          Otherwise, if both strings’ first characters are the same, compare the
          second characters the same way.
        </li>
        <li>Repeat until the end of either string.</li>
        <li>
          If both strings end at the same length, then they are equal.
          Otherwise, the longer string is greater.
        </li>
      </ol>
      <Typography>
        In the first example above, the comparison{" "}
        <Highlight>'Z' {">"} 'A'</Highlight> gets to a result at the first step.
        The second comparison <Highlight> 'Glow'</Highlight> and{" "}
        <Highlight>'Glee'</Highlight> needs more steps as strings are compared
        character-by-character:
      </Typography>
      <ol>
        <li>
          <Highlight>'G'</Highlight> is the same as <Highlight>'G'</Highlight>.
        </li>
        <li>
          <Highlight>'l'</Highlight> is the same as <Highlight>'l'</Highlight>.
        </li>
        <li>
          <Highlight>'o'</Highlight> is greater than <Highlight>'e'</Highlight>.
          Done!
        </li>
      </ol>
    </div>
    <div>
      <InfoBox
        title="Not a real dictionary, but Unicode order"
        content="The comparison algorithm given above is roughly equivalent to the one used in dictionaries or phone books, but it’s not exactly the same. For instance, case matters. A capital letter 'A' is not equal to the lowercase 'a'. Which one is greater? The lowercase 'a'. Why? Because the lowercase character has a greater index in the internal encoding table JavaScript uses (Unicode). We’ll get back to specific details and consequences of this in the chapter Strings."
      />
    </div>
    <div>
      <Typography variant="h4">Comparison of different types</Typography>
      <Typography>
        When comparing values of different types, JavaScript converts the values
        to numbers.
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        A value <Highlight>null</Highlight> becomes <Highlight>0</Highlight>,
        while <Highlight>true</Highlight> becomes <Highlight>1</Highlight>.
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        For example, let’s compare a string <Highlight>'2'</Highlight> with a
        number <Highlight>1</Highlight>:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        The string <Highlight>'2'</Highlight> becomes the number{" "}
        <Highlight>2</Highlight> (conversion happens automatically here).
      </Typography>
      <Typography>
        Now, we have two numbers, so the comparison is simple and obvious.
      </Typography>
    </div>
    <div>
      <InfoBox
        title="A funny consequence"
        content={
          <>
            <Typography>It is possible that at the same time:</Typography>
            <ul>
              <li>
                Two values are equal.
                <IDEEmitter code="" />
              </li>
              <li>
                But, after a conversion, they become different.
                <IDEEmitter code="" />
              </li>
            </ul>
            <Typography>
              From JavaScript’s standpoint, this result is quite normal. An
              equality check converts values using the numeric conversion (hence
              "0" becomes 0), while the explicit Boolean conversion uses another
              set of rules.
            </Typography>
          </>
        }
      />
    </div>
    <div>
      <Typography variant="h4">Strict equality</Typography>
      <Typography>
        A regular equality check <Highlight>==</Highlight> has a problem. It
        cannot differentiate 0 from <Highlight>false</Highlight>:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        That’s because <Highlight>false</Highlight> is equivalent to{" "}
        <Highlight>0</Highlight> due to automatic type conversion. For
        comparisons like <Highlight>0 == false</Highlight> JavaScript converts{" "}
        <Highlight>false</Highlight> to <Highlight>0</Highlight>.
      </Typography>
      <Typography>
        The strict equality operator <Highlight>===</Highlight> checks the
        equality without type conversion.
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        In this case, the result is <Highlight>false</Highlight> because the
        types are different.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Comparison with null and undefined</Typography>
      <Typography>
        An incomparable <Highlight>null</Highlight>?
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        The equality check <Highlight>==</Highlight> for{" "}
        <Highlight>null</Highlight> and <Highlight>undefined</Highlight> is
        defined such that, without any conversions, they equal each other and
        don’t equal anything else.
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        For strict equality check <Highlight>===</Highlight> there is no
        conversion. So <Highlight>null === undefined</Highlight> only if they
        are of the same type.
      </Typography>
      <Typography variant="h4">Strange result: null vs 0</Typography>
      <Typography>
        Let’s compare <Highlight>null</Highlight> with a zero:
      </Typography>
      <IDEEmitter code="" />
      <Typography>
        Mathematically, that’s strange. The last result states that “
        <Highlight>null</Highlight> is greater than or equal to zero”, so in one
        of the comparisons above it must be <Highlight>true</Highlight>, but
        they are both false. The reason is that an equality check{" "}
        <Highlight>==</Highlight> and comparisons{" "}
        <Highlight>{"> < >= <="}</Highlight> work differently. Comparisons
        convert <Highlight>null</Highlight> to a number, treating it as{" "}
        <Highlight>0</Highlight>. That’s why (3){" "}
        <Highlight>null {">="} 0</Highlight> is true and (1){" "}
        <Highlight>null {">"} 0</Highlight> is false. On the other hand, the
        equality check <Highlight>==</Highlight> for{" "}
        <Highlight>undefined</Highlight> and <Highlight>null</Highlight> is
        defined such that, without any conversions, they equal each other and
        don’t equal anything else. That’s why (2){" "}
        <Highlight>null == 0</Highlight> is false.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">An incomparable undefined</Typography>
      The value undefined shouldn’t be compared to other values:
      <IDEEmitter code="" />
      Why does it dislike zero so much? Always false! We get these results
      because:
      <ul>
        <li>
          <Highlight>undefined</Highlight> is treated specially by the language.
        </li>
        <li>It is a “primitive value”, but it is not a “primitive type”.</li>
        <li>
          There is no strict comparison check for{" "}
          <Highlight>undefined</Highlight>, so it’s always{" "}
          <Highlight>false</Highlight>.
        </li>
      </ul>
      <Typography>Avoid problems</Typography>
      Why did we go over these examples? Should we remember these peculiarities
      all the time? Well, not really. Actually, these tricky things will
      gradually become familiar over time, but there’s a solid way to avoid
      problems with them:
      <ul>
        <li>
          Always use the strict equality check <Highlight>===</Highlight>.
        </li>
        <li>
          Think twice before comparing values of different types. If you need to
          compare, convert them to numbers manually and then compare.
        </li>
        <li>
          Be careful when working with <Highlight>null</Highlight> and{" "}
          <Highlight>undefined</Highlight>.
        </li>
      </ul>
    </div>
    <div>
      <Typography variant="h4">Summary</Typography>
      <ul>
        <li>
          The equality check <Highlight>==</Highlight> for{" "}
          <Highlight>null</Highlight> and <Highlight>undefined</Highlight> is
          defined such that, without any conversions, they equal each other and
          don’t equal anything else.
        </li>
        <li>
          A strict equality check <Highlight>===</Highlight> checks the equality
          without type conversion.
        </li>
        <li>
          When comparing values of different types, JavaScript converts the
          values to numbers.
        </li>
        <li>
          To see whether a string is greater than another, JavaScript uses the
          so-called “dictionary” or “lexicographical” order.
        </li>
        <li>
          A comparison result is always a boolean. For instance,{" "}
          <Highlight>true</Highlight> means “yes”, “correct” or “the truth”.
        </li>
      </ul>
    </div>
  </StyledGlobalPage>
);
