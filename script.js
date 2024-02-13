function checkAnswer(answer) {
    if (answer === 'yes') {
        celebrate();
    } else {
        document.getElementById('response').innerHTML = "Are you sure? Think again!";
        // Add shake effect on container
        document.querySelector('.container').style.transform = 'translateX(-10px)';
        setTimeout(() => {
            document.querySelector('.container').style.transform = 'translateX(0)';
        }, 100);
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
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let noCount = 0;

function checkAnswer(answer) {
    if (answer === 'yes') {
        celebrate();
    } else {
        noCount++;
        if (noCount % 5 === 0) {
            // Increase font size every 5 "No" responses
            document.querySelector('.container').style.fontSize = '22px';
        }
        document.getElementById('response').innerHTML = "Are you sure? Think again!";
        // Add shake effect on container
        document.querySelector('.container').style.transform = 'translateX(-10px)';
        setTimeout(() => {
            document.querySelector('.container').style.transform = 'translateX(0)';
        }, 100);
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
