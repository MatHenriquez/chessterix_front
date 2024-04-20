describe('Landing Page', () => {
  it('should display the landing page', () => {
    cy.visit('/');
    cy.get('[data-cy=landing-container]').should('exist');
  });

  it('should display the title', () => {
    cy.visit('/');
    cy.get('[data-cy=landing-title]').should('exist').should('have.text', "Welcome to");
  });

  it('should display the welcome message', () => {
    cy.visit('/');
    cy.get('[data-cy=welcome-message]').should('exist').should('have.text', 'Chessterix');
  });

  it('should display the sign in button', () => {
    cy.visit('/');
    cy.get('[data-cy=sign-in-button]').should('exist').should('have.text', 'Sing In');
  });

  it('should display the sign up button', () => {
    cy.visit('/');
    cy.get('[data-cy=sign-up-button]').should('exist').should('have.text', 'Sing Up');
  });

  it('should display the guest link', () => {
    cy.visit('/');
    cy.get('[data-cy=guest-link]').should('exist').should('have.text', 'Continue as a guest');
  });
});
