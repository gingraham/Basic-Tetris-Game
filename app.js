document.addEventListener('DOMContentLoaded', ()=>{  

    //Build the Game Grid
    for(var i=0; i< 200; i++){
        const div = document.createElement('div');
        const grid = document.querySelector('.grid')
        grid.appendChild(div);
    }


    
}, false);
