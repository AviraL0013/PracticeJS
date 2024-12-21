const buttons = document.querySelectorAll('.iconbutton');
const stone = document.getElementById('stone4');
const scissors = document.getElementById('scissors1');
const paper = document.getElementById('paper');

buttons.forEach((iconbutton) => {
    iconbutton.addEventListener("click", (e) => {
        var image = document.getElementById('stone2');
        image.classList.add('shake');
        setTimeout(() => {
            if (e.target.id === 'scissors1') {
                image.src = 'Untitled design (12)5.png';
            } else if (e.target.id === 'stone4') {
                image.src = 'Untitled design (12)1.png';
            } else if (e.target.id === 'paper') {
                image.src = 'Untitled design (12)9.png';
            }
            image.classList.remove('shake');
        }, 1000);
    });
});
const images = [
    { src: 'Untitled design (12)6.png', },
    { src: 'Untitled design (12)2.png', },
    { src: 'Untitled design (12)8.png' }
];
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

buttons.forEach((iconbutton) => {
    iconbutton.addEventListener("click", (e) => {
        var image = document.getElementById('stone3')
        image.classList.add('shake');
        setTimeout(() => {
            const randomImage = getRandomImage();
            image.src = randomImage.src;
            image.classList.remove('shake');

            var playerChoice;
            if (e.target.id === 'scissors1') {
                playerChoice = 'Untitled design (12)5.png';
            } else if (e.target.id === 'stone4') {
                playerChoice = 'Untitled design (12)1.png';
            } else if (e.target.id === 'paper') {
                playerChoice = 'Untitled design (12)9.png';
            }
            setTimeout(()=>{

            if ((playerChoice === 'Untitled design (12)5.png' && randomImage.src === 'Untitled design (12)6.png') ||
                (playerChoice === 'Untitled design (12)1.png' && randomImage.src === 'Untitled design (12)2.png') ||
                (playerChoice === 'Untitled design (12)9.png' && randomImage.src === 'Untitled design (12)8.png')) {
                alert("It's a tie!");
            } else if (
                (playerChoice === 'Untitled design (12)5.png' && randomImage.src === 'Untitled design (12)8.png') ||
                (playerChoice === 'Untitled design (12)1.png' && randomImage.src === 'Untitled design (12)6.png') ||
                (playerChoice === 'Untitled design (12)9.png' && randomImage.src === 'Untitled design (12)2.png')
            ) {
                alert("You win!");
            } else {
                alert("Computer wins!");
            }
        },500)
        }, 1000);
    });
});