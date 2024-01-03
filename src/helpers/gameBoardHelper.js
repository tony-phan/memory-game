const resetScores = (score, highestScore, setScore, setHighestScore) => {
    setScore(0);
    setHighestScore(Math.max(score, highestScore));
}

const resetDogData = (dogData) => {
    dogData.forEach(item => item.clicked = false);
}

const gameOver = (dogData) => {
    let over = true;
    dogData.forEach((item) => {
        if(!item.clicked) {
            over = false;
        }
    });
    return over;
}

const shuffleImages = (dogData) => {
    for(let i = dogData.length - 1; i > 0; --i) {
        const j = Math.floor(Math.random() * (i + 1));
        [dogData[i], dogData[j]] = [dogData[j], dogData[i]];
    }
}

export { resetScores, resetDogData, gameOver, shuffleImages }