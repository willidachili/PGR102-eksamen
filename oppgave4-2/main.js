/* Henter inn og deklarerer alle ID-ene vi trenger til variabler */
var shopGrid = document.getElementById("shopping-grid"); 
var persList = document.getElementById("pers-list");
var shopCartH3 = document.getElementById("shop-cart-h3");

/* Vi kan også fjerne dette arrayet og bruke et annet og bare si bilde${i}.jpg men dette er mer leselig */
bgArray = ["bilde1.jpg", "bilde2.jpg", "bilde3.jpg", "bilde4.jpg", "bilde5.jpg", "bilde6.jpg", 
"bilde7.jpg", "bilde8.jpg", "bilde9.jpg", "bilde10.jpg", "bilde11.jpg", "bilde12.jpg"]
/* Arrayet vi fyller med alle div-ene vi trenger på siden */
var divArray = [];
/* Arrayet som fylles med alle ulike knappene vi trenger, vi gjør dette slikt at alle knappene er unike, og kan sette de unike produktene på shopping-listen */
var addToCartBtnArray = [];
/* Arrayet vi lager når vi trykker "Legg til" som fylles med de elementene vi trykker på */
var shoppingCart = [];
var cartItemID = 0;

/* Er 12 her for det er så mange produkter som vi har */
for(i = 0; i < 12; i++){
    /* lager alle elementene og pusher de inn i hver sitt array */
    shopGrid.innerHTML += `<div class="grid-element" id="element${i}">
    <input id="register${i}" type="button" value="Legg til i handlekurv" onclick="addToCart(${i})">
    </div>`;
    divArray.push(document.getElementById(`element${i}`)); //hvert bilde div blir da hetenes element0-11
    addToCartBtnArray.push(document.getElementById(`register${i}`)); // hver knapp har id register0-11

    /* Styler knappene */
    addToCartBtnArray[i].style.background = "rgb(41, 41, 41)";
    addToCartBtnArray[i].style.color = "white";
    addToCartBtnArray[i].style.width = "150px";
    addToCartBtnArray[i].style.height = "25px";
    addToCartBtnArray[i].style.padding = "2px";
    addToCartBtnArray[i].style.borderRadius = "3px";
    /* Styler bildene */
    divArray[i].style.background = `url("../images/${bgArray[i]}") no-repeat center`;
    divArray[i].style.backgroundSize = "contain";
    divArray[i].style.border = "2px solid rgb(41,41,41)";
}

/* Funksjon som legger til hentet element ved knappetrykk til en ny array og printer ut dette arrayet på siden */
function addToCart(buttonIndex){
    cartItemID++ // Inkrementerende variabel som gir en unik ID til hvert produkt i handevognen
    // Skriver ut en ny div for hvert produkt kunden legger til i handlekurven, med ID, bilde og en input button 
    // for å kunne slette produktet fra listen
    persList.innerHTML += `<div class="grid-element" id="${cartItemID}">
                        <img class="grid-element" src="../images/${bgArray[buttonIndex]}">
                        <input type="button" onclick="deleteItem(${cartItemID})" value="X">
                        </div>`;
}

// Skjuler handlelisteprodukter ved å kalle på funksjonen med onclick attributtet og sende id-en til div-en som parameter
// og styler div-en med display: none;
function deleteItem(deleteItem){
    var deletedDiv = document.getElementById(`${deleteItem}`);
    deletedDiv.style.display = "none";
}