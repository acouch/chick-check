describe('Check Status', () => {
  it('See if status has changed', () => {
    cy.visit('/');
    cy.get('#tracked-numbers').should('contain', 'Label Created, not yet in system');
    cy.compareSnapshot('usps');
  })
})
