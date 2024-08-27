document.getElementById('submitBtn').addEventListener('click', calculateScore);

function calculateScore() {
    let score = 0;

    // Check the answers
    if (document.querySelector('input[name="q1"]:checked')?.value === 'Vatican') {
        score++;
    }
    if (document.querySelector('input[name="q2"]:checked')?.value === '4') {
        score++;
    }
    if (document.querySelector('input[name="q3"]:checked')?.value === 'JavaScript') {
        score++;
    }

    // Display the score
    alert("You scored " + score + " out of 3!");
}
