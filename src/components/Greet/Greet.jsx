import React from "react";

export function Greet({ greeting = "Hello" }) {
  return <h1>{greeting}, world!</h1>;
}
