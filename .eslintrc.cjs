/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    // '@vue/eslint-config-typescript',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser', // 为 JavaScript/TypeScript 内容指定的解析器
    ecmaVersion: 'latest',
    sourceType: 'module', // 允许使用模块
    ecmaFeatures: {
      jsx: true // 如果您实际使用了 JSX
    }
  },
  rules: {
    // JavaScript/ESLint 推荐的规则
    'no-console': 'warn', // 不允许使用 console.log 等
    'no-unused-vars': 'warn', // 不允许存在未使用的变量
    'no-undef': 'error', // 不允许使用未定义的变量

    // Vue/ESLint 推荐的规则
    'vue/html-indent': 0, // HTML 缩进为 2 个空格
    'vue/attribute-hyphenation': 'error', // 属性名使用连字符形式
    'vue/html-self-closing': 'off', // 关闭自闭合标签要求，根据个人或团队喜好配置
    'vue/max-attributes-per-line': 0,
    'vue/no-v-html': 'off', // 允许使用 v-html 指令
    'vue/no-unused-components': 'warn', // 不允许存在未使用的组件

    // TypeScript/ESLint 推荐的规则
    '@typescript-eslint/no-unused-vars': 'warn', // 不允许存在未使用的 TypeScript 变量
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 允许不显式指定导出函数的返回类型
    '@typescript-eslint/no-explicit-any': 'off' // 允许使用 any 类型
  }
}
