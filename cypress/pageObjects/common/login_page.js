///<reference types="Cypress"/>
require("../../../node_modules/cypress-xpath")
import { appUrl } from '../../config';

//#region Locators
let email_InputField = "#loginFormEmail";
let password_InputField = "#loginFormPassword";
let logIn_Button = "#loginFormSubmit";
let signUp_Hyperlink = "//a[text()='Sign Up']";

//#endregion
class login_page {

    visit() {
        cy.visit(appUrl);
    }
    //#region Click actions
    click_LogIn_Button() {
        cy.server();
        cy.route('POST', '/qa/api/v1/auth/login').as('loginRequest');
        cy.route('GET', '/qa/api/v1/merchants').as('getMerchantsList');

        let button = cy.get(logIn_Button);
        button.click();

        cy.wait('@loginRequest', { timeout: "15000" });
        cy.wait('@getMerchantsList', { timeout: "15000" });
    }

    click_SignUp_HyperLink() {
        let hyperlink = cy.xpath(signUp_Hyperlink);
        hyperlink.click();
    }
    //#endregion
    //#region Set actions
    set_Email_InputField(emailValue) {
        let inputField = cy.get(email_InputField);
        inputField.type(emailValue);
    }

    set_Password_InputField(passwordValue) {
        let inputField = cy.get(password_InputField);
        inputField.type(passwordValue);
    }

    //#endregion
    //#region Check actions
    check_EmailAdress_InputField_Displayed() {
        cy.get(email_InputField).should("be.visible");
    }
    check_Password_InputField_Displayed() {
        cy.get(password_InputField).should("be.visible");
    }
    //#endregion
}

export default login_page;
export const login_Page = new login_page()