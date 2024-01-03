import { useState } from 'react'

function Scorecard(props) {
    return (
        <>
            <p>Score: {props.score}</p>
            <p>Highest Score: {props.highestScore}</p>
        </>
    )
}

export default Scorecard