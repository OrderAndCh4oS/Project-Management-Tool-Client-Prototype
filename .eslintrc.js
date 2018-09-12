module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    'parser': 'babel-eslint',
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            'jsx': true,
            'ecmaVersion': 6
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/prop-types': 'off',
        'no-class-assign': 2,
        'no-unused-vars': 'warn',
        'react/forbid-prop-types': 'off',
        'indent': [
            'off',
            4,
            {
                'SwitchCase': 1,
                'FunctionDeclaration': {'body': 1, 'parameters': 2},
                'ignoredNodes': ['JSXAttribute', 'JSXSpreadAttribute']
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        'no-console': 0
    }
};
