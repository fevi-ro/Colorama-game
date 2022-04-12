class Game {
    constructor() {
        this.score = 0;
        this.wordsArr = [];
        this.time = 10;
        this.interval = null;
        this.audio = "";
        this.randomWord = '';
        this.wrongBuzzer = new Audio("sounds/add-ons_error.mp3");
        this.correctBuzzer = new Audio("sounds/mixkit-instant-win-2021.wav");
        this.gameOverSound = new Audio("sounds/mixkit-player-losing-or-failing-2042.wav");
    }


    /* start() {
         this.setTimer();
         document.getElementById("score").innerText = `Score: ${this.score}`
         document.getElementById('timer').innerText = `Time Left : ${this.time.toFixed(1)}`;
     } */

    startGame() {
        this.setTimer();
        document.getElementById("score").innerText = `Score: ${this.score}`
        document.getElementById('timer').innerText = `Time Left : ${this.time.toFixed(1)}`;
        colouredWords.innerText = game.getRandomWords();
    }


    getRandomWords() {
        let text = ["Blue", "Green", "Red", "Yellow", "Purple"];


        for (let i = 0; i < text.length; i++) {
            this.randomWord = text[Math.floor(Math.random() * text.length)]
            this.wordsArr.push(this.randomWord);

            // document.getElementById("colouredWords").innerText = this.randomWord;
            return this.randomWord;
        }

    }



    getRandomColours() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.getElementById("colouredWords").style.
        color = "#" + randomColor;


    }

    setTimer() {
        this.interval = setInterval(() => {
            this.time;
            this.time--;


            if (this.time === 0) {
                clearInterval(this.interval);
                this.gameOver();
            }
        }, 1000);
        /* this.time--;
         
         if (this.time === 0) {
            
             this.gameOver();
         } */
    }



    // getScore() {

    // }

    correctAnswer() {
        console.log("Correct!");
        this.score++;
        document.getElementById("score").innerText = `Score: ${this.score}`;
        this.getRandomColours();
        this.getRandomWords();
        this.correctBuzzer.play();
        this.setTimer();
    }


    wrongAnswer() {

        console.log("Wrong!");
        this.score--;

        this.getRandomColours();
        this.getRandomWords();
        this.wrongBuzzer.play();
        this.setTimer();

    }

    gameOver() {
        this.gameOverSound.play();

    }

}

let game = new Game();



game.startGame();


/*
document.getElementById("score").innerText = `Score: ${game.score}`
document.getElementById('timer').innerText = `Time Left : ${game.time.toFixed(1)}`; */


let element = document.getElementsByClassName("colourbtn")[0].id;
let element2 = document.getElementsByClassName("colourbtn")[1].id;
let element3 = document.getElementsByClassName("colourbtn")[2].id;
let element4 = document.getElementsByClassName("colourbtn")[3].id;
let element5 = document.getElementsByClassName("colourbtn")[4].id;

const blue = document.getElementById("Blue");
const green = document.getElementById("Green");
const red = document.getElementById("Red");
const yellow = document.getElementById("Yellow");
const purple = document.getElementById("Purple");



const clickColour = document.querySelector(".container");






blue.addEventListener("click", () => {
    if (game.wordsArr[0] == 'Blue' && element == 'Blue') {
        game.correctAnswer();




    } else {
        game.wrongAnswer();

    }
})

green.addEventListener("click", () => {
    if (game.wordsArr[0] == 'Green' && element2 == 'Green') {
        game.correctAnswer();


    } else {
        game.wrongAnswer();

    }
})

red.addEventListener("click", () => {
    if (game.wordsArr[0] == 'Red' && element3 == 'Red') {
        game.correctAnswer();


    } else {
        game.wrongAnswer();

    }
})

yellow.addEventListener("click", () => {
    if (game.wordsArr[0] == 'Yellow' && element4 == 'Yellow') {
        game.correctAnswer();

    } else {
        game.wrongAnswer();

    }
})

purple.addEventListener("click", () => {
    if (game.wordsArr[0] == 'Purple' && element5 == 'Purple') {
        game.correctAnswer();



    } else {
        game.wrongAnswer();

    }
});










































































/*clickColour.addEventListener("click", () => {

    if (game.wordsArr[0] == 'Blue' && element == 'Blue') {
        console.log('correct');
    } else if (game.wordsArr[0] == 'Green' && element2 == 'Green') {
        console.log('correct');
    } else if (game.wordsArr[0] == 'Red' && element3 == 'Red') {
        console.log('correct');
    } else if (game.wordsArr[0] == 'Yellow' && element4 == 'Yellow') {
        console.log('correct');
    } else if (game.wordsArr[0] == 'Purple' && element5 == 'Purple') {
        console.log('correct');
    } else console.log('wrong');
});

/* if (element === 'Blue' && game.wordsArr[0] === 'Blue') {
            console.log('ok');
        } else if (element2 === 'Green' && game.wordsArr[0] === 'Green') {
            console.log("ok2");
        } else if (element3 === 'Red' && game.wordsArr[0] === 'Red') {
            console.log("ok3");
        } else if (element4 === 'Yellow' && game.wordsArr[0] === 'Yellow') {
            console.log("ok");
        } else if (element5 === 'Purple' && game.wordsArr[0] === 'Purple') {
            console.log('great');
        } else console.log('no idea');
    }
 */




//console.log(element);
//console.log(game.wordsArr[0]);
/*
if (game.wordsArr[0].includes(element) && element == 'Blue') {
    console.log('correct');
} else if (game.wordsArr[0].includes(element2) && element2 == 'Green') {
    console.log('correct');
} else if (game.wordsArr[0].includes(element3) && element3 == 'Red') {
    console.log('correct');
} else if (game.wordsArr[0].includes(element4) && element4 == 'Yellow') {
    console.log('correct');
} else if (game.wordsArr[0].includes(element5) && element5 == 'Purple') {
    console.log('correct');
} else console.log('wrong'); */