//#region Imports
///<reference types="Cypress"/>
//#endregion

//#region Locators
let postode_InputField = "#address-input-post-code";
let addressLine1_InputField = "#address-input-address";
let addressLine2_InputField = "#address-input-address-line-2";
let town_InputField = "#address-input-town-city";
let country_InputField = "#address-input-country";


//#endregion
class step_3_address_page {

    //#region Click actions
    //#endregion

    //#region Set actions
    set_Postode_InputField(postode) {
        let inputField = cy.get(postode_InputField);
        inputField.type(postode);
    }
    set_AddressLine1_InputField(addressLine1) {
        let inputField = cy.get(addressLine1_InputField);
        inputField.type(addressLine1)
    }
    set_AddressLine2_InputField(addressLine2) {
        let inputField = cy.get(addressLine2_InputField);
        inputField.type(addressLine2)
    }
    set_Town_InputField(town) {
        let inputField = cy.get(town_InputField);
        inputField.type(town)
    }
    set_Country_InputField(country) {
        let inputField = cy.get(country_InputField);
        inputField.type(country)
    }


    //#endregion

    //#region Check actions
    check_Postode_InputField_Displayed() {

        let inputField = cy.get(postode_InputField);
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
    check_town_InputField_Displayed() {

        let inputField = cy.get(town_InputField);
        inputField.should('be.visible');
    }
    check_Country_InputField_Displayed() {

        let inputField = cy.get(country_InputField);
        inputField.should('be.visible');
    }


    //#endregion
}
export default step_3_address_page;
export const step_3_Address_Page = new step_3_address_page()