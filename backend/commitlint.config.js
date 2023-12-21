module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', 72],
    'body-min-length': [0, 'always', 10],
    'type-enum': [
      0,
      'always',
      ['chore', 'feat', 'fix', 'refactor', 'docs', 'perf', 'style', 'test', 'build', 'ci', 'revert']
    ],
    'type-case': [0, 'always', 'lowerCase']
  }
}
