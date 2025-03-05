export const SECTIONS = [
  {
    id: "section-1",
    intro: "Part 1: JavaScript language",
    tabs: [
      {
        id: "tab-1",
        intro: "An Introduction",
        links: [
          { href: "#intro", label: "An Introduction to JavaScript" },
          {
            href: "#manuals-specifications",
            label: "Manuals and specifications",
          },
          { href: "#code-editors", label: "Code editors" },
          { href: "#devtools", label: "Developer console" },
        ],
      },
      {
        id: "tab-2",
        intro: "JavaScript Fundamentals",
        links: [
          { href: "#hello-world", label: "Hello, World!" },
          { href: "structure", label: "Code structure" },
          { href: "#strict-mode", label: "Strict mode" },
          { href: "#variables", label: "Variables" },
          { href: "#types", label: "Data types" },
          {
            href: "#alert-prompt-confirm",
            label: "Interaction: alert, prompt, confirm",
          },
          { href: "#type-conversions", label: "Type conversions" },
          { href: "#operators", label: "Basic operators, maths" },
          { href: "#comparison", label: "Comparisons" },
          { href: "#ifelse", label: "Conditional operators: if, '?' " },
          { href: "#logical-operators", label: "Logical operators" },
          {
            href: "#nullish-coalescing-operator",
            label: "Nullish coalescing operator '??' ",
          },
          { href: "#while-for", label: "Loops: while and for" },
          { href: "#swithc", label: "The 'switch' statement" },
          { href: "#function-basics", label: "Functions" },
          { href: "#function-expressions", label: "Function expressions" },
          {
            href: "#arrow-functions-basics",
            label: "Arrow functions, the basics",
          },
          { href: "#javascript-specials", label: "JavaScript specials" },
        ],
      },
      {
        id: "tab-3",
        intro: "Code quality",
        links: [
          { href: "#debugging", label: "Debugging in Chrome" },
          { href: "#coding-style", label: "Coding style" },
          { href: "#comments", label: "Comments" },
          { href: "#ninja-code", label: "Ninja code" },
          { href: "#testing-mocha", label: "Automated testing with Mocha" },
          { href: "#polyfills", label: "Polyfills and transpilers" },
        ],
      },
      {
        id: "tab-4",
        intro: "Object: The Basics",
        links: [
          { href: "#object", label: "Objects" },
          { href: "#object-copy", label: "Object references and copying" },
          {
            href: "#garbage-collection",
            label: "Garbage collection",
          },
          { href: "#object-methods", label: "Object methods, 'this'" },
          { href: "#constructor-new", label: "Constructor, operator 'new'" },
          { href: "#optional-chaining", label: "Optional chaining '?.'" },
          { href: "#symbol", label: "Symbol type" },
          {
            href: "#object-to-primitive",
            label: "Object to primitive conversion",
          },
        ],
      },
      {
        id: "tab-5",
        intro: "Data types",
        links: [
          { href: "#primitives-methods", label: "Methods of primitives" },
          { href: "#numbers", label: "Numbers" },
          { href: "#strings", label: "Strings" },
          { href: "#arrays", label: "Arrays" },
          { href: "#array-methods", label: "Array methods" },
          { href: "#iterables", label: "Iterables" },
          { href: "#map-set", label: "Map and Set" },
          { href: "#weakmap-weakset", label: "WeakMap and WeakSet" },
          {
            href: "#keys-values-entries",
            label: "Object.keys, values, entries",
          },
          {
            href: "#destructuring-assignment",
            label: "Destructuring assignment",
          },
          { href: "#date", label: "Date and time" },
          { href: "#json", label: "JSON methods, toJSON" },
        ],
      },
      {
        id: "tab-6",
        intro: "Advanced working with functions",
        links: [
          { href: "#recursion", label: "Recursion and stack" },
          {
            href: "#rest-parameters-spread-syntax",
            label: "Rest parameters and spread syntax",
          },
          { href: "#closure", label: "Variable scope, closure" },
          {
            href: "#the-old-var",
            label: "The old 'var'",
          },
          { href: "#global-object", label: "Global object" },
          {
            href: "#function-object",
            label: "Function object, NFE",
          },
          { href: "#new-function", label: "The 'new Function' syntax" },
          {
            href: "#settimeout-setinterval",
            label: "Scheduling: setTimeout and setInterval",
          },
          {
            href: "#call-apply-decorators",
            label: "Decorators and forwarding, call/apply",
          },
          {
            href: "#bind",
            label: "Function binding",
          },
          {
            href: "#arrow-functions",
            label: "Arrow functions revisited",
          },
        ],
      },
      {
        id: "tab-7",
        intro: "Object properties configuration",
        links: [
          { href: "#property-flag", label: "Property flags and descriptors" },
          {
            href: "#property-accessors",
            label: "Property getters and setters",
          },
        ],
      },
      {
        id: "tab-8",
        intro: "Prototypes, inheritance",
        links: [
          {
            href: "#prototype-inheritance",
            label: "Prototypal inheritance",
          },
          {
            href: "#function-prototype",
            label: "F.prototype",
          },
          {
            href: "#native-prototypes",
            label: "Native prototypes",
          },
          {
            href: "#prototype-methods",
            label: "Prototype methods, objects without __proto__",
          },
        ],
      },
      {
        id: "tab-9",
        intro: "Classes",
        links: [
          {
            href: "#class",
            label: "Class basic syntax",
          },
          {
            href: "#class-inheritance",
            label: "Class inheritance",
          },
          {
            href: "#class-static",
            label: "Static properties and methods",
          },
          {
            href: "#class-private",
            label: "Private and protected properties and methods",
          },
          {
            href: "#class-extends",
            label: "Extending built-in classes",
          },
          {
            href: "#instanceof",
            label: "Class checking: 'instanceof'",
          },
          {
            href: "#class-mixins",
            label: "Mixins",
          },
        ],
      },
      {
        id: "tab-10",
        intro: "Error handling",
        links: [
          {
            href: "#error-handling",
            label: "Error handling, 'try..catch'",
          },
          {
            href: "#custom-errors",
            label: "Custom errors, extending Error",
          },
        ],
      },
      {
        id: "tab-11",
        intro: "Promises, async/await",
        links: [
          {
            href: "#callbacks",
            label: "Introduction: callbacks",
          },
          {
            href: "#promise",
            label: "Promises",
          },
          {
            href: "#promise-chaining",
            label: "Chaining",
          },
          {
            href: "#promise-error-handling",
            label: "Error handling with promises",
          },
          {
            href: "#promise-api",
            label: "Promise API",
          },
          {
            href: "#promisify",
            label: "Promisification",
          },
          {
            href: "#microtask-queue",
            label: "Microtasks",
          },
          {
            href: "#async-await",
            label: "Async/await",
          },
        ],
      },
      {
        id: "tab-12",
        intro: "Generators, advanced iteration",
        links: [
          {
            href: "#generators",
            label: "Generators",
          },
          {
            href: "#async-iterators",
            label: "Async iteration and generators",
          },
        ],
      },
      {
        id: "tab-13",
        intro: "Modules",
        links: [
          {
            href: "#modules-intro",
            label: "Modules, introduction",
          },
          {
            href: "#export-import",
            label: "Export and Import",
          },
          {
            href: "#dynamic-import",
            label: "Dynamic import",
          },
        ],
      },
      {
        id: "tab-14",
        intro: "Miscellaneous",
        links: [
          { href: "#proxy", label: "Proxy and Reflect" },
          {
            href: "#eval",
            label: "Eval: run a code string",
          },
          { href: "#currying-partials", label: "Currying" },
          { href: "#reference-type", label: "Reference Type" },
          {
            href: "#bigint",
            label: "BigInt",
          },
          { href: "#unicode", label: "Unicode, String internals" },
          {
            href: "#weakref-finalizationregistry",
            label: "WeakRef and FinalizationRegistry",
          },
        ],
      },
    ],
  },
  {
    id: "section-2",
    intro: "Part 2: Browser: Document, Events, Interfaces",
    tabs: [
      {
        id: "tab-1",
        intro: "Document",
        links: [
          { href: "#browser-environment", label: "Browser environment, specs" },
          { href: "#dom-nodes", label: "DOM tree" },
          { href: "#walking-the-dom", label: "Walking the DOM" },
          {
            href: "#searching-for-nodes",
            label: "Searching: getElement*, querySelector*",
          },
          {
            href: "#basic-dom-node-properties",
            label: "Node properties: type, tag and contents",
          },
          {
            href: "#dom-attributes-and-properties",
            label: "Attributes and properties",
          },
          { href: "#modifying-document", label: "Modifying the document" },
          { href: "#styles-and-classes", label: "Styles and classes" },
          {
            href: "#element-size-and-scrolling",
            label: "Element size and scrolling",
          },
          { href: "#window-size-scroll", label: "Window sizes and scrolling" },
          { href: "#coordinates", label: "Coordinates" },
        ],
      },
      {
        id: "tab-2",
        intro: "Introduction into Events",
        links: [
          {
            href: "#introduction-browser-events",
            label: "Introduction to browser events",
          },
          { href: "#bubbling-and-capturing", label: "Bubbling and capturing" },
          { href: "#event-delegation", label: "Event delegation" },
          {
            href: "#browser-default-actions",
            label: "Browser default actions",
          },
          { href: "#dispatching-events", label: "Dispatching custom events" },
        ],
      },
      {
        id: "tab-3",
        intro: "UI Events",
        links: [
          { href: "#mouse-events-basics", label: "Mouse events basics" },
          {
            href: "#mousemove-mouseover-mouseout-mouseenter-mouseleave",
            label: "Mousemove, mouseover/out, mouseenter/leave",
          },
          { href: "#drag-and-drop", label: "Drag'n'Drop" },
          { href: "#pointer-events", label: "Pointer events" },
          { href: "#keyboard-events", label: "Keyboard: keydown and keyup" },
          { href: "#scroll-events", label: "Scrolling" },
        ],
      },
      {
        id: "tab-4",
        intro: "Forms, controls",
        links: [
          {
            href: "#form-elements",
            label: "Form properties and methods",
          },
          { href: "#focus-blur", label: "Focus: focus/blur" },
          { href: "#form-events", label: "Form events" },
          { href: "#form-submit", label: "Form submission: event and method" },
        ],
      },
      {
        id: "tab-5",
        intro: "Document and resource loading",
        links: [],
      },
      {
        id: "tab-6",
        intro: "Miscellaneous",
        links: [],
      },
    ],
  },
  {
    id: "section-3",
    intro: "Part 3: Additional articles",
    tabs: [
      {
        id: "tab-1",
        intro: "Frames and windows",
        links: [],
      },
      {
        id: "tab-2",
        intro: "Binary data, files",
        links: [],
      },
      {
        id: "tab-3",
        intro: "Network requests",
        links: [],
      },
      {
        id: "tab-4",
        intro: "Storing data in the browser",
        links: [],
      },
      {
        id: "tab-5",
        intro: "Animation",
        links: [],
      },
      {
        id: "tab-6",
        intro: "Web components",
        links: [],
      },
      {
        id: "tab-7",
        intro: "Regular expressions",
        links: [],
      },
    ],
  },
];
