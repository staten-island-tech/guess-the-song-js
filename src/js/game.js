console.log("test2");

/*         TIMER          */
// "Borrowed" from https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

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

const songTimer = 15;
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

startTimer();

function onTimesUp() {
  //when the timer hits 0, stop the timer. otherwise it'll go into the negatives.
  clearInterval(timerInterval);
  canAnswer = false;
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
      //when the timer hits 0, call the onTimesUp function
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

/// Questions

const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".answer-text"));
const progressText = document.querySelector("#track");
const scoreText = document.querySelector("#score");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "What song is this?",
    choice1: "Controlla",
    choice2: "One Dance",
    choice3: "Laugh Now Cry Later",
    choice4: "Stronger",
    answer: 2,
  },
  {
    question: "What song is this?",
    choice1: "Everybody Wants to Rule the World",
    choice2: "No Turning Back",
    choice3: "Livin' on a Prayer",
    choice4: "We're Not Gonna Take it",
    answer: 1,
  },
  {
    question: "Who sings this song?",
    choice1: "21 Savage",
    choice2: "Travis Scott",
    choice3: "XXXTENTACION",
    choice4: "Tyler the Creator",
    answer: 3,
  },
  {
    question: "What song is this?",
    choice1: "Starboy",
    choice2: "I Feel It Coming",
    choice3: "Blinding Lights",
    choice4: "Scared of Love",
    answer: 2,
  },
  {
    question: "Who sings this song?",
    choice1: "Taylor Swift",
    choice2: "Ariana Grande",
    choice3: "Kali Uchis",
    choice4: "Clairo",
    answer: 4,
  },
  {
    question: "Who sings this song?",
    choice1: "100 Gecs",
    choice2: "Arctic Monkeys",
    choice3: "Tame Impala",
    choice4: "Gorillaz",
    answer: 3,
  },
  {
    question: "What song is this?",
    choice1: "Heartless",
    choice2: "In the Night",
    choice3: "POWER",
    choice4: "Father Stretch My Hands Pt. 1",
    answer: 1,
  },
  {
    question: "Who sings this song?",
    choice1: "Lil Wayne",
    choice2: "Lil Uzi Vert",
    choice3: "Lil Pump",
    choice4: "Lil Tecca",
    answer: 2,
  },
  {
    question: "What song is this?",
    choice1: "Stressed Out",
    choice2: "I Write Sins Not Tragedies",
    choice3: "Death of a Bachelor",
    choice4: "Car Radio",
    answer: 3,
  },
  {
    question: "Who sings this song?",
    choice1: "SZA",
    choice2: "Camilla Cabello",
    choice3: "Lorde",
    choice4: "Billie Eilish",
    answer: 4,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    return window.location.assign("/end.html");
  }

  questionCounter++;
  progressText.innerText = `${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
