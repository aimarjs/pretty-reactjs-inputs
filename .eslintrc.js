module.exports = {
    "parser": "babel-eslint",
    // "env": {
    //     "browser": true,
    //     "node": true
    // },
    "extends": "airbnb",
    "rules": {
        "indent": ["error", 4, {"ignoredNodes": ["JSXElement"]}],
        "react/jsx-indent": ["error", 4],
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "react/destructuring-assignment": [true, {
            "extensions": [".jsx"]
        }],
        "react/require-default-props": [0, { forbidDefaultForRequired: true }],
        "import/no-extraneous-dependencies": [
            "error", {
                "devDependencies": true, 
                "optionalDependencies": true, 
                "peerDependencies": true
        }],
        "react/forbid-prop-types": [false]

    }
};