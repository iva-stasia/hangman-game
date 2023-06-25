import './HangmanWord.css';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal: boolean;
};

const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div className="word-container">
      {wordToGuess.split('').map((letter, id) => (
        <span
          className={`letter-container ${
            !guessedLetters.includes(letter) && reveal ? 'letter-revealed' : ''
          }`}
          key={id}>
          <span
            className={
              guessedLetters.includes(letter) || reveal ? '' : 'letter-hidden'
            }>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
