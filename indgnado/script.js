document.getElementById('clickButton').addEventListener('click', function() {
    var randomText = generateRandomText();
    document.getElementById('randomText').innerText = randomText;
});

function generateRandomText() {
    var texts = ["Lorem ipsum dolor sit amet", "Consectetur adipiscing elit", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "Ut enim ad minim veniam", "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"];
    var randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}
