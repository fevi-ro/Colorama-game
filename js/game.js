class Game {
    constructor() {
        this.score = 0;
        this.wordsArr = [];
        this.time = 0;

        this.audio = "";
    }

    start() {}

    getRandomWords() {
        let colourText = ["Blue", "Green", "Red", "Yellow", "Purple"];


        for (let i = 0; i < colourText.length; i++) {
            let randomWord = colourText[Math.floor(Math.random() * colourText.length)]

            const result = this.wordsArr.push(randomWord);
            return result;
        }

    }


    getRandomColours() {

        function randomInteger(max) {
            return Math.floor(Math.random() * (max + 1));
        }

        function randomRgbColor() {
            let r = randomInteger(255);
            let g = randomInteger(255);
            let b = randomInteger(255);
            return [r, g, b];
        }

        function randomHexColor() {
            let [r, g, b] = randomRgbColor();

            let hr = r.toString(16).padStart(2, '0');
            let hg = g.toString(16).padStart(2, '0');
            let hb = b.toString(16).padStart(2, '0');

            return "#" + hr + hg + hb;
        }

        function changeColor() {

            let hex = randomHexColor();
            document.getElementById('colouredWords').value = hex;

        }

        function clickHandler(event) {
            changeColor();
            event.preventDefault();
        }

        document.addEventListener('click', clickHandler);

        changeColor();
        /*
        const setBg = () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            document.words.style.backgroundColor = "#" + randomColor;

        }
        words.addEventListener("click", setBg);
        setBg(); */
    }


    getScore() {

    }

    correctAnswer() {

        console.log(h2.innerText);
        console.log("Correct!");
        h2.innerText = this.getRandomWords();

    }
    wrongAnswer() {}
}