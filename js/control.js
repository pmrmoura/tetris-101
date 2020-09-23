let start = document.querySelector("#start-tetris-game");
let clear = document.querySelector("#clear-tetris-game");
var isplaying = false;

start.addEventListener("click" , (event) => {
    if(!isplaying){
        isplaying = true;
        game = new Game();
    }
})

clear.addEventListener("click", (event) => {
    if(isplaying){
        game.clear();
        isplaying = false;
        game.setScore(0)
        document.querySelector("#score").innerHTML = 0 
    }
})

window.addEventListener("keydown", (event) => { 
    const { key } = event; 

    switch(key){
        case "ArrowLeft":
            return game.moveLeft();
        case "ArrowRight":
            return game.moveRight();
        case "ArrowDown":
            return game.moveDown();
        case " ":
            return game.rotate();    
    }
})


    