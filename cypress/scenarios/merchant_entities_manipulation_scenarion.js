///<reference types="Cypress"/>
import { merchant_HomePage } from "../pageObjects/merchant/merchant_home_page";
import { create_newMerchant_PopUpPage } from "../pageObjects/merchant/create_new_merchant_pop_up_page";

//#region Actions
class merchant_manipulation_scenarios {
  createNewMerchant(merchant) {
    merchant_HomePage.click_MerchantList_Ddl();
    merchant_HomePage.click_CreateMerchant_DdlButton();
    create_newMerchant_PopUpPage.set_Name_InputField(merchant.name);
    create_newMerchant_PopUpPage.click_Create_Button();
    // cy.reload();
  }
  //#endregion
  //#region Verifications
  verify_NewMerchantCreatedSuccessfully(expectedSelectedMerchantName) {
    merchant_HomePage.check_MerchantSelectedInDdl(expectedSelectedMerchantName.name);
  }
}
//#endregion

export const merchant_ManipulationScenarios = new merchant_manipulation_scenarios();
export default merchant_manipulation_scenarios;
