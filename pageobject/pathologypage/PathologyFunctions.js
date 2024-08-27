import PathologyLocators from "../pathologypage/PathologyLocators";
import GlobalFunction from "../globalpage/GlobalFunction";
class PathologyFunctions{
    constructor() {
        this.pathologyLocators = new PathologyLocators();
        this.globalFunction = new GlobalFunction();
    }

    collectSampleDataFunction(){
        this.pathologyLocators.collectSampleData().within(() => {
            cy.xpath(".//div[contains(text(), 'Invoice Number')]")
                .should('exist')
                .invoke('text')
                .then((text) => {
                    const invoiceNumber = text.replace('Invoice Number: ', '').trim();
                    cy.log(`Invoice Number: ${invoiceNumber}`);
                    window.localStorage.setItem('invoiceNumber', invoiceNumber);
                });// Collect and store Invoice Number

            cy.xpath("(//div)[51]").within(() => {
                cy.xpath("(//div[@class='flex space-x-3 justify-end'])[1]")
                    .then((elements) => {
                        const elementsText = elements.map((index, el) => Cypress.$(el).text()).get().join(', ');
                        cy.log('Lab Number:', elementsText);
                        window.localStorage.setItem('labNumber', elementsText);
                    });
            });// Collect and store Lab Number

            cy.xpath(".//div[contains(text(), 'Patient')]")
                .should('exist')
                .then((patient) => {
                    if (!patient.length) {
                        throw new Error('Patient element not found!');
                    }
                }); // Check if Patient exists

            cy.xpath(".//div[contains(text(), 'Age')]")
                .should('exist')
                .then((age) => {
                    if (!age.length) {
                        throw new Error('Age element not found!');
                    }
                });// Check if Age exists

            cy.xpath(".//div[contains(text(), 'Gender')]")
                .should('exist')
                .then((gender) => {
                    if (!gender.length) {
                        throw new Error('Gender element not found!');
                    }
                });// Check if Gender exists
        });
    }

    sampleReciveDataFunction(){
        this.pathologyLocators.sampleReciveData().within(()=>{
            cy.xpath(".//div[contains(text(),'Invoice Number')]")
                .should('exist').then((invoiceNumber)=>{
                if (!invoiceNumber.length){
                    throw new Error('Invoice Number not found')
                }
            })
        });
        cy.xpath(".//div[contains(text(), 'Patient')]")
            .should('exist')
            .then((patient) => {
                if (!patient.length) {
                    throw new Error('Patient element not found!');
                }
            }); // Check if Patient exists


        cy.xpath(".//div[contains(text(), 'Gender')]")
            .should('exist')
            .then((gender) => {
                if (!gender.length) {
                    throw new Error('Gender element not found!');
                }
            });// Check if Gender exists
    }

    labReciveSampleActionFunction(){
        this.pathologyLocators.labReciveSampleAction().each(($row) => {
            cy.wrap($row)
                .xpath("(//*[name()='svg'][@role='img'])[20]")
                .click({ force: true });
        });
    }

    selectallCheckboxForSampleReciveFunction(){
        this.pathologyLocators.selectallCheckboxForSampleRecive().each(($row) => {
            cy.wrap($row)
                .xpath("(//input[@id='red-checkbox'])[1]")
                .check({ force: true });
        });
    }

    validCollectSampleFunctionality(){
        this.pathologyLocators.collectSample()
            .setsearchInvoice('2408272')
            .searchButton()
            .selectallcheckbox()
        this.collectSampleDataFunction()

    }

}
export default PathologyFunctions;


