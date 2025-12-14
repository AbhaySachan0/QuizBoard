const quizData = [
  {
    question: "1️⃣ What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "HighText Machine Language",
    c: "Hyperlink and Text Management Language",
    correct: "a"
  },
  {
    question: "2️⃣ Which CSS property is used to change text color?",
    a: "color",
    b: "text-color",
    c: "font-color",
    correct: "a"
  },
  {
    question: "3️⃣ HTML files are saved with which extension?",
    a: ".htm or .html",
    b: ".doc",
    c: ".css",
    correct: "a"
  }
];

const questionEl = document.getElementById("question");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const answers = document.querySelectorAll('input[name="answer"]');
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
  deselectAnswers();
  const q = quizData[currentQuestion];

  questionEl.innerText = q.question;
  aText.innerText = q.a;
  bText.innerText = q.b;
  cText.innerText = q.c;
}

function getSelected() {
  let selected = null;
  answers.forEach(ans => {
    if (ans.checked) selected = ans.value;
  });
  return selected;
}

function deselectAnswers() {
  answers.forEach(ans => ans.checked = false);
}

nextBtn.addEventListener("click", () => {
  const selected = getSelected();

  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  if (selected === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    // Redirect to leaderboard / result page
    window.location.href = "leaderboard.html";
    // OR show result:
    // alert(`Quiz Finished! Score: ${score}/${quizData.length}`);
  }
});
