context('Buttons', () => {
    beforeEach(() => {
      cy.visit('https://pmrmoura.github.io/tetris-101/')
    })
  
    it('Testar start', () => {
      cy.get('#start-tetris-game').click()
      cy.get('.grid-tetris div').should('have.class', 'square')
      cy.get('.grid-tetris div').should('have.class', 'tetromino')
      cy.get('.grid-tetris div').should('have.class', 'taken')
      cy.get('.mini-grid div').should('have.class', 'tetromino')
    })
  
    it('Testar clear', ()=>{
      cy.get('#start-tetris-game').click()
      cy.get('#clear-tetris-game').click()
      cy.get('.grid-tetris div').should('not.exist')
      cy.get('.mini-grid div').should('not.have.class', 'tetromino')
    })
    
  })