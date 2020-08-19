//#region Imports
///<reference types="Cypress"/>
//#endregion

//#region Locators
let businessDescription_InputField = ".MuiFormControl-root";
let businessType_InputField = "#business-type";
let timeInBusinessYear_InputField = "#time-in-business-years";
let timeInBusinessMonth_InputField = "#time-in-business-months";
let startUp_ToggleButton = "#is-startup";
let businessProducts_ToggleButton = "#is-business-making-products";
let stockHeld_InputField = "#stock-location";
let sufficientStock_ToggleButton = "#is-stock-sufficient"
let productDescription_InputField = "//label[text()='Product descriptions']/..//input"

//#endregion
class step_5_business_profile_page {

    //#region Click actions
    //#endregion

    //#region Set actions
    set_Business_Description_InputField(businessDescription) {
        let inputField = cy.get(businessDescription_InputField);
        inputField.type(businessDescription + '{downarrow}{enter}');

    }
    set_BusinessType_InputField(businessType) {
        let inputField = cy.get(businessType_InputField);
        inputField.type(businessType);
    }
    set_TimeInBusinessYear_InputField(timeInBusinessYear) {
        let inputField = cy.get(timeInBusinessYear_InputField);
        inputField.type(timeInBusinessYear);
    }
    set_TimeInBusinessMonths_InputField(timeInBusinessMonth) {
        let inputField = cy.get(timeInBusinessMonth_InputField);
        inputField.type(timeInBusinessMonth);
    }
    select_StartUp_ToggleButton(startUp) {
        let toggleButton = cy.get(sufficientStock_ToggleButton);
        cy.xpath("//p[text()='Start-up?']/../..//span[contains(@class,'MuiButtonBase-root')]")
            .then(($btn) => {
                if ($btn.hasClass('Mui-checked')) {
                    if (startUp == false) {
                        toggleButton.click();
                    }
                }
                else {
                    if (startUp == true) {
                        toggleButton.click();
                    }
                }
            })
    }
    select_BusinessProducts_ToggleButton(businessProducts) {
        let toggleButton = cy.get(sufficientStock_ToggleButton);
        cy.xpath("//p[text()='Does your business make products']/../..//span[contains(@class,'MuiButtonBase-root')]")
            .then(($btn) => {
                if ($btn.hasClass('Mui-checked')) {
                    if (businessProducts == false) {
                        toggleButton.click();
                    }
                }
                else {
                    if (businessProducts == true) {
                        toggleButton.click();
                    }
                }
            })
    }
    set_ProductDescription_InputField(productDescription) {
        let inputField = cy.xpath(productDescription_InputField);
        inputField.type(productDescription + '{downarrow}{enter}');

    }
    set_StockHeld_InputField(stockHeld) {
        let inputField = cy.get(stockHeld_InputField);
        inputField.type(stockHeld)
    }
    select_SufficientStock_ToggleButton(sufficientStock) {
        let toggleButton = cy.get(sufficientStock_ToggleButton);
        cy.xpath("//p[text()='Sufficient stock?']/../..//span[contains(@class,'MuiButtonBase-root')]")
            .then(($btn) => {
                if ($btn.hasClass('Mui-checked')) {
                    if (sufficientStock == false) {
                        toggleButton.click();
                    }
                }
                else {
                    if (sufficientStock == true) {
                        toggleButton.click();
                    }
                }
            })
    }
    //#endregion

    //#region Check actions
    check_BusinessDescription_InputField_Displayed() {

        let inputField = cy.get(businessDescription_InputField);
        inputField.should('be.visible');
    }
    check_BusinessType_InputField_Displayed() {

        let inputField = cy.get(businessType_InputField);
        inputField.should('be.visible');
    }
    check_TimeInBusinessYear_InputField_Displayed() {

        let inputField = cy.get(timeInBusinessYear_InputField);
        inputField.should('be.visible');
    }
    check_TimeInBusinessMonth_InputField_Displayed() {

        let inputField = cy.get(timeInBusinessMonth_InputField);
        inputField.should('be.visible');
    }
    check_StartUp_ToggleButton_Displayed() {

        let inputField = cy.get(startUp_ToggleButton);
        inputField.should('be.visible');
    }
    check_BusinessProducts_ToggleButton_Displayed() {

        let inputField = cy.get(businessProducts_ToggleButton);
        inputField.should('be.visible');
    }
    check_StockHeld_InputField_Displayed() {

        let inputField = cy.get(stockHeld_InputField);
        inputField.should('be.visible');
    }
    check_SufficientStock_ToggleButton_Displayed() {

        let inputField = cy.get(sufficientStock_ToggleButton);
        inputField.should('be.visible');
    }
    check_ProductDescription_InputField_Displayed(businessProducts) {
        if (businessProducts.includes('Yes')) {
            let inputField = cy.xpath(productDescription_InputField);
            inputField.should('be.visible');
        }
    }

    //#endregion
}
export default step_5_business_profile_page;
export const step_5_BusinessProfile_Page = new step_5_business_profile_page()