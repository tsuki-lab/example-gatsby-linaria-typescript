exports.onCreateWebpackConfig = ({ actions, stage }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: '@linaria/webpack-loader',
              options: {
                sourceMap: stage.includes('develop'),
                displayName: stage.includes('develop'),
              },
            },
          ],
        },
      ],
    },
  })
}
