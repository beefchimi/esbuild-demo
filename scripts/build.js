const envProduction = process.env.NODE_ENV === "production";

function handleOnRebuild(error, result) {
  if (error) {
    console.error("watch build failed:", error);
  } else {
    console.log("watch build succeeded:", result);
  }
}

require("esbuild")
  .build({
    bundle: true,
    splitting: true,
    format: "esm",
    minify: envProduction,
    sourcemap: !envProduction,
    loader: {
      ".png": "dataurl",
      ".svg": "text",
    },
    target: ["es2018"],
    // entryPoints: ["src/app.jsx"],
    entryPoints: ["src/sections/home.js", "src/sections/about.js"],
    outdir: "serve/dist",
    watch: {
      onRebuild: handleOnRebuild,
    },
  })
  .then((result) => {
    console.log("then > result:", result);
    // result.stop();
  })
  .catch(() => process.exit(1));

/*
require("esbuild")
  .serve(
    {
      servedir: "serve",
    },
    {
      entryPoints: ["src/app.jsx"],
      // entryPoints: ["src/app-alt.js"],
      outdir: "serve/dist",
      bundle: true,
    }
  )
  .then((server) => {
    // Call "stop" on the web server when you're done
    console.log("server", server);
    // server.stop();
  });
*/
