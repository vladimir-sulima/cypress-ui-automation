///<reference types="Cypress"/>
import { login_Page } from "../pageObjects/common/login_page"
import { signUp_Page } from "../pageObjects/common/sign_up_page"


// const signUp_Page = new SignUpPage();
// const login_Page = new LoginPage();


const millisecondToWaitForEmail = 10000;

class sign_up_scenarios {
  //#region Actions
  signUp_WithEmail(userSignUpDetails) {
    login_Page.visit();
    login_Page.click_SignUp_HyperLink();

    signUp_Page.set_FirstName_InputField(userSignUpDetails.firstName);
    signUp_Page.set_LastName_InputField(userSignUpDetails.lastName);
    signUp_Page.set_Email_InputField(userSignUpDetails.email);
    signUp_Page.set_Password_InputField(userSignUpDetails.password);
    signUp_Page.set_ConfirmPassword_InputField(userSignUpDetails.confirmPassword);

    signUp_Page.click_SignUp_Button();

  }
  get_ActivationLink(mainFlowData) {
    cy.log(`Waiting ${millisecondToWaitForEmail / 1000} seconds for email received`)
    cy.wait(millisecondToWaitForEmail)

    cy.task("gmail:get-messages", {
      options: {
        from: "no-reply@verificationemail.com",
        subject: "Your verification link",
        include_body: true,
        to: mainFlowData.email, //whom email was sent
        after: new Date(mainFlowData.userIdentifier.currentYear, mainFlowData.userIdentifier.currentMonths, mainFlowData.userIdentifier.currentDate, mainFlowData.userIdentifier.currentHour, mainFlowData.userIdentifier.currentMinute),
      }
    })
      .then(emails => {
        assert.isAtLeast(
          emails.length,
          1,
          "Expected to find at least one email, but none were found!");

        var body = emails[0].body.html;
        mainFlowData.activationLink = body.substring(body.lastIndexOf("f=") + 2, body.lastIndexOf(">V"));
      })
  }
  sendRequest_ConfirmRegistration_ActivateUser(requestUrl) {
    cy.request(requestUrl).as("activationLink");
    cy.get("@activationLink").should((response) => {
      expect(response.status).to.eq(200)
    })
  }
  //#endregion
  //#region Verifications
  verify_UserSignedUpConfirmationMessage() {
    signUp_Page.check_Successfull_ConfirmationMessage();
    //TODO - send query to db to confirm record exist.

  }
  //#endregion
}
export default sign_up_scenarios;
export const signUp_scenarios = new sign_up_scenarios();