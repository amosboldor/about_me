'use strict';

var score = 0;
var userName = prompt('What is your first name?');
console.log('The user\'s name is: ' + userName);
alert('Hello ' + userName + ' and welcome to my about me webpage but first here is a quick game to ge to know me.');

var questionOne = prompt('Do I have hazelnut eyes?').toLowerCase();
if (questionOne === 'yes' || questionOne === 'y') {
  alert('Yes ' + userName + ' you got it right!');
  console.log(userName + ' got the do I have hazelnut eyes question [right].');
  score++;
} else if (questionOne === 'no' || questionOne === 'n') {
  alert('Sorry ' + userName + ' you got it wrong!');
  console.log(userName + ' got the do I have hazelnut eyes question [wrong].');
} else {
  alert('Wrong input refresh and try again!');
  console.log('Wrong input refresh and try again!');
}


var questionTwo = prompt('Do I love Seattle?').toLowerCase();
if (questionTwo === 'yes' || questionTwo === 'y') {
  alert('Yes ' + userName + ' how did you know!');
  console.log(userName + ' got the do I love Seattle question [right].');
  score++;
} else if (questionTwo === 'no' || questionTwo === 'n') {
  alert('Sorry ' + userName + ' you got it wrong, Seattle is AWESOME!');
  console.log(userName + ' got the do I love Seattle question [wrong].');
} else {
  alert('Wrong input refresh and try again!');
  console.log('Wrong input refresh and try again');
}

var questionThree = prompt('Do I enjoy kale?').toLowerCase();
if (questionThree === 'yes' || questionThree === 'y') {
  alert('No ' + ' I do not enjoy kale!');
  console.log(userName + 'got the do I enjoy kale question [wrong].');
} else if (questionThree === 'no' || questionThree === 'n') {
  alert('Yes ' + userName + ' you got it [right]. \n KALE SUCKS');
  console.log(userName + ' got the do I enjoy kale question [right].');
  score++;
} else {
  alert('Wrong input refresh and try again!');
  console.log('Wrong input refresh and try again!');
}

var questionFour = prompt('Do I love the TV show Rick and Morty?').toLowerCase();
if (questionFour === 'yes' || questionFour === 'y') {
  alert('Yes ' + userName + ' you got it right\n HAIL RICK AND MORTY');
  console.log(userName + ' got the question do I love the TV show Rick and Morty [right].');
  score++;
} else if (questionFour === 'no' || questionFour === 'n') {
  alert('No ' + userName + ' you are so wrong!');
  console.log('The user ' + userName + ' got the question do I love the TV show Rick and Morty [wrong].');
} else {
  alert('Wrong input refresh and try again!');
  console.log('Wrong input refresh and try again!');
}

var questionFive = prompt('Do I plan on visiting Somalia?').toLowerCase();
if (questionFive === 'yes' || questionFive === 'y') {
  alert('No ' + userName + ' you were wrong, unless they get a Starbucks');
  console.log(userName + ' got the Do I plan on visiting Somalia question [wrong].');
} else if (questionFive === 'no' || questionFive === 'n') {
  alert('Yes ' + userName + ' you got it right.');
  console.log(userName + ' got the Do I plan on visiting Somalia question [right].');
  score++;
} else {
  alert('Wrong input refresh and try again!');
  console.log('Wrong input refresh and try again');
}

var numToGuess = 20;
var count = 4;
while (count > 0) {
  var questionSix = parseInt(prompt('What is my age?'));
  if (questionSix === numToGuess) {
    alert('You got it');
    console.log('The user go the question What is my age? [right]');
    score++;
    break;
  } else {
    if (count === 1) {
      alert('sorry you lost');
      console.log('The user go the question What is my age? [wrong]');
      break;
    } else if (questionSix > numToGuess) {
      alert('to high');
      console.log('The user chose ' + questionSix + ' and was to [high]');
      count--;
    } else if (questionSix < numToGuess) {
      alert('to low');
      console.log('The user chose ' + questionSix + ' and was to [low]');
      count--;
    }
  }
}


var myArray = ['lexus', 'porsche', 'audi'];
var slick = true;
for (var tries = 6; tries > 0; tries--) {
  if (tries === 0) {
    alert('Sorry you lost \nThe options were Lexus, Porsche and Audi!');
    console.log('The user got the question What brand of car do I want? [wrong]');
    break;
  } else {
    var answerToQuestion = prompt('What brand of car do I want?').toLowerCase();
    if (answerToQuestion === myArray[0]) {
      alert('Lexus is correct');
      slick = false;
      break;
    } else if (answerToQuestion === myArray[1]) {
      alert('Porsche is correct');
      slick = false;
      break;
    } else if (answerToQuestion === myArray[2]) {
      alert('Audi is correct');
      slick = false;
      break;
    } else {
      alert('wrong');
      console.log('The user put in: ' + answerToQuestion + ' [wrong] has ' + (tries - 1) + ' tries left'); //I know that 1 tries left doesn't make sense, just go with it.
    }
  }
}
if (slick === false) {
  alert('Wow, how did you know? \nThe options were Lexus, Porsche and Audi!');
  console.log('The user got the question What brand of car do I want? [right]');
  score++;
}

if (score >= 5 ) {
  alert('You got ' + score + ' out of 7 questions correct\nNot bad, ' + userName + ' you know me pretty well');
} else {
  alert('You got ' + score + ' out of 7 questions correct\nWow, ' + userName + ' you don\'t know me that well\n\nTime to get to know me!');
}
