import GlobalFunction from "../globalpage/GlobalFunction";

class PathologyLocators{

    constructor() {
        this.globalFunction = new GlobalFunction();
    }

    sidebarPathology(){
        this.globalFunction.clickParentContent('Pathology');
        return this;
    }

    sidebarSamplesButton(){
        cy.xpath("(//span[normalize-space()='Samples'])[1]").click();
        return this;
    }

    samplesButton(){
        return cy.xpath("(//span[normalize-space()='Samples'])[1]").as('btn').click();
        return this;
    }

    collectSample() {
        return cy.xpath("(//span[normalize-space()='Collect Sample'])[1]").as('btn').click();
        return this;
    }

    typeInvoice(){
        return cy.xpath("(//input[@placeholder='Ex: 2312031'])[1]")
            .click()
            .clear()
        return  this;
    }

    searchButton(){
         return  cy.xpath("(//span[normalize-space()='Search'])[1]").click();
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
        cy.xpath("(//table[@class='w-full text-sm text-left text-gray-500 dark:text-gray-400 table mb-4'])[1]//tbody[1]/tr/td[4]").each(($row) => {
            cy.wrap($row)
                .xpath(".//label[@class='flex gap-3 items-center justify-start']//input[@class='w-4 h-4 rounded bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500']")
                .check({ force: true });
        });
        return this;
    } //Single Checkbox in single row

    generateLabelButton(){
        return cy.xpath("//span[normalize-space()='Generate Label']").as('btn').click();
        return this;
    }

    markasCollectedButton(){
        return cy.xpath("(//span[normalize-space()='Mark as Collected'])[1]").as('btn').click();
        return this;
    }

    labNumberCollect() {
        cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
            .within(() => {
                cy.xpath("//tbody/tr/td[3]").invoke('text').then((labNo) => {
                    const trimmedLabNo = labNo.replace(/[^0-9]/g, '').trim(); // Keep only numeric characters
                    cy.log(`Lab No: ${trimmedLabNo}`);
                    cy.window().then((win) => {
                        win.localStorage.setItem('labNo', trimmedLabNo);
                    });
                });
            });
    }//this lab no for single and multiple test not for multiple test

    collectSampleData() {
         cy.xpath("(//div[@class='flex justify-between bg-[#EFF6FF] space-x-4 p-3 rounded-lg mb-8 text-sm'])[1]");
       return this;

    }


    reciveSampleButton(){
         cy.xpath("(//span[normalize-space()='Receive Sample'])[1]").as('btn').click();
        return this;
    }

    searchLabNumberField(){
        return cy.xpath("(//input[@placeholder='2312031'])[1]").click().clear();
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
        cy.xpath("//table//input").as('tableInput').wait(5000).click();
        cy.get('@tableInput').clear().type(alltableinput).then(($input) => {
            const value = $input[0].value;
            expect(value).to.match(/^[a-zA-Z0-9\s]*$/)
            expect(value).to.not.match(/[~@!#$%^&*()_+]+/);
        });

        return this;
    }



    resultentrySaveButton(){
        return cy.xpath("(//span[normalize-space()='Save'])[1]").as('btn').click();
        return this;
    }

    clickLabRecivedButton(){
        cy.xpath("(//div[@class='cursor-pointer inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'])[1]").click();
        return this;
    }

    searchByInvoice(){
        return cy.xpath("(//input[@placeholder='Search by Invoice'])[1]").click().clear();
        return this;
    }

    collectSamplesBackground(){
        cy.xpath("(//div)[44]").click();
        return this;

    }

    testresultSearchByInvoice(){
        return cy.xpath("(//input[@placeholder='Search by Invoice Number'])[1]").click().clear();
        return this;
    }

    sidebarPathologyTestResult(){
        return cy.xpath("(//span[normalize-space()='Test Results'])[1]").click();
        return this;
    }

    clickOnTestReuslt(){
        return cy.xpath("//tr[@class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 border cursor-pointer']//td[1]").wait(5000).click();
        return this;
    }

    addResultButton(){
        return cy.xpath("(//span[normalize-space()='Add Result'])[1]").as('btn').click();
        return this;
    }

    testReportSearchByInvoice(){
        return cy.xpath("(//input[@placeholder='Search By Invoice Number'])[1]").click().clear();
        return this;
    }

    sidebarTestReports(){
        cy.xpath("//span[normalize-space()='Test Reports']").click();
        return this;
    }

    clickTestReport(){
        return cy.xpath("//tr[@class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 border cursor-pointer']//td[1]").wait(5000).click();
        return this;
    }// for single bill

    testReportDepartmentDropdown() {
        // Get the array of options, filtering out disabled ones
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/label[1]/select[1]/option[not(@disabled)]")
            .then(($dropdown) => {
                const randomOption = Math.floor(Math.random() * $dropdown.length);
                // Select option from dropdown
                cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/label[1]/select[1]").select(`${$dropdown[randomOption].innerText}`);
                cy.log(`Random option selected is ${$dropdown[randomOption].innerText}`);
            });
        return this;
    }



    testReportCheckedByDropdown(){
        // Get the array of options, filtering out disabled ones
        cy.xpath("(/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/label[1]/select[1]/option[not(@disabled)])")
        .then(($dropdown)=>{
            const randomOption = Math.floor(Math.random() * $dropdown.length);
            //Select option from dropdown
            cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/label[1]/select[1]").select(`${$dropdown[randomOption].innerText}`);
            cy.log(`Random option selected is ${$dropdown[randomOption].innerText}`);
        })
        return this;
    }

    testReportApproveButton(){
        cy.xpath("(//span[normalize-space()='Approve'])[1]").as('btn').click();
    return this;
    }

    testReportVerifyButton(){
        cy.xpath("(//span[normalize-space()='Verify'])[1]").as('btn').click();
        return this;
    }

    manageTestReport() {
        cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
            .xpath("//tbody/tr")
            .then(($rows) => {
                const rowCount = $rows.length; //Total Number of rows
                const randomIndex = Math.floor(Math.random() * rowCount);
                cy.wrap($rows[randomIndex]).click();
            });
    }

    manageTestReportNumberOfReportsDuplicate(){
        return cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
            .xpath("//tbody/tr/td[5]")
        return this;
    }

    manageTestReportNumberOfStatusDuplicate(){
        return cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
            .xpath("//tbody/tr/td[6]")
        return this;
    }

}
export default PathologyLocators;


