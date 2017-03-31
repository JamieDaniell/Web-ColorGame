var numSquares = 6;
var colors = generateRandomColors(numSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0 ; i < squares.length ; i++)
	{
		if(colors[i])
		{
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
		// add intial colors to squares
		
	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0 ; i < squares.length ; i++)
	{
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";		
	}
})

resetButton.addEventListener("click", function(){
	// generate all new colors 
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	// change color display to match picked color 
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0 ; i < squares.length ; i++)
	{
		// add intial colors to squares
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";

})


for(var i = 0 ; i < squares.length ; i++)
{
	// add intial colors to squares
	squares[i].style.background = colors[i];

	// add listeners to squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		else 
		{
			this .style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color)
{
	//loop through all squares to all the same color
	for(var i = 0; i < squares.length ; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	//make an array
	var arr = []
	// add rnadom numbers 
	for(var i = 0; i < num ; i++)
	{
		//get random color 
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	//make a red from 0 to 255 
	var r = Math.floor(Math.random() * 256);
	//make a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//make blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}








