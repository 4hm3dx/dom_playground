console.log("Hello World !");
// Here are the rules !

/* ************************************************* */
// HEADER
/* ************************************************* */

// select the header and change its display to grid
document.querySelector("header").style.display = "grid";

// use place-items to center the <h1></h1>
document.querySelector("header").style.placeItems = "center";
// add a background image. It should be set to cover
const thisimg = document.querySelector("header");
thisimg.style.backgroundImage = "url('https://img.freepik.com/photos-gratuite/prise-vue-au-grand-angle-seul-arbre-poussant-sous-ciel-assombri-pendant-coucher-soleil-entoure-herbe_181624-22807.jpg')";
thisimg.style.backgroundSize = "cover";
/* ************************************************* */
// SECTIONS
/* ************************************************* */
const allsections = document.querySelector("section");
allsections.style.padding = "1.5rem";
allsections.style.border = "1px solid pink";
allsections.style.borderRadius = "5px";

// add a 1.5rem padding, a pink 1px border and a 5px border-radius to ALL sections


/* ************************************************* */
// TEXT PLAYGROUND
/* ************************************************* */

// select the first and last paragraph of the text-playground  section and set their text color to pink
const allp = document.querySelectorAll("p");

allp[0].style.color = "pink";
allp[3].style.color = "pink";

// select all paragraphs in this section and turn their first letter into a <span></span>

for (let p of allp) {
    //console.log(p)

    // on récupère le texte de chaque p
    let content = p.innerText
    //console.log(content)

    // on récupèe la première lettre de chaque p
    let firstLetter = content.charAt(0).toUpperCase()
    //console.log(firstLetter)

    // je veux insérer ma lettre dans une balise span
    firstLetter = "<span>" + firstLetter + "</span>"
    //console.log(firstLetter)

    // je reconstitue la chaîne de caractères que je veux en concaténant la première lettre et le reste de la string initiale
    let newString = firstLetter + content.substring(1)

    console.log(newString)

    // on remplace le texte du p par notre texte modifié
    p.innerHTML = newString
}

// set the <span></span> font size to 2.5rem
const spanish = document.querySelectorAll("span");

for (let i = 0; i < spanish.length; i++) {
    spanish[i].style.fontSize = "2.5rem";
}

/* ************************************************* */
// DISPLAY PLAYGROUND
/* ************************************************* */

// select the div with ID display-playground and change its display to flex
document.querySelector("#display-playground").style.display = "flex";

// in that div, look for the articles and set their flex property to 1
const disArticles = document.querySelectorAll("#display-playground article");

for (let i = 0; i < disArticles.length; i++) {
    disArticles[i].style.flex = "1";
}
/* ************************************************* */
// INPUTS PLAYGROUND
/* ************************************************* */

// set the text content of text-display to the value of text-input
const textInput = document.querySelector("#text-input")
const inputValue = textInput.value;
console.log(inputValue);

const textDisplay = document.querySelector(".text-display")
textDisplay.innerText = inputValue;

// set Option 1 and Option 2 to checked
const chekBoxes = document.querySelectorAll("#checkbox-input");
chekBoxes[0].checked = "true";
chekBoxes[1].checked = "true";

// display the values of checked options in checkbox-display
let checkbox = document.querySelectorAll('input[type="checkbox"]');
let valueDisplay = document.querySelector(".checkbox-display");

checkbox.forEach(function (checkbox) {
    if (checkbox.checked) {
        valueDisplay.innerHTML += "<p>" + checkbox.value + "</p>";
    }
});
// display the value of the selected option for radio inputs in radio-display

// display the result of the numbers computation in number-display


/* ************************************************* */
// COLOR PLAYGROUND
/* ************************************************* */

// select the box-color element
const colorBox = document.querySelector(".color-box");

// get its background-color
document.querySelector(".color-box").style.background = "pink";

// create a p element
const newPElement = document.createElement("p");

// set its text-content to the background-color value
newPElement.textContent = "pink";

// append the p element to the box-color element
colorBox.appendChild(newPElement);

// change the box-color display to grid and set its place-items property to center
colorBox.style.display = "grid";
colorBox.style.placeItems = "center";

/* ************************************************* */
// POSITION PLAYGROUND
/* ************************************************* */

// change the position and color of the divs inside position-box
document.querySelector(".position-box").style.display = "flex";
document.querySelector(".position-box").style.justifyContent = "center";
document.querySelector(".position-box").style.alignItems = "center";
document.querySelector(".one").style.background = "yellow";
document.querySelector(".two").style.background = "green";
document.querySelector(".three").style.background = "blue";