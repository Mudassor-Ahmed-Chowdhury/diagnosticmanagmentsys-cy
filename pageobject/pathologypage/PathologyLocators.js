import GlobalFunction from "../globalpage/GlobalFunction";

class PathologyLocators{

    constructor() {
        this.globalFunction = new GlobalFunction();
    }

    sidebarPathology(){
        this.globalFunction.clickParentContent('Pathology');
        return this;
    }

    samplesButton(){
        return cy.xpath("(//span[normalize-space()='Samples'])[1]").as('btn').click();
        return this;
    }

    collectSample(){
        cy.waitUntil(()=>{
            return cy.xpath("(//span[normalize-space()='Collect Sample'])[1]").as('btn').click();
        });
        return this;
    }

    setsearchInvoice(searchinvoise){
        return  cy.xpath("(//input[@placeholder='Ex: 2312031'])[1]").click().clear().type(searchinvoise);
        return  this;
    }

    searchButton(){
         cy.xpath("(//span[normalize-space()='Search'])[1]").click();
         return this;


    }

    printAllLabel(){
        return cy.xpath("(//span[normalize-space()='Print All Label'])[1]").click();
        return this;
    }

    selectCheckbox(){
        return cy.xpath("(//label[@class='flex gap-3 items-center justify-start'])[1]").click();
        return this;
    } // Collect sample checkbox

    // selectallcheckbox(){
    //     cy.xpath("(//table[@class='w-full text-sm text-left text-gray-500 dark:text-gray-400 table mb-4'])[1]")
    //         .xpath("//tbody[1]/tr/td[4]").each(($row) => {
    //         // Within each row, find the checkbox and check it
    //         cy.wrap($row)
    //             .xpath("(//label[@class='flex gap-3 items-center justify-start'])[1]")
    //             .xpath("(//input[@class='w-4 h-4 rounded bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'])[1]")
    //             .check({force: true})

    selectallcheckbox() {
        return cy.xpath("(//table[@class='w-full text-sm text-left text-gray-500 dark:text-gray-400 table mb-4'])[1]//tbody[1]/tr/td[4]").each(($row) => {
            cy.wrap($row)
                .xpath(".//label[@class='flex gap-3 items-center justify-start']//input[@class='w-4 h-4 rounded bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500']")
                .check({ force: true });
            return this;
        });
    } //Single Checkbox in single row

    generateLabelButton(){
        return cy.xpath("//span[normalize-space()='Generate Label']").as('btn').click();
        return this;
    }

    markasCollectedButton(){
        return cy.xpath("(//span[normalize-space()='Mark as Collected'])[1]").as('btn').click();
        return this;
    }

    // collectSampleData() {
    //     cy.xpath("(//div[@class='flex justify-between bg-[#EFF6FF] space-x-4 p-3 rounded-lg mb-8 text-sm'])[1]")
    //         .within(() => {
    //             cy.xpath(".//div[contains(text(), 'Invoice Number')]")
    //                 .should('exist')
    //                 .invoke('text')
    //                 .then((text) => {
    //                     const invoiceNumber = text.replace('Invoice Number: ', '').trim();
    //                     cy.log(`Invoice Number: ${invoiceNumber}`);
    //                     window.localStorage.setItem('invoiceNumber', invoiceNumber);
    //                 }); // Check if Invoice Number exists and store it in local storage
    //
    //             cy.xpath(".//div[contains(text(), 'Patient')]")
    //                 .should('exist')
    //                 .then((patient) => {
    //                     if (!patient.length) {
    //                         throw new Error('Patient element not found!');
    //                     }
    //                 });// Check if Patient exists, if not, throw an error
    //
    //             cy.xpath(".//div[contains(text(), 'Age')]")
    //                 .should('exist')
    //                 .then((age) => {
    //                     if (!age.length) {
    //                         throw new Error('Age element not found!');
    //                     }
    //                 }); // Check if Age exists, if not, throw an error
    //
    //             cy.xpath(".//div[contains(text(), 'Gender')]")
    //                 .should('exist')
    //                 .then((gender) => {
    //                     if (!gender.length) {
    //                         throw new Error('Gender element not found!');
    //                     }
    //                 }); // Check if Gender exists, if not, throw an error
    //         });
    // }

    // labNumberCollect(){
    //     cy.xpath("(//div)[51]").within(() => {
    //         cy.xpath("(//div[@class='flex space-x-3 justify-end'])[1]")
    //             .then((elements) => {
    //                 const elementsText = elements.map((index, el) => Cypress.$(el).text()).get().join(', ');
    //                 cy.log('Elements Text:', elementsText);
    //                 cy.wrap(elementsText).then((text) => {
    //                     window.localStorage.setItem('Lab number', text);
    //                 });
    //             });
    //     });
    // }

    collectSampleData() {
       return  cy.xpath("(//div[@class='flex justify-between bg-[#EFF6FF] space-x-4 p-3 rounded-lg mb-8 text-sm'])[1]");
       return this;

    }


    reciveSample(){
        return cy.xpath("(//span[normalize-space()='Receive Sample'])[1]").as('btn').click();
        return this;
    }

    setreciveSampleSearchFiled(labnumber){
        return cy.xpath("(//input[@placeholder='2312031'])[1]").click().clear().type(labnumber);
        return this;
    }

    reciveSampleSearchButton(){
        return cy.xpath("(//span[normalize-space()='Search'])[1]").as('btn').click();
        return this;
    }

    sampleReciveData(){
        return cy.xpath("(//div[@class='text-medium p-3 mt-2 bg-gray-100 flex gap-9'])[1]");
        return this;

    }

    selectallCheckboxForSampleRecive(){
        return cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]").xpath("//tbody[1]/tr/td[8]");
        return this;
    }

    doneButton(){
        return cy.xpath("(//span[normalize-space()='Done'])[1]").as('btn').click();
        return this;
    }// Recive Sample Done Button (after fill up check box of pending then the done button visible)

    confirmationPopUpYes(){
        return cy.xpath("(//span[normalize-space()='Yes'])[1]").as('btn').click();
        return this;
    }// Is this button recive by lab > yes button

    labReciveSampleAction(){
        return cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
            .xpath("//tbody[1]/tr/td[7]");
        return this;
    }


    setAllTableInput(alltableinput) {
        return cy.xpath("//table//input").click().clear().type(alltableinput)
            .should((input) => {
                const value = input[0].value;
                expect(value).to.match(/^[a-zA-Z\s]*$/); // only allows letters and spaces
                expect(value).to.not.match(/[~@!#$%^&*()_+]+/); // disallow specific special characters
            });
        return this;
    }


    resultentrySaveButton(){
        return cy.xpath("(//span[normalize-space()='Save'])[1]").as('btn').click();
        return this;
    }







}
export default PathologyLocators;


