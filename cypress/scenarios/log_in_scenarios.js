///<reference types="Cypress"/>
import { merchant_HomePage } from "../pageObjects/merchant/merchant_home_page"
import { reseller_HomePage } from "../pageObjects/reseller/reseller_home_page"
import { login_Page } from "../pageObjects/common/login_page"



// const loginPage = new LoginPage();
// const merchant_HomePage = new Merchant_HomePage();
// const reseller_HomePage = new Reseller_HomePage();

class log_in_scenarios {
        //#region Actions
        logInWithEmail(email, password) {
                login_Page.visit();
                login_Page.set_Email_InputField(email);
                login_Page.set_Password_InputField(password);
                login_Page.click_LogIn_Button();
        }
        logOut() {
                merchant_HomePage.click_LogOut_Button();
        }
        //#endregion
        //#region Verifications
        verify_MerchantUser_LogInSuccessfully() {
                merchant_HomePage.check_WelcomeMessage_Displayed();
        }

        verify_ResellerUser_LogInSuccessfully() {
                reseller_HomePage.check_WorkItemsCard_Displayed();
                reseller_HomePage.check_CreateBusiness_Button_Displayed();
        }

        verify_LogInPage_Displayed() {
                login_Page.check_EmailAdress_InputField_Displayed();
                login_Page.check_Password_InputField_Displayed();

        }
        //#endregion
}

export default log_in_scenarios;
export const logIn_scenarios = new log_in_scenarios();