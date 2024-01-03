import * as GameBoardHelper from '../helpers/gameBoardHelper'
import { useState } from 'react'
import { Alert, Snackbar } from '@mui/material';

function Gameboard(props) {
    const [successFlag, setSuccessFlag] = useState(false);
    const [errorFlag, setErrorFlag] = useState(false);

    let data = [...props.dogImages];

    const clickHandler = (e, index) => {
        if(data[index].clicked) {
            setErrorFlag(true);
            return;
        } 

        data[index].clicked = true;
        props.updateScore(props.score + 1);

        const over = GameBoardHelper.gameOver(data);
        if(over) {
            setSuccessFlag(true);
            return;
        } 

        GameBoardHelper.shuffleImages(data);
        props.updateDogImages(data);
    }

    const handleClose = () => {
        if(successFlag) {
            props.updateNumGames(props.numGames + 1);
            setSuccessFlag(false);
        } else if(errorFlag) {
            GameBoardHelper.resetDogData(data);
            setErrorFlag(false);
        }
        GameBoardHelper.resetScores(props.score, props.highestScore, props.updateScore, props.updateHighestScore);
    };

    return (
        <>
            <div className="container">
                {props.dogImages.map((dog, index) => {
                    return (
                        <button 
                            key={index} 
                            className="dog-card"
                            onClick={(e) => {
                                clickHandler(e, index)
                            }}
                        >
                            <img className="dog-image" src={dog.url} />
                        </button>
                    ) 
                })}
            </div>

            <Snackbar open={successFlag} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '600%' }}>
                    Congratulations! You win!
                </Alert>
            </Snackbar>
            <Snackbar open={errorFlag} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '600%' }}>
                    You already clicked this card! Resetting the game...
                </Alert>
            </Snackbar>
        </>
    )
}

export default Gameboard