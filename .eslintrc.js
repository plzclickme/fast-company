module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "no-unreachable-loop": ["error", { ignore: ["ForInStatement", "ForOfStatement"] }],
        //"react/prop-types": "off",
        semi: [2, "always"],
        "spaced-comment": [0],
        indent: ["error", 4, { SwitchCase: 1 }],
        "space-before-function-paren": ["error", { anonymous: "always", named: "never" }],
        "multiline-ternary": ["error", "always-multiline"],
        quotes: [
            2,
            "double",
            {
                allowTemplateLiterals: true
            }
        ],
        "comma-dangle": ["error", "never"]
    }
};
