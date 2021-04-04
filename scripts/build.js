const envProduction = process.env.NODE_ENV === "production";

require("esbuild")
  .build({
    entryPoints: ["app.jsx"],
    format: "esm",
    bundle: true,
    minify: envProduction,
    sourcemap: !envProduction,
    target: ["chrome58", "firefox57", "safari11", "edge16"],
    outdir: "dist",
  })
  .catch(() => process.exit(1));

/*
require("fs").writeFileSync("in.ts", "let x: number = 1");

require("esbuild").buildSync({
  entryPoints: ["in.ts"],
  outfile: "out.js",
});

require("fs").readFileSync("out.js", "utf8");
*/
