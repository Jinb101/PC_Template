module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "vue/multi-word-component-names": "off",
    },
    ignorePatterns: ["src/components/Header/index.vue"],
};
