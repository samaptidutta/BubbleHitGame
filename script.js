let score = 0;
let highScor=0;
let time = 60;
let Hitrnm;


function makeBubbles() {
    let clutter = "";

    for (let i = 1; i <= 150; i++) {

         // Random animation duration (1s - 4s) and delay (0s - 1s)
         let duration = (Math.random() * 3 + 1).toFixed(2);
         let delay = (Math.random() * 1).toFixed(2);

        let ranm = Math.floor(Math.random() * 10)
        clutter += `
        <div class="bubble" >
        ${ranm}
        </div>
        `
    }
    // console.log(clutter);
    console.log(document.querySelector("#pBottom"));
    document.querySelector("#pBottom").innerHTML = clutter
}

function timeSetVal() {
    let timeVal = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timer").textContent = time
        }
        else {
            clearInterval(timeVal);

            document.querySelector("#timer").textContent = "Time's Up!"
            if (score > highScor) {
                highScor=score
                document.querySelector("#pBottom").innerHTML = `
                <h1 id="center">Time Out</h1>
                <br/>
                <p>Your New High Score ${highScor}</p>
                <h3 id="newgame">Play Again</h3>
                `
                blustConfetti();


            }
            else {
                document.querySelector("#pBottom").innerHTML = `
                <h1 id="center">Time Out</h1>
                <br/>
                <p>Highest Score ${highScor}</p>
                <p>Your Score ${score}</p>
                <h3 id="newgame">Play Again</h3>
                `
            }
            startGame();
        }

    }, 1000)
}


function getNewHit() {
    Hitrnm = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = Hitrnm
}


function increaseScore() {
    score += 5;
    document.querySelector("#newScore").textContent = score;
}


function startGame() {
    let newGame = document.querySelector("#newgame")

    newGame.addEventListener("click", () => {
        makeBubbles();
        getNewHit();
        timeSetVal();
        time = 60;
        score=0
        console.log(prevScore);
        document.querySelector("#timer").textContent = time;
        document.querySelector("#newScore").textContent = score;
    })
}

function blustConfetti() {
    const count = 200,
        defaults = {
            origin: { y: 0.7 },
        };

    function fire(particleRatio, opts) {
        confetti(
            Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio),
            })
        );
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });

    fire(0.2, {
        spread: 60,
    });

    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

document.querySelector("#pBottom").addEventListener("click", (dets) => {
    console.log(Number(dets.target.textContent));

    let clickedNumber = Number(dets.target.textContent)
    if (Hitrnm === clickedNumber) {
        increaseScore();
        makeBubbles();
        getNewHit();
    }
})



makeBubbles();

getNewHit();

timeSetVal();