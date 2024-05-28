//toLocaleDateString
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric"};
const options2 = { weekday: "short", year: "numeric", month: "short", day: "numeric"};

const date = new Date()

// let modDate = date.toLocaleDateString("en-US", options2);
// document.getElementById("lastModified").innerHTML = `Last Modified: ${modDate}`;

let copyrightYear = date.getFullYear();
document.getElementById("cYear").innerHTML = `&copy; ${copyrightYear}`;

let lastModif = new Date(document.lastModified).toGMTString();
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModif}`;

// console.log(modDate);
// console.log(copyrightYear);