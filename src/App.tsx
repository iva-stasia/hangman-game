import { useCallback, useEffect, useState } from 'react';
import words from './words.json';
import './App.css';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';

const BODY_PARTS_NUM = 6;

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const correctLetters = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length === BODY_PARTS_NUM;
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const { key } = e;
      if (!key.match(/^[a-z]$/) || isWinner || isLoser) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [guessedLetters]);

  console.log(wordToGuess);

  return (
    <div className="game-container">
      <div className="result-message">
        {isWinner && 'Winner! - Refresh to try again'}
        {isLoser && 'Nice Try - Refresh to try again'}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <Keyboard
        addGuessedLetter={addGuessedLetter}
        incorrectLetters={incorrectLetters}
        correctLetters={correctLetters}
        disabled={isWinner || isLoser}
      />
    </div>
  );
};

export default App;
