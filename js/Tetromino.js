class Tetromino {

    constructor(squares, position, rotation) {
        this.squares = squares;
        this.currentPosition = position;
        this.currentRotation = rotation;
        this.randomTetromino = this.numberTetrominosRandom();
        this.nextRandomTetromino = 0;
        this.currentTetromino = theTetrominoes[this.randomTetromino][this.currentRotation];
        this.score = 0;
        this.colors = [' #35e6dd', 'white', ' red', '#cf40c3', 'blue']
    }

    draw() {
        this.currentTetromino.forEach(index => {
            this.squares[this.currentPosition + index].classList.add('tetromino')
            this.squares[this.currentPosition + index].style.backgroundColor = this.colors[this.randomTetromino]
        })
    }

    undraw() {
        this.currentTetromino.forEach(index => {
            this.squares[this.currentPosition + index].classList.remove('tetromino')
            this.squares[this.currentPosition + index].style.backgroundColor = ''

        })
    }

    freeze() {
        if (this._doesTetrominoContainTaken()) {
            this._arriveAtEndAndCreateAnotherTetromino();
        }
    }

    _doesTetrominoContainTaken() {
        return this.currentTetromino.some(index => this.squares[this.currentPosition + index + width].classList.contains("taken"));
    }

    _arriveAtEndAndCreateAnotherTetromino() {
        this.currentTetromino.forEach(index => this.squares[this.currentPosition + index].classList.add("taken"));
        this.setRandomTetrominos();
        this.setTetromino();
        this.setPosition(4);
        this.showNextTetromino();
        if (!this.canTetrominoMoveDown()) {
            this.draw();
        }
    }

    canTetrominoMoveDown() {
        return this.currentTetromino.some(index => this.squares[4 + index].classList.contains("taken"));
    }

    moveSide(coordinate, moduleValue) {
        this.undraw();

        const isAnEdge = this._isAnEdge(moduleValue);
        if (!isAnEdge) this.changePosition(coordinate);
        if (this._checkIfContainTakenWithoutWidth()) this.changePosition(-coordinate);

        this.draw();
    }

    _isAnEdge(moduleValue) {
        return this.currentTetromino.some(index => (this.currentPosition + index) % width === moduleValue)
    }

    rotate() {
        this.undraw();
        this._checkRotationPossibilities();
        this.draw();
    }

    _checkRotationPossibilities() {
        this.setRotation(this.getRotation() + 1);
        if (this._isRotationEqualToTetrominoLength()) {
            let FIRST_ROTATION = 0;
            this.setRotation(FIRST_ROTATION);
        }
        this.setTetromino();
        if (this._checkIfContainTakenWithoutWidth()) {
            let BACK_ROTATION = this.getRotation() - 1;
            this.setRotation(BACK_ROTATION);
        }

        if (this._isAnEdge(LEFT_EDGE) && this._isAnEdge(RIGHT_EDGE)) {
            let BACK_ROTATION = this.getRotation() - 1;
            this.setRotation(BACK_ROTATION);
        }

        if (this._isRotationOutOfRange()) {
            let LAST_ROTATION = theTetrominoes[this.randomTetromino].length - 1;
            this.setRotation(LAST_ROTATION);
        }
        this.setTetromino();
    }

    _isRotationEqualToTetrominoLength() { return this.currentRotation === this.currentTetromino.length; }

    _checkIfContainTakenWithoutWidth() {
        return this.currentTetromino.some(index =>
            this.squares[this.currentPosition + index].classList.contains("taken"));
    }

    _isRotationOutOfRange() { return this.currentRotation == -1; }

    setTetromino() { this.currentTetromino = theTetrominoes[this.randomTetromino][this.currentRotation]; }
    setRandomTetrominos() {
        this.randomTetromino = this.nextRandomTetromino
        this.nextRandomTetromino = this.numberTetrominosRandom();
    }
    setPosition(position) { this.currentPosition = position; }
    setRotation(rotation) { this.currentRotation = rotation; }
    setSquare(square) { this.squares = square; }
    getPosition() { return this.currentPosition; }
    getRotation() { return this.currentRotation; }
    changePosition(add_value) { this.currentPosition += add_value; }
    numberTetrominosRandom() { return Math.floor(Math.random() * theTetrominoes.length); }

    showNextTetromino() {
        const displaySquare = document.querySelectorAll('.mini-grid div')
        const displayWidth = 4
        let displayIndex = 0

        const upNextTetrominos = [
            [1, displayWidth + 1, displayWidth * 2 + 1, 2],
            [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1],
            [1, displayWidth, displayWidth + 1, displayWidth + 2],
            [0, 1, displayWidth, displayWidth + 1],
            [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1]
        ]

        displaySquare.forEach(square => {
            square.classList.remove('tetromino')
            square.style.backgroundColor = ''
        })

        upNextTetrominos[this.nextRandomTetromino].forEach( index => {
            displaySquare[displayIndex + index].classList.add('tetromino')
            displaySquare[displayIndex + index].style.backgroundColor = this.colors[this.nextRandomTetromino]
        })
    }

}