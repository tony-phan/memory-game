import { useState, useEffect } from 'react'
import './App.css'
import Scorecard from './components/Scorecard'
import Header from './components/Header'
import Gameboard from './components/Gameboard'
import * as DogHelper from './helpers/dogHelpers'
import NewGameBtn from './components/NewGameBtn'
function App() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [dogImages, setDogImages] = useState([]);
  const [numGames, setNumGames] = useState(0);

  useEffect(() => {
    DogHelper.getDogImages(setDogImages);
  }, [numGames]);

  return (
    <>
      <Header />
      <Scorecard score={score} highestScore={highestScore} />
      <NewGameBtn updateScore={setScore} numGames={numGames} updateNumGames={setNumGames} />
      <Gameboard dogImages={dogImages} updateDogImages={setDogImages} score={score} updateScore={setScore} highestScore={highestScore} updateHighestScore={setHighestScore} numGames={numGames} updateNumGames={setNumGames} />
    </>
  )
}

export default App;
