import { StyledGlobalPage } from "@shared/utils";
import { Typography } from "@mui/material";

export const CodeEditors = () => (
  <StyledGlobalPage>
    <div>
      <Typography variant="h3">Code Editors</Typography>
      Code Editors are the tools that help you write code. They provide syntax
      highlighting, code folding, and other features that make writing code
      easier.
    </div>
    <div>
      <Typography variant="h4">IDE</Typography>
      The term IDE (Integrated Development Environment) refers to a powerful
      editor with many features that usually operates on a “whole project.” As
      the name suggests, it’s not just an editor, but a full-scale “development
      environment.” An IDE loads the project (which can be many files), allows
      navigation between files, provides autocompletion based on the whole
      project (not just the open file), and integrates with a version management
      system (like git), a testing environment, and other “project-level” stuff.
      If you haven’t selected an IDE yet, consider the following options:
      <ul>
        <li>Visual Studio Code</li>
        <li>WebStorm</li>
        <li>IntelliJ IDEA</li>
        <li>Sublime Text</li>
        <li>Atom</li>
        <li>Notepad++</li>
        <li>Brackets</li>
      </ul>
      For Windows, there’s also “Visual Studio”, not to be confused with “Visual
      Studio Code”. “Visual Studio” is a paid and mighty Windows-only editor,
      well-suited for the .NET platform. It’s also good at JavaScript. There’s
      also a free version Visual Studio Community. Many IDEs are paid, but have
      a trial period. Their cost is usually negligible compared to a qualified
      developer’s salary, so just choose the best one for you.
    </div>
    <div>
      <Typography variant="h4">Lightweight editors</Typography>
      “Lightweight editors” are not as powerful as IDEs, but they’re fast,
      elegant and simple. They are mainly used to open and edit a file
      instantly. The main difference between a “lightweight editor” and an “IDE”
      is that an IDE works on a project-level, so it loads much more data on
      start, analyzes the project structure if needed and so on. A lightweight
      editor is much faster if we need only one file. In practice, lightweight
      editors may have a lot of plugins including directory-level syntax
      analyzers and autocompleters, so there’s no strict border between a
      lightweight editor and an IDE. There are many options, for instance:
      <ul>
        <li>Sublime Text</li>
        <li>Atom</li>
        <li>Notepad++</li>
        <li>Brackets</li>
      </ul>
    </div>
    <div>
      <Typography variant="h4">Let’s not argue</Typography>
      The editors in the lists above are those that either I or my friends whom
      I consider good developers have been using for a long time and are happy
      with. There are other great editors in our big world. Please choose the
      one you like the most. The choice of an editor, like any other tool, is
      individual and depends on your projects, habits, and personal preferences.
      The author’s personal opinion:
      <ul>
        <li>
          <strong>Visual Studio Code</strong> is a great choice for any project.
          It’s free, fast, and has a lot of plugins. It’s the best choice for
          JavaScript development.
        </li>
        <li>
          <strong>WebStorm</strong> is a paid but very powerful IDE. It’s the
          best choice for big projects, especially if you are working with
          Angular or React.
        </li>
        <li>
          <strong>Sublime Text</strong> is a great lightweight editor. It’s
          fast, elegant, and has a lot of plugins. It’s a good choice for small
          projects.
        </li>
      </ul>
    </div>
  </StyledGlobalPage>
);
