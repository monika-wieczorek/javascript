//const paragraphsContent = document.getElementsByTagName("p");
const paragraphsContent = document.querySelectorAll("p");
const firstParagraph = document.querySelector(".firstParagraph");
const firstBlock = document.querySelector("#firstBlock");
//const firstBlock = document.getElementById('firstBlock');

console.log("first paragraph", firstParagraph);
console.dir(firstBlock);
console.log("number of paragraphs", paragraphsContent.length);

/*for (let i = 0; i < paragraphsContent.length; i++) {
  console.log(`paragraph number ${i + 1}`, paragraphsContent[i]);
}*/

paragraphsContent.forEach(function (currentValue, currentIndex) {
  console.log(`paragraph number ${currentIndex}`, currentValue);
});

//debugger; - debugguje nam kod step by step

firstBlock.innerText = "hello";
const secondParagraph = document.querySelector(".secondParagraph");

console.dir(secondParagraph);
secondParagraph.className += " newClass";
secondParagraph.classList.add("anotherClass"); //poprawniejsze rozwiązanie

/* tworzenie elementów w html */
const newElement = document.createElement("div");
newElement.innerText = "Przykładowa zawartość nowego diva";

const div = document.querySelector("#firstBlock");
div.appendChild(newElement);

/* Wewnątrz elementu wstaw 3 paragrafy, o dowolnej treści. 
Dotychczasowa treść elementu, nie powinna być dostępna */

div.innerHTML = "";

const newParagraph1 = document.createElement("p");
const newParagraph2 = document.createElement("p");
const newParagraph3 = document.createElement("p");

newParagraph1.innerText = "Lorem1";
newParagraph2.innerText = "Lorem2";
newParagraph3.innerText = "Lorem3";

const p = document.querySelector("#firstBlock");
p.appendChild(newParagraph1);
p.appendChild(newParagraph2);
p.appendChild(newParagraph3);

//alternatywne rozwiązanie

firstBlock.innerHTML = "";

for (let i = 1; i < 4; i++) {
  const newElement = document.createElement("p");
  newElement.innerText = i;

  firstBlock.appendChild(newElement); //wstaw zawartość na końcu elementu
}

//wstawianie elementów przed
const newEl = document.createElement("div");

newEl.id = "preFirstBlock";

newEl.innerText = "Lorem1";

const divAfter = document.querySelector("#firstBlock");
const body = document.querySelector("body");

body.insertBefore(newEl, divAfter);

//issue #5

// const body2 = document.querySelector("body");

// body2.innerHTML = "";

// for (i = 1; i < 20; i++) {
//   const div = document.createElement("div");
// }

const firstPar = document.querySelector(".firstParagraph");

firstPar.addEventListener("click", function () {
  if (firstPar.classList.contains("green")) {
    firstPar.classList.remove("green");
    firstPar.classList.add("red");
  } else {
    firstPar.classList.remove("red");
    firstPar.classList.add("green");
  }
});

const thirdPar = document.querySelector(".thirdParagraph");

thirdPar.addEventListener("click", function () {
  thirdPar.classList.toggle("blue");
  thirdPar.classList.toggle("yellow");
});
