//#region Imports
///<reference types="Cypress"/>
//#endregion

//#region Locators
let legalEntity_InputField = "//*[@id='business-type']";
let registeredNumber_InputField = "#registered-number";
let vatNumber_InputField = "#vat-number";
let legalName_InputField = "#legal-name";
let tradingName_InputField = "#trading-name";
let telephoneNumber_InputField = "#telephone-number";
let webSiteUrl_InputField = "#website";

//#endregion
class step_2_business_details_page {

    //#region Click actions
    //#endregion

    //#region Set actions
    select_LegalEntity_InputField(legalEntity) {
        let inputField = cy.xpath(legalEntity_InputField);
        inputField.select(legalEntity);
    }
    set_RegisteredNumber_InputField(registeredNumber) {
        let inputField = cy.get(registeredNumber_InputField);
        inputField.type(registeredNumber);
    }
    set_VatNumber_InputField(vatNumber) {
        let inputField = cy.get(vatNumber_InputField);
        inputField.type(vatNumber);
    }
    set_LegalName_InputField(legalName) {
        let inputField = cy.get(legalName_InputField);
        inputField.type(legalName)
    }
    set_TradingName_InputField(tradingName) {
        let inputField = cy.get(tradingName_InputField);
        inputField.type(tradingName)
    }

    set_TelephoneNumber_InputField(telephoneNumber) {
        let inputField = cy.get(telephoneNumber_InputField);
        inputField.type(telephoneNumber)
    }
    set_WebSiteUrl_InputField(webSiteUrl) {
        let inputField = cy.get(webSiteUrl_InputField);
        inputField.type(webSiteUrl)
    }
    //#endregion

    //#region Check actions
    check_LegalEntity_InputField_Displayed() {

        let inputField = cy.xpath(legalEntity_InputField);
        inputField.should('be.visible');
    }
    check_RegisteredNumber_InputField_Displayed() {

        let inputField = cy.get(registeredNumber_InputField);
        inputField.should('be.visible');
    }
    check_VatNumber_InputField_Displayed() {

        let inputField = cy.get(vatNumber_InputField);
        inputField.should('be.visible');
    }
    check_LegalName_InputField_Displayed() {

        let inputField = cy.get(legalName_InputField);
        inputField.should('be.visible');
    }
    check_TradingName_InputField_Displayed() {

        let inputField = cy.get(tradingName_InputField);
        inputField.should('be.visible');
    }
    check_TelephoneNumber_InputField_Displayed() {

        let inputField = cy.get(telephoneNumber_InputField);
        inputField.should('be.visible');
    }
    check_WebSiteUrl_InputField_Displayed() {

        let inputField = cy.get(webSiteUrl_InputField);
        inputField.should('be.visible');
    }
    check_Title_LegalEntity_AvailableValues(expectedTitleValues) {
        let availableOptions = cy.xpath(`${legalEntity_InputField}/option`);

        availableOptions.should(($actualValues) => {
            expect($actualValues).to.have.length(expectedTitleValues.length)
        })
        availableOptions.each(($val) => {
            expect(expectedTitleValues).to.contains($val.text())
        })
    }

    //#endregion
}
export default step_2_business_details_page;
export const step_2_BusinessDetails_Page = new step_2_business_details_page()