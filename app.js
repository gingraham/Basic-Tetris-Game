document.addEventListener('DOMContentLoaded', ()=>{  
    
    //Build the Game Grid
    for(var i=0; i< 200;i++){
        const div = document.createElement('div');
        const gridContainer = document.querySelector('#gridContainer')
        gridContainer.appendChild(div);
    }


    
}, false);
