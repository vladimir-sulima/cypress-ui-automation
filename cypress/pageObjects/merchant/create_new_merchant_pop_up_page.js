//#region Imports
///<reference types="Cypress"/>


//#endregion

//#region Locators
let name_InputField = "//input[@id='textFieldName']";
let create_Button = "//button[@id='createButtonCreateMerchant']";
let cancel_Button = "//button[@id='cancelButtonCreateMerchant']";
//#endregion

class create_new_merchant_pop_up_page {


    //#region Click actions
    click_Create_Button() {
        cy.server();
        cy.route('GET', 'qa/api/v1/merchants').as('createNewMerchant')
        let button = cy.xpath(create_Button);
        button.click();

        cy.wait('@createNewMerchant');
    }
    click_Cancel_Button() {
        let button = cy.xpath(cancel_Button);
        button.click();
    }
    //#endregion

    //#region Set actions
    set_Name_InputField(newMerchantName) {
        let inputField = cy.xpath(name_InputField);
        inputField.type(newMerchantName);
    }
    //#endregion

    //#region Check actions
    //#endregion
}

export default create_new_merchant_pop_up_page;
export const create_newMerchant_PopUpPage = new create_new_merchant_pop_up_page()
