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
