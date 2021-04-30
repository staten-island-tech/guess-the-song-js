console.log("test2");

let questions = [
  {
    question: "What song is this?",
    choice1: "Controlla",
    choice2: "One Dance",
    choice3: "Laugh Now Cry Later",
    choice4: "Stronger",
    answer: 3,
    identifier: "drake",
  },
  {
    question: "What song is this?",
    choice1: "Everybody Wants to Rule the World",
    choice2: "No Turning Back",
    choice3: "Livin' on a Prayer",
    choice4: "We're Not Gonna Take it",
    answer: 1,
    identifier: "tearsforfears",
  },
  {
    question: "Who sings this song?",
    choice1: "21 Savage",
    choice2: "Travis Scott",
    choice3: "XXXTENTACION",
    choice4: "Tyler the Creator",
    answer: 3,
    identifier: "xxxtentacion",
  },
  {
    question: "What song is this?",
    choice1: "Starboy",
    choice2: "I Feel It Coming",
    choice3: "Blinding Lights",
    choice4: "Scared of Love",
    answer: 1,
    identifier: "theweeknd",
  },
  {
    question: "Who sings this song?",
    choice1: "Taylor Swift",
    choice2: "Ariana Grande",
    choice3: "Kali Uchis",
    choice4: "Clairo",
    answer: 4,
    identifier: "clairo",
  },
  {
    question: "Who sings this song?",
    choice1: "100 Gecs",
    choice2: "Arctic Monkeys",
    choice3: "Tame Impala",
    choice4: "Gorillaz",
    answer: 3,
    identifier: "tameimpala",
  },
  {
    question: "What song is this?",
    choice1: "Heartless",
    choice2: "In the Night",
    choice3: "POWER",
    choice4: "Father Stretch My Hands Pt. 1",
    answer: 1,
    identifier: "kanye",
  },
  {
    question: "Who sings this song?",
    choice1: "Lil Wayne",
    choice2: "Lil Uzi Vert",
    choice3: "Lil Pump",
    choice4: "Lil Tecca",
    answer: 2,
    identifier: "uzi",
  },
  {
    question: "What song is this?",
    choice1: "Stressed Out",
    choice2: "I Write Sins Not Tragedies",
    choice3: "Death of a Bachelor",
    choice4: "Car Radio",
    answer: 3,
    identifier: "panic",
  },
  {
    question: "Who sings this song?",
    choice1: "SZA",
    choice2: "Camilla Cabello",
    choice3: "Lorde",
    choice4: "Billie Eilish",
    answer: 4,
    identifier: "billie",
  },
];

soundManager.setup({
  preferFlash: false,
  //, url: "swf/"
  onready: function () {
    soundManager.createSound({
      url: [
        "https://res.cloudinary.com/alston/video/upload/v1618393699/cs%20songs/Drake_-_Laugh_Now_Cry_Later_xqnzor.mp3",
      ],
      id: "drake",
    });
    soundManager.createSound({
      url: [
        "https://res.cloudinary.com/alston/video/upload/v1618393697/cs%20songs/Tears_for_Fears_-_Everybody_Wants_To_Rule_The_World_msrmax.mp3",
      ],
      id: "tearsforfears",
    });
    soundManager.createSound({
      url: [
        "https://res.cloudinary.com/alston/video/upload/v1618393696/cs%20songs/XXXTentacion_-_SAD_tq8kxg.mp3",
      ],
      id: "xxxtentacion",
    });
    soundManager.createSound({
      url: [
        "https://res.cloudinary.com/alston/video/upload/v1618393696/cs%20songs/The_Weeknd_-_Starboy_qsz7sm.mp3",
      ],
      id: "theweeknd",
    });
    soundManager.createSound({
      url: [
        "https://res.cloudinary.com/alston/video/upload/v1618393698/cs%20songs/Clairo_-_Pretty_Girl_qgekih.mp3",
      ],
      id: "clairo",
    });
    soundManager.createSound({
      url: [
        "https://res.cloudinary.com/alston/video/upload/v1618394837/cs%20songs/Tame_Impala_-_The_Less_I_Know_The_Better_fnzgxn.mp3",
      ],
      id: "tameimpala",
    });
    soundManager.createSound({
      url: [
        "https://res.cloudinary.com/alston/video/upload/v1618393699/cs%20songs/Kanye_West_-_Heartless_ae3mfz.mp3",
      ],
      id: "kanye",
    });
    soundManager.createSound({
      url: [
        "https://res.cloudinary.com/alston/video/upload/v1618393699/cs%20songs/Lil_Uzi_Vert_-_20_Min_vieb8p.mp3",
      ],
      id: "uzi",
    });
    soundManager.createSound({
      url: [
        "https://res.cloudinary.com/alston/video/upload/v1618393696/cs%20songs/Panic_At_the_Disco_-_Death_of_a_Bachelor_jmjvhi.mp3",
      ],
      id: "panic",
    });
    soundManager.createSound({
      url: [
        "https://res.cloudinary.com/alston/video/upload/v1618393696/cs%20songs/Billie_Eilish_-_wish_you_were_gay_hstf6y.mp3",
      ],
      id: "billie",
    });
    playCurrentSong();
  },
});

function playCurrentSong() {
  if (currentQuestion.identifier === "drake") {
    soundManager.play("drake").setPosition("28000");
  }
  if (currentQuestion.identifier === "tearsforfears") {
    soundManager.play("tearsforfears").setPosition("40000");
  }
  if (currentQuestion.identifier === "xxxtentacion") {
    soundManager.play("xxxtentacion").setPosition("53000");
  }
  if (currentQuestion.identifier === "theweeknd") {
    soundManager.play("theweeknd").setPosition("14000");
  }
  if (currentQuestion.identifier === "clairo") {
    soundManager.play("clairo");
  }
  if (currentQuestion.identifier === "tameimpala") {
    soundManager.play("tameimpala").setPosition("24000");
  }
  if (currentQuestion.identifier === "kanye") {
    soundManager.play("kanye");
  }
  if (currentQuestion.identifier === "uzi") {
    soundManager.play("uzi");
  }
  if (currentQuestion.identifier === "panic") {
    soundManager.play("panic").setPosition("88000");
  }
  if (currentQuestion.identifier === "billie") {
    soundManager.play("billie").setPosition("33000");
  }
}

function stopAllSongs() {
  soundManager.stopAll();
}

/*         TIMER          */
// Borrowed (and repurposed) from https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/

let FULL_DASH_ARRAY = 283;
let WARNING_THRESHOLD = 10;
let ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  //thresholds for color changes
  info: {
    color: "green",
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD,
  },
};

let songTimer = 15;
let timePassed = 0;
let timeLeft = songTimer;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

function resetColor() {
  document
    .getElementById("base-timer-path-remaining")
    .classList.remove("orange");
  document.getElementById("base-timer-path-remaining").classList.remove("red");
  document.getElementById("base-timer-path-remaining").classList.add("green");
}

function resetVars() {
  FULL_DASH_ARRAY = 300;
  songTimer = 16;
  timePassed = 0;
  timeLeft = songTimer;
  timerInterval = null;
}

function reset() {
  resetVars();
  resetColor();
  stopAllSongs();
}

function stopTimer() {
  //when the timer hits 0, stop the timer. otherwise it'll go into the negatives.
  clearInterval(timerInterval);
  acceptingAnswers = false;
}

function onTimesUp() {
  stopTimer();
  document.getElementById("timesup").innerText = "TIMES UP!";
  document.getElementById("timesup").classList.add("animate__flash");
  setTimeout(() => {
    reset();
    getNewQuestion();
  }, 1000);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = songTimer - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    ); //updates the html to the time in seconds
    setCircleDasharray(); //starts winding back the circle
    setRemainingPathColor(timeLeft); //sets the color of the circle

    if (timeLeft === 0) {
      //when the timer hits 0, call the ranOutOfTime function
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  //formats the time in seconds
  let seconds = time % 60;
  return `${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  //changes color when activated by threshold
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / songTimer;
  return rawTimeFraction - (1 / songTimer) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  //dasharray = % of circle that is filled up
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`; //283 is the value when it is full
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("answers"));
const progressText = document.getElementById("track");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const MAX_QUESTIONS = 10;

function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

function getNewQuestion() {
  acceptingAnswers = true;

  if (availableQuestions.length === 0) {
    scorePage();
  }

  document.getElementById("timesup").innerText = null;
  questionCounter++;
  startTimer();

  if (questionCounter > 1) {
    setTimeout(() => {
      playCurrentSong();
    }, 1100);
  }

  progressText.innerText = `${questionCounter} of ${MAX_QUESTIONS}`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);
}

choices.forEach((choice) => {
  const normalBackground = "bg-yellow-500";
  const normalHover = "hover:bg-yellow-600";
  const correctBackground = "bg-green-600";
  const incorrectBackground = "bg-red-700";
  const correctAnimation = "animate__tada";
  const incorrectAnimation = "animate__shakeX";
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    stopTimer();
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    if (selectedAnswer == currentQuestion.answer) {
      incrementScore(timeLeft * 25);
      console.log(selectedAnswer);
      console.log(currentQuestion.answer);
      console.log("CORRECT");
      selectedChoice.parentElement.classList.remove(
        normalBackground,
        normalHover
      );
      selectedChoice.parentElement.classList.add(correctBackground);
      selectedChoice.parentElement.classList.add(correctAnimation);
      selectedChoice.innerHTML = `<i class="fas fa-check my-1"></i>`;
    }

    if (selectedAnswer != currentQuestion.answer) {
      console.log(selectedAnswer);
      console.log(currentQuestion.answer);
      console.log("INCORRECT");
      selectedChoice.parentElement.classList.remove(
        normalBackground,
        normalHover
      );
      selectedChoice.parentElement.classList.add(incorrectBackground);
      selectedChoice.parentElement.classList.add(incorrectAnimation);
      selectedChoice.innerHTML = `<i class="fas fa-times my-1"></i>`;
    }

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(correctBackground);
      selectedChoice.parentElement.classList.remove(incorrectBackground);
      selectedChoice.parentElement.classList.add(normalBackground, normalHover);
      reset();
      getNewQuestion();
    }, 2000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();

function scorePage() {
  document.getElementById("body").innerHTML = `
  <div id="container-box" class="h-3/4 w-1/4 rounded-3xl overflow-hidden shadow-lg mx-auto my-12 bg-gray-200 flex flex-col">
    <h1 class="font-bold text-4xl mb-2 pb-4">You scored a ${score}!</h1>
    <p class="text-gray-600 text-base text-lg">Timing matters! Wanna try again?</p>
    <div id="start-buttons" class="flex flex-col items-center">
                <button id="start-button" class="font-bold text-white bg-green-500 hover:bg-green-700 duration-300 p-4 my-3 rounded-2xl w-1/2 shadow-lg"><i class="fas fa-play fa-xs"></i>  <a href="game.html">START</a></button>
            </div>
  `;
  document
    .getElementById("body")
    .classList.add("bg-gray-700", "flex", "items-center");
  document.getElementById("start-button").onclick = function () {
    location.href = "/src/game.html";
  };
}
