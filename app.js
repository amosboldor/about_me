"use strict";

var userName = prompt('What is your first name?');
console.log('The user\'s name is: ' + userName);
alert('Hello ' + userName + ' and welcome to my about me webpage but first here is a quick game to ge to know me.');

var questionOne = prompt('Do I have hazelnut eyes? (yes or no)').toLowerCase();
if (questionOne === 'yes') {
  alert('Yes ' + userName + ' you got it right!');
  console.log(userName + ' got the do I have hazelnut eyes question [right].');
} else if (questionOne === 'no') {
  alert('Sorry ' + userName + ' you got it wrong!');
  console.log(userName + ' got the do I have hazelnut eyes question [wrong].');
} else {
  alert('Wrong input refresh and try again!');
  console.log('Wrong input refresh and try again!');
}


var questionTwo = prompt('Do I love Seattle? (yes or no)').toLowerCase();
if (questionTwo === 'yes') {
  alert('Yes ' + userName + ' how did you know!');
  console.log(userName + ' got the do I love Seattle question [right].');
} else if (questionTwo === 'no') {
  alert('Sorry ' + userName + ' you got it wrong, Seattle is AWESOME!');
  console.log(userName + ' got the do I love Seattle question [wrong].');
} else {
  alert('Wrong input refresh and try again!');
  console.log('Wrong input refresh and try again');
}

var questionThree = prompt('Do I enjoy kale? (yes or no)').toLowerCase();
if (questionThree === 'yes') {
  alert('No ' + ' I do not enjoy kale!');
  console.log(userName + 'got the do I enjoy kale question [wrong].');
} else if (questionThree === 'no') {
  alert('Yes ' + userName + ' you got it [right]. \n KALE SUCKS');
  console.log(userName + ' got the do I enjoy kale question [right].');
} else {
  alert('Wrong input refresh and try again!');
  console.log('Wrong input refresh and try again!');
}

var questionFour = prompt('Do I love the TV show Rick and Morty? (yes or no)').toLowerCase();
if (questionFour === 'yes') {
  alert('Yes ' + userName + ' you got it right\n HAIL RICK AND MORTY');
  console.log(userName + ' got the question do I love the TV show Rick and Morty [right].');
} else if (questionFour === 'no') {
  alert('No ' + userName + ' you are so wrong!');
  console.log('The user ' + userName + ' got the question do I love the TV show Rick and Morty [wrong].');
}

var questionFive = prompt('Do I plan on visiting Somalia? (yes or no)').toLowerCase();
if (questionFive === 'yes') {
  alert('No ' + userName + ' you were wrong, unless they get a Starbucks');
  console.log(userName + ' got the Do I plan on visiting Somalia question [wrong].')
} else if (questionFive === 'no') {
  alert('Yes ' + userName + ' you got it right.')
  console.log(userName + ' got the Do I plan on visiting Somalia question [right].')
} else {
  alert('Wrong input refresh and try again!');
  console.log('Wrong input refresh and try again');
}
