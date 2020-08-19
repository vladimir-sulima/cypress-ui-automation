//#region Imports
///<reference types="Cypress"/>
//#endregion

//#region Locators
let gateway_CheckBox = "#gateway_CheckBox";
let myPayApp_CheckBox = "#myPayApp_CheckBox";
let virtualTerminal_CheckBox = "#virtualTerminal_CheckBox";
let myEcomm_CheckBox = "#myEcomm_CheckBox";
let cardMachine_CheckBox = "#cardMachine_CheckBox";

//#endregion
class step_7_product_required_page {

    //#region Click actions
    //#endregion

    //#region Set actions
    set_Gateway_CheckBox(gateway) {
        let inputField = cy.get(gateway_CheckBox);
        if (gateway.includes('Yes')) {
            inputField.click()
        }
    }
    set_MyPayApp_CheckBox(myPayApp) {
        let inputField = cy.get(myPayApp_CheckBox);
        if (myPayApp.includes('Yes')) {
            inputField.click()
        }
    }
    set_VirtualTerminal_CheckBox(virtualTerminal) {
        let inputField = cy.get(virtualTerminal_CheckBox);
        if (virtualTerminal.includes('Yes')) {
            inputField.click()
        }
    }
    set_MyEcomm_CheckBox(myEcomm) {
        let inputField = cy.get(myEcomm_CheckBox);
        if (myEcomm.includes('Yes')) {
            inputField.click()
        }
    }
    set_CardMachine_CheckBox(cardMachine) {
        let inputField = cy.get(cardMachine_CheckBox);
        if (cardMachine.includes('Yes')) {
            inputField.click()
        }
    }

    //#endregion

    //#region Check actions
    check_Gateway_CheckBox_Displayed() {

        let inputField = cy.get(gateway_CheckBox);
        inputField.should('be.visible');
    }
    check_MyPayApp_CheckBox_Displayed() {

        let inputField = cy.get(myPayApp_CheckBox);
        inputField.should('be.visible');
    }
    check_VirtualTerminal_CheckBox_Displayed() {

        let inputField = cy.get(virtualTerminal_CheckBox);
        inputField.should('be.visible');
    }
    check_MyEcomm_CheckBox_Displayed() {

        let inputField = cy.get(myEcomm_CheckBox);
        inputField.should('be.visible');
    }
    check_CardMachine_CheckBox_Displayed() {

        let inputField = cy.get(cardMachine_CheckBox);
        inputField.should('be.visible');
    }


    //#endregion
}
export default step_7_product_required_page;
export const step_7_ProductRequired_Page = new step_7_product_required_page()