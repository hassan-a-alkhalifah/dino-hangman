import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Hangman from './hangman.js';

$(document).ready(function() {
  // $().click(function() {
  const dinoIpsum = new Hangman;
  const promise = dinoIpsum.getDinoIpsum();

  promise.then(function(response) {
    // const body = JSON.parse(response);
    // const answer = (body[0][0]);
    // console.log(answer);


    dinoIpsum.setAnswer(response);
    dinoIpsum.dinoSplitter();
    // console.log(dinoIpsum.answer);
    // Handle Dino Name Filtering
    // dinoIpsum.setAnswer(body);
  }, function(error) {
    alert("Nope! This is busted af.")
  });
  // });

});
