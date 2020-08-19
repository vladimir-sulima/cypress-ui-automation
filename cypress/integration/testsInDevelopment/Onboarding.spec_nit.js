//#region Imports
const db = require("../../scenarios/db_and_aws_interaction_scenarios");
import { logIn_scenarios } from "../../scenarios/log_in_scenarios";
import { signUpScenarios } from "../../scenarios/sign_up_scenarios";
import { merchant_ManipulationScenarios } from "../../scenarios/merchant_entities_manipulation_scenarion";
import { getUniqueString } from "../../helpers/dateTimeHelper";
import { onboarding_scenarios } from "../../scenarios/onboarding_merchant_scenarios";

const identifier = getUniqueString();
// const newUserEmail = `${email_localPart}+${identifier.userUniqueNumberAppender}${email_domain}`;
const newUserEmail = "mypay.vladimir+2087144055@gmail.com";

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

  merchants: {
    merchant_1: {
      name: "A_Merchant" + identifier.userUniqueNumberAppender

    }
  },
  onboardingData: {
    step1_nameAndAddress: {
      legalName: `A_Legal Name${identifier.userUniqueNumberAppender}`,
      telephoneNumber: identifier.userUniqueNumberAppender,
      postCode: "Test postcode",
      addressLine1: `Address line 1 ${identifier.userUniqueNumberAppender}`,
      addressLine2: `Address line 2 ${identifier.userUniqueNumberAppender}`
    }
    , step2_businessDetails: {
      legalEntity: 'LLP',
      expectgedLegalEntity: ["Limited", "Sole Trader", "LLP", "PLC", "Partnership"],
      registeredNumber: identifier.userUniqueNumberAppender,
      vatNumber: identifier.userUniqueNumberAppender,
      legalName: `A_Legal Name ${identifier.userUniqueNumberAppender}`,
      tradingName: `A_Trading Name ${identifier.userUniqueNumberAppender}`,
      telephoneNumber: identifier.userUniqueNumberAppender,
      webSiteUrl: 'www.test.com'
    }
    , step3_addressPage: {
      postCode: identifier.userUniqueNumberAppender,
      addressLine1: `Address line 1 ${identifier.userUniqueNumberAppender}`,
      addressLine2: `Address line 2 ${identifier.userUniqueNumberAppender}`,
      town: `A_Town Name ${identifier.userUniqueNumberAppender}`,
      country: `A_Country Name ${identifier.userUniqueNumberAppender}`
    },
    step4_ownerDetails: {
      expectgedTitleValues: ["Mr", "Miss", "Mrs", "Ms"],
      expectedOwnershipTypes: ["Direct", "Indirect"],
      title: "Mrs",
      fullName: `FN ${identifier.userUniqueNumberAppender}`,
      nationality: "Japan",
      dateOfBirth: "01/06/2010",
      email: `${identifier.userUniqueNumberAppender}@automation.com`,
      contactTel: identifier.userUniqueNumberAppender,
      businessTitle: "Automation Ltd",
      ownershipPercentage: "98",
      ownershipType: "Indirect"
    },
    step4_personalAddress: {
      homePostcode: "E13 9PA",
      addressLine1: `AL1 ${identifier.userUniqueNumberAppender}`,
      addressLine2: `AL2 ${identifier.userUniqueNumberAppender}`,
      townCity: `City ${identifier.userUniqueNumberAppender}`,
      country: `Country ${identifier.userUniqueNumberAppender}`
    },
    step5_businessProfilePage: {
      businessDescription: "MCC 5013 Motor vehicle",
      businessType: "B2C",
      timeInBusinessYear: identifier.currentYear,
      timeInBusinessMonth: identifier.currentMonths,
      startUp: true,
      businessProducts: true,
      productDescription: "Food",
      stockHeld: `A_Local Warehouse ${identifier.userUniqueNumberAppender}`,
      sufficientStock: true
    },
    step6_deposits: {
      expectedDoYouTakeDeposits: true,
      expectedDoYouTakeFullPaymentsForGoodsServicesInAdvance: true,
      doYouTakeDeposits: true,
      percentOfGoodsServicesValueTakenAsDeposit: "55",
      percentOfTotalCardTurnoverTakenAsDeposit: "60",
      daysOfHowFarInAdvanceIsDepositTaken: "7",
      numberOfDaysInAdvanceOfDeliveryIsBalanceIsTaken: "8",
      doYouTakeFullPaymentForGoodsServicesInAdvance: true,
      percentOfTotalCardTurnoverTakenAsFullPrePayments: "13",
      daysOfHowFarInAdvanceDoYouTakeFullPayments: "14"
    },
    step6_turnover: {
      actualTotalAnnualCompanyTurnover: "1",
      projectdTotalAnnualCompanyTurnover: "2",
      actualTotalAnnualCardTurnOver: "3",
      projectedTotalAnnualCardTurnOver: "4",
      minProductServicesPariceRange: "5",
      maxProductServicesPariceRange: "6",
      avgProductServicesPariceRange: "7",
    },
    step6_motoDeposits: {
      expectedDoYouTakeMotoPayments: false,
      expectedApplyMaxTicketValue: false,
      expectedAutoRenewRecurringTransactions: false,
      doYouTakeMotoPayments: true,
      percentOfMotoTotalCardTurnover: "55",
      daysOfHowFarInAdvanceOfGoodsProvidedIsMotoTaken: "8",
      applyMaxTicketValue: true,
      autoRenewRecurringTransactions: true,
      reasonForMotoRenewal_Ddl: "Renewal Reason 2"
    },
    step7_productRequiredPage: {
      // gateway: "Yes",
      myPayApp: "Yes",
      virtualTerminal: "No",
      myEcomm_CheckBox: "Yes",
      cardMachine: "No"

    }
  }
}
//#endregion
//#region Test code
describe("Onboarding", function () {
  it("Log in", function () {
    logIn_scenarios.logInWithEmail(mainFlowData.email, mainFlowData.password);
  }),
    it("Create merchant", function () {
      merchant_ManipulationScenarios.createNewMerchant(mainFlowData.merchants.merchant_1);
      //TODO Add verification
    }),
    it("Start onboarding", function () {
      onboarding_scenarios.startOnboardingProcess();
      //TODO Add verification
    })
  it("Verify input fields for Onboarding step 1 - Name and address page", function () {
    onboarding_scenarios.verify_Step1_NameAndAddress_InputFieldDisplayed();
    onboarding_scenarios.verify_NextButton_Status(false);
  })
  it("Set data for Onboarding step 1 - Name and address page", function () {
    onboarding_scenarios.fillIn_Step1_NameAndAddress_Form(mainFlowData.onboardingData);
    onboarding_scenarios.verify_NextButton_Status(true);
    onboarding_scenarios.proceedToTheNextStep();
  })

  //#step_2

  it("Verify input fields for Onboarding step 2 - Business address page", function () {
    onboarding_scenarios.verify_Step2_BusinessAddress_InputFieldDisplayed();
    onboarding_scenarios.verify_NextButton_Status(false);
  })
  it("Verify available options for Onboarding step 2.1 - Business address page", function () {
    onboarding_scenarios.verify_Step2_1_AvailableValues(mainFlowData.onboardingData.step2_businessDetails)
  });
  it("Set data for Onboarding step 2 - Business address page", function () {
    onboarding_scenarios.fillIn_Step2_BusinessDetails_Form(mainFlowData.onboardingData);
    onboarding_scenarios.verify_NextButton_Status(true);
    onboarding_scenarios.proceedToTheNextStep();
  });

  //#step_3
  it("Verify input fields for Onboarding step 3 - address page", function () {
    // onboarding_scenarios.navigate_Step3_TradingAddress()
    onboarding_scenarios.verify_step_3_address_page_InputFieldDisplayed();
    onboarding_scenarios.verify_NextButton_Status(false);
  })
  it("Set data for Onboarding step 3 - address page", function () {
    onboarding_scenarios.fillIn_Step3_TradingAddress_Form(mainFlowData.onboardingData);
    onboarding_scenarios.verify_NextButton_Status(true);
    onboarding_scenarios.proceedToTheNextStep();
  });

  //STEP 4

  it("Verify input fields for Onboarding step 4.1 - Owner details page", function () {
    //  onboarding_scenarios.navigate_Step4_OwnerDetails();
    onboarding_scenarios.verify_Step4_1_OwnerDetails_InputFieldsDisplayed();
    onboarding_scenarios.verify_NextButton_Status(false);
  });
  it("Verify available options for Onboarding step 4.1 - Owner details page", function () {
    onboarding_scenarios.verify_Step4_1_AvailableValues(mainFlowData.onboardingData.step4_ownerDetails)
  });
  it("Set data for Onboarding step 4.1 - Owner details page", function () {
    onboarding_scenarios.fillIn_Step4_1_OwnerDetails_Form(mainFlowData.onboardingData);
    onboarding_scenarios.verify_NextButton_Status(true);
    onboarding_scenarios.proceedToTheNextStep();
  })
  it("Verify input fields for Onboarding step 4.2 - Personall address page", function () {
    onboarding_scenarios.verify_Step4_2_PersonallAddress_InputFieldsDisplayed();
    onboarding_scenarios.verify_NextButton_Status(false);
  });
  it("Set data for Onboarding step 4.2 - Personal address page", function () {
    onboarding_scenarios.fillIn_Step4_2_PersonalAddress_Form(mainFlowData.onboardingData);
    onboarding_scenarios.verify_NextButton_Status(true);
    onboarding_scenarios.proceedToTheNextStep();
  })

  //#step_5
  it("Verify input fields for Onboarding step 5 - business profile page", function () {
    //  onboarding_scenarios.navigate_Step5_BusinessProfile()
    onboarding_scenarios.verify_Step_5_business_profile_pageDisplayed(mainFlowData.onboardingData);
    onboarding_scenarios.verify_NextButton_Status(false);
  })
  it("Set data for Onboarding step 5 - business profile page", function () {
    onboarding_scenarios.fillIn_Step5_BusinessProfile_Form(mainFlowData.onboardingData);
    onboarding_scenarios.verify_NextButton_Status(true);
    onboarding_scenarios.proceedToTheNextStep();
  });

  //#step_6
  it("Verify input fields and default values for Onboarding step 6.1 - Transaction profile - Deposit page", function () {
    onboarding_scenarios.navigate_Step6_TransactionProfile();
    onboarding_scenarios.verify_Step6_1_TransactionProfile_Deposits_InputFieldsDisplayedAndDefaultValues(mainFlowData.onboardingData.step6_deposits);
  });
  it("Set data for Onboarding step 6.1 - Transaction profile - Deposit page", function () {
    onboarding_scenarios.fillIn_Step6_1_Transaction_Profile_Deposits_Form(mainFlowData.onboardingData);
    onboarding_scenarios.proceedToTheNextStep();
  });

  it("Verify input fields for Onboarding step 6.2 - Transaction profile - Turnover page", function () {
    onboarding_scenarios.verify_Step6_2_TransactionProfile_Turnover_InputFieldsDisplayedAndDefaultValues();
  });
  it("Set data for Onboarding step 6.2 - Transaction profile - Turnover page", function () {
    onboarding_scenarios.fillIn_Step6_2_Transaction_Profile_Turnover_Form(mainFlowData.onboardingData);
    onboarding_scenarios.proceedToTheNextStep();
  });
  it("Verify input fields and default values for Onboarding step 6.3 - Transaction profile - Deposits page", function () {
    onboarding_scenarios.verify_Step6_3_TransactionProfile_Deposits_InputFieldsDisplayedAndDefaultValues(mainFlowData.onboardingData.step6_motoDeposits);
  });
  it("Set data for Onboarding step 6.3 - Transaction profile - Deposits page", function () {

    onboarding_scenarios.fillIn_Step6_3_Transaction_Profile_Deposits_Form(mainFlowData.onboardingData);
    onboarding_scenarios.proceedToTheNextStep();
  });
  //#step_7
  it("Verify input fields for Onboarding step 7 - product_required page", function () {
    onboarding_scenarios.navigate_Step7_ProductRequired()
    onboarding_scenarios.verify_step_7_product_required_pageDisplayed()
    onboarding_scenarios.verify_NextButton_Status(true);
  })
  it("Set data for Onboarding step 7 - product_required page", function () {
    onboarding_scenarios.fillIn_Step7_ProductRequired_Form(mainFlowData.onboardingData);
    onboarding_scenarios.verify_NextButton_Status(true);
    onboarding_scenarios.proceedToTheNextStep();
  });
});
//#endregion

