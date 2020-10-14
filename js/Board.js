
class Board {
    constructor(){
        this.gridTetris = document.querySelector('.grid-tetris')
        this._createBoard();
        this.grid = document.querySelectorAll('.grid-tetris div');
        this.squares = Array.from(this.grid);
        this.tetrominos = new Tetromino(this.squares,4,0);
        this.tetrominos.draw();
        this.score = 0;
        this.tetrominos.showNextTetromino();
    }

    _createBoard(){
        for(let square = 0; square < ROWS*COLUMNS; square++){
            this._createSquareAndInsert();
        }

        for(let square = 0; square < COLUMNS; square++){
            this._createTakenElements();
        }
    }

    _createTakenElements(){
        let squareToInsert = document.createElement("div"); 
        squareToInsert.classList.add("taken");
        this.gridTetris.appendChild(squareToInsert);
    }

    _createSquareAndInsert(){
        let squareToInsert = document.createElement("div");
        squareToInsert.className = "square";
        this.gridTetris.appendChild(squareToInsert);
    }

    moveTetrominoes(add_value){
        this.tetrominos.undraw();
        this.tetrominos.changePosition(add_value);
        this.tetrominos.draw();
        this.tetrominos.freeze();
        this.tryRemoveCompletedRow();
        this.tetrominos.setSquare(this.squares);
    }
    
    tryRemoveCompletedRow(){
        for(let square=0; square<200; square+= 10){
            let row = [square,square+1,square+2,square+3,square+4,square+5,square+6,square+7,square+8,square+9]; 

            if(this._havelAllSquareInLineTaken(row)){
                this._addScore();
                this._removeCompletedLine(row,square);
            }
        }
    }
    
    _havelAllSquareInLineTaken(row){
        return row.every(index => this.squares[index].classList.contains('taken'));
    }

    _addScore(){
        this.score += 10;
        document.querySelector("#score").innerHTML = this.score;
    }
    
    _removeCompletedLine(row,square){
        this._removeTakenAndTetrominosClasses(row);
        this._switchCompletedLine(square);
    }

    _removeTakenAndTetrominosClasses(row){
        row.forEach(index => {
            this.squares[index].classList.remove('taken');
            this.squares[index].classList.remove('tetromino');
            this.squares[index].style.backgroundColor = ''
        });
    }

    _switchCompletedLine(square){
        const squaresRemoved = this.squares.splice(square, 10);
        this.squares = squaresRemoved.concat(this.squares);
        this.squares.forEach(cell => { this.gridTetris.appendChild(cell)})
    }

    isPossiblePlay(){
        return this.tetrominos.canTetrominoMoveDown();
    }
    
    moveLeft(){
        this.tetrominos.moveSide(-1,0);
    }

    moveRight(){
        this.tetrominos.moveSide(1,9)
    }

    rotate(){
        this.tetrominos.rotate();
    }

    clear(){
        let grid = document.querySelector(".grid-tetris");
        while(grid.firstChild){
            grid.removeChild(grid.firstChild);
        }
        const displaySquare = document.querySelectorAll('.mini-grid div')

        displaySquare.forEach(square => {
            square.classList.remove('tetromino')
            square.style.backgroundColor = ''
            square.style.border = ''
        })
    }
}