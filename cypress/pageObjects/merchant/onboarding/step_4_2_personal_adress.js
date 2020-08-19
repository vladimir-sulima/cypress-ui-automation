//#region Imports
///<reference types="Cypress"/>
//#endregion

//#region Locators
let homePostcode_InpField = "//input[@id='owner-primary-address-input-homepostcode']";
let addressLine1_InputField = "//input[@id='owner-primary-address-input-addressline1']";
let addressLine2_InputField = "//input[@id='owner-primary-address-input-addressline2']";
let townCity_InputField = "//input[@id='owner-primary-address-input-city']";
let country_InputField = "//input[@id='owner-primary-address-input-country']";
//#endregion
class step_4_2_personal_adress {
    //#region Click actions
    //#endregion

    //#region Set actions
    set_HomePostcode_InputField(homePostcode) {
        cy.server();
        cy.route('GET', '/postcodes/*').as('getPostcodes');

        let inputField = cy.xpath(homePostcode_InpField);
        inputField.type(homePostcode);

        cy.wait('@getPostcodes');
    }
    set_AddressLine1_InputField(addressLine1) {
        let inputField = cy.xpath(addressLine1_InputField);
        inputField.type(addressLine1);
    }
    set_AddressLine2_InputField(addressLine2) {
        let inputField = cy.xpath(addressLine2_InputField);
        inputField.type(addressLine2);
    }
    set_TownCity_InputField(townCity) {
        let inputField = cy.xpath(townCity_InputField);
        inputField.type(townCity);
    }
    set_Country_InputField(country) {
        let inputField = cy.xpath(country_InputField);
        inputField.type(country);
    }
    //#endregion

    //#region Check actions
    check_HomePostcode_InputField_Displayed() {
        let inputField = cy.xpath(homePostcode_InpField);
        inputField.should('be.visible');
    }
    check_AddressLine1_InputField_Displayed() {
        let inputField = cy.xpath(addressLine1_InputField);
        inputField.should('be.visible');
    }
    check_AddressLine2_InputField_Displayed() {
        let inputField = cy.xpath(addressLine2_InputField);
        inputField.should('be.visible');
    }
    check_TownCity_InputField_Displayed() {
        let inputField = cy.xpath(townCity_InputField);
        inputField.should('be.visible');
    }
    check_Country_InputField_Displayed() {
        let inputField = cy.xpath(country_InputField);
        inputField.should('be.visible');
    }
    //#endregion
}
export default step_4_2_personal_adress;
export const step_4_2_PersonalAdress_Page = new step_4_2_personal_adress()