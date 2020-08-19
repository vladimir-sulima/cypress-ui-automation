//#region Imports
import 'cypress-file-upload';
//#endregion

//#region Locators
let uploadFileDragAndDropArea = "//p[text()='Drag and drop a file here or click']/../..";
let uploadFile_InputField = "//p[text()='Drag and drop a file here or click']/../..//input";
let upload_Button = "#uploadBtn";
let uploadedFilesName = "//ul[@id='listItem']//p";

//#endregion
class step_8_upload_documents_page {
    //#region Click actions
    click_Upload_Button() {
        cy.server();
        cy.route("POST", "/qa/api/v1/documents/save/merchant/*/*").as("filesUploaded")

        let button = cy.get(upload_Button);
        button.click();

        cy.wait("@filesUploaded", { timeout: "10000" });
    }
    //#endregion

    //#region Set actions
    attachFiles(filesToAttach) {

        filesToAttach.forEach(file => {
            cy.xpath(uploadFile_InputField)
                .attachFile(file, { subjectType: 'drag-n-drop' });
        });
    }
    //#endregion

    //#region Check actions
    check_UploadedDocuments_Displayed(expectedFilesToUpload) {
        let uploadedFiles = cy.xpath(uploadedFilesName);

        uploadedFiles.should(($actualValues) => {
            expect($actualValues).to.have.length(expectedFilesToUpload.length)
        })

        uploadedFiles.each(($file) => {
            expect(expectedFilesToUpload).to.contains($file.text())
        })
    }
    check_UploadFile_DragAndDrop_Area_Displayed() {
        let area = cy.xpath(uploadFileDragAndDropArea);
        area.should("be.visible");
    }
    check_Upload_Button_Displayed() {
        let button = cy.get(upload_Button);
        button.should("be.visible");
    }
    //#endregion
}
export default step_8_upload_documents_page;
export const step_8_UploadDocuments_Page = new step_8_upload_documents_page();