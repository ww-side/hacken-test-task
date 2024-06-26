module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@/components/common',
            message: 'Import only from index.ts in the common folder, except for specific allowed files.',
          },
          {
            name: '@/components/ui',
            message: 'Import only from index.ts in the ui folder.',
          },
        ],
        patterns: [
          {
            group: ['@/components/**/**/*.tsx', '@/components/**/**/*.scss'],
            message: 'Only import from index.ts in these folders.',
          },
        ],
      },
    ],
  },
};