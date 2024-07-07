/// <reference types="cypress"/>

it("Success submission of webform", () => {
    // visit page
    cy.visit("https://josephyap9.wixsite.com/qaetestsite")
    // check page header
    cy.get("p").should("contain", "QAE TEST SITE")
    cy.get("h1").should("contain", "TESTING FORM")

    // Submit button
    cy.get("button[data-testid='buttonElement']").click();

    // verify the required field
    // name***
    cy.get("input[name='name']") 
    .should('have.attr', 'required');
    cy.get("input[name='name']").should('be.focused');
    // email***
    cy.get("input[name='email']") 
    .should('have.attr', 'required');
    // desired position***
    cy.get('select[data-testid="select-trigger"]') 
    .should('have.attr', 'required');
    // date of availability***
    cy.get("input[placeholder='Select a date']")
    .should('have.attr', 'required');
    // skills***
    cy.get("div[data-testid='label']").contains("Skills").should("be.visible");
    cy.get("div[data-testid='items']");
    cy.get("input[data-testid='input']")
    .eq(0).should('have.attr', 'required'); // manual testing
    cy.get("input[data-testid='input']")
    .eq(1).should('have.attr', 'required'); // api testing
    cy.get("input[data-testid='input']")
    .eq(2).should('have.attr', 'required'); // automated testing
    // Confirmation checkbox to the webform***
    cy.get("label[id='comp-l46hciac1']")
    cy.get("input[data-testid='input']")
    .should('have.attr', 'required');

});