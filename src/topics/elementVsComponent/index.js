import React from "react";

// 1. Elements are created using components.

// Elements can be considered as javascript objects returned by React.createElement method.

// Element
// const element = React.createElement(
//     'h1',
//     { className: 'greeting' },
//     'Hello, world!'
// );

// Note: this structure is simplified
const element = {
  type: "h1",
  props: {
    className: "greeting",
    children: "Hello, world!"
  }
};

// A component is either a js function or a class
