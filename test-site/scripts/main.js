const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/nintendo.png") {
    myImage.setAttribute("src", "images/minecraft.png");
  } else {
    myImage.setAttribute("src", "images/nintendo.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
    }
  }
  
  
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}さん、Mozilla はかっこいいよ。`;
  }
  
  myButton.onclick = () => {
    setUserName();
  };
  