const questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    question: "Who wrote the national anthem?",
    options: ["Tagore", "Premchand", "Gandhi", "Vivekananda"],
    answer: "Tagore",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
   {
    question: "Who is the President of India (as of 2025)?",
    options: [" Ram Nath Kovind", " Pratibha Patil", "Droupadi Murmu", "A. P. J. Abdul Kalam"],
    answer: "Droupadi Murmu",
  },
   {
    question: "What is the capital of Australia?",
    options: ["sydney", "melbourne", "perth", "canberra"],
    answer: "canberra",
  },
   {
    question: " What is the chemical formula of water?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    answer: "H2O",
  },
  //  {
  //   question: "Who is the female lead in Titanic?",
  //   options: ["rose", "mary", "yuna", "sparkie"],
  //   answer: "rose",
  // },
  //  {
  //   question: "In which year did India get independence?",
  //   options: ["1950", "1947", "1942", "1930"],
  //   answer: "1947",
  // },
  //  {
  //   question: "Which river is the longest in India?",
  //   options: ["Yamuna", "brahmaputra", "godavari", "ganga"],
  //   answer: "ganga",
  // },
  //  {
  //   question: "What is the currency of Japan?",
  //   options: ["yuan", "dollar", "yen", "won"],
  //   answer: "yen",
  // },
  //  {
  //   question: "Who invented the light bulb?",
  //   options: ["newton", "Alexander graham bell", "thomas edison", "albert einstein"],
  //   answer: "thomas edison",
  // },
  //  {
  //   question: "Best Picture Oscar in 2024?",
  //   options: ["Oppenheimer", "Barbie", "the fabelmans", "Avatar- the way of water"],
  //   answer: "Oppenheimer",
  // }, 
  // {
  //   question: "Best Original Screenplay award?",
  //   options: ["A Real Pain", "The substance", "Anora", "the brutalist"],
  //   answer: "Anora",
  // },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const text = document.querySelector('.text')
function showQuestion() {
  resetState();
  let current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option");
    btn.addEventListener("click", () => selectAnswer(btn, current.answer));
    optionsEl.appendChild(btn);
  });
}

function resetState() {
  nextBtn.classList.add("hidden");
  optionsEl.innerHTML = "";
  resultEl.classList.add("hidden");
}

function selectAnswer(selectedBtn, correctAnswer) {
  const options = document.querySelectorAll(".option");
  options.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
  
    }
  });

  if (selectedBtn.textContent === correctAnswer) {
    score++;
  }

  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  resetState();
  questionEl.textContent = "Quiz Completed!";
  resultEl.textContent = `You scored ${score} out of ${questions.length}`;
  resultEl.classList.remove("hidden");
  nextBtn.textContent = "Restart";
  nextBtn.classList.remove("hidden");
  nextBtn.onclick = () => location.reload();
}

showQuestion();
