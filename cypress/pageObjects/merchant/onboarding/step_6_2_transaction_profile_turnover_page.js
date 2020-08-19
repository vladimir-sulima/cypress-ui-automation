//#region Imports
///<reference types="Cypress"/>
//#endregion

//#region Locators
let actual_TotalAnnualCompanyTurnOver_InputField = "#companyTurnOverActual";
let projected_TotalAnnualCompanyTurnOver_InputField = "#companyTurnOverProjected";
let actual_TotalAnnualCardTurnOver_InputField = "#cardTurnOverActual";
let projected_TotalAnnualCardTurnOver_InputField = "#cardTurnOverProjected";
let min_ProductServicesPariceRange_InputField = "#priceRangeMin";
let max_ProductServicesPariceRange_InputField = "#priceRangeMax";
let avg_ProductServicesPariceRange_InputField = "#priceRangeAvg";

//#endregion

class step_6_2_transaction_profile_turnover_page {
    //#region Click actions
    //#endregion

    //#region Set actions
    set_Actual_TotalAnnualCompanyTurnOver_InputField(value) {
        let inputField = cy.get(actual_TotalAnnualCompanyTurnOver_InputField);
        inputField.type(value);
    }
    set_Projected_TotalAnnualCompanyTurnOver_InputField(value) {
        let inputField = cy.get(projected_TotalAnnualCompanyTurnOver_InputField);
        inputField.type(value);
    }
    set_Actual_TotalAnnualCardTurnOver_InputField(value) {
        let inputField = cy.get(actual_TotalAnnualCardTurnOver_InputField);
        inputField.type(value);
    }
    set_Projected_TotalAnnualCardTurnOver_InputField(value) {
        let inputField = cy.get(projected_TotalAnnualCardTurnOver_InputField);
        inputField.type(value);
    }
    set_Min_ProductServicesPriceRange_InputField(value) {
        let inputField = cy.get(min_ProductServicesPariceRange_InputField);
        inputField.type(value);
    }
    set_Max_ProductServicesPriceRange_InputField(value) {
        let inputField = cy.get(max_ProductServicesPariceRange_InputField);
        inputField.type(value);
    }
    set_Avg_ProductServicesPriceRange_InputField(value) {
        let inputField = cy.get(avg_ProductServicesPariceRange_InputField);
        inputField.type(value);
    }


    //#endregion

    //#region Check actions
    check_Actual_TotalAnnualCompanyTurnOver_InputField_Displayed() {
        let inputField = cy.get(actual_TotalAnnualCompanyTurnOver_InputField);
        inputField.should("be.visible");
    }
    check_Projected_TotalAnnualCompanyTurnOver_InputField_Displayed() {
        let inputField = cy.get(projected_TotalAnnualCompanyTurnOver_InputField);
        inputField.should("be.visible");
    }
    check_Actual_TotalAnnualCardTurnOver_InputField_Displayed() {
        let inputField = cy.get(actual_TotalAnnualCardTurnOver_InputField);
        inputField.should("be.visible");
    }
    check_Projected_TotalAnnualCardTurnOver_InputField_Displayed() {
        let inputField = cy.get(projected_TotalAnnualCardTurnOver_InputField);
        inputField.should("be.visible");
    }
    check_Min_ProductServicesPriceRange_InputField_Displayed() {
        let inputField = cy.get(min_ProductServicesPariceRange_InputField);
        inputField.should("be.visible");
    }
    check_Max_ProductServicesPriceRange_InputField_Displayed() {
        let inputField = cy.get(max_ProductServicesPariceRange_InputField);
        inputField.should("be.visible");
    }
    check_Avg_ProductServicesPriceRange_InputField_Displayed() {
        let inputField = cy.get(avg_ProductServicesPariceRange_InputField);
        inputField.should("be.visible");
    }
    //#endregion
}
export default step_6_2_transaction_profile_turnover_page;
export const step_6_2_TransactionProfile_Turnover_Page = new step_6_2_transaction_profile_turnover_page();