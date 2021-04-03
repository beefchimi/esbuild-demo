const envProduction = process.env.NODE_ENV === "production";

require("esbuild")
  .build({
    entryPoints: ["app.jsx"],
    bundle: true,
    minify: envProduction,
    sourcemap: !envProduction,
    target: ["chrome58", "firefox57", "safari11", "edge16"],
    outfile: "dist/app.js",
  })
  .catch(() => process.exit(1));
