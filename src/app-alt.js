// import pngImage from "./assets/image.png";
import svgLogo from "./assets/logo.svg";

/*
let image = new Image();
image.src = pngImage;
document.body.appendChild(image);
*/

let doc = new DOMParser().parseFromString(svgLogo, "application/xml");
let node = document.importNode(doc.documentElement, true);
document.body.appendChild(node);

const temp = undefined;
const oldStyle = temp === undefined || temp === null ? 1 : temp;
const newStyle = temp ?? 1;

console.log(oldStyle);
console.log(newStyle);
