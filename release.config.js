const conventionalCommits = {
  preset: 'eslint'
}

module.exports = {
  release: {
    branches: ['main']
  },
  plugins: [
    ['@semantic-release/commit-analyzer', conventionalCommits],
    ['@semantic-release/release-notes-generator', conventionalCommits],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md']
      }
    ],
    '@semantic-release/npm',
    '@semantic-release/github'
  ]
}
