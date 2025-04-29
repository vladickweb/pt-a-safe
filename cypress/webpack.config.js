const path = require("path");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "../src"), // para que te funcionen los imports "@/..."
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.cypress.json", // ⬅️ muy importante
            },
          },
        ],
      },
    ],
  },
};
