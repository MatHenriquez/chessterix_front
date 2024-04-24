describe('Landing Page', () => {
  describe('Rendering', () => {
    it('should display the landing page', () => {
      cy.visit('/');
      cy.get('[data-cy=landing-container]').should('exist');
    });

    it('should display the welcome message', () => {
      cy.visit('/');
      cy.get('[data-cy=welcome-message]')
        .should('exist')
        .should('have.text', 'Welcome to Chessterix');
    });

    it('should display the sign in button', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-in-button]')
        .should('exist')
        .should('have.text', 'Sing In');
    });

    it('should display the sign up button', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-up-button]')
        .should('exist')
        .should('have.text', 'Sing Up');
    });

    it('should display the guest link', () => {
      cy.visit('/');
      cy.get('[data-cy=guest-link]')
        .should('exist')
        .should('have.text', 'Continue as a guest');
    });
  });

  describe('Sign In', () => {
    it('should open the login modal when clicking the sign in button', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-in-button]').click();
      cy.get('[data-cy=login-modal]').should('exist');
    });

    it('should close the login modal when clicking the close button', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-in-button]').click();
      cy.get('[data-cy=login-modal]').should('exist');
      cy.get('[data-cy=close-login-modal]').click();
      cy.get('[data-cy=login-modal]').should('not.exist');
    });

    it('should display an error message when submitting an empty form', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-in-button]').click();
      cy.get('[data-cy=login-modal]').should('exist');
      cy.get('[data-cy=submit-login]').click();
      cy.get('[data-cy=password-error]').should('exist');
      cy.get('[data-cy=email-error]').should('exist');
    });

    it('should display an error message when submitting an invalid email', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-in-button]').click();
      cy.get('[data-cy=login-modal]').should('exist');
      cy.get('[data-cy=email-input]').type('invalid-email');
      cy.get('[data-cy=submit-login]').click();
      cy.get('[data-cy=email-error]')
        .should('exist')
        .should('have.text', '*Invalid email address');
    });

    it('should display an error message when submitting an invalid password', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-in-button]').click();
      cy.get('[data-cy=login-modal]').should('exist');
      cy.get('[data-cy=password-input]').type('123');
      cy.get('[data-cy=submit-login]').click();
      cy.get('[data-cy=password-error]')
        .should('exist')
        .should('have.text', '*Password must be at least 8 characters');
    });

    it('should not display an error message when submitting a valid form', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-in-button]').click();
      cy.get('[data-cy=login-modal]').should('exist');
      cy.get('[data-cy=email-input]').type('mail@mail.com');
      cy.get('[data-cy=password-input]').type('password123');
      cy.get('[data-cy=submit-login]').click();
    });
  });

  describe('Sign Up', () => {
    it('should open the sign up modal when clicking the sign up button', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-up-button]').click();
      cy.get('[data-cy=sign-up-modal]').should('exist');
    });

    it('should close the sign up modal when clicking the close button', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-up-button]').click();
      cy.get('[data-cy=sign-up-modal]').should('exist');
      cy.get('[data-cy=close-sign-up-modal]').click();
      cy.get('[data-cy=sign-up-modal]').should('not.exist');
    });

    it('should display an error message when submitting an empty form', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-up-button]').click();
      cy.get('[data-cy=sign-up-modal]').should('exist');
      cy.get('[data-cy=submit-sign-up]').click();
      cy.get('[data-cy=password-error]').should('exist');
      cy.get('[data-cy=email-error]').should('exist');
      cy.get('[data-cy=repeat-password-error]').should('exist');
    });

    it('should display an error message when submitting an invalid email', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-up-button]').click();
      cy.get('[data-cy=sign-up-modal]').should('exist');
      cy.get('[data-cy=email-input]').type('invalid-email');
      cy.get('[data-cy=submit-sign-up]').click();
      cy.get('[data-cy=email-error]')
        .should('exist')
        .should('have.text', '*Invalid email address');
    });

    it('should display an error message when submitting an invalid password', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-up-button]').click();
      cy.get('[data-cy=sign-up-modal]').should('exist');
      cy.get('[data-cy=password-input]').type('123');
      cy.get('[data-cy=submit-sign-up]').click();
      cy.get('[data-cy=password-error]')
        .should('exist')
        .should('have.text', '*Password must be at least 8 characters');
    });

    it('should display an error message when the passwords do not match', () => {
      cy.visit('/');
      cy.get('[data-cy=sign-up-button]').click();
      cy.get('[data-cy=sign-up-modal]').should('exist');
      cy.get('[data-cy=password-input]').type('password123');
      cy.get('[data-cy=repeat-password-input]').type('password1234');
      cy.get('[data-cy=submit-sign-up]').click();
      cy.get('[data-cy=repeat-password-error]')
        .should('exist')
        .should('have.text', '*Passwords do not match');
    });
  });
});
