// Declare variables below to save the different divs of your story.
let storyOpeningScreen = document.querySelector('.story-opening');
let optionOneScreen = document.querySelector('.option-one-screen');
let optionTwoScreen = document.querySelector('.option-two-screen');
let optionThreeEnd = document.querySelector('.option-three-end');
let optionFourEnd = document.querySelector('.option-four-end');
let optionFiveEnd = document.querySelector('.option-five-end');
let optionSixEnd = document.querySelector('.option-six-end');
let optionOneButton = document.querySelector('.option-one');
let optionTwoButton = document.querySelector('.option-two');
let optionThreeButton = document.querySelector('.option-three');
let optionFourButton = document.querySelector('.option-four');
let optionFiveButton = document.querySelector('.option-five');
let optionSixButton = document.querySelector('.option-six');
let restartButton = document.querySelector('.restart');








// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


optionOneButton.addEventListener('click', function(){
optionOneScreen.style.display = "block";
optionThreeButton.style.display = 'block';
optionFourButton.style.display = 'block';
storyOpeningScreen.style.display = 'none';
optionOneButton.style.display = 'none';
optionTwoButton.style.display = 'none';

});

optionTwoButton.addEventListener('click', function(){
optionTwoScreen.style.display = "block";
optionFiveButton.style.display = 'block';
optionSixButton.style.display = 'block';
storyOpeningScreen.style.display = 'none';
optionOneButton.style.display = 'none';
optionTwoButton.style.display = 'none';
});


optionThreeButton.addEventListener('click', function(){
optionOneScreen.style.display = "none";
optionThreeButton.style.display = 'none';
optionFourButton.style.display = 'none';
optionThreeEnd.style.display = 'block';
restartButton.style.display = 'block';
});

optionFourButton.addEventListener('click', function(){
optionOneScreen.style.display = "none";
optionThreeButton.style.display = 'none';
optionFourButton.style.display = 'none';
optionFourEnd.style.display = 'block';
restartButton.style.display = 'block';
});

optionFiveButton.addEventListener('click', function(){
optionTwoScreen.style.display = "none";
optionFiveButton.style.display = 'none';
optionSixButton.style.display = 'none';
optionFiveEnd.style.display = 'block';
restartButton.style.display = 'block';
});

optionSixButton.addEventListener('click', function(){
optionTwoScreen.style.display = "none";
optionFiveButton.style.display = 'none';
optionSixButton.style.display = 'none';
optionSixEnd.style.display = 'block';
restartButton.style.display = 'block';
});

restartButton.addEventListener('click', function(){
storyOpeningScreen.style.display = "block";
optionOneButton.style.display = 'block';
optionTwoButton.style.display = 'block';
optionThreeEnd.style.display = 'none';
optionFourEnd.style.display = 'none';
optionFiveEnd.style.display = 'none';
optionSixEnd.style.display = 'none'
restartButton.style.display = 'none';
});