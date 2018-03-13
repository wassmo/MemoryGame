
//cards

let card = document.getElementsByClassName("card");
let cards = [...card];
console.log(cards);

for (var i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", showCard);
};

//function changing class open and show to disabled

var showCard = ()=>{
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
}

//shuffling cards (Fisher–Yates method)

var shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//changing position of cards, starting game

const deck = document.querySelector(".deck");


var startGame=()=>{
    var shuffledCards = shuffle(cards);
    for (var i= 0; i < shuffledCards.length; i++){
        [].forEach.call(shuffledCards, function(item){
            deck.appendChild(item);
        });
    }
}

