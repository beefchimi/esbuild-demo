const envProduction = process.env.NODE_ENV === "production";

function handleOnRebuild(error, result) {
  if (error) {
    console.error("watch build failed:", error);
  } else {
    console.log("watch build succeeded:", result);
  }
}

require("esbuild")
  // .build({
  .serve(
    {
      servedir: "serve",
    },
    {
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
      assetNames: "assets/[name]-[hash]",
      // entryPoints: ["src/sections/home.js", "src/sections/about.js"],
      outdir: "serve/dist",
      // watch: {
      //   onRebuild: handleOnRebuild,
      // },
    }
  )
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
