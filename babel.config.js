module.exports = {
  presets: [
    'babel-preset-gatsby-package',
    '@babel/preset-typescript',
    [
      '@linaria',
      {
        evaluate: true,
        displayName: process.env.NODE_ENV !== 'production',
      },
    ],
  ],
}
