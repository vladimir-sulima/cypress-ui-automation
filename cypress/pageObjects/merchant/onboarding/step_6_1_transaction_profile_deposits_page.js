//#region Imports
///<reference types="Cypress"/>
//#endregion

//#region Locators
let doYouTakDeposit_ToggleButton = "//input[@id='isDepositsTaken']";
let goodsServicesValueTakenAsDeposit_Ddl = "(//input[@id='goods']/..//button)[2]";
let totalCardTurnoverTakenAsDeposit_Ddl = "(//input[@id='cardTurnover']/..//button)[2]";
let howFarInAdvanceIsDepositTaken_Ddl = "(//span[text()='How far in advance is deposit taken?']/..//button)[2]";
let noOfDaysInAdvanceOfDeliveryIsBalanceIsTaken_Ddl = "(//span[text()='No. Days in advance of delivery is balance is taken?']/..//button)[2]";

let doYouTakeFullPaymentForGoodsServicesInAdvance_ToggleButton = "//input[@id='isPrePayment']";
let percentOfTotalCardTurnoverTakenAsFullPrePayments_Ddl = "(//span[text()='% of total card turnover taken as full pre-payments']/..//button)[2]";
let howFarInAdvanceDoYouTakeFullPayment_Ddl = "(//span[text()='% How far in advance do you take full payment?']/..//button)[2]";

//#endregion
class step_6_1_transaction_profile_deposits_page {

    //#region Click actions
    click_DoYouTakeDeposits_ToggleButton(isYes = true) {
        let toggleButton = cy.xpath(doYouTakDeposit_ToggleButton);
        cy.xpath("//span[text()='Do you take deposits']/..//span[contains(@class,'MuiButtonBase-root')]")
            .then(($btn) => {
                if ($btn.hasClass('Mui-checked')) {
                    if (isYes == false) {
                        toggleButton.click();
                    }
                }
                else {
                    if (isYes == true) {
                        toggleButton.click();
                    }
                }
            })
    }
    click_DoYouTakeFullPaymentForGoodsServicesInAdvance(isYes = true) {
        let toggleButton = cy.xpath(doYouTakeFullPaymentForGoodsServicesInAdvance_ToggleButton);

        cy.xpath("//span[text()='Do you take full payments for Goods/services in advance']/../..//span[contains(@class,'MuiButtonBase-root')]")
            .then(($btn) => {
                if ($btn.hasClass('Mui-checked')) {
                    if (isYes == false) {
                        toggleButton.click();
                    }
                }
                else {
                    if (isYes == true) {
                        toggleButton.click();
                    }
                }
            })
    }
    //#endregion

    //#region Set actions
    set_PercentOfGoodsServicesValueTakenAsDeposit(percent) { //temporary solution. Will be updated once component changed

        cy.xpath(goodsServicesValueTakenAsDeposit_Ddl).click();
        cy.xpath(`//div[@role='presentation']//*[contains(text(), '${percent} %')]`).click();
    }
    set_PercentOfTotalCardTurnoverTakenAsDeposit(percent) { //temporary solution. Will be updated once component changed

        cy.xpath(totalCardTurnoverTakenAsDeposit_Ddl).click();
        cy.xpath(`//div[@role='presentation']//*[contains(text(), '${percent} %')]`).click();
    }
    set_DaysOfHowFarInAdvanceIsDepositTaken(days) { //temporary solution. Will be updated once component changed

        cy.xpath(howFarInAdvanceIsDepositTaken_Ddl).click();
        cy.xpath(`//div[@role='presentation']//*[text()='${days} Days']`).click();
    }
    set_NumberOfDaysInAdvanceOfDeliveryIsBalanceIsTaken(days) { //temporary solution. Will be updated once component changed

        cy.xpath(noOfDaysInAdvanceOfDeliveryIsBalanceIsTaken_Ddl).click();
        cy.xpath(`//div[@role='presentation']//*[text()='${days} Days']`).click();
    }
    set_PercentOfTotalCardTurnoverTakenAsFullPrePayments(percent) { //temporary solution. Will be updated once component changed

        cy.xpath(percentOfTotalCardTurnoverTakenAsFullPrePayments_Ddl).click();
        cy.xpath(`//div[@role='presentation']//*[contains(text(), '${percent} %')]`).click();
    }
    set_HowFarInAdvanceDoYouTakeFullPayments(days) { //temporary solution. Will be updated once component changed

        cy.xpath(howFarInAdvanceDoYouTakeFullPayment_Ddl).click();
        cy.xpath(`//div[@role='presentation']//*[text()='${days} Days']`).click();
    }
    //#endregion

    //#region Check actions
    check_DoYouTakeDeposits_ToggleButton_Displayed(expectToBeVisible) {
        let toggleButton = cy.xpath(doYouTakDeposit_ToggleButton);
        if (expectToBeVisible) {
            toggleButton.should('be.visible');
        }
        else {
            toggleButton.should('not.be.visible');
        }
    }
    check_PercentOfGoodsServicesValueTakenAsDeposit_Displayed(expectToBeVisible) {
        let ddl = cy.xpath(goodsServicesValueTakenAsDeposit_Ddl);
        if (expectToBeVisible) {
            ddl.should('be.visible');
        }
        else {
            ddl.should('not.be.visible');
        }
    }
    check_PercentOfTotalCardTurnoverTakenAsDeposi_Displayed(expectToBeVisible) {
        let ddl = cy.xpath(totalCardTurnoverTakenAsDeposit_Ddl);
        if (expectToBeVisible) {
            ddl.should('be.visible');
        }
        else {
            ddl.should('not.be.visible');
        }
    }
    check_DaysOfHowFarInAdvanceIsDepositTaken_Displayed(expectToBeVisible) {
        let ddl = cy.xpath(howFarInAdvanceIsDepositTaken_Ddl);
        if (expectToBeVisible) {
            ddl.should('be.visible');
        }
        else {
            ddl.should('not.be.visible');
        }
    }
    check_NumberOfDaysInAdvanceOfDeliveryIsBalanceIsTaken_Displayed(expectToBeVisible) {
        let ddl = cy.xpath(noOfDaysInAdvanceOfDeliveryIsBalanceIsTaken_Ddl);
        if (expectToBeVisible) {
            ddl.should('be.visible');
        }
        else {
            ddl.should('not.be.visible');
        }
    }
    check_DoYouTakeFullPaymentsForGoodsServicesInAdvance_Displayed(expectToBeVisible) {
        let toggleButton = cy.xpath(doYouTakeFullPaymentForGoodsServicesInAdvance_ToggleButton);
        if (expectToBeVisible) {
            toggleButton.should('be.visible');
        }
        else {
            toggleButton.should('not.be.visible');
        }
    }
    check_PercentOfTotalCardTurnoverTakenAsFullPrePayments_Displayed(expectToBeVisible) {
        let ddl = cy.xpath(percentOfTotalCardTurnoverTakenAsFullPrePayments_Ddl);
        if (expectToBeVisible) {
            ddl.should('be.visible');
        }
        else {
            ddl.should('not.be.visible');
        }
    }
    check_HowFarInAdvanceDoYouTakeFullPayment_Displayed(expectToBeVisible) {
        let ddl = cy.xpath(howFarInAdvanceDoYouTakeFullPayment_Ddl);
        if (expectToBeVisible) {
            ddl.should('be.visible');
        }
        else {
            ddl.should('not.be.visible');
        }
    }
    check_DoYouTakeDeposits_ToggleButton_Selection(isYesExpected) {
        if (isYesExpected) {
            let toggleButton = cy.xpath("//span[text()='Do you take deposits']/..//span[contains(@class,'MuiButtonBase-root') and contains(@class,'Mui-checked')]");
            toggleButton.should('be.visible');
        }
        else {
            let toggleButton = cy.xpath("//span[text()='Do you take deposits']/..//span[contains(@class,'MuiButtonBase-root') and not(contains(@class,'Mui-checked'))]");
            toggleButton.should('be.visible');
        }
    }
    check_DoYouTakeFullPaymentsForGoodsServicesInAdvance_ToggleButton_Selection(isYesExpected) {
        if (isYesExpected) {
            let toggleButton = cy.xpath("//span[text()='Do you take full payments for Goods/services in advance']/../..//span[contains(@class,'MuiButtonBase-root') and contains(@class,'Mui-checked')]");
            toggleButton.should('be.visible');
        }
        else {
            let toggleButton = cy.xpath("//span[text()='Do you take full payments for Goods/services in advance']/../..//span[contains(@class,'MuiButtonBase-root') and not(contains(@class,'Mui-checked'))]");
            toggleButton.should('be.visible');
        }
    }
    //#endregion

}
export default step_6_1_transaction_profile_deposits_page;
export const step_6_1_TransactionProfile_Deposits_Page = new step_6_1_transaction_profile_deposits_page();