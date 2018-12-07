module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "indent": [4, 2],
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "react/destructuring-assignment": [true, {
            "extensions": [".jsx"]
        }],
    }
};