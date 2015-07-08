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

  drawSnake();
  // Drawing the snake
  function drawSnake() {
    var snakeLength = 5;
    var snakeArray = [];

    for (var i = snakeLength - 1; i >= 0; i--) {
      snakeArray.push({x: i, y: 0})
    };
  }
});