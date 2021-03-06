const width = 10;

const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width,width+1, width+2,width*2+2],
    [width*2, width*2 +1, width+1, 1],
    [width*2, width*2+1, width*2+2, width]
]

const sTetromino =[
    [width*2, width*2+1,width+1,width+2],
    [0, width,width+1,width*2+1],
    [width*2, width*2+1,width+1,width+2],
    [0, width,width+1,width*2+1]
]

const tTetromino = [
    [1, width,width+1,width+2],
    [1, width+1,width+2,width*2+1],
    [width, width+1,width+2,width*2+1],
    [1, width+1,width,width*2+1]
]

const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
]

const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1, width+2, width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1, width+2, width+3]
]

const theTetrominoes = [lTetromino,sTetromino,tTetromino,oTetromino,iTetromino];
