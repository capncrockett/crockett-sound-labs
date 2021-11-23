let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/screenshot.jpg") {
    myImage.setAttribute("src", "images/Banjo-shred-480x532.jpg");
  } else {
    myImage.setAttribute("src", "images/screenshot.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
