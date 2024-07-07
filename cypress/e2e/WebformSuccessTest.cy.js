// test assessment only
/// <reference types="cypress"/>

it("Success submission of webform", () => {
  // visit page
  cy.visit("https://josephyap9.wixsite.com/qaetestsite")
  // check page header
  cy.get("p").should("contain", "QAE TEST SITE")
  cy.get("h1").should("contain", "TESTING FORM")

  // fill all the fields
  // name***
  cy.contains("label", "Name").should("be.visible");
  cy.get("input[placeholder='Enter your name']").should("be.visible");
  cy.get("input[name='name']").type("Sarah Placidas");

  // email***
  cy.contains("label", "Email").should("be.visible");
  cy.get("input[placeholder='Enter your email']").should("be.visible");
  cy.get("input[name='email']").type("sarplacidas@gmail.com");

  // desired position***
  cy.contains("label", "Desired Position").should("be.visible");
  cy.get('[data-testid="select-trigger"]').select("QAE");

  // phone***
  cy.contains("label", "Phone").should("be.visible");
  cy.get("input[placeholder='Enter your phone number']").should("be.visible");
  cy.get("input[name='phone']").type("09774180863");

  // date of availability***
  cy.contains("label", "Date Of Availability").should("be.visible");
  cy.get("input[placeholder='Select a date']").should("be.visible");
  // open the calendar
  cy.get("button[aria-label='Open calendar']").click()
  cy.get("div[class='R8wA83 wixui-date-picker__calendar']").should("be.visible");
  // select a date
  cy.get(':nth-child(2) > :nth-child(1) > button > .XQYxZO').contains('8').click();

  // expected salary***
  cy.contains("label", "Expected Salary").should("be.visible");
  cy.get("input[placeholder='Enter a number']").should("be.visible");
  cy.get("input[name='expected-salary']").type("60000");

  // Years of Experience***
  cy.get("div[data-testid='groupLabel']").contains("Years of Experience").should("be.visible");
  cy.get("div[data-testid='radioGroup']")
  cy.get("div[data-testid='label']").eq(1).click();
  // verify if the selection was selected
  cy.get("div[class='MnMHAd wixui-radio-button-group__input-selection']").should("be.visible")

  // Skills***
  cy.get("div[data-testid='label']").contains("Skills").should("be.visible");
  cy.get("div[data-testid='items']");
  cy.get("input[data-testid='input']")
  .eq(0).click(); // manual testing
  cy.get("input[data-testid='input']")
  .eq(1).click(); // api testing
  cy.get("input[data-testid='input']")
  .eq(2).click(); // automated testing

  // Confirmation checkbox to the webform***
  cy.get("label[data-testid='checkbox']")
  .contains("I have answered the above questions to the best of my availability")
  .should("be.visible")
  .click();

  // Submit button
  cy.get("button[data-testid='buttonElement']").click();

  // Confirmation message after submit the form
  cy.get("button[data-testid='richTextElement']").contains("Thanks for submitting!").should("be.visible");


});
