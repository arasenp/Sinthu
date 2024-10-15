function checkAnswer(answer, nextPage) {
    const message = document.getElementById("message");

    if (answer === "correct") {
        // Custom success message for each question
        message.innerHTML = "<p class='success'>Correct!</p>";
        setTimeout(() => {
            window.location.href = nextPage;
        }, 2000); // After 2 seconds, move to the next page
    } else {
        // Notify the user to try again
        message.innerHTML = "<p class='error'>Incorrect, please try again.</p>";
    }
}
