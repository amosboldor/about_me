'use strict';
//
// var userName = prompt('What is your first name?');
// console.log('The user\'s name is: ' + userName);
// alert('Hello ' + userName + ' and welcome to my about me webpage but first here is a quick game to ge to know me.');
//
// var questionOne = prompt('Do I have hazelnut eyes?').toLowerCase();
// if (questionOne === 'yes' || questionOne === 'y') {
//   alert('Yes ' + userName + ' you got it right!');
//   console.log(userName + ' got the do I have hazelnut eyes question [right].');
// } else if (questionOne === 'no' || questionOne === 'n') {
//   alert('Sorry ' + userName + ' you got it wrong!');
//   console.log(userName + ' got the do I have hazelnut eyes question [wrong].');
// } else {
//   alert('Wrong input refresh and try again!');
//   console.log('Wrong input refresh and try again!');
// }
//
//
// var questionTwo = prompt('Do I love Seattle?').toLowerCase();
// if (questionTwo === 'yes' || questionTwo === 'y') {
//   alert('Yes ' + userName + ' how did you know!');
//   console.log(userName + ' got the do I love Seattle question [right].');
// } else if (questionTwo === 'no' || questionTwo === 'n') {
//   alert('Sorry ' + userName + ' you got it wrong, Seattle is AWESOME!');
//   console.log(userName + ' got the do I love Seattle question [wrong].');
// } else {
//   alert('Wrong input refresh and try again!');
//   console.log('Wrong input refresh and try again');
// }
//
// var questionThree = prompt('Do I enjoy kale?').toLowerCase();
// if (questionThree === 'yes' || questionThree === 'y') {
//   alert('No ' + ' I do not enjoy kale!');
//   console.log(userName + 'got the do I enjoy kale question [wrong].');
// } else if (questionThree === 'no' || questionThree === 'n') {
//   alert('Yes ' + userName + ' you got it [right]. \n KALE SUCKS');
//   console.log(userName + ' got the do I enjoy kale question [right].');
// } else {
//   alert('Wrong input refresh and try again!');
//   console.log('Wrong input refresh and try again!');
// }
//
// var questionFour = prompt('Do I love the TV show Rick and Morty?').toLowerCase();
// if (questionFour === 'yes' || questionFour === 'y') {
//   alert('Yes ' + userName + ' you got it right\n HAIL RICK AND MORTY');
//   console.log(userName + ' got the question do I love the TV show Rick and Morty [right].');
// } else if (questionFour === 'no' || questionFour === 'n') {
//   alert('No ' + userName + ' you are so wrong!');
//   console.log('The user ' + userName + ' got the question do I love the TV show Rick and Morty [wrong].');
// }
//
// var questionFive = prompt('Do I plan on visiting Somalia?').toLowerCase();
// if (questionFive === 'yes' || questionFive === 'y') {
//   alert('No ' + userName + ' you were wrong, unless they get a Starbucks');
//   console.log(userName + ' got the Do I plan on visiting Somalia question [wrong].')
// } else if (questionFive === 'no' || questionFive === 'n') {
//   alert('Yes ' + userName + ' you got it right.')
//   console.log(userName + ' got the Do I plan on visiting Somalia question [right].')
// } else {
//   alert('Wrong input refresh and try again!');
//   console.log('Wrong input refresh and try again');
// }

var numToGuess = 6;
var count = 4;
while (count > 0) {
  var questionSix = parseInt(prompt('Choose a number from 1 - 10'));
  if (questionSix === numToGuess) {
      alert('You got it');
      break;
    } else {
      if (count === 1) {
        alert('sorry you lost');
        console.log('the user chose ' + questionSix + ' and lost');
        break;
      } else if (questionSix > numToGuess) {
        alert('to high');
        console.log('the user chose ' + questionSix + ' and was to high');
        count--;
      } else if (questionSix < numToGuess) {
        alert('to low');
        console.log('the user chose ' + questionSix + ' and was to low');
        count--;
    }
  }
}

var tries = 6;
var myArray = ['lexus', 'porsche', 'audi'];
var slick = true;
for (;tries > 0;) {
  var answerToQuestion = prompt('What brands of car do I want?').toLowerCase();
  if (tries === 1) {
    alert('Sorry you lost the options were Lexus, Porsche and Audi!');
    break;
  } else {
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
      console.log(tries);
      tries--;
    }
  }
}
if (slick === false) {
  alert('Wow, how did you know? \nThe options were Lexus, Porsche and Audi!');
}
