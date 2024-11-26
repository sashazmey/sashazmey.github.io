var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "Z:/web-project/test-site/images/charge.png") {
    myImage.setAttribute("src", "Z:/web-project/test-site/images/dead.png");
  } else {
    myImage.setAttribute("src", "Z:/web-project/test-site/images/charge.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
  
function setUserName() {
  var myName = prompt("name meat");
  localStorage.setItem("name", myName);
  myHeading.textContent = "warr iz cul, lil " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "warr iz cul, lil " + storedName;
}

myButton.onclick = function () {
  setUserName();
};