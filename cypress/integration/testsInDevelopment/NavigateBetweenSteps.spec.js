//#region Imports
const db = require("../../scenarios/db_and_aws_interaction_scenarios");
import { logInScenarios } from "../../scenarios/log_in_scenarios";
import { signUpScenarios } from "../../scenarios/sign_up_scenarios";
import { merchantManipulationScenarios } from "../../scenarios/merchant_entities_manipulation_scenarion";
import { getUniqueString } from "../../helpers/dateTimeHelper";
import { onboarding_scenarios } from "../../scenarios/onboarding_merchant_scenarios";

const identifier = getUniqueString();
// const newUserEmail = `${email_localPart}+${identifier.userUniqueNumberAppender}${email_domain}`;
const newUserEmail = "mypay.vladimir+208495627@gmail.com";

//#endregion

//#region Input data
var mainFlowData = {
    firstName: "Vladimir",
    lastName: "Sulima",
    email: newUserEmail,
    password: newUserEmail,
    confirmPassword: newUserEmail,

    activationLink: "",
    userIdentifier: identifier,
};
//#endregion
//#region Test code
describe("Navigation between steps by menu", function () {
    it("Log in", function () {
        logInScenarios.logInWithEmail(mainFlowData.email, mainFlowData.password);
    }),
        it("Start onboarding", function () {
            onboarding_scenarios.startOnboardingProcess();
            //TODO Add verification
        });
    it("Navigation", function () {
        onboarding_scenarios.navigate_Step2_BusinessDetails();
        onboarding_scenarios.navigate_Step1_NameAndAddress();
        onboarding_scenarios.navigate_Step3_TradingAddress();
        onboarding_scenarios.navigate_Step4_OwnerDetails();
        onboarding_scenarios.navigate_Step5_BusinessProfile();
        onboarding_scenarios.navigate_Step6_TransactionProfile();
        onboarding_scenarios.navigate_Step7_ProductRequired();
        onboarding_scenarios.navigate_Step8_UploadDocuments();
    })
});
//#endregion
