export default class Hangman {
  constructor() {
    this.score = 0,
    this.time = 0,
    this.answer = "smilodon";
  }

  setAnswer(response) {
    const body = JSON.parse(response);
    this.answer = (body[0][0]);
  }

  checkAnswer() {
    if (this.answer === true) {
      return true;
    } else if (this.answer === false) {
      console.log("Nope! This.answer = false");
    }
  }
  dinoSplitter() {
    let answer = this.answer;
    this.answerSplit = answer.split("");
  }

  timeTracker() {
    const gameInterval = setInterval (() => {
      this.time++;
      if(this.time > 120) {
        clearInterval(gameInterval);
        return "Time's up!";
      }
    }, 1000);
  }

  getDinoIpsum() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = 'https://alexnormand-dino-ipsum.p.mashape.com/?format=json&paragraphs=1&words=1';
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open('GET', url, true);
      request.setRequestHeader("X-Mashape-Key", `${process.env.API_KEY}`);
      request.setRequestHeader("Accept", "text/plain");
      request.send();
    });
  }
}
