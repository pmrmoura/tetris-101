context('Movement', () => {
  beforeEach(() => {
    cy
      .visit('https://pmrmoura.github.io/tetris-101/')
    cy
      .get('#start-tetris-game').click();
  })

  it('Move tetromino left command', () => {
    cy.moveLeft()
  })

  it('Move tetromino right command', () => {
    cy.moveRight()
  })

  it('Move left and right random', () =>{
    for (var i = 0; i < 30; i++){
      let side = Math.random();
      if (side > 0.5){
        cy.moveLeft()
      }else{
        cy.moveRight()
      }
    }
  })
})

Cypress.Commands.add('moveLeft', () =>  {
  let x = -1;
  cy
    .get('.square')
    .then(($squareList) => {
      let startCol = -1;

      for (let row = 0; row < 200; row+=10) {
        for (let col = 0; col < 10; col++) {
          if (($squareList[col+row].classList.contains('tetromino')) && !($squareList[col+row].classList.contains('taken'))) {  
            if (startCol > col || startCol === -1) {
              startCol = col
            }
          }
        }
      }
      x = startCol
    })

  cy
    .get('body')
    .type('{leftarrow}');

  cy
    .get('.square')
    .then(($squareList) => {
      let startCol = -1;
      for (let row = 0; row < 200; row+= 10) {

        for (let col = 0; col < 10; col++) {
          if (($squareList[col+row].classList.contains('tetromino')) && !($squareList[col+row].classList.contains('taken'))) {                
            if (startCol > col || startCol === -1) {
              startCol = col
            }
          }
        }
      }
      if ((x % 10 != 0) && ((x-1) >= startCol)){
        expect(startCol).to.equal(x - 1)
      }
    })
})

Cypress.Commands.add('moveRight', () => {
  let x = -1;
  cy
    .get('.square')
    .then(($squareList) => {
      let startCol = -1;

      for (let row = 0; row < 200; row+=10) {
        for (let col = 0; col < 10; col++) {
          if (($squareList[col+row].classList.contains('tetromino')) && !($squareList[col+row].classList.contains('taken'))) {  
            if (startCol < col ) {
              startCol = col
            }
          }
        }
      }
      x = startCol
    })

  cy
    .get('body')
    .type('{rightarrow}');

  cy
    .get('.square')
    .then(($squareList) => {
      let startCol = -1;
      for (let row = 0; row < 200; row+= 10) {

        for (let col = 0; col < 10; col++) {
          if (($squareList[col+row].classList.contains('tetromino')) && !($squareList[col+row].classList.contains('taken'))) {                
            if (startCol < col) {
              startCol = col
            }
          }
        }

      }
      if ((x % 9 != 0) && (x<startCol)){
        expect(startCol).to.equal(x + 1)
      }
    })

})