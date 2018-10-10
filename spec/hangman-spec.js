import Hangman from './../src/hangman.js';

describe ('Hangman', function() {
  const newHangman = new Hangman;
  const answer = "smilodon";
  const correctAnswer = ["s","m","i","l","o","d","o","n"];
  const guessedLetters = [];
  const lettersIncorrect = [];
  const strikes = lettersIncorrect.length;


  it('should check instatiation of Hangman object', function() {
    expect(newHangman instanceof Hangman).toBe(true);
  });

  it('should split the answer into an array of letters', function() {
    newHangman.dinoSplitter();
    console.log(newHangman);

    expect(newHangman.answerSplit).toEqual(["s","m","i","l","o","d","o","n"]);
  });

  it('should populate an array with guessed letters', function() {


    expect().toBe();
  })

  it('should filter the array', function() {


    expect().toBe();
  });

  it('should determine if a given letter is in the array', function() {


    expect().toBe();
  });

  it('should give one strike if a given letter is not in the array', function() {


    expect().toBe();
  })
});
