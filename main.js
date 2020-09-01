//const paragraphsContent = document.getElementsByTagName("p");
const paragraphsContent = document.querySelectorAll("p");
const firstParagraph = document.querySelector(".firstParagraph");
const firstBlock = document.querySelector("#firstBlock");
//const firstBlock = document.getElementById('firstBlock');

console.log("first paragraph", firstParagraph);
console.log("first block", firstBlock);
console.log("number of paragraphs", paragraphsContent.length);

/*for (let i = 0; i < paragraphsContent.length; i++) {
  console.log(`paragraph number ${i + 1}`, paragraphsContent[i]);
}*/

paragraphsContent.forEach(function (currentValue, currentIndex) {
  console.log(`paragraph number ${currentIndex}`, currentValue);
});
