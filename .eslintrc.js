module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    eqeqeq: 'off',
  },
};
