///<reference types="Cypress"/>

//#region Locators
let welcome_Message = "//span[text()='Welcome']";
let logOut_Button = "//span[text()='LogOut']/..";

let merchantEntities_Ddl = "//ul[contains(@class,'merchant-list-container')]";
let selectedMerchant_Ddl = "//div[@class='merchant-list-container_selectedMerchantName__p_htf']";
let createNewMerchant_DdlButton = "//div[text()=' Create New Merchant']";

let onboardMerchant_Button = "//button[@id='onboarding']";

//#endregion

class merchant_home_page {
  //#region Click actions
  click_LogOut_Button() {
    let button = cy.xpath(logOut_Button);
    button.click();
  }
  click_MerchantList_Ddl() {
    let ddl = cy.xpath(merchantEntities_Ddl);
    ddl.click();
  }
  click_CreateMerchant_DdlButton() {
    let button = cy.xpath(createNewMerchant_DdlButton);
    button.click();
  }
  click_OnboardMerchant_Button() {
    cy.server();
    cy.route('GET', 'qa/api/v1/merchants/*').as('getMerchants');
    cy.route('GET', 'qa/api/v1/merchants/get/*/onboarding/*').as('getOnboardingForm');

    let button = cy.xpath(onboardMerchant_Button);
    button.click();

    cy.wait('@getMerchants');
    cy.wait('@getOnboardingForm');
  }
  //#endregion

  //#endregion Set actions
  //#endregion

  //#region Check actions
  check_WelcomeMessage_Displayed() {
    cy.xpath(welcome_Message).should("be.visible");
  }

  check_MerchantSelectedInDdl(expectedSelectedMerchantName) {
    cy.xpath(selectedMerchant_Ddl).should("contain.text", expectedSelectedMerchantName);
  }

  //#endregion
  //#region Other actions
  //#endregion
}

export default merchant_home_page;
export const merchant_HomePage = new merchant_home_page()