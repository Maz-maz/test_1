//Changing of a picture
var myImage = document.querySelector('#pic-change');
var myImageText = document.querySelector('#pic-change-text');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/spyderco_dragonfly_2_and_victorinox_bantam.jpg') {
      myImage.setAttribute ('src','images/spyderco_dragonfly_2-3.jpg');
      myImageText.textContent = 'Spyderco Dragonfly 2';
    } else {
      myImage.setAttribute ('src','images/spyderco_dragonfly_2_and_victorinox_bantam.jpg');
      myImageText.textContent = 'Spyderco Dragonfly 2 and Victorinox Bantam';
    }
}

//Changing of the header
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Please, look at some Spyderco knives, ' + myName;
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Please, look at some Spyderco knives, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}