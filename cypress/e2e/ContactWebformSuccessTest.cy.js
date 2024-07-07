/// <reference types="cypress"/>

it("Success submission of webform", () => {
    // visit page
    cy.visit("https://josephyap9.wixsite.com/qaetestsite")
    // check page header
    cy.get("p").should("contain", "QAE TEST SITE")
    cy.get("h1").should("contain", "TESTING FORM")
    // select the Contact 
    cy.get("p[id='comp-l46gptpv1label']").click();
    // cy.get("p").should("contain", "Contact").click();
  
    // fill all the fields
    // name***
    cy.contains("label", "Name").should("be.visible");
    cy.get("input[placeholder='Enter your name']").should("be.visible");
    cy.get("input[name='name']").type("Sarah Placidas");
  
    // email***
    cy.contains("label", "Email").should("be.visible");
    cy.get("input[placeholder='Enter your email']").should("be.visible");
    cy.get("input[name='email']").type("sarplacidas@gmail.com");

    // subject***
    cy.contains("label", "Subject").should("be.visible");
    cy.get("input[placeholder='Type the subject']").should("be.visible");
    cy.get("input[name='subject']").type("testonly");

    // message***
    cy.contains("label", "Message").should("be.visible");
    cy.get("textarea[placeholder='Type your message here...']").should("be.visible");
    cy.get("textarea[id='textarea_comp-l46hahi6']").type("testonlyagain");

    // Submit button
    cy.get("button[data-testid='buttonElement']").click();

    // Confirmation message after submit the form
    cy.get("button[data-testid='richTextElement']").contains("Thanks for submitting!").should("be.visible");

});