"use strict";

module.exports = {
  "no-arrow-funct-jsx": {
    meta: {
      docs: {
        description: "No arrow function in JSX code",
        category: "Code quality",
        recommended: false,
      },
      schema: [],
    },
    create: function (context) {
      return {
        ArrowFunctionExpression(node) {
          if (node.parent.type === "JSXExpressionContainer")
            context.report({
              node,
              message: "No arrow function in JSX code",
            });
        },
      };
    },
  },
  "data-test-id-check": {
    meta: {
      docs: {
        description: "Data test id warning",
        category: "Code quality",
        recommended: false,
      },
      schema: [],
    },
    create: function (context) {
      return {
        JSXIdentifier(node) {
          console.log(node);
          if (node.name === "data-test-id")
            context.report({
              node,
              message: "Attribute for e2e testing",
            });
        },
      };
    },
  },
};
