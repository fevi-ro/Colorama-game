class Game {
    constructor() {
        this.score = 0;
        this.wordsArr = [];
        this.time = 10;
        this.countdown = null;
        this.audio = "";
    }

    start() {}

    getRandomWords() {
        let text = ["Blue", "Green", "Red", "Yellow", "Purple"];


        for (let i = 0; i < text.length; i++) {
            let randomWord = text[Math.floor(Math.random() * text.length)]
            this.wordsArr.push(randomWord);
            return randomWord;
        }

    }


    getRandomColours() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.getElementById("colouredWords").style.
        color = "#" + randomColor;


    }

    setTimer(num) {
        this.time += num;
        this.countdown;
    }

    getScore() {

    }

    correctAnswer() {
        console.log("Correct!");
        this.score++;
        document.getElementById("score").innerText = `Score: ${score}`
        this.getRandomColours();
        this.getRandomWords();
    }


    wrongAnswer() {

        console.log("Wrong!");
        this.getRandomColours();
        this.getRandomWords();

    }

}


let game = new Game();

let randomCl = game.getRandomColours();
colouredWords.innerHTML = game.getRandomWords();


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