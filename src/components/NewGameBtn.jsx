import Button from '@mui/material/Button';

function NewGameBtn(props) {
    const clickHandler = () => {
        props.updateScore(0);
        props.updateNumGames(props.numGames + 1);
    }

    return (
        <>
            <Button variant="outlined" onClick={clickHandler}>New Game</Button>
        </>
    )
}

export default NewGameBtn