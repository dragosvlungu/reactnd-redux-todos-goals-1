module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "extends": [
    // "airbnb",
    // "plugin:react/recommended",
    // "plugin:jsx-a11y/recommended",
    // "react-app",
    "prettier",
    "prettier/react",
  ],
  "plugins": [
    "react",
    "html",
    "jsx-a11y",
    "prettier"
  ],
  // "settings": {
  //   "html/html-extensions": [".html"]
  //   // "html/indent": "+2",   // consider .html and .we files as HTML
  // },
  "rules": {
    // "func-names": "off",
    // "linebreak-style": "off",
    "no-console": "off",
    "prefer-const": [
      "error",
      {
        "destructuring": "all",
      }
    ],
    "prettier/prettier": ["error",
      {
        // "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 80,
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx",
          ".html"
        ]
      }
    ],
    "react/prefer-stateless-function": 0,
  }
};