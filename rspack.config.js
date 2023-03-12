const CopyPlugin = require("copy-webpack-plugin");
/*
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  entry: {
    main: "./src/index.tsx", // Configure the project entry file
  },
  builtins: {
    html: [
      {
        template: "./public/index.html", // Align CRA to generate index.html
      },
    ],
  },
  plugins: [
    new CopyPlugin([
      {
        from: "public",
        to: ".",
      },
    ]),
  ], // Copy the files from the public directory to the dist directory, aligning the behavior of the CRA
  // This is Codesandbox-specific
  devServer: {
    allowedHosts: ["PREVIEW_SUBDOMAIN.csb.app"], // <  Copy and paste the domain from the URL Codebox provides for your runtime here
  },
};
