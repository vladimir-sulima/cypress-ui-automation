//#region Imports
///<reference types="Cypress"/>
import { merchant_HomePage } from "../pageObjects/merchant/merchant_home_page";
import { onboarding_CommonElements } from "../pageObjects/merchant/onboarding/onboarding_common_elements";
import { waitHelper } from "../helpers/wait_helper";
import { step_1_NameAndAddress_Page } from "../pageObjects/merchant/onboarding/step_1_name_and_address_page";
import { step_2_BusinessDetails_Page } from "../pageObjects/merchant/onboarding/Step_2_business_details_page";
import { step_3_Address_Page } from "../pageObjects/merchant/onboarding/step_3_address_page";
import { step_4_1_OwnerDetails_Page } from "../pageObjects/merchant/onboarding/step_4_1_owner_details_page";
import { step_4_2_PersonalAdress_Page } from "../pageObjects/merchant/onboarding/step_4_2_personal_adress";
import { step_5_BusinessProfile_Page } from "../pageObjects/merchant/onboarding/step_5_business_profile_page";
import { step_6_1_TransactionProfile_Deposits_Page } from "../pageObjects/merchant/onboarding/step_6_1_transaction_profile_deposits_page";
import { step_6_2_TransactionProfile_Turnover_Page } from "../pageObjects/merchant/onboarding/step_6_2_transaction_profile_turnover_page";
import { step_6_3_TransactionProfile_Deposits_Page } from "../pageObjects/merchant/onboarding/step_6_3_transaction_profile_deposits_page"
import { step_7_ProductRequired_Page } from "../pageObjects/merchant/onboarding/step_7_product_required_page";
import { step_8_UploadDocuments_Page } from "../pageObjects/merchant/onboarding/step_8_upload_documents_page";
//#endregion

class onboarding_merchant_scenarios {
    //#region Actions
    startOnboardingProcess() {
        merchant_HomePage.click_OnboardMerchant_Button();
        waitHelper.waitForSpinnerNotDisplayed();
    }
    //#region STEP 1
    fillIn_Step1_NameAndAddress_Form(onboardingData) {
        step_1_NameAndAddress_Page.set_LegalName_InputField(onboardingData.step1_nameAndAddress.legalName);
        step_1_NameAndAddress_Page.set_TelephoneNumber_OnputField(onboardingData.step1_nameAndAddress.telephoneNumber)
        step_1_NameAndAddress_Page.set_PostCode_InputField(onboardingData.step1_nameAndAddress.postCode)
        step_1_NameAndAddress_Page.set_AddressLine1_InputField(onboardingData.step1_nameAndAddress.addressLine1)
        step_1_NameAndAddress_Page.set_AddressLine2_InputField(onboardingData.step1_nameAndAddress.addressLine2)
    }
    //#endregion

    //#region STEP 2
    fillIn_Step2_BusinessDetails_Form(onboardingData) {
        step_2_BusinessDetails_Page.select_LegalEntity_InputField(onboardingData.step2_businessDetails.legalEntity)
        step_2_BusinessDetails_Page.set_RegisteredNumber_InputField(onboardingData.step2_businessDetails.registeredNumber)
        step_2_BusinessDetails_Page.set_VatNumber_InputField(onboardingData.step2_businessDetails.vatNumber)
        step_2_BusinessDetails_Page.set_LegalName_InputField(onboardingData.step2_businessDetails.legalName)
        step_2_BusinessDetails_Page.set_TradingName_InputField(onboardingData.step2_businessDetails.tradingName)
        step_2_BusinessDetails_Page.set_TelephoneNumber_InputField(onboardingData.step2_businessDetails.telephoneNumber)
        step_2_BusinessDetails_Page.set_WebSiteUrl_InputField(onboardingData.step2_businessDetails.webSiteUrl)
    }
    //#endregion

    //#region STEP 3
    fillIn_Step3_TradingAddress_Form(onboardingData) {
        step_3_Address_Page.set_Postode_InputField(onboardingData.step3_addressPage.postCode)
        step_3_Address_Page.set_AddressLine1_InputField(onboardingData.step3_addressPage.addressLine1)
        step_3_Address_Page.set_AddressLine2_InputField(onboardingData.step3_addressPage.addressLine2)
        step_3_Address_Page.set_Town_InputField(onboardingData.step3_addressPage.town)
        step_3_Address_Page.set_Country_InputField(onboardingData.step3_addressPage.country)
    }
    //#endregion

    //#region STEP 4
    fillIn_Step4_1_OwnerDetails_Form(onboardingData) {
        step_4_1_OwnerDetails_Page.select_Title_Ddl(onboardingData.step4_ownerDetails.title);
        step_4_1_OwnerDetails_Page.set_FullName_InputField(onboardingData.step4_ownerDetails.fullName);
        step_4_1_OwnerDetails_Page.select_Nationality_Ddl(onboardingData.step4_ownerDetails.nationality);
        step_4_1_OwnerDetails_Page.set_DateOfBurth_InputField(onboardingData.step4_ownerDetails.dateOfBirth);
        step_4_1_OwnerDetails_Page.set_Email_InputField(onboardingData.step4_ownerDetails.email);
        step_4_1_OwnerDetails_Page.set_ContactTel_InputField(onboardingData.step4_ownerDetails.contactTel);
        step_4_1_OwnerDetails_Page.set_BusinessTitle_InputField(onboardingData.step4_ownerDetails.businessTitle);
        step_4_1_OwnerDetails_Page.select_Ownership_Ddl(onboardingData.step4_ownerDetails.ownershipPercentage);
        step_4_1_OwnerDetails_Page.select_OwnershipType_Ddl(onboardingData.step4_ownerDetails.ownershipType);
    }
    fillIn_Step4_2_PersonalAddress_Form(onboardingData) {
        step_4_2_PersonalAdress_Page.set_HomePostcode_InputField(onboardingData.step4_personalAddress.homePostcode);
        step_4_2_PersonalAdress_Page.set_AddressLine1_InputField(onboardingData.step4_personalAddress.addressLine1);
        step_4_2_PersonalAdress_Page.set_AddressLine2_InputField(onboardingData.step4_personalAddress.addressLine2);
        step_4_2_PersonalAdress_Page.set_TownCity_InputField(onboardingData.step4_personalAddress.townCity);
        step_4_2_PersonalAdress_Page.set_Country_InputField(onboardingData.step4_personalAddress.country);

    }
    //#endregion

    //#region STEP 5
    fillIn_Step5_BusinessProfile_Form(onboardingData) {
        step_5_BusinessProfile_Page.set_Business_Description_InputField(onboardingData.step5_businessProfilePage.businessDescription)
        step_5_BusinessProfile_Page.set_BusinessType_InputField(onboardingData.step5_businessProfilePage.businessType)
        step_5_BusinessProfile_Page.set_TimeInBusinessYear_InputField(onboardingData.step5_businessProfilePage.timeInBusinessYear)
        step_5_BusinessProfile_Page.set_TimeInBusinessMonths_InputField(onboardingData.step5_businessProfilePage.timeInBusinessMonth)
        step_5_BusinessProfile_Page.select_StartUp_ToggleButton(onboardingData.step5_businessProfilePage.startUp)
        step_5_BusinessProfile_Page.select_BusinessProducts_ToggleButton(onboardingData.step5_businessProfilePage.businessProducts)
        step_5_BusinessProfile_Page.set_ProductDescription_InputField(onboardingData.step5_businessProfilePage.productDescription)
        step_5_BusinessProfile_Page.set_StockHeld_InputField(onboardingData.step5_businessProfilePage.stockHeld)
        step_5_BusinessProfile_Page.select_SufficientStock_ToggleButton(onboardingData.step5_businessProfilePage.sufficientStock)
    }
    //#endregion

    //#region STEP 6
    fillIn_Step6_1_Transaction_Profile_Deposits_Form(onboardingData) {
        step_6_1_TransactionProfile_Deposits_Page.click_DoYouTakeDeposits_ToggleButton(onboardingData.step6_deposits.doYouTakeDeposits);
        step_6_1_TransactionProfile_Deposits_Page.set_PercentOfGoodsServicesValueTakenAsDeposit(onboardingData.step6_deposits.percentOfGoodsServicesValueTakenAsDeposit);
        step_6_1_TransactionProfile_Deposits_Page.set_PercentOfTotalCardTurnoverTakenAsDeposit(onboardingData.step6_deposits.percentOfTotalCardTurnoverTakenAsDeposit);
        step_6_1_TransactionProfile_Deposits_Page.set_DaysOfHowFarInAdvanceIsDepositTaken(onboardingData.step6_deposits.daysOfHowFarInAdvanceIsDepositTaken);
        step_6_1_TransactionProfile_Deposits_Page.set_NumberOfDaysInAdvanceOfDeliveryIsBalanceIsTaken(onboardingData.step6_deposits.numberOfDaysInAdvanceOfDeliveryIsBalanceIsTaken);
        step_6_1_TransactionProfile_Deposits_Page.click_DoYouTakeFullPaymentForGoodsServicesInAdvance(onboardingData.step6_deposits.doYouTakeFullPaymentForGoodsServicesInAdvance);
        step_6_1_TransactionProfile_Deposits_Page.set_PercentOfTotalCardTurnoverTakenAsFullPrePayments(onboardingData.step6_deposits.percentOfTotalCardTurnoverTakenAsFullPrePayments);
        step_6_1_TransactionProfile_Deposits_Page.set_HowFarInAdvanceDoYouTakeFullPayments(onboardingData.step6_deposits.daysOfHowFarInAdvanceDoYouTakeFullPayments);
    }
    fillIn_Step6_2_Transaction_Profile_Turnover_Form(onboardingData) {
        step_6_2_TransactionProfile_Turnover_Page.set_Actual_TotalAnnualCompanyTurnOver_InputField(onboardingData.step6_turnover.actualTotalAnnualCompanyTurnover);
        step_6_2_TransactionProfile_Turnover_Page.set_Projected_TotalAnnualCompanyTurnOver_InputField(onboardingData.step6_turnover.projectdTotalAnnualCompanyTurnover);
        step_6_2_TransactionProfile_Turnover_Page.set_Actual_TotalAnnualCardTurnOver_InputField(onboardingData.step6_turnover.actualTotalAnnualCardTurnOver);
        step_6_2_TransactionProfile_Turnover_Page.set_Projected_TotalAnnualCardTurnOver_InputField(onboardingData.step6_turnover.projectedTotalAnnualCardTurnOver);
        step_6_2_TransactionProfile_Turnover_Page.set_Min_ProductServicesPriceRange_InputField(onboardingData.step6_turnover.minProductServicesPariceRange);
        step_6_2_TransactionProfile_Turnover_Page.set_Max_ProductServicesPriceRange_InputField(onboardingData.step6_turnover.maxProductServicesPariceRange);
        step_6_2_TransactionProfile_Turnover_Page.set_Avg_ProductServicesPriceRange_InputField(onboardingData.step6_turnover.avgProductServicesPariceRange);
    }
    fillIn_Step6_3_Transaction_Profile_Deposits_Form(onboardingData) {
        step_6_3_TransactionProfile_Deposits_Page.click_DoYouTakeMotoPayments_ToggleButton(onboardingData.step6_motoDeposits.doYouTakeMotoPayments);
        step_6_3_TransactionProfile_Deposits_Page.set_WhatPercentTotalCardTurnoverIsMoto(onboardingData.step6_motoDeposits.percentOfMotoTotalCardTurnover);
        step_6_3_TransactionProfile_Deposits_Page.set_HowFarInAdvanceOfGoodsProvidedIsMotoTaken(onboardingData.step6_motoDeposits.daysOfHowFarInAdvanceOfGoodsProvidedIsMotoTaken);
        step_6_3_TransactionProfile_Deposits_Page.click_ApplyMaxTicketValue_ToggleButton(onboardingData.step6_motoDeposits.applyMaxTicketValue);
        step_6_3_TransactionProfile_Deposits_Page.click_AutoRenewRecurringTransactions_ToggleButton(onboardingData.step6_motoDeposits.autoRenewRecurringTransactions);
        step_6_3_TransactionProfile_Deposits_Page.set_ReasonForMotoRenewal_Ddl(onboardingData.step6_motoDeposits.reasonForMotoRenewal_Ddl)
    }
    //#endregion

    //#region STEP 7
    fillIn_Step7_ProductRequired_Form(onboardingData) {
        // step7_productRequired_page.set_Gateway_CheckBox(onboardingData.step7_productRequiredPage.gateway)
        step_7_ProductRequired_Page.set_MyPayApp_CheckBox(onboardingData.step7_productRequiredPage.myPayApp)
        step_7_ProductRequired_Page.set_VirtualTerminal_CheckBox(onboardingData.step7_productRequiredPage.virtualTerminal)
        step_7_ProductRequired_Page.set_MyEcomm_CheckBox(onboardingData.step7_productRequiredPage.myEcomm_CheckBox)
        step_7_ProductRequired_Page.set_CardMachine_CheckBox(onboardingData.step7_productRequiredPage.cardMachine)
    }
    //#endregion

    //#region STEP 8
    uploadFiles_Step_8_UploadDocuments_Form(onboardingData) {
        step_8_UploadDocuments_Page.attachFiles(onboardingData.step8_uploadDocuments.filesToUpload);
        step_8_UploadDocuments_Page.click_Upload_Button();


    }
    //#endregion

    proceedToTheNextStep() {
        onboarding_CommonElements.click_Next_Button();
        waitHelper.waitForSpinnerNotDisplayed();
    }

    //#endregion

    //#region Verifications

    //#region STEP 1
    verify_Step1_NameAndAddress_InputFieldDisplayed() {
        step_1_NameAndAddress_Page.check_LegalName_InputField_Displayed();
        step_1_NameAndAddress_Page.check_TelephoneNumber_InputField_Displayed();
        step_1_NameAndAddress_Page.check_PostCode_InputField_Displayed();
        step_1_NameAndAddress_Page.check_AddressLine1_InputField_Displayed();
        step_1_NameAndAddress_Page.check_AddressLine2_InputField_Displayed();
    }
    //#endregion

    //#region STEP 2
    verify_Step2_BusinessAddress_InputFieldDisplayed() {
        step_2_BusinessDetails_Page.check_LegalEntity_InputField_Displayed();
        step_2_BusinessDetails_Page.check_RegisteredNumber_InputField_Displayed();
        step_2_BusinessDetails_Page.check_VatNumber_InputField_Displayed();
        step_2_BusinessDetails_Page.check_LegalName_InputField_Displayed();
        step_2_BusinessDetails_Page.check_TradingName_InputField_Displayed();
        step_2_BusinessDetails_Page.check_TelephoneNumber_InputField_Displayed();
        step_2_BusinessDetails_Page.check_WebSiteUrl_InputField_Displayed();
    }
    verify_Step2_1_AvailableValues(step2_businessDetails) {
        step_2_BusinessDetails_Page.check_Title_LegalEntity_AvailableValues(step2_businessDetails.expectgedLegalEntity);

    }
    //#endregion

    //#region STEP 3
    verify_step_3_address_page_InputFieldDisplayed() {
        step_3_Address_Page.check_Postode_InputField_Displayed()
        step_3_Address_Page.check_AddressLine1_InputField_Displayed()
        step_3_Address_Page.check_AddressLine2_InputField_Displayed()
        step_3_Address_Page.check_town_InputField_Displayed()
        step_3_Address_Page.check_Country_InputField_Displayed()
    }
    //#endregion

    //#region STEP 4
    verify_Step4_1_OwnerDetails_InputFieldsDisplayed() {
        step_4_1_OwnerDetails_Page.check_Title_Ddl_Displayed();
        step_4_1_OwnerDetails_Page.check_FullName_InputField_Displayed();
        step_4_1_OwnerDetails_Page.check_Nationality_Ddl_Displayed();
        step_4_1_OwnerDetails_Page.check_DateOfBurth_InputField_Displayed();
        step_4_1_OwnerDetails_Page.check_Email_InputField_Displayed();
        step_4_1_OwnerDetails_Page.check_ContactTel_InputField_Displayed();
        step_4_1_OwnerDetails_Page.check_BusinessTitle_InputField_Displayed();
        step_4_1_OwnerDetails_Page.check_Ownership_Ddl_Displayed();
        step_4_1_OwnerDetails_Page.check_OwnershipType_Ddl_Displayed();
    }
    verify_Step4_1_AvailableValues(step4_ownerDetails) {
        step_4_1_OwnerDetails_Page.check_Title_Ddl_AvailableValues(step4_ownerDetails.expectgedTitleValues);
        cy.wait(10);
        step_4_1_OwnerDetails_Page.check_OwnershipType_Ddl_AvailableValues(step4_ownerDetails.expectedOwnershipTypes);
    }
    verify_Step4_2_PersonallAddress_InputFieldsDisplayed() {
        step_4_2_PersonalAdress_Page.check_HomePostcode_InputField_Displayed();
        step_4_2_PersonalAdress_Page.check_AddressLine1_InputField_Displayed()
        step_4_2_PersonalAdress_Page.check_AddressLine2_InputField_Displayed();
        step_4_2_PersonalAdress_Page.check_TownCity_InputField_Displayed();
        step_4_2_PersonalAdress_Page.check_Country_InputField_Displayed();
    }
    //#endregion

    //#region STEP 5
    verify_Step_5_business_profile_pageDisplayed(onboardingData) {
        step_5_BusinessProfile_Page.check_BusinessDescription_InputField_Displayed()
        step_5_BusinessProfile_Page.check_BusinessType_InputField_Displayed()
        step_5_BusinessProfile_Page.check_TimeInBusinessYear_InputField_Displayed()
        step_5_BusinessProfile_Page.check_TimeInBusinessMonth_InputField_Displayed()
        step_5_BusinessProfile_Page.check_StartUp_ToggleButton_Displayed()
        step_5_BusinessProfile_Page.check_BusinessProducts_ToggleButton_Displayed()
        step_5_BusinessProfile_Page.check_StockHeld_InputField_Displayed()
        step_5_BusinessProfile_Page.check_SufficientStock_ToggleButton_Displayed()
    }
    //#endregion

    //#region STEP 6
    verify_Step6_1_TransactionProfile_Deposits_InputFieldsDisplayedAndDefaultValues(step6_deposits) {
        step_6_1_TransactionProfile_Deposits_Page.check_DoYouTakeDeposits_ToggleButton_Selection(step6_deposits.expectedDoYouTakeDeposits);
        step_6_1_TransactionProfile_Deposits_Page.check_PercentOfTotalCardTurnoverTakenAsDeposi_Displayed(true);
        step_6_1_TransactionProfile_Deposits_Page.check_DaysOfHowFarInAdvanceIsDepositTaken_Displayed(true);
        step_6_1_TransactionProfile_Deposits_Page.check_NumberOfDaysInAdvanceOfDeliveryIsBalanceIsTaken_Displayed(true);

        step_6_1_TransactionProfile_Deposits_Page.check_PercentOfGoodsServicesValueTakenAsDeposit_Displayed(true);
        step_6_1_TransactionProfile_Deposits_Page.check_DoYouTakeFullPaymentsForGoodsServicesInAdvance_ToggleButton_Selection(step6_deposits.expectedDoYouTakeFullPaymentsForGoodsServicesInAdvance);
        step_6_1_TransactionProfile_Deposits_Page.check_DoYouTakeFullPaymentsForGoodsServicesInAdvance_Displayed(true);
        step_6_1_TransactionProfile_Deposits_Page.check_PercentOfTotalCardTurnoverTakenAsFullPrePayments_Displayed(true);
        step_6_1_TransactionProfile_Deposits_Page.check_HowFarInAdvanceDoYouTakeFullPayment_Displayed(true);

        step_6_1_TransactionProfile_Deposits_Page.click_DoYouTakeDeposits_ToggleButton(false);
        step_6_1_TransactionProfile_Deposits_Page.check_PercentOfTotalCardTurnoverTakenAsDeposi_Displayed(false);
        step_6_1_TransactionProfile_Deposits_Page.check_DaysOfHowFarInAdvanceIsDepositTaken_Displayed(false);
        step_6_1_TransactionProfile_Deposits_Page.check_NumberOfDaysInAdvanceOfDeliveryIsBalanceIsTaken_Displayed(false);

        step_6_1_TransactionProfile_Deposits_Page.click_DoYouTakeFullPaymentForGoodsServicesInAdvance(false);
        step_6_1_TransactionProfile_Deposits_Page.check_PercentOfTotalCardTurnoverTakenAsFullPrePayments_Displayed(false);
        step_6_1_TransactionProfile_Deposits_Page.check_HowFarInAdvanceDoYouTakeFullPayment_Displayed(false);

    }
    verify_Step6_2_TransactionProfile_Turnover_InputFieldsDisplayedAndDefaultValues() {
        step_6_2_TransactionProfile_Turnover_Page.check_Actual_TotalAnnualCompanyTurnOver_InputField_Displayed();
        step_6_2_TransactionProfile_Turnover_Page.check_Projected_TotalAnnualCompanyTurnOver_InputField_Displayed();
        step_6_2_TransactionProfile_Turnover_Page.check_Actual_TotalAnnualCardTurnOver_InputField_Displayed();
        step_6_2_TransactionProfile_Turnover_Page.check_Projected_TotalAnnualCardTurnOver_InputField_Displayed();
        step_6_2_TransactionProfile_Turnover_Page.check_Min_ProductServicesPriceRange_InputField_Displayed();
        step_6_2_TransactionProfile_Turnover_Page.check_Max_ProductServicesPriceRange_InputField_Displayed();
        step_6_2_TransactionProfile_Turnover_Page.check_Avg_ProductServicesPriceRange_InputField_Displayed();

    }
    verify_Step6_3_TransactionProfile_Deposits_InputFieldsDisplayedAndDefaultValues(step6_motoDeposits) {
        step_6_3_TransactionProfile_Deposits_Page.check_DoYouTakeMotoPayments_ToggleButton_Selection(step6_motoDeposits.expectedDoYouTakeMotoPayments);
        step_6_3_TransactionProfile_Deposits_Page.check_ApplyMaxTicketValue_ToggleButton_Selection(step6_motoDeposits.expectedApplyMaxTicketValue)
        step_6_3_TransactionProfile_Deposits_Page.check_WhatPercentOfTotalCardTurnoverIsMoto_Ddl_Visibility(false);
        step_6_3_TransactionProfile_Deposits_Page.check_HowFarInAdvanceOfGoodsProvidedIsMotoTaken_Ddl_Visibility(false);
        step_6_3_TransactionProfile_Deposits_Page.check_AutoRenewRecurringTransactions_ToggleButton_Visibility(false);
        step_6_3_TransactionProfile_Deposits_Page.check_ReasonForMotoRenewal_Ddl_Visibility(false);

        step_6_3_TransactionProfile_Deposits_Page.click_DoYouTakeMotoPayments_ToggleButton(true);
        step_6_3_TransactionProfile_Deposits_Page.check_WhatPercentOfTotalCardTurnoverIsMoto_Ddl_Visibility(true);
        step_6_3_TransactionProfile_Deposits_Page.check_HowFarInAdvanceOfGoodsProvidedIsMotoTaken_Ddl_Visibility(true);
        step_6_3_TransactionProfile_Deposits_Page.check_AutoRenewRecurringTransactions_ToggleButton_Selection(false);
        step_6_3_TransactionProfile_Deposits_Page.check_ReasonForMotoRenewal_Ddl_Visibility(false)

        step_6_3_TransactionProfile_Deposits_Page.click_AutoRenewRecurringTransactions_ToggleButton(step6_motoDeposits.expectedAutoRenewRecurringTransactions);
        step_6_3_TransactionProfile_Deposits_Page.check_ReasonForMotoRenewal_Ddl_Visibility(false);
    }
    //#endregion

    //#region STEP 7
    verify_step_7_product_required_pageDisplayed() {
        step_7_ProductRequired_Page.check_Gateway_CheckBox_Displayed()
        step_7_ProductRequired_Page.check_MyPayApp_CheckBox_Displayed()
        step_7_ProductRequired_Page.check_VirtualTerminal_CheckBox_Displayed()
        step_7_ProductRequired_Page.check_MyEcomm_CheckBox_Displayed()
        step_7_ProductRequired_Page.check_CardMachine_CheckBox_Displayed()
    }
    //#endregion

    //#region STEP 8
    verify_Step_8_UploadDocuments_ListOfUploadedFiles_Displayed(onboardingData) {
        step_8_UploadDocuments_Page.check_UploadedDocuments_Displayed(onboardingData.step8_uploadDocuments.filesToUpload);
        cy.wait(1);
    }
    verify_Step_8_UploadDocuments_UIElement_Displayed() {
        step_8_UploadDocuments_Page.check_UploadFile_DragAndDrop_Area_Displayed();
        step_8_UploadDocuments_Page.check_Upload_Button_Displayed();
    }

    //#endregion
    verify_NextButton_Status(shuoldNextButtonBeEnabled) {
        onboarding_CommonElements.check_Next_ButtonStatus(shuoldNextButtonBeEnabled);
    }
    //#endregion

    //#region Navigation
    navigate_Step1_NameAndAddress() {
        cy.server();
        cy.route('GET', 'qa/api/v1/merchants/get/*/onboarding/*').as('getOnboardingForm');

        onboarding_CommonElements.click_Step1_NameAndAddress_NavigationMenu();

        cy.wait('@getOnboardingForm');
    }
    navigate_Step2_BusinessDetails() {
        cy.server();
        cy.route('GET', 'qa/api/v1/merchants/get/*/onboarding/*').as('getOnboardingForm');

        onboarding_CommonElements.click_Step2_BusinessDetails_NavigationMenu();
        cy.wait('@getOnboardingForm');
    }
    navigate_Step3_TradingAddress() {
        cy.server();
        cy.route('GET', 'qa/api/v1/merchants/get/*/onboarding/*').as('getOnboardingForm');

        onboarding_CommonElements.click_Step3_TradingAddress_NavigationMenu();

        cy.wait('@getOnboardingForm');
    }
    navigate_Step4_OwnerDetails() {
        cy.server();
        cy.route('GET', 'qa/api/v1/merchants/get/*/onboarding/*').as('getOnboardingForm');

        onboarding_CommonElements.click_Step4_OwnerDetails_NavigationMenu();

        cy.wait('@getOnboardingForm');
    }
    navigate_Step5_BusinessProfile() {
        cy.server();
        cy.route('GET', 'qa/api/v1/merchants/get/*/onboarding/*').as('getOnboardingForm');

        onboarding_CommonElements.click_Step5_BusinessProfile_NavigationMenu();

        cy.wait('@getOnboardingForm');
    }
    navigate_Step6_TransactionProfile() {
        cy.server();
        cy.route('GET', 'qa/api/v1/merchants/get/*/onboarding/*').as('getOnboardingForm');

        onboarding_CommonElements.click_Step6_TransactionProfile_NavigationMenu();

        cy.wait('@getOnboardingForm');
    }
    navigate_Step7_ProductRequired() {
        cy.server();
        cy.route('GET', 'qa/api/v1/merchants/get/*/onboarding/*').as('getOnboardingForm');

        onboarding_CommonElements.click_Step7_ProductRequired_NavigationMenu();

        cy.wait('@getOnboardingForm');
    }
    navigate_Step8_UploadDocuments() {
        cy.server();
        cy.route('GET', '/qa/api/v1/documents/list-objects/merchant/*').as('getOnboardingForm');

        onboarding_CommonElements.click_Step8_UploadDocuments_NavigationMenu();

        cy.wait('@getOnboardingForm');
    }
    //#endregion
}

export const onboarding_scenarios = new onboarding_merchant_scenarios();
export default onboarding_merchant_scenarios;