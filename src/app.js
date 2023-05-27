window.onload = function() {
  const excuseElement = document.querySelector("#excuse");

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function genererExcuse() {
    let whoAleatory = who[Math.floor(Math.random() * who.length)];
    let actionAleatory = action[Math.floor(Math.random() * action.length)];
    let whatAleatory = what[Math.floor(Math.random() * what.length)];
    let whenAleatory = when[Math.floor(Math.random() * when.length)];

    // Crear la excusa aleatoria

    let excuse =
      whoAleatory +
      " " +
      actionAleatory +
      " " +
      whatAleatory +
      " " +
      whenAleatory +
      ".";

    // Establecer la excusa en el elemento HTML con ID #excuse

    document.getElementById("excuse").innerHTML = excuse;
    const mainParagraph = document.getElementById("excuse");
  }

  genererExcuse();
  let button = document.getElementById("genererButton");
  button.addEventListener("click", genererExcuse);
};
