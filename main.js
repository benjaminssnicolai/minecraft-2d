var canvas = new fabric.Canvas('myCanvas');

playerX = 150;
playerY = 150;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject= "";
var blockImageObject= "";

function playerUpdate()
{
	fabric.Image.fromURL("player.png", function(Img) {
	playerObject = Img;

	playerObject.scaleToWidth(150);
	playerObject.scaleToHeight(140);
	playerObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(playerObject);

	});
}

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(blockImageObject);

	});

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '83')
	{
		down();
		console.log("baixo");
	}
    if(keyPressed == '87')
	{
		up();
		console.log("cima");
	}
    if(keyPressed == '68')
	{
		right();
		console.log("direita");
	}
    if(keyPressed == '65')
	{
		left();
		console.log("esquerda");
	}
    if(keyPressed == "71"){
        newImage("ground.png")
    }
    if(keyPressed == "76"){
        newImage("roof.jpg")
    }   
	if(keyPressed == "101"){
		document.getElementById("lembranças").innerHTML = <iframe width="885" height="498" src="https://www.youtube.com/embed/uC7_43P-Ii0" title="benjamin trailer (ultra secreto)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
}

function down()
{
	if(playerY <=500)
	{
		playerY = playerY + blockImageHeight;
		console.log("altura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional Baixo for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function up()
{
	if(playerY => 500)
	{
		playerY = playerY - blockImageHeight;
		console.log("altura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional Baixo for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}
function right()
{
	if(playerX <= 850)
	{
		playerX = playerX + blockImageWidth;
		console.log("altura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional Baixo for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}
function left()
{
	if(playerX > 0)
	{
		playerX = playerX - blockImageWidth;
		console.log("altura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional Baixo for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}
