module.exports = {
  release: {
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer',
      [
        '@semantic-release/npm',
        {
          pkgRoot: 'dist/'
        }
      ],
      '@semantic-release/release-notes-generator',
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
      ]
    ]
  }
}
