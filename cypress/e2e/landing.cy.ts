describe('Landing Page', () => {
  it('should display the landing page', () => {
    cy.visit('/');
    cy.get('[alt="Vercel Logo"]');
  });
});
