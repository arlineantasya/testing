describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com')
    cy.get('#login2').click()
    cy.get('#loginusername').click().type("alin")
    cy.get('#sign-password').click().type("alin123")
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })
})