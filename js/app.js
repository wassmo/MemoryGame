
//-----cards variables

//node
let card = document.getElementsByClassName("card");
console.log(card);
//array
let cards = [...card];
console.log(cards);


//deck of cards

const deck = document.querySelector(".deck");

//matching card class items

let matchedCard = document.querySelectorAll(".match");

//opened card class items

let openedCards = [];


//moves-counter variables

let moves = 0;
let counter = document.querySelector(".moves");

//stars variables

const stars = document.querySelectorAll(".fa-star");


//shuffling cards (Fisher–Yates method)-------- do wydzielenia do osobnego elementu

function shuffle (array) {
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

//-------------------------------------------------------------

//Counting moves-----------------------------------------------

function moveCounter(){
    moves++;
    counter.innerHTML = moves;


    //adding star rating option
    if (moves > 8 && moves < 12){
        for( i= 0; i < 3; i++){
            if(i > 1){
                stars[i].style.visibility = "collapse";
            }
        }
    }
    else if (moves > 13){
        for( i= 0; i < 3; i++){
            if(i > 0){
                stars[i].style.visibility = "collapse";
            }
        }
    }

}

//----------------------------------------------------------




//After page loading, the game is starting
document.onload = startGame();













// starting game



function startGame(){

    //shuffling cards
    cards = shuffle(cards);

    //changing position of shuffled cards and removing already existing classes
    for (var i= 0; i < cards.length; i++){

        deck.innerHTML = "";
        [].forEach.call(cards, function(item){
            deck.appendChild(item);
        });
        cards[i].classList.remove('open', 'disabled', 'match', 'remove');
    }


    //function changing class open and show to disabled

    function showCard() {
        this.classList.toggle("open");
        this.classList.toggle("show");
        this.classList.toggle("disabled");
    }


    //-------function deciding what is happening after two cards showing
    function cardOpen() {
        openedCards.push(this);
        console.log(openedCards);


        var lengthOfOpened = openedCards.length;
        if(lengthOfOpened === 2){
            moveCounter();
            if(openedCards[0].type === openedCards[1].type){
                matched();
            } else {
                unmatched();
            }
        }
    };

    //if cards match

    function matched(){
        openedCards[0].classList.add("match");
        openedCards[1].classList.add("match");
        openedCards[0].classList.remove("show", "open");
        openedCards[1].classList.remove("show", "open");
        openedCards = [];
    }


    //if card don't match

    function unmatched(){
        openedCards[0].classList.add("unmatched");
        openedCards[1].classList.add("unmatched");
        disable();
        setTimeout(function(){
            openedCards[0].classList.remove("show", "open", "unmatched");
            openedCards[1].classList.remove("show", "open", "unmatched");
            enable();
            openedCards = [];
        },1100);
    }

    //disabling cards (this cause that player can use only two cards at once)

    function disable(){
        Array.prototype.filter.call(cards, function(card){
            card.classList.add('disabled');
        });
    }

    //enabling cards (this cause that player can use only two cards at once)


    function enable(){
        Array.prototype.filter.call(cards, function(card){
            card.classList.remove('disabled');
            for(var i = 0; i < matchedCard.length; i++){
                matchedCard[i].classList.add("disabled");
            }
        });
    }

//--------------------end of part---------------

//Loop which is adding afterclick function to each card
    for (var i = 0; i < cards.length; i++){
        cards[i].addEventListener("click", showCard);
        cards[i].addEventListener("click", cardOpen);
    };



}


