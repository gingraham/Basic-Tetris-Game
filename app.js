document.addEventListener(
  "DOMContentLoaded",
  () => {
    document.addEventListener("keyup", control);
    //Variables
    const grid = document.querySelector(".grid");
    const width = 10;
    const ScoreDisplay = document.querySelector("#score");
    const StartBtn = document.querySelector("#startBtn");
    //The Tetromninoes
    const lTetromino = [
      [1, width + 1, width * 2 + 1, 2],
      [width, width + 1, width + 2, width * 2 + 2],
      [1, width + 1, width * 2 + 1, width * 2],
      [width, width * 2, width * 2 + 1, width * 2 + 2],
    ];
    const zTetromino = [
      [0, width, width + 1, width * 2 + 1],
      [width + 1, width + 2, width * 2, width * 2 + 1],
      [0, width, width + 1, width * 2 + 1],
      [width + 1, width + 2, width * 2, width * 2 + 1],
    ];
    const tTetromino = [
      [1, width, width + 1, width + 2],
      [1, width + 1, width + 2, width * 2 + 1],
      [width, width + 1, width + 2, width * 2 + 1],
      [1, width, width + 1, width * 2 + 1],
    ];
    const oTetromino = [
      [0, 1, width, width + 1],
      [0, 1, width, width + 1],
      [0, 1, width, width + 1],
      [0, 1, width, width + 1],
    ];
    const iTetromino = [
      [1, width + 1, width * 2 + 1, width * 3 + 1],
      [width, width + 1, width + 2, width + 3],
      [1, width + 1, width * 2 + 1, width * 3 + 1],
      [width, width + 1, width + 2, width + 3],
    ];

    const theTetrominoes = [
      lTetromino,
      zTetromino,
      tTetromino,
      oTetromino,
      iTetromino,
    ];
    let currentPosition = 4;
    let currentRotation = 0;
    //Randomly Select a Tetromino and its first position
    let random = Math.floor(Math.random() * theTetrominoes.length);
    let current = theTetrominoes[random][currentRotation];
    //Build the Game Grid
    for (var i = 0; i < 200; i++) {
      const div = document.createElement("div");
      grid.appendChild(div);
    }
    function takenGrid() {
      for (var i = 0; i < 10; i++) {
        const divTaken = document.createElement("div");
        divTaken.classList.add("taken");
        grid.appendChild(divTaken);
      }
    }
    takenGrid();

    let squares = Array.from(document.querySelectorAll(".grid div"));

    //Draw the Tetromino
    function draw() {
      current.forEach((index) => {
        squares[currentPosition + index].classList.add("tetromino");
      });
    }

    //undras the Tetromino
    function undraw() {
      current.forEach((index) => {
        squares[currentPosition + index].classList.remove("tetromino");
      });
    }

    //make the tromino move down every second
    timerID = setInterval(moveDown, 1000);

    //assign functions to keyCodes
    function control(e) {
      if (e.keyCode === 39) moveright();
      else if (e.keyCode === 38) rotate();
      else if (e.keyCode === 37) moveleft();
      else if (e.keyCode === 40) moveDown();
    }

    // the classical behavior is to speed up the block if down button is kept pressed so doing that
    document.addEventListener("keydown", control);
    //move down function
    function moveDown() {
      undraw();
      currentPosition = currentPosition += width;
      draw();
      freeze();
    }
    //Move the tetromino left, unsless is at edge of blockage
    function moveleft() {
      undraw();
      const isAtLeftEdge = current.some(
        (index) => (currentPosition + index) % width === 0
      );
      if (!isAtLeftEdge) currentPosition -= 1;
      if (
        current.some((index) =>
          squares[currentPosition + index].classList.contains("taken")
        )
      ) {
        currentPosition += 1;
      }
      draw();
    }

    //Move the tetromino right, unless is at right block edge

    function moveright() {
      undraw();
      const isAtRightEdge = current.some(
        (index) => (currentPosition + index) % width === width - 1
      );
      if (!isAtRightEdge) currentPosition += 1;
      if (
        current.some((index) =>
          squares[currentPosition + index].classList.contains("taken")
        )
      ) {
        currentPosition -= 1;
      }
      draw();
    }

    //Freez Function
    function freeze() {
      if (
        current.some((index) =>
          squares[currentPosition + index + width].classList.contains("taken")
        )
      ) {
        current.forEach((index) =>
          squares[currentPosition + index].classList.add("taken")
        );
        //start a new tetromino falling
        random = Math.floor(Math.random() * theTetrominoes.length);
        current = theTetrominoes[random][currentRotation];
        currentPosition = 4;
        draw();
      }
    }
  },
  false
);
