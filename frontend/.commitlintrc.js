/**
 * @type {import('@commitlint/types').UserConfig}
 */

const commitRules = {
  'body-min-length': [0, 'always', 10],
  'header-max-length': [0, 'always', 72],
  'type-enum': [
    0,
    'always',
    ['chore', 'feat', 'fix', 'refactor', 'docs', 'perf', 'style', 'test', 'build', 'ci', 'revert']
  ],
  'type-case': [0, 'always', 'lowerCase']
}

const configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: commitRules
}

module.exports = configuration
