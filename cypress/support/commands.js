
Cypress.Commands.add('findByPlaceholder', (placeholder) => {
  cy.get(`[placeholder = "${placeholder}"]`)
});

Cypress.Commands.add('logIn', () => {
  const user = {email:'olha.stelmakh.it+1@gmail.com',
  password: 'Qwerty!!!123'
};

  cy.contains('Log in').click({force:true});

  cy.get('.nav-opener').click({force:true});

  cy.get('.navbar').contains('Log in').click({force:true});

  cy.get('#login-email').click({force:true}).type(user.email);

  cy.findByPlaceholder('enter your password').type(user.password);

  cy.get('.btn-primary').contains('Log in').click();
});
