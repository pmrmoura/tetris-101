context('Features', () => {
  beforeEach(() => {
    cy
      .visit('https://pmrmoura.github.io/tetris-101/')
    cy
      .get('#start-tetris-game').click();
  })

  it('Score text', () => {
    for (let i = 0; i < 5; i++) {
      cy
        .get('body').type('{downarrow}');
    }
    
    for (let i = 0; i < 80; i++) {
      cy
        .get('body').type('{downarrow}');
    }
    
    cy
      .get('#score').should('have.text', '0');
  })

  it('Start text', ()=>{
    cy.get('#start-tetris-game').contains('Start')
  })

  it('Clear text', ()=>{
    cy.get('#clear-tetris-game').contains('Clear')
  })

  it('Test if squares are being shown', () => {
    cy
      .get('.grid-tetris')
      .find('.square')
      .should(($square) => {
        if (!$square) {
          throw new Error('Square not found')
        }
      })
  })
})