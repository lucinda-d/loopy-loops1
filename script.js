var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#",
];
//log it out to see the elements in the array.
// console.log(programmingLanguages);

//Use a for...of loop to loop through each element in the array.
//In the loop body, log out a string taht will say "I want to learn {language}!"
for (var language of programmingLanguages) {
  console.log(`I want to learn ${language}!`);
}

//Use forEach() for the array.
//Use 2 parameters. create a maessage of a numbered list.
//Change it to uppercase
programmingLanguages.forEach(function (type, index) {
  console.log(`${index + 1}. ${type.toUpperCase()}`);
});

var updatedLanguages = programmingLanguages.filter(function (language) {
  return language.includes("y");
});

console.log(updatedLanguages);
