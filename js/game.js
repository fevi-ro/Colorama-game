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
        document.getElementById("colouredWords").style.backgroundColor = "#" + randomColor;


    }

    setTimer(num) {
        this.time += num;
        this.countdown;
    }

    getScore() {

    }

    correctAnswer() {

        console.log(h2.innerText);
        console.log("Correct!");
        this.score++;
        document.getElementById("score").innerText = `Score: ${score}`
        h2.innerText = getRandomWords();
        h2.style.color = getRandomColours();
    }


    wrongAnswer() {

        console.log("Wrong!");
    }


}


let game = new Game();

let randomCl = game.getRandomColours();
colouredWords.innerHTML = game.getRandomWords();

document.getElementById("colouredWords").addEventListener("click", randomCl);


const clickColour = document.querySelector(".container");
clickColour.addEventListener("click", () => {
    if (colouredWords === colourBtn) {
        game.correctAnswer();
    } else {
        game.wrongAnswer();
    }
})

//