// When the user chooses one of the channel buttons, change the src attribute of the img inside the .tv-show div
// You should write a single function to change the channel that accepts a single input, the channel number, and uses a conditional statement to change the TV to the image specific to that channel.
// When you set up your event listeners for the buttons, the callback function should call upon that change channel function
// Use a conditional statement to evaluate which channel they've chosen, so you can set a specific image for each channel
// Feel free to look up and use any images of your choice and include them in your conditional statement!

// Image files
/*
1-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg

2-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg

3-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg

4-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg

5-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg

6-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg

7-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg

8-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg

9-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg
*/

// Variables
// 1 - get channel from the remote
// 2 - get the screen and change in the image in there

// Pseudo-code
// Variable1, listen to it for a click
// function() {Listener would update the image in the screen}



let btn1 = document.getElementById('one');
let btn2 = document.getElementById('two');
let btn3 = document.getElementById('three');
let btn4 = document.getElementById('four');
let btn5 = document.getElementById('five');
let btn6 = document.getElementById('six');
let btn7 = document.getElementById('seven');
let btn8 = document.getElementById('eight');
let btn9 = document.getElementById('nine');

let img = document.getElementById('imgShow');


btn1.addEventListener("click", () => {
    img.setAttribute('src','https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg');
});

btn2.addEventListener("click", () => {
    img.setAttribute('src','https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg');
})

btn3.addEventListener("click", () => {
    img.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg";
})

btn4.addEventListener("click", () => {
    img.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg";
})

btn5.addEventListener("click", () => {
    img.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg";
})

btn6.addEventListener("click", () => {
    img.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg";
})

btn7.addEventListener("click", () => {
    img.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg";
})

btn8.addEventListener("click", () => {
    img.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg";
})

btn9.addEventListener("click", () => {
    img.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg";
})