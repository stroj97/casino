document.getElementById('playRoulette').addEventListener('click', function(event) {
    event.preventDefault();
    fetch('/game/roulette')
        .then(response => response.json())
        .then(data => {
            document.getElementById('gameResult').textContent = `Result: ${data.result}`;
        })
        .catch(error => console.error('Error:', error));
});
