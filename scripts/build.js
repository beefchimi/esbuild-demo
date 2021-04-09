const envProduction = process.env.NODE_ENV === "production";

function handleOnRebuild(error, result) {
  if (error) {
    console.error("watch build failed:", error);
  } else {
    console.log("watch build succeeded:", result);
  }
}

require("esbuild")
  // .serve({servedir: "serve"}, {
  .build({
    bundle: true,
    splitting: true,
    format: "esm",
    minify: envProduction,
    sourcemap: !envProduction,
    loader: {
      ".png": "file",
      ".svg": "text",
    },
    target: ["es2018"],
    entryPoints: ["src/index.jsx"],
    // entryPoints: ["src/sections/home.js", "src/sections/about.js"],
    assetNames: "assets/[name]-[hash]",
    // chunkNames: "vendor/[name]-[hash]",
    outdir: "serve/dist",
    // watch: {
    //   onRebuild: handleOnRebuild,
    // },
  })
  .then((result) => {
    console.log("then > result:", result);
    // result.stop();
  })
  .catch(() => process.exit(1));

/*
require("esbuild")
  .serve({servedir: "serve"}, {})
  .then((server) => {
    server.stop();
  });
*/
