//#region Imports
///<reference types="Cypress"/>
//#endregion

//#region Locators
let legalName_InputField = "#name-address-input-legal-name";
let telephoneNumber_InputField = "#name-address-input-telephone-number";
let postCode_InputField = "#name-address-input-post-code";
let addressLine1_InputField = "#name-address-input-address-code-1";
let addressLine2_InputField = "#name-address-input-address-code-2";

//#endregion
class step_1_name_and_address_page {

    //#region Click actions
    //#endregion

    //#region Set actions
    set_LegalName_InputField(legalName) {
        let inputField = cy.get(legalName_InputField);
        inputField.type(legalName);
    }
    set_TelephoneNumber_OnputField(telephoneNumber) {
        let inputField = cy.get(telephoneNumber_InputField);
        inputField.type(telephoneNumber);
    }
    set_PostCode_InputField(postCode) {
        let inputField = cy.get(postCode_InputField);
        inputField.type(postCode);
    }
    set_AddressLine1_InputField(addressLine1) {
        let inputField = cy.get(addressLine1_InputField);
        inputField.type(addressLine1)
    }
    set_AddressLine2_InputField(addressLine2) {
        let inputField = cy.get(addressLine2_InputField);
        inputField.type(addressLine2)
    }
    //#endregion

    //#region Check actions
    check_LegalName_InputField_Displayed() {

        let inputField = cy.get(legalName_InputField);
        inputField.should('be.visible');
    }
    check_TelephoneNumber_InputField_Displayed() {

        let inputField = cy.get(telephoneNumber_InputField);
        inputField.should('be.visible');
    }
    check_PostCode_InputField_Displayed() {

        let inputField = cy.get(postCode_InputField);
        inputField.should('be.visible');
    }
    check_AddressLine1_InputField_Displayed() {

        let inputField = cy.get(addressLine1_InputField);
        inputField.should('be.visible');
    }
    check_AddressLine2_InputField_Displayed() {

        let inputField = cy.get(addressLine2_InputField);
        inputField.should('be.visible');
    }

    //#endregion
}
export default step_1_name_and_address_page;
export const step_1_NameAndAddress_Page = new step_1_name_and_address_page()