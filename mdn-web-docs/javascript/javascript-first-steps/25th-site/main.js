const fullMetal = "hagane no renkinjutsushi full metal alchemist";
const includesAlchemy = fullMetal.indexOf("renkinjutsu");

if (includesAlchemy !== -1) {
  console.log(`'renkinjutsu' starts at index ${includesAlchemy}.`);
} else if (includesAlchemy === -1) {
  console.log("The string does not include the substring.");
}
