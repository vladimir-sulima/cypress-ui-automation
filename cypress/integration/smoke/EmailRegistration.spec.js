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

//To be able to run this test you would need to set up credentials.js and token.js files for gmails email box. You can find details here: https://www.npmjs.com/package/gmail-tester 

//#region Test code
describe("Email Sign Up", function () {
  it("Fill in Sign Up form and submit", function () {
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
    }),
    it("Try to log in with newly created user", function () {
      logIn_scenarios.logInWithEmail(mainFlowData.email, mainFlowData.password)
      logIn_scenarios.verify_MerchantUser_LogInSuccessfully()
    }),
    it("Try to log out", function () {
      logIn_scenarios.logOut()
      logIn_scenarios.verify_LogInPage_Displayed();
    })
})
//#endregion