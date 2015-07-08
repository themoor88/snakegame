$(document).ready(function(){
  // Initiate the canvas
  var canvas = $("#canvas")[0];
  var ctx = canvas.getContext("2d");
  var w = $("#canvas").width();
  var h = $("#canvas").height();

  // Painting the canvas
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "black";
  ctx.strokeRect(0, 0, w, h);

  var snakeArray = [];

  // Let's start the game
  initiateGame();
  function initiateGame() {
    drawSnake();
    paintSnake();
  }

  // Drawing the snake
  function drawSnake() {
    var snakeLength = 5;

    // Using a for loop to push x and y coordinates
    for (var i = snakeLength - 1; i >= 0; i--) {
      snakeArray.push({x: i, y: 0})
    };
  }

  function paintSnake() {
    // The cell width of each square
    var cw = 10;

    // A for loop to render blue squares for each element in the snakeArray
    for (var i = 0; i < snakeArray.length; i++) {
      var cell = snakeArray[i];

      ctx.fillStyle = "blue";
      ctx.fillRect(cell.x * cw, cell.y * cw, cw, cw);
      ctx.strokeStyle = "white";
      ctx.strokeRect(cell.x * cw, cell.y * cw, cw, cw)
    };
  }


});