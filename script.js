let clickCount = 0;

function moveButton() {
    const button = document.getElementById('clickButton');
    
    // Get random position
    const newPositionX = Math.floor(Math.random() * (window.innerWidth - 100));
    const newPositionY = Math.floor(Math.random() * (window.innerHeight - 50));

    button.style.position = 'absolute';  // Ensure the position is set to absolute
    button.style.left = `${newPositionX}px`;
    button.style.top = `${newPositionY}px`;

    clickCount++;

    if (clickCount === 9) {
        window.location.href = 'congratulations.html';
    }
}
