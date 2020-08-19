//#region Imports
///<reference types="Cypress"/>
//#endregion

//#region Locators
let title_Ddl = "//select[@placeholder='Title']";
let fullName_InputField = "//input[@placeholder='Full name']";
let nationality_Ddl = "//select[@placeholder='Nationality']";
let dateOfBirth_InputField = "//input[@id='date-ofbirth-owner-details']";
let email_InputField = "//input[@id='owner-input-email']";
let contactTel_InputField = "//input[@id='owner-input-contacttel']";
let businessTitle_InputField = "//input[@id='owner-input-businesstitle']";
let ownership_Ddl = "//*[@id='owner-select-ownership']";
let ownershipType_Ddl = "//select[@placeholder='Ownership type']";
//#endregion
class step_4_1_owner_details_page {
    //#region Click actions
    //#endregion

    //#region Set actions
    select_Title_Ddl(title) {
        let ddl = cy.xpath(title_Ddl);
        ddl.select(title);
    }
    set_FullName_InputField(fullName) {
        let inputField = cy.xpath(fullName_InputField);
        inputField.type(fullName);
    }
    select_Nationality_Ddl(nationality) {
        let ddl = cy.xpath(nationality_Ddl);
        ddl.select(nationality);
    }
    set_DateOfBurth_InputField(dateOfBirth) {
        let inputField = cy.xpath(dateOfBirth_InputField);
        inputField.type(dateOfBirth);
    }
    set_Email_InputField(email) {
        let inputField = cy.xpath(email_InputField);
        inputField.type(email);
    }
    set_ContactTel_InputField(contactTel) {
        let inputField = cy.xpath(contactTel_InputField);
        inputField.type(contactTel);
    }
    set_BusinessTitle_InputField(businessTitle) {
        let inputField = cy.xpath(businessTitle_InputField);
        inputField.type(businessTitle);
    }
    select_Ownership_Ddl(ownershipPercentage) {
        let ddl = cy.xpath(ownership_Ddl);
        ddl.select(ownershipPercentage);
    }
    select_OwnershipType_Ddl(ownershipType) {
        let ddl = cy.xpath(ownershipType_Ddl);
        ddl.select(ownershipType);
    }
    //#endregion

    //#region Check actions
    check_Title_Ddl_Displayed() {
        let ddl = cy.xpath(title_Ddl);
        ddl.should('be.visible');
    }
    check_FullName_InputField_Displayed() {
        let inputField = cy.xpath(fullName_InputField);
        inputField.should('be.visible');
    }
    check_Nationality_Ddl_Displayed() {
        let ddl = cy.xpath(nationality_Ddl);
        ddl.should('be.visible');
    }
    check_DateOfBurth_InputField_Displayed() {
        let inputField = cy.xpath(dateOfBirth_InputField);
        inputField.should('be.visible');
    }
    check_Email_InputField_Displayed() {
        let inputField = cy.xpath(email_InputField);
        inputField.should('be.visible');
    }
    check_ContactTel_InputField_Displayed() {
        let inputField = cy.xpath(contactTel_InputField);
        inputField.should('be.visible');
    }
    check_BusinessTitle_InputField_Displayed() {
        let inputField = cy.xpath(businessTitle_InputField);
        inputField.should('be.visible');
    }
    check_Ownership_Ddl_Displayed() {
        let ddl = cy.xpath(ownership_Ddl);
        ddl.should('be.visible');
    }
    check_OwnershipType_Ddl_Displayed() {
        let ddl = cy.xpath(ownershipType_Ddl);
        ddl.should('be.visible');
    }
    check_Title_Ddl_AvailableValues(expectedTitleValues) {
        let availableOptions = cy.xpath(`${title_Ddl}/option`);

        availableOptions.should(($actualValues) => {
            expect($actualValues).to.have.length(expectedTitleValues.length)
        })
        availableOptions.each(($val) => {
            expect(expectedTitleValues).to.contains($val.text())
        })
    }
    check_OwnershipType_Ddl_AvailableValues(expectedOwnershipTypeValues) {
        let availableOptions = cy.xpath(`${ownershipType_Ddl}/option`);

        availableOptions.should(($actualValues) => {
            expect($actualValues).to.have.length(expectedOwnershipTypeValues.length)
        })
        availableOptions.each(($val) => {
            expect(expectedOwnershipTypeValues).to.contains($val.text())
        })
    }
    //#endregion
}
export default step_4_1_owner_details_page;
export const step_4_1_OwnerDetails_Page = new step_4_1_owner_details_page()