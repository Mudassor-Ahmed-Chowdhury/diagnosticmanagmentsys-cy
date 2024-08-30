import PathologyLocators from "../pathologypage/PathologyLocators";
import GlobalFunction from "../globalpage/GlobalFunction";
import BillsFunctions from "../billspage/BillsFunctions";
class PathologyFunctions{
    constructor() {
        this.pathologyLocators = new PathologyLocators();
        this.globalFunction = new GlobalFunction();
        this.billsFunctions = new BillsFunctions();
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
    }// Lab recived action cloumn checkbox

    checktheCollectSamplePatientsData(){
        this.pathologyLocators
            .collectSample()
            .typeInvoice('2408272')
            .searchButton()
        this.collectSampleDataFunction();
    }

    checkthatDuplicatesNumberOfReports(){
        return this.pathologyLocators.manageTestReportNumberOfReportsDuplicate()
            .then(($cells) => {
                const columnData = Array.from($cells).map(cell => cell.textContent.trim());
                const seen = new Set();
                const duplicates = new Set();
                columnData.forEach(item => {
                    if (seen.has(item)) {
                        duplicates.add(item);
                    } else {
                        seen.add(item);
                    }
                });
                if (duplicates.size > 0) {
                    cy.log(`Non-unique data found: ${[...duplicates].join(', ')}`);
                    expect(duplicates.size).to.be.lessThan(0, `Expected unique data, but found duplicates: ${[...duplicates].join(', ')}`);
                } else {
                    cy.log('All data in column is unique.');
                }
            });
        return this;
    }

    checkthatDuplicateStatus(){
        return this.pathologyLocators.manageTestReportNumberOfStatusDuplicate().then(($cells) => {
            const columnData = Array.from($cells).map(cell => cell.textContent.trim());
            const seen = new Set();
            const duplicates = new Set();
            columnData.forEach(item => {
                if (seen.has(item)) {
                    duplicates.add(item);
                } else {
                    seen.add(item);
                }
            });
            if (duplicates.size > 0) {
                cy.log(`Non-unique data found: ${[...duplicates].join(', ')}`);
                expect(duplicates.size).to.be.lessThan(0, `Expected unique data, but found duplicates: ${[...duplicates].join(', ')}`);
            } else {
                cy.log('All data in column is unique.');
            }
        });
        return this;

    }

    testReportVerifyApproveButton() {
        // Attempt to find and click the "Approve" button
        return cy.xpath("(//span[normalize-space()='Approve'])[1]", { timeout: 0 }).then(($approveBtn) => {
            if ($approveBtn.length > 0) {
                cy.wrap($approveBtn).click();
                cy.log('Clicked the Approve button');
                return this;
            }
            // If "Approve" button is not found, attempt to find and click the "Verify" button
            return cy.xpath("(//span[normalize-space()='Verify'])[1]").then(($verifyBtn) => {
                if ($verifyBtn.length > 0) {
                    cy.wrap($verifyBtn).click();
                    cy.log('Clicked the Verify button');
                } else {
                    cy.log('Neither Approve nor Verify button was found');
                }
                return this;
            });
        });
    }


}
export default PathologyFunctions;


