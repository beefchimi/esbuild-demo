import { constantCase } from "change-case";

const about = "This is the About page";
const aboutFormatted = constantCase(about);

console.log(aboutFormatted);
