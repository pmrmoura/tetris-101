context('UITestes', () => {
  beforeEach(() => {
    cy.
      visit('https://pmrmoura.github.io/tetris-101/')
  })

  it('Test Title', () => {
    cy.
      title().should('include', 'Tetris Game')
  })

  it('Teste Score rendering', () => {
    cy.
      get('.display-score').should('be.visible')
  })

  it('Test start button rendering', () => {
    cy.
      get('#start-tetris-game').should('be.visible')
  })

  it('Test clear button rendering', () => {
    cy.
      get('#clear-tetris-game').should('be.visible')
  })
})