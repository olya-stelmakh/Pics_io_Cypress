/// <reference types='cypress' />

describe('Pics.io app', () => {
  const user = {email:'olha.stelmakh.it+1@gmail.com',
  password: 'Qwerty!!!123'
  };
  
  beforeEach(() => {
    cy.visit('/')
    
  });

  it('should provide user to log in and log out', () => {
    
    cy.get('.nav-opener').click({force:true});

    cy.get('.navbar').contains('Log in').click({force:true});

    cy.get('#login-email').type(user.email);

    cy.findByPlaceholder('enter your password')
      .type(user.password);

    cy.get('.btn-primary').contains('Log in').click();

    cy.get('.bottomNavigationButton', {timeout:20000})
      .contains('Settings').click();

    cy.get('.mobileAdditionalPanel-body')
      .contains('Log out').click();

    cy.get('.simpleDialogFooter')
      .contains('Ok').click()
    
  });

  it('should provide user to play video using the “Play” button in the left corner below  ', () => {
    cy.logIn(user);

    cy.wait(2000);

    cy.visit('/preview/63885f0c41e9f500197ae964');

    cy.get('.btnPlayVideo', {timeout:20000}).click();
    
  });

  it('should provide user to play video using the "Play" button on the video', () => {
    cy.logIn(user);

    cy.wait(2000);

    cy.visit('/preview/63885f0c41e9f500197ae964');

    cy.get('.popupPlayVideo', {timeout:10000})
      .click();
    
  });

  it('should provide user to rewind 2sec using "Rewind(Arrow Left)" button on the video', () => {
    cy.logIn(user);

    cy.wait(2000);

    cy.visit('/preview/63885f0c41e9f500197ae964');

    cy.get('[data-testid="actionRewindLeftButton"]', {timeout:20000})
      .click({force:true})
    
  });

  it('should provide user to fast forward by 2sec using "Rewind(Arrow Right)" button on the video', () => {
    cy.logIn(user);

    cy.wait(2000);

    cy.visit('/preview/63885f0c41e9f500197ae964');

    cy.get('[data-testid="actionRewindRightButton"]', {timeout:20000})
      .click({force:true})
    
  });

  it('should provide user to mute and unmute video using the "Mute" button below the video', () => {
    cy.logIn(user);

    cy.wait(10000);

    cy.visit('/preview/63885f0c41e9f500197ae964');

    cy.get('.btnVolumeVideo', {timeout:20000})
      .click({force:true});

    cy.get('.btnVolumeVideo').click();
    
  });

  it('should provide user to create custom thumbnail', () => {
    cy.logIn(user);

    cy.wait(10000);

    cy.visit('/preview/63885f0c41e9f500197ae964');

    cy.get('.btnCreateVideoThumbnail', {timeout:20000})
      .click();

    cy.get('.simpleDialogFooter', {timeout:10000})
      .contains('Create').click()
   
  });

  it('should provide user to watch video in fullscreen mode', () => {
    cy.logIn(user);

    cy.wait(10000);

    cy.visit('/preview/63885f0c41e9f500197ae964');

    cy.get('.btnFullscreenVideo', {timeout:30000}).click();
      
  });
});
