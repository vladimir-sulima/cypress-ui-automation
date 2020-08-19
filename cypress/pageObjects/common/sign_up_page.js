///<reference types="Cypress"/>
require("../../../node_modules/cypress-xpath")

//#region Locators
let firstName_InputField = "//input[@placeholder='First name']";
let lastName_InputField = "//input[@placeholder='Last name']";
let email_InputField = "//input[@id='Email']";
let password_InputField = "//input[@id='Password']";
let confirmPassword_InputField = "//input[@id='RepeatPassword']";

let signUp_Button = "//button[@id='signUpSubmitBtn']";
//#endregion

class sign_up_page {

    //#region Click actions
    click_SignUp_Button() {
        cy.xpath(signUp_Button).click();
    }
    //#endregion

    //#endregion Set actions
    set_FirstName_InputField(firstName) {

        let inputField = cy.xpath(firstName_InputField);
        inputField.type(firstName);

    }
    set_LastName_InputField(lastName) {

        let inputField = cy.xpath(lastName_InputField);
        inputField.type(lastName);

    }
    set_Email_InputField(email) {

        let inputField = cy.xpath(email_InputField);
        inputField.type(email);

    }
    set_Password_InputField(password) {

        let inputField = cy.xpath(password_InputField);
        inputField.type(password);

    }
    set_ConfirmPassword_InputField(confirmPassword) {

        let inputField = cy.xpath(confirmPassword_InputField);
        inputField.type(confirmPassword);

    }

    //#endregion

    //#region Check actions
    check_Successfull_ConfirmationMessage() {
        cy.xpath("//div[@role='alert']").should("have.text", "×Close alert" + "Thank you for registration! Please confirm your email address.");
    }
    //#endregion
}
export default sign_up_page;
export const signUp_Page = new sign_up_page()
