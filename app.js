document.addEventListener('DOMContentLoaded', ()=>{ 
    //Variables 
    const grid = document.querySelector('.grid')
    const width = 10
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector("#startBtn")
    //The Tetromninoes
    const lTetromino=[
        [1,width+1,width*2+1,2],
        [width,width+1,width+2,width*2+2],
        [1,width+1,width*2+1,width*2],
        [width,width*2,width*2+1,width*2+2]
        ]
        const zTetromino=[
        [0,width,width+1,width*2+1],
        [width+1,width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1,width+2,width*2,width*2+1]
        ]
        const tTetromino=[
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
        ]
        const oTetromino=[
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
        ]
        const iTetromino=[
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
        ]
        
      const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

    //Build the Game Grid
    for(var i=0; i< 200; i++){
        const div = document.createElement('div');
        grid.appendChild(div);
    }
    let squares = Array.from(document.querySelectorAll('.grid div'))


    
}, false);
