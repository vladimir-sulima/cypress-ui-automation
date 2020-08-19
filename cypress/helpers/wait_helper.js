//#region Imports
///<reference types="Cypress"/>
//#endregion

//#endregion Locators
let spinner = "//div[@role='progressbar']"
//#endregion
class wait_helper {

        waitForSpinnerNotDisplayed() {
                cy.xpath(spinner).should('not.be.visible')
        }

}

export default wait_helper;
export const waitHelper = new wait_helper()
