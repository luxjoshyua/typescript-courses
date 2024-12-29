module.exports = {
  env: {
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/disable-type-checked',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: true,
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'promise',
    'sonarjs',
    'prettier',
  ],
  rules: {
    'prefer-const': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
  overrides: [
    {
      files: ['tests/**/*.ts'],
    },
    {
      /**
       * ESLINT CONFIG
       */
      files: ['.eslintrc.js'],
      env: { node: true, jest: true },
      extends: ['eslint:recommended'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
      },
    },
    /**
     * CLIENT SIDE CODE (ESM)
     */
    {
      files: ['src/**/*.{mts,ts,mjs,js,jsx,tsx}'],

      env: {
        browser: true,
        es2021: true,
      },
      rules: {
        'react/prop-types': 'off',
        'react/no-children-prop': 'off',
        'no-unused-vars': 'off',
        'no-unreachable': 'off',
      },
      extends: ['eslint:recommended', 'plugin:react/recommended'],
    },
    {
      /**
       * CLIENT SIDE CODE (CJS)
       */
      files: ['src/**/*.{cts,cjs}'],
      env: {
        node: true,
        es2021: true,
      },
      rules: {
        'no-unused-vars': 'off',
        'no-unreachable': 'off',
      },
      extends: ['eslint:recommended'],
    },
    /**
     * SCRIPTS
     */
    {
      extends: ['plugin:node/recommended'],
      files: ['scripts/**/*.mjs'],
      env: { node: true },
    },
    /**
     * SERVER SIDE CODE
     */
    {
      extends: ['plugin:node/recommended'],
      files: [
        'config/**/*.js',
        'babel.config.js',
        'tailwind.config.js',
        'postcss.config.js',
        'server/**/*.mjs',
      ],
      env: { node: true },
      rules: {},
    },
    /**
     * DECLARATION FILES
     */
    {
      files: ['types/**/*.d.ts'],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-parameters': 'off',
      },
    },
    /**
     * TYPESCRIPT CODE
     */
    {
      files: ['{src,tests}/**/*.{mts,ts,tsx}'],
      extends: [
        'prettier',
        // "plugin:@typescript-eslint/recommended",
        // "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ],
      rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    /**
     * TESTS
     */
    {
      files: ['tests/**/*.{js,mjs,jsx,mts,ts,tsx}'],
      extends: [],
      env: { node: true, jest: true, mocha: true },
      rules: {
        'sonarjs/no-duplicate-string': 'off',
      },
    },
  ],
}
