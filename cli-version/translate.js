const translate = require("node-google-translate-skidz");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("");
console.clear();

readline.question("Enter words want to translate: ", (wordInput) => {
  var word = wordInput;
  readline.close();

  console.log("");

  translate(
    {
      text: word,
      source: "auto",
      target: "en",
    },
    function (result) {
      console.log(`Any Language : ${word}`);
      console.log(`English      : ${result}`);
    }
  );
});
