import './Keyboard.css';

const KEYS = [
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
];

type keyboardProps = {
  incorrectLetters: string[];
  correctLetters: string[];
  disabled?: boolean;
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
  incorrectLetters,
  correctLetters,
  disabled = false,
  addGuessedLetter,
}: keyboardProps) => {
  return (
    <div className="keyboard-container">
      {KEYS.map((key) => {
        const isActive = correctLetters.includes(key);
        const isInactive = incorrectLetters.includes(key);
        return (
          <button
            className={`${isActive ? 'key active' : 'key'} ${
              isInactive ? 'key inactive' : 'key'
            }`}
            onClick={() => addGuessedLetter(key)}
            disabled={disabled}
            key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
