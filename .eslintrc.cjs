module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json",
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "react-hooks",
  ],
  "rules": {
    "prefer-arrow-callback": [2, {"allowNamedFunctions": true}],
    "no-multiple-empty-lines": ["error", {"max": 1}],
    "no-multi-spaces": "error",
    "react/destructuring-assignment": ["off"],
    "import/no-unresolved": ["off"],
    "prefer-destructuring": ["off"],
    "import/extensions": ["off"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-danger": ["off"],
    "jsx-a11y/no-static-element-interactions": ["off"],
    "linebreak-style": ["off"],
    "react/jsx-filename-extension": ["off"],
    "import/prefer-default-export": ["off"],
    "no-unused-vars": ["warn"],

    "jsx-a11y/click-events-have-key-events": ["off"],
    "jsx-a11y/anchor-is-valid": ["off"],
    "jsx-a11y/label-has-associated-control": ["off"],
    "jsx-a11y/label-has-for": ["off"],
    "max-len": ["error", {"code": 140}],
    "no-magic-numbers": ["off"],
    "react/jsx-one-expression-per-line": ["error"],
    "no-param-reassign": ["off"],
    "semi": ["error", "never"],
    "@typescript-eslint/semi": ["error", "never"],
    "no-console": ["warn"],
    "import/order": ["error", {
      "newlines-between": "always",
      "groups": [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "index"
      ],
      "pathGroups": [
        {
          "pattern": "components/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "pages/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "reduxs/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "hooks/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "assets/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "utils/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "helpers/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "routes/**",
          "group": "internal",
          "position": "after"
        },
        {
          "pattern": "services/**",
          "group": "internal",
          "position": "after"
        },
      ],
      "pathGroupsExcludedImportTypes": ["builtin"]
    }],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "ignoredNodes": [
          "TemplateLiteral"
        ]
      }
    ],
    "template-curly-spacing": ["off"],
    "react/jsx-max-props-per-line": ["error", {
      "maximum": 1, "when": "always"
    }],
    "no-implicit-globals": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
}
