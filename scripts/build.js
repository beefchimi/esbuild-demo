const envProduction = process.env.NODE_ENV === "production";

require("esbuild")
  .build({
    bundle: true,
    format: "esm",
    minify: envProduction,
    sourcemap: !envProduction,
    loader: {
      ".png": "dataurl",
      ".svg": "text",
    },
    // target: ["chrome58", "firefox57", "safari11", "edge16"],
    // target: ["es6"],
    // entryPoints: ["app.jsx"],
    entryPoints: ["app-alt.js"],
    outdir: "dist",
  })
  .catch(() => process.exit(1));
