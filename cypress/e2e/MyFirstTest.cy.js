describe('My First Cypress Test', function() {
    it('Visits the ToolsQA Demo Page and check the menu items', function() {
    //Visit the Demo QA Website
    cy.visit("https://www.saucedemo.com/");
    cy.wait(5000);
})

;
it('Visits the ToolsQA Demo Page and check the menu items', function() {

    cy.get('#username').type('standard_user{enter}');
    cy.get('#password').type('secret_sauce{enter}');
    cy.get('#login-button').click();


})

})