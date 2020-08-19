///<reference types="Cypress"/>

//#region Locators
let createBusiness_Button = "//span[text()='Create business: ']/.."
let workItems_Card = "//div[text()='Work items']";
//#endregion

class reseller_home_page {

    //#region Click actions
    //#endregion

    //#endregion Set actions
    //#endregion

    //#region Check actions
    check_WorkItemsCard_Displayed() {
        cy.xpath(workItems_Card).should("be.visible");
    }
    check_CreateBusiness_Button_Displayed() {
        cy.xpath(createBusiness_Button).should("be.visible");
    }

    //#endregion
}

export default reseller_home_page;
export const reseller_HomePage = new reseller_home_page()