function checkAnswer(answer) {
    if (answer === 'yes') {
        celebrate();
    } else {
        document.getElementById('response').innerHTML = "Are you sure? Think again!";
    }
}

function celebrate() {
    document.body.innerHTML = `
    <div class="celebration">
        <h1>Congratulations!</h1>
        <p>You've made me the happiest person alive!</p>
        <img src="https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif" alt="Celebration">
    </div>`;
}

