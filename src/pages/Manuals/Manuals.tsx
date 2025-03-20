import { StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";

export const Manuals = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Manuals and specifications</Typography>
      This book is a tutorial. It aims to help you gradually learn the language.
      But once you’re familiar with the basics, you’ll need other resources.
    </div>
    <div>
      <Typography variant="h4">Specification</Typography>
      The ECMA-262 specification contains the most in-depth, detailed and
      formalized information about JavaScript. It defines the language. But
      being that formalized, it’s difficult to understand at first. So if you
      need the most trustworthy source of information about the language
      details, the specification is the right place. But it’s not for everyday
      use. A new specification version is released every year. Between these
      releases, the latest specification draft is at https://tc39.es/ecma262/.
      To read about new bleeding-edge features, including those that are “almost
      standard” (so-called “stage 3”), see proposals at
      https://github.com/tc39/proposals. Also, if you’re developing for the
      browser, then there are other specifications covered in the second part of
      the tutorial.
    </div>
    <div>
      <Typography variant="h4">Manuals</Typography>
      The Mozilla Developer Network (MDN) is an excellent JavaScript reference.
      It has both beginner tutorials and comprehensive references. The
      JavaScript section is at{" "}
      <Typography variant="caption">
        https://developer.mozilla.org/en-US/docs/Web/JavaScript.
      </Typography>
    </div>
    <div>
      <Typography variant="h4">Compatibility</Typography>
      To check if a feature is supported in a certain environment, you can use
      compatibility tables. The best one is at{" "}
      <Typography variant="caption">https://caniuse.com.</Typography>
    </div>
  </StyledGlobalPage>
);
