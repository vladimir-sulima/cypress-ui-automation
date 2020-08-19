//#region Imports
///<reference types="Cypress"/>
//#endregion

//#region Locators
let doYouTakeMotoPayments_ToggleButton = "#isMotoPayment";
let applyMaxTicketValue_ToggleButton = "#isMaxTicketApplied";
let autoRenewRecurringTransactions_ToggleButton = "#isAutoRenewTransactions"

let howFarInAdvanceOfGoodsProvidedIsMOTOTaken_Ddl = "#advanceGoodsMotoProvidedDays";
let whatPercentOfTotalCardTurnoverIsMoto_Ddl = "#totalCardTurnoverIsMoto";
let reasonsForMoto_Ddl = "#MotoRenewalReason";



//#endregion

class step_6_3_transaction_profile_deposits_page {
    //#region Click actions
    click_DoYouTakeMotoPayments_ToggleButton(isYes = false) {
        let toggleButton = cy.get(doYouTakeMotoPayments_ToggleButton);

        cy.xpath("//span[text()='Do you take Moto payments?']/..//span[contains(@class,'MuiButtonBase-root')]")
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
    click_ApplyMaxTicketValue_ToggleButton(isYes) {
        let toggleButton = cy.get(applyMaxTicketValue_ToggleButton);

        cy.xpath("//span[text()='Apply a max ticket value?']/..//span[contains(@class,'MuiButtonBase-root')]")
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
    click_AutoRenewRecurringTransactions_ToggleButton(isYes = false) {
        let toggleButton = cy.get(autoRenewRecurringTransactions_ToggleButton);

        cy.xpath("//span[text()='Auto Renew/ recurring transactions?']/../..//span[contains(@class,'MuiButtonBase-root')]")
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
    set_WhatPercentTotalCardTurnoverIsMoto(percent) { //temporary solution. Will be updated once component changed
        cy.get(whatPercentOfTotalCardTurnoverIsMoto_Ddl).click();
        cy.xpath(`//div[@role='presentation']//*[contains(text(), '${percent} %')]`).click();
    }
    set_HowFarInAdvanceOfGoodsProvidedIsMotoTaken(days) { //temporary solution. Will be updated once component changed
        cy.get(howFarInAdvanceOfGoodsProvidedIsMOTOTaken_Ddl).click();
        cy.xpath(`//div[@role='presentation']//*[text()='${days} Days']`).click();
    }
    set_ReasonForMotoRenewal_Ddl(reason) { //temporary solution. Will be updated once component changed
        cy.get(reasonsForMoto_Ddl).click();
        cy.xpath(`//div[@role='presentation']//*[contains(text(), '${reason}')]`).click();
    }
    //#endregion

    //#region Check actions
    check_DoYouTakeMotoPayments_ToggleButton_Selection(isYesExpected) {
        if (isYesExpected) {
            let toggleButton = cy.xpath("//span[text()='Do you take Moto payments?']/..//span[contains(@class,'MuiButtonBase-root') and contains(@class,'Mui-checked')]");
            toggleButton.should('be.visible');
        }
        else {
            let toggleButton = cy.xpath("//span[text()='Do you take Moto payments?']/..//span[contains(@class,'MuiButtonBase-root') and not(contains(@class,'Mui-checked'))]");
            toggleButton.should('be.visible');
        }
    }
    check_ApplyMaxTicketValue_ToggleButton_Selection(isYesExpected) {
        if (isYesExpected) {
            let toggleButton = cy.xpath("//span[text()='Apply a max ticket value?']/..//span[contains(@class,'MuiButtonBase-root') and contains(@class,'Mui-checked')]");
            toggleButton.should('be.visible');
        }
        else {
            let toggleButton = cy.xpath("//span[text()='Apply a max ticket value?']/..//span[contains(@class,'MuiButtonBase-root') and not(contains(@class,'Mui-checked'))]");
            toggleButton.should('be.visible');
        }
    }
    check_AutoRenewRecurringTransactions_ToggleButton_Selection(isYesExpected) {
        if (isYesExpected) {
            let toggleButton = cy.xpath("//span[text()='Auto Renew/ recurring transactions?']/../..//span[contains(@class,'MuiButtonBase-root') and contains(@class,'Mui-checked')]");
            toggleButton.should('be.visible');
        }
        else {
            let toggleButton = cy.xpath("//span[text()='Auto Renew/ recurring transactions?']/../..//span[contains(@class,'MuiButtonBase-root') and not(contains(@class,'Mui-checked'))]");
            toggleButton.should('be.visible');
        }
    }
    check_WhatPercentOfTotalCardTurnoverIsMoto_Ddl_Visibility(expectToBeVisible) {
        let ddl = cy.get(whatPercentOfTotalCardTurnoverIsMoto_Ddl);

        if (expectToBeVisible) {
            ddl.should('be.visible');
        }
        else {
            ddl.should('not.be.visible');
        }
    }
    check_HowFarInAdvanceOfGoodsProvidedIsMotoTaken_Ddl_Visibility(expectToBeVisible) {
        let ddl = cy.get(howFarInAdvanceOfGoodsProvidedIsMOTOTaken_Ddl);

        if (expectToBeVisible) {
            ddl.should('be.visible');
        }
        else {
            ddl.should('not.be.visible');
        }
    }
    check_AutoRenewRecurringTransactions_ToggleButton_Visibility(expectToBeVisible) {
        let toggleButton = cy.get(autoRenewRecurringTransactions_ToggleButton);

        if (expectToBeVisible) {
            toggleButton.should('be.visible');
        }
        else {
            toggleButton.should('not.be.visible');
        }
    }
    check_ReasonForMotoRenewal_Ddl_Visibility(expectToBeVisible) {
        let ddl = cy.get(reasonsForMoto_Ddl);

        if (expectToBeVisible) {
            ddl.should('be.visible');
        }
        else {
            ddl.should('not.be.visible');
        }
    }
    //#endregion
}
export default step_6_3_transaction_profile_deposits_page;
export const step_6_3_TransactionProfile_Deposits_Page = new step_6_3_transaction_profile_deposits_page();
