document.addEventListener("DOMContentLoaded", function () {
    function checkAnswer() {
        let correctAnswer = 4; // Example correct answer
        let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
        const feedback = document.getElementById("feedback");
        if (parseInt(userAnswer) === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    }

    document.getElementById("submit-answer").addEventListener("click", checkAnswer);
});