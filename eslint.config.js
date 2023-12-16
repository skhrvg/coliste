import antfu from '@antfu/eslint-config'

// noinspection JSUnusedGlobalSymbols - suppresses "exported but not used" warning in WebStorm
export default antfu({
  ignores: [
    '**/dist/',
    '**/*.d.ts',
  ],
  typescript: {
    parserOptions: {
      ecmaVersion: 'latest',
    },
  },
})
