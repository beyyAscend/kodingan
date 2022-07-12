let language = "japanese";
let greetings = null;

switch (language) {
  case "english":
    greetings = "Good Morning";
    break;
  case "french":
    greetings = "Bonjour"
    break;
  case "japanese":
    greetings = "Gozhaimasu"
    break;
  default:
    greetings = "Selamat pagi"
}
console.log(greetings);