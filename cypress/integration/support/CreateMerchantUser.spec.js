///<reference types="Cypress"/>
//#region Imports
import { db_and_aws_scenarios } from "../../scenarios/db_and_aws_interaction_scenarios";
import { logIn_scenarios } from '../../scenarios/log_in_scenarios';
import { signUp_scenarios } from '../../scenarios/sign_up_scenarios';
import { email_localPart, email_domain } from '../../config';
import { getUniqueString } from "../../helpers/dateTimeHelper";

const identifier = getUniqueString();
const newUserEmail = `${email_localPart}+${identifier.userUniqueNumberAppender}${email_domain}`;
//#endregion 
//#region Input data
var mainFlowData = {
  firstName: "Vladimir",
  lastName: "Sulima",
  email: newUserEmail,
  password: newUserEmail,
  confirmPassword: newUserEmail,

  activationLink: "",
  userIdentifier: identifier
}
//#endregion

//#region Test code
describe("Create merchant user - email sign up", function () {
  it("Fill in Sign Up form and submit", function () {
    cy.log(mainFlowData.firstName)
    signUp_scenarios.signUp_WithEmail(mainFlowData);
    signUp_scenarios.verify_UserSignedUpConfirmationMessage();
  }),
    it("Verify that user exist in db", function () {
      db_and_aws_scenarios.verify_UserExistInDbAndStatus_ByEmail(newUserEmail, false);
    })
  it("Get Link at confirmation email", function () {
    signUp_scenarios.get_ActivationLink(mainFlowData);
  }),
    it("Send confirmation request", function () {
      signUp_scenarios.sendRequest_ConfirmRegistration_ActivateUser(mainFlowData.activationLink);
      cy.log("Request was sent successfully");
    }),
    it("Try to log in with newly created user", function () {
      logIn_scenarios.logInWithEmail(mainFlowData.email, mainFlowData.password);
      logIn_scenarios.verify_MerchantUser_LogInSuccessfully();
    })
})
//#endregion