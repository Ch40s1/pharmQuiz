let currentQuestionIndex = 0;
let questions = [];

function navigateToHome() {
  window.location.href = "index.html";
}

// Load the quiz data
loadJSON("assets/top200.json", (data) => {
  questions = data;
  showQuestion();
});

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    alert("Quiz complete! Well done!");
    return;
  }

  const question = questions[currentQuestionIndex];
  const questionElement = document.getElementById("question");
  questionElement.innerText = `Generic Name: ${question.generic}`;
}

function submitAnswer() {
  const brandInput = document.getElementById("brand").value.trim();
  const classInput = document.getElementById("class").value.trim();
  const indicationInput = document.getElementById("indication").value.trim();

  const question = questions[currentQuestionIndex];

  // Check if all answers are correct
  const isBrandCorrect = brandInput.toLowerCase() === question.brand.toLowerCase();
  const isClassCorrect = classInput.toLowerCase() === question.class.toLowerCase();
  const isIndicationCorrect = question.indication.some((ind) =>
    ind.toLowerCase() === indicationInput.toLowerCase()
  );

  if (isBrandCorrect && isClassCorrect && isIndicationCorrect) {
    alert("Correct! Moving to the next question.");
    currentQuestionIndex++;
    clearInputs();
    showQuestion();
  } else {
    alert("Incorrect. Please try again!");
  }
}

function clearInputs() {
  document.getElementById("brand").value = "";
  document.getElementById("class").value = "";
  document.getElementById("indication").value = "";
}
