module.exports = {
  root: true,
  extends: ['standard', 'plugin:prettier/recommended'],
  rules: {
    'no-console': [process.env.NODE_ENV === 'production' ? 'error' : 0, { allow: ["warn", "error"] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 0,
    'no-var': 'warn',
    'prefer-const': 'warn',
    'no-else-return': 'error',
    'vue/order-in-components': 0,
  },
}
