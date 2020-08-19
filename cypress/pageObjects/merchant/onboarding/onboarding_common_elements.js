//#region Imports
///<reference types="Cypress"/>
//#endregion

//#region Locators
let next_Button = "(//span[text()='Next']/..)[1]";

let nameAndAddress_NavigationMenuButton = "//span[text()='Name and address']/../../..";
let businessDetails_NavigationMenuButton = "//span[text()='Business details']/../../..";
let tradingAddress_NavigationMenuButton = "//span[text()='Trading Address']/../../..";
let ownerDetails_NavigationMenuButton = "//span[text()='Owner details']/../../../../button";
let businessProfile_NavigationMenuButton = "//span[text()='Business profile']/../../..";
let transactionProfile_NavigationMenuButton = "//span[text()='Transaction profile']/../../..";
let productRequired_NavigationMenuButton = "//span[text()='Products required']/../../..";
let uploadDocuments_NavigationMenuButton = "//span[text()='Upload documents']/../../..";

//#endregion
class onboarding_common_elements {

    //#region Click actions
    click_Next_Button() {
        let button = cy.xpath(next_Button);
        button.click();
    }
    click_Step1_NameAndAddress_NavigationMenu() {
        let button = cy.xpath(nameAndAddress_NavigationMenuButton);
        button.click();
    }
    click_Step2_BusinessDetails_NavigationMenu() {
        let button = cy.xpath(businessDetails_NavigationMenuButton);
        button.click();
    }
    click_Step3_TradingAddress_NavigationMenu() {
        let button = cy.xpath(tradingAddress_NavigationMenuButton);
        button.click();
    }
    click_Step4_OwnerDetails_NavigationMenu() {
        let button = cy.xpath(ownerDetails_NavigationMenuButton);
        button.click();
    }
    click_Step5_BusinessProfile_NavigationMenu() {
        let button = cy.xpath(businessProfile_NavigationMenuButton);
        button.click();
    }
    click_Step6_TransactionProfile_NavigationMenu() {
        let button = cy.xpath(transactionProfile_NavigationMenuButton);
        button.click();
    }
    click_Step7_ProductRequired_NavigationMenu() {
        let button = cy.xpath(productRequired_NavigationMenuButton);
        button.click();
    }
    click_Step8_UploadDocuments_NavigationMenu() {
        let button = cy.xpath(uploadDocuments_NavigationMenuButton);
        button.click();
    }
    //#endregion

    //#region Set actions
    //#endregion

    //#region Check actions
    check_Next_ButtonStatus(shouldButtonBeEnabled = false) {

        let button = cy.xpath(next_Button);

        if (shouldButtonBeEnabled) {
            button.should('be.enabled');
        }
        else {
            button.should('be.disabled');
        }
    }
    //#endregion
}

export default onboarding_common_elements;
export const onboarding_CommonElements = new onboarding_common_elements()