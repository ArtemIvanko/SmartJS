import { ReactNode } from "react";

export const Pages: Record<string, () => ReactNode> = {
  "#intro": () => <div>Intro</div>,
  "#manuals-specifications": () => <div>Manuals Specifications</div>,
  "#code-editors": () => <div>Code Editors</div>,
  "#devtools": () => <div>Developer Console</div>,
  "#hello-world": () => <div>Hello World</div>,
  "#structure": () => <div>Structure</div>,
  "#strict-mode": () => <div>Strict Mode</div>,
  "#variables": () => <div>Variables</div>,
  "#types": () => <div>Data Types</div>,
  "#alert-prompt-confirm": () => <div>Alert, Prompt, Confirm</div>,
  "#type-conversions": () => <div>Type Conversions</div>,
  "#operators": () => <div>Operators</div>,
  "#comparison": () => <div>Comparisons</div>,
  "#ifelse": () => <div>If Else</div>,
  "#logical-operators": () => <div>Logical Operators</div>,
  "#nullish-coalescing-operator": () => <div>Nullish Coalescing Operator</div>,
  "#while-for": () => <div>While and For Loops</div>,
  "#switch": () => <div>Switch</div>,
  "#function-basics": () => <div>Functions</div>,
  "#function-expressions": () => <div>Function Expressions</div>,
  "#arrow-functions-basics": () => <div>Arrow Functions</div>,
  "#javascript-specials": () => <div>JavaScript Specials</div>,
  "#debugging": () => <div>Debugging in Chrome</div>,
  "#coding-style": () => <div>Coding Style</div>,
  "#comments": () => <div>Comments</div>,
  "#ninja-code": () => <div>Ninja Code</div>,
  "#testing-mocha": () => <div>Testing</div>,
  "#polyfills": () => <div>Polyfills</div>,
  "#object": () => <div>Object Methods</div>,
  "#object-copy": () => <div>Object References</div>,
  "#garbage-collection": () => <div>Garbage Collection</div>,
  "#object-methods": () => <div>Object Methods</div>,
  "#constructor-new": () => <div>Constructor, Operator New</div>,
  "#optional-chaining": () => <div>Optional Chaining</div>,
  "#symbol": () => <div>Symbol Type</div>,
  "#object-to-primitive": () => <div>Object to Primitive</div>,
  "#primitives-methods": () => <div>Primitive Conversion</div>,
  "#numbers": () => <div>Numbers</div>,
  "#strings": () => <div>Strings</div>,
  "#arrays": () => <div>Arrays</div>,
  "#array-methods": () => <div>Array Methods</div>,
  "#iterables": () => <div>Iterables</div>,
  "#map-set": () => <div>Map, Set</div>,
  "#weakmap-weakset": () => <div>WeakMap, WeakSet</div>,
  "#keys-values-entries": () => <div>Keys, Values, Entries</div>,
  "#destructuring-assignment": () => <div>Destructuring</div>,
  "#date": () => <div>Date and Time</div>,
  "#json": () => <div>JSON Methods</div>,
  "#recursion": () => <div>Recursion</div>,
  "#rest-parameters-spread-syntax": () => <div>Rest Parameters, Spread</div>,
  "#closure": () => <div>Closures</div>,
  "#the-old-var": () => <div>The Old "var"</div>,
  "#global-object": () => <div>Global Object</div>,
  "#function-object": () => <div>Function Object</div>,
  "#new-function": () => <div>New Function</div>,
  "#settimeout-setinterval": () => <div>SetTimeout, SetInterval</div>,
  "#call-apply-decorators": () => <div>Call, Apply</div>,
  "#bind": () => <div>Bind</div>,
  "#arrow-functions": () => <div>Arrow Functions</div>,
  "#property-flag": () => <div>Property Flags</div>,
  "#property-accessors": () => <div>Property accessors</div>,
  "#prototype-inheritance": () => <div>Prototypes</div>,
  "#function-prototype": () => <div>Functions Prototypes</div>,
  "#native-prototypes": () => <div>Native Prototypes</div>,
  "#prototype-methods": () => <div>Prototype Methods</div>,
  "#class": () => <div>Classes</div>,
  "#class-inheritance": () => <div>Class Inheritance</div>,
  "#class-static": () => <div>Class Static Properties</div>,
  "#class-private": () => <div>Class Private Properties</div>,
  "#class-extends": () => <div>Class Extending</div>,
  "#instanceof": () => <div>Instanceof</div>,
  "#class-mixins": () => <div>Class Mixins</div>,
};
