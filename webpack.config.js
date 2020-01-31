const GasPlugin = require("gas-webpack-plugin");
module.exports = {
  mode: "none",
	context: __dirname,
  entry: "./src/main.ts",
  output: {
    path: __dirname + '/dist',
    filename: 'Code.gs'
  },
  plugins: [
    new GasPlugin()
  ]
}