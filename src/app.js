/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generadorDeExcusas();
};
function generadorDeExcusas() {
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
  let whoAleatorio = Math.floor(Math.random() * who.length);
  let actionAleatorio = Math.floor(Math.random() * action.length);
  let whatAleatorio = Math.floor(Math.random() * what.length);
  let whenAleatorio = Math.floor(Math.random() * when.length);
  return (
    who[whoAleatorio] +
    " " +
    action[actionAleatorio] +
    " " +
    what[whatAleatorio] +
    " " +
    when[whenAleatorio]
  );
}
