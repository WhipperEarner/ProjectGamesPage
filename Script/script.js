
function ageInDays() {
    var birthYear = prompt('What year were you born...Good friend?');
    var ageInDayss = (2018 - birthYear) * 365;
    
    var head = document.createElement('h3'); //DOM Document object model
    var textAnswer = document.createTextNode('you are ' + ageInDayss + ' days old.'); //Creating text, and string contacnation (adding a variable to it), then add to H1 in DOM, in IndexHTLM
    
    head.setAttribute('id', 'ageInDays'); // adding to H1: set its ID to ageinDays
    head.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(head);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

 function generateCat() {
     var image = document.createElement('img');  //create an image element
     var div = document.getElementById('flex-cat-gen'); //access to the flexbox div, so create ID in JS
     image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT00k3x2u-9R7pxagWSLYiSDZ-oSXJQuvoaNg&usqp=CAU"; //the souce
     div.appendChild(image); //append the source to the div, which is going to be the image
 }   

 function rpsGame(yourChoice) {
     console.log(yourChoice);
     console.log(yourChoice.src);
     var test= Math.floor(Math.random()*3)
     console.log(test)
     var humanChoice, botChoice;
     humanChoice = yourChoice.id;

     botChoice = numbertoChoice(randToRpsInt());
     console.log('Computer choice:', botChoice);

     results = decideWinner(humanChoice,botChoice); // [0,1] human lost
     console.log(results);

     message = finalMessage(results);// {message: 'You Won'!, 'color'}
     console.log(message);
     rpsFrontEnd(yourChoice.id, botChoice, message);
 }

 function randToRpsInt() {
     return Math.floor(Math.random() *3);
 }

 function numbertoChoice(number){
     return['rock', 'paper', 'scissors'][number];
 }

 function decideWinner(yourChoice, computerChoice) {
     var rpsDatabase= {
         'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
         'paper': {'rock': 1,'paper': 0.5, 'scissors': 0},
         'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
     };
     
     var yourScore = rpsDatabase[yourChoice][computerChoice];
     var computerScore = rpsDatabase[computerChoice][yourChoice];

     return[yourScore, computerScore];
    }

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You Lost!', 'color': 'red'};
     } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'}; 
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
}
    
function rpsFrontEnd(humanImageChoce, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoce] + "' height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>"
    messageDiv.innerHTML = "<h1 style= 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' hight=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>"

    document.getElementById('flex-box-RPS-div').appendChild(humanDiv);
    document.getElementById('flex-box-RPS-div').appendChild(messageDiv);
    document.getElementById('flex-box-RPS-div').appendChild(botDiv);
}

//Challange 4: change the Color of All Buttons
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButton =[]; //copying above buttons status to an Array.
for (let i=0;i < all_buttons.length; i++) {
 copyAllButton.push(all_buttons[i].classList[1]); // only the '2' class of buttons ex. 'btn-danger'
}

//console.log(copyAllButton);

//'onchange' this is sthe function we want passed
function buttonColorChange(buttonThingy) {
    //console.log(buttonThingy.value); //to see what it does
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
            buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
            buttonColorReset();
    } else if (buttonThingy.value === 'random') {
            randomColors();
    }   
}

function buttonsRed() {
    for (let i=0; i< all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]); // bootstrap class 'btn' 'btn-danger' 0, 1.
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i=0; i< all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i=0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButton[i]);
    }
}
 
function randomColors() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']
for  (let i=0; i<all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4); // use let not var, 'randonNumber' must be inside the loop to carry out funciton
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
}
}

//Challange 5: Blackjack
let blackjackGame = { // for use later on and for ease of use
    'you': {'scoreSpan':'#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan':'#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1,11]},
    'wins': 0,
    'lose': 0,
    'draws': 0,
    isStand: false,
    turnsOver: false,

};

const YOU = blackjackGame['you'] //'you' doesnt change, its easy to access later
const DEALER = blackjackGame['dealer']
const hitSound = new Audio('Static/sounds/swish.m4a');
const winSound = new Audio('Static/sounds/cash.mp3');
const loseSound = new Audio('Static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);


function blackjackHit() {
    if(blackjackGame['isStand'] === false) { // if issstand mode is not actived, is the only time 'Hit' button should work! 
        let card = randomCard();
        console.log(card);
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU); 
        console.log(YOU['score']);
    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}
        
function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
    //alert('ouch, you clicked me!');
    let cardImage = document.createElement('img');
    cardImage.src = `Static/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}
    
function blackjackDeal() {
    if (blackjackGame['turnsOver']=== true) {
        //showResult(computeWinner());
        blackjackGame['isStand'] = false;

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');  
        //console.log(yourImages); //images from the 'hit' button
        for (i=0; i< yourImages.length; i++) {
            yourImages[i].remove();
        }
        for (i=0; i< dealerImages.length; i++) {
            dealerImages[i].remove();
        }
        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = 'blue';
        document.querySelector('#dealer-blackjack-result').style.color = 'blue';

        document.querySelector('#blackjack-result').textContent ="let's play";
        document.querySelector('#blackjack-result').style.color = 'black';
   
        blackjackGame['turnsOver'] = true;
    }
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        //If adding 11 keeps me below 21, add 11, otherwise, add 1
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
          activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
          }
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card]; // if card wasn't 'A' in the first place
        }
    }


function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
        } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
        }   
    }

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackjackGame['isStand']= true;

    while(DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
    let card = randomCard();
    //console.log(card);
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000);
    }
   
    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);    
}

//compute winner and return who just won
//update the wins, lose, and draws.
function computeWinner() {
let winner;

if (YOU['score']<= 21) {
        //condition: higher scroe than dealer, or when dealer busts
    if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
       blackjackGame['wins']++;
    winner = YOU;
    } else if (YOU['score'] < DEALER['score']) {
      blackjackGame['lose']++;
      winner = DEALER;
    } else if (YOU['score'] === DEALER['score']) {
      blackjackGame['draws']++;
    } 
//condition: when user busts but dealer doesn't
} else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
  blackjackGame['lose']++;
  winner = DEALER;

//condition: when you AND the dealer busts
} else if(YOU['score'] > 21 && DEALER['score'] > 21) {
  blackjackGame['draws']++;
}
console.log (blackjackGame);
return winner; 
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnsOver']=== true) {

        if (winner === YOU) {
            document.querySelector('#Wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        } else if (winner === DEALER) {
            document.querySelector('#Loses').textContent = blackjackGame['lose'];
            message = 'You lost!';
            messageColor = 'red';
            loseSound.play();
        } else {
            message = 'You Drew!';
            document.querySelector('#Draw').textContent = blackjackGame['draws'];
            messageColor = 'black'; 
        }  
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}



