module.exports = {
    env: {
        browser: true,
        es2021: true,  // 添加所有 ECMAScript 2021 全局变量并自动将 ecmaVersion 解析器选项设置为 12
        node: true
    },
    parse: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parse',
      ecmaVersion: "latest", // 支持的es的版本
      sourceType: 'module'  // 代模块类型，默认为script，我们设置为module
    },
    extends: [
      'plugin:vue/vue3-recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    rules: {
       // 禁止出现未使用过的变量
       'no-unused-vars': 'error',
       // 缩进使用 4 个空格，并且 switch 语句中的 Case 需要缩进
       'indent': ['error', 4, {
           'SwithCase': 1,
           'flatTernaryExpressions': true
       }],
       'arrow-parens': 'off'
    }
}