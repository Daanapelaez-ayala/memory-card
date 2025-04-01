const card = document.querySelectorAll(".card");

let matchedCard = 0
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e){
    let clickCard = e.target;
    if(clickCard !== cardOne && !disableDeck){
    clickCard.classList.add("flip");
    if(!cardOne){

        return cardOne = clickCard
}
cardTwo = clickCard;
disableDeck = true;
let cardOneImg = cardOne.querySelector("img").src,
cardTwoImg = cardTwo.querySelector("img").src;
matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(Img1,Img2){
if(img1=== img2) {
    matchedCard++;

    if(matchedCard == 8){
        shffleCard()
    }
 cardOne.removeEventListener("click", flipCard);
 cardTwo.removeEventListener("click", flipCard);
 cardOne = cardTwo = "";
 return disableDeck = false;;
}

setTimeout(()=> {

cardOne.classList,add("shake");
cardTwo.classList.add("shake");
}, 400);

setTimeout(()=> {
    
    cardOne.classList,remove("shake","flip");
    cardTwo.classList.remove("shake","flip");
    cardOne = cardTwo = "";
    disableDeck = false;
    }, 1200);
    }

function shuffleCard() {
     matchedCard = 0;
     cardOne = cardTwo = "";
     card.forEach(card =>{
        card.addEventListener("click", flipCard);
    });
}

card.forEach(card =>{
    card.addEventListener("click", flipCard);
});