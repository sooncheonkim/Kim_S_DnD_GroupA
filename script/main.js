// step 1
// variables always go at the top
// these are tje connections that you're making elements on the page
// use CSS selectors to make connection to elements with JavaScript

//create a 1 to 1 connection with a variable(1개의 기능만을 명령할때 querySelector)
// let the Button = document.querySelector("#buttonOne");

// crate a 1 to many connection with variable(여러개를 한번에 한 기능으로 명령할때, querySelectorAll)
let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelectorAll(".puzzle-board");
// let 뒤에 붙이는 이름은 자유롭게 만들어도 되지만 숫자나 기호는 붙이면 안된다. 오직 텍스트만 의미있게 만들어야 함. index에서 붙이는 selector는 네이밍 상관없음

//step 3
// functionality always goed in the middle -> how do we want
// the app to behave?
function changeBGImage() {
	debugger;
	theHeading.textContent = "Super Awesome Drag and drop Game";

	// start with the object, and then change a property
	// or run a method
	theHeading.classList.add('orange-headline');
	let theNewSource = "images/backGround" + this.id + ".jpeg";

	console.log(theNewSource);
}

//step 2
//event handling always goes at the bottom
// how do we want users to interact with our app

// 1 to 1 event headline 
// theButton.addEventListener("click", changeBGImage);

// 1 to many event headlime
theButtons.forEach(button => button.addEventListener("click", changeBGImage));



// 동작이 잘 작동하는지 알아보기 전 디버그로 시험함