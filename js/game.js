class Game {
    constructor() {
        this.score = 0;
        this.wordsArr = [];
        this.time = 10;
        // this.timeSpan = null; 
        this.timeInterval = null;
        this.audio = "";
        this.randomWord = '';
        this.wrongBuzzer = new Audio("sounds/add-ons_error.mp3");
        this.correctBuzzer = new Audio("sounds/mixkit-instant-win-2021.wav");
        this.gameOverSound = new Audio("sounds/mixkit-player-losing-or-failing-2042.wav");
    }




    startGame() {
        this.setTimer();
        document.getElementById("score").innerText = `Score: ${this.score}`
        colouredWords.innerText = game.getRandomWords();



    }


    getRandomWords() {
            let text = ["Blue", "Green", "Red", "Yellow", "Purple"];


            for (let i = 0; i < text.length; i++) {
                this.randomWord = text[Math.floor(Math.random() * text.length)]
                this.wordsArr.push(this.randomWord);

                document.getElementById("colouredWords").innerHTML = this.randomWord;
                //  console.log(this.randomWord);
                return this.randomWord;
            }

        }
        /*

            getRandomWords() {
                let textArr = ["Blue", "Green", "Red", "Yellow", "Purple"];

                let i = Math.floor(Math.random() * textArr.length);

                  document.getElementById("colouredWords").innerHTML = textArr[i];

                return textArr[i];
            }
        */


    getRandomColours() {
        /* const randomColor = Math.floor(Math.random() * 16777215).toString(16);
         document.getElementById("colouredWords").style.
         color = "#" + randomColor; */

        let colorArr = ['#70FF57', '#1FB4FF', '#FF0A33', '#fafa33', '#BB4DFF'];
        let i = Math.floor(Math.random() * colorArr.length);
        document.getElementById("colouredWords").style.color = colorArr[i];
        return colorArr[i];
        //    console.log(colorArr[i]);

    }

    setTimer() {

        this.timeInterval = setInterval(() => {
            this.time--;
            document.getElementById('timer').innerText = `Time Left : ${this.time.toFixed(1)}`;

            if (this.time < 5) {
                document.getElementById("timer").style.color = '#FF0526';
            }
            if (this.time === 0) {
                clearInterval(this.timeInterval);
                this.gameOver();
            }
        }, 1000);

    }



    increaseTimer() {
        this.time = this.time + 1;
        document.getElementById('timer').innerText = `Time Left : ${this.time.toFixed(1)}`;

    }


    // getScore() {

    // }

    correctAnswer() {
        console.log("Correct!");
        this.score++;
        console.log(this.score);
        document.getElementById("score").innerText = `Score: ${this.score}`;
        game.getRandomColours();
        this.getRandomWords();
        this.correctBuzzer.play();
        this.increaseTimer();

    }


    wrongAnswer() {

        console.log("Wrong!");
        this.score = this.score - 1;
        document.getElementById("score").innerText = `Score: ${this.score}`;

        this.wrongBuzzer.play();
        // this.setTimer();

    }

    gameOver() {
        this.gameOverSound.play();

    }

}


let game = new Game();


window.onload = function() {

    game.startGame();

};

console.log(game.getRandomWords());
console.log(game.randomWord);
console.log(game.wordsArr[0]);

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



const randomColors = game.getRandomColours();






blue.addEventListener("click", () => {

    if (game.randomWord == element) {
        game.correctAnswer();


    } else {
        game.wrongAnswer();



    }

    // document.getElementById("colouredWords").innerHTML = game.getRandomWords();
})


green.addEventListener("click", () => {

    if (game.randomWord == element2) {
        game.correctAnswer();


    } else {
        game.wrongAnswer();

    }
    //   document.getElementById("colouredWords").innerHTML = game.getRandomWords();
})

red.addEventListener("click", () => {
    if (game.randomWord == element3) {
        game.correctAnswer();


    } else {
        game.wrongAnswer();

    }
    //  document.getElementById("colouredWords").innerHTML = game.getRandomWords();
})

yellow.addEventListener("click", () => {
    if (game.randomWord == element4) {
        game.correctAnswer();

    } else {
        game.wrongAnswer();

    }
    //   document.getElementById("colouredWords").innerHTML = game.getRandomWords();
})

purple.addEventListener("click", () => {
    if (game.randomWord == element5) {
        game.correctAnswer();



    } else {
        game.wrongAnswer();

    }
    //   document.getElementById("colouredWords").innerHTML = game.getRandomWords();
});



/*
console.log(game.getRandomWords());
console.log(game.getRandomWords());
console.log(game.getRandomWords());
console.log(game.getRandomWords());
console.log(game.getRandomWords());
console.log(typeof game.getRandomWords());
console.log(element);
console.log(typeof element);
console.log(element2);
console.log(element3);
console.log(element4);
console.log(element5);




if (game.getRandomWords() == element && element == "Blue" && game.getRandomWords() == "Blue") {

    console.log('correct');
} else {
    console.log('wrong')

}

if (game.getRandomWords().includes(element) && element == "Blue") {
    console.log("ok");
} else { console.log("not ok"); }


*/




























































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