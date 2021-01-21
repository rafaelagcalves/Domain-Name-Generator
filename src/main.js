/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["The", "Our", "Those"];
  let adjs = ["great", "awesome", "dumb"];
  let nouns = ["fri", "to", "pi"];
  let extensions = [".es"];
  let domain = "";
  let domains = [];

  for (let pronoun = 0; pronoun < pronouns.length; pronoun++) {
    for (let adj = 0; adj < adjs.length; adj++) {
      for (let noun = 0; noun < nouns.length; noun++) {
        for (let extension = 0; extension < extensions.length; extension++) {
          domain = domain.concat(
            pronouns[pronoun],
            adjs[adj],
            nouns[noun],
            extensions[extension]
          );
          domains.push(domain);
          domain = "";
        }
      }
    }
  }

  for (let domain of domains) {
    let myDiv = document.querySelector("#myUl");
    let myLi = document.createElement("li");
    let t = document.createTextNode(domain);
    myLi.appendChild(t);
    myDiv.appendChild(myLi);
  }

  document.getElementById("myBody").style.backgroundImage =
    "url(https://wallpaperaccess.com/full/2641047.gif)";

  document.getElementById("myBody").style.color = "#000000";
};
