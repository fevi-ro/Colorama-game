class Game {
    constructor() {
        this.score = 0;
        this.wordsArr = [];
        this.time = 10;

        this.timeInterval = null;
        this.audio = new Audio("sounds/8_Bit_Retro_Funk.mp3");
        this.audio.volume = 0.2;
        this.randomWord = '';
        this.wrongBuzzer = new Audio("sounds/add-ons_error.mp3");
        this.correctBuzzer = new Audio("sounds/instant-win.wav");
        this.gameOverSound = new Audio("sounds/mixkit-player-losing-or-failing-2042.wav");
        this.clockSound = new Audio("sounds/Clock tick.mp3");
    }




    startGame() {
        document.querySelector(".gameOver").style.display = "none";
        document.querySelector("#replay").style.display = "none";
        document.querySelector(".newScore").style.display = "none";
        this.audio.play();
        this.setTimer();
        document.getElementById("score").innerText = `Score: ${this.score}`




    }


    getRandomWords() {
        let text = ["Blue", "Green", "Red", "Yellow", "Purple"];


        for (let i = 0; i < text.length; i++) {
            this.randomWord = text[Math.floor(Math.random() * text.length)]
            this.wordsArr.push(this.randomWord);

            document.getElementById("colouredWords").innerHTML = this.randomWord;

            return this.randomWord;
        }

    }



    getRandomColours() {
        /* const randomColor = Math.floor(Math.random() * 16777215).toString(16);
         document.getElementById("colouredWords").style.
         color = "#" + randomColor; */ // generates completelly random colours

        let colorArr = ['#70FF57', '#1FB4FF', '#FF0A33', '#fafa33', '#BB4DFF'];
        let i = Math.floor(Math.random() * colorArr.length);
        document.getElementById("colouredWords").style.color = colorArr[i];
        return colorArr[i];


    }

    setTimer() {

        this.timeInterval = setInterval(() => {
            this.time--;
            document.getElementById('timer').innerText = `Time Left : ${this.time.toFixed(1)}`;

            if (this.time < 5) {
                document.getElementById("timer").style.color = '#FF0526';
                this.clockSound.play();
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




    correctAnswer() {

        this.score++;

        document.getElementById("score").innerText = `Score: ${this.score}`;
        game.getRandomColours();
        this.getRandomWords();
        this.correctBuzzer.play();

        this.increaseTimer();

    }


    wrongAnswer() {


        this.score = this.score - 1;
        document.getElementById("score").innerText = `Score: ${this.score}`;

        this.wrongBuzzer.play();
        document.querySelector("body").className = "distraction";
        setTimeout(function() { document.querySelector("body").className = ""; }, 50); //reset distraction


    }

    gameOver() {
        this.audio.pause();
        this.gameOverSound.play();
        this.clockSound.pause();
        document.querySelector(".container").style.display = "none";
        document.querySelector("#colouredWords").style.display = "none";
        // alert("game over!")
        document.querySelector(".gameOver").style.display = "inline-block";
        document.querySelector("#replay").style.display = "inline-block";
        document.querySelector(".newScore").style.display = "inline-flex";
        document.querySelector(".newScore").innerText = `Score: ${this.score}`;
        document.getElementById("score").innerText = `Score: 0` //resets Score




    }

}


let game = new Game();


window.onload = function() {

    game.startGame();
    let elem = document.createElement("img");
    elem.src = 'images/blue.png';
    document.getElementById("Blue").appendChild(elem);

    let elem2 = document.createElement("img");
    elem2.src = 'images/green.png';
    document.getElementById("Green").appendChild(elem2);

    let elem3 = document.createElement("img");
    elem3.src = 'images/red.png';
    document.getElementById("Red").appendChild(elem3);

    let elem4 = document.createElement("img");
    elem4.src = 'images/yellow.png';
    document.getElementById("Yellow").appendChild(elem4);

    let elem5 = document.createElement("img");
    elem5.src = 'images/purple.png';
    document.getElementById("Purple").appendChild(elem5);


};

game.getRandomWords();




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

})


green.addEventListener("click", () => {

    if (game.randomWord == element2) {
        game.correctAnswer();


    } else {
        game.wrongAnswer();

    }

})

red.addEventListener("click", () => {
    if (game.randomWord == element3) {
        game.correctAnswer();


    } else {
        game.wrongAnswer();

    }

})

yellow.addEventListener("click", () => {
    if (game.randomWord == element4) {
        game.correctAnswer();

    } else {
        game.wrongAnswer();

    }

})

purple.addEventListener("click", () => {
    if (game.randomWord == element5) {
        game.correctAnswer();



    } else {
        game.wrongAnswer();

    }

});