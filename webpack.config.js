module.exports = {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "mt-net-form-modal.min.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insertAt: "top",
            }
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
              minimize: true,
              importLoaders: 1
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: [
                require("autoprefixer")({grid: true}),
                require("postcss-nested"),
                require("postcss-simple-vars"),
                require("postcss-calc"),
              ]
            },
          }
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "raw-loader"
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  }
};
