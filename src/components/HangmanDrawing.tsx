import './HangmanDrawing.css';

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const bodyParts = [
  <div className="head"></div>,
  <div className="body"></div>,
  <div className="hand1"></div>,
  <div className="hand2"></div>,
  <div className="leg1"></div>,
  <div className="leg2"></div>,
];

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="drawing-container">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <div className="line4"></div>
      {bodyParts.slice(0, numberOfGuesses)}
    </div>
  );
};

export default HangmanDrawing;
