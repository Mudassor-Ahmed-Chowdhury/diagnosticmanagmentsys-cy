class ParameterLocators{
    setnameofUOM(uomname){
        return cy.xpath("//input[@placeholder='cells/�L']").click().click().type(uomname).wait(3000);
    }

    UOMsidebar(){
        return cy.xpath("(//span[normalize-space()='Units Of Measurement'])[1]").wait(2000).click();
    }

    createUOM(){
        return cy.xpath("//span[normalize-space()='Add UOM']").click().wait(2000);
    }

    UOMtype(){
        return cy.xpath("/html[1]/body[1]/div[5]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[2]/label[1]/select[1]")
            .click()
    }

    UOMsavebuttonforcreate(){
        return  cy.xpath("//span[normalize-space()='Save']")
    }

    tableUOM(){
        return cy.xpath("//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'][1]")
            .xpath("//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'][1]")
            .xpath("//tbody[1]/tr/td[2]")
    }

    sidebarTest(){
        return cy.xpath("(//a[@class='flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group'])[7]").click();
    }

    buttonAddtest(){
        return cy.xpath("(//span[normalize-space()='Add Test'])[1]").click();
    }

    sidebarTest(){
        return cy.get("a[href='http://demo.one0systems.com/parameters/tests']").click().wait(2000);
    }

    createADDTest(){
        cy.xpath("//span[normalize-space()='Add Test']").click().wait(2000);
        return this;
    }

    settestName(testname){
        cy.xpath("(//input[@placeholder='Complete Blood Count'])[1]").click().clear().type(testname).wait(2000);
        return this;
    }

    setshortName(shortname)
    {
        cy.xpath("(//input[@placeholder='CBC'])[1]").click().clear().type(shortname).wait(2000);
        return this;
    }

    selectDepartment(){
        return cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[2]/label[1]/select[1]"); // Select department randomly

    }

    setServicecharge(servicecharge){
        cy.xpath("//input[@placeholder='50']").click().clear().type(servicecharge).wait(2000);
        return this;
    }

    setNormaldeliveryhour(normaldeliveryhour){
        cy.xpath("(//input[@placeholder='4'])[1]").click().clear().type(normaldeliveryhour).wait(2000);
        return this;
    }

    setUrgentdeliveryhour(urgentdeliveryhour){
        cy.xpath("(//input[@placeholder='1'])[1]").click().clear().type(urgentdeliveryhour).wait(2000);
        return this;
    }

    selectSample(){
        cy.xpath("(//div[@class='multiselect-tags'])[1]").wait(2000); //Select randomly sample
        return this;
    }

    setRegularpurchaseamount(regularpurchaseamount){
        cy.xpath("//input[@placeholder='500']").click().clear().type(regularpurchaseamount).wait(2000);
        return this;
    }

    setRegularamount(regularamount){
        cy.xpath("//input[@placeholder='550']").click().clear().type(regularamount).wait(2000);
        return this;
    }

    setUrgentpuchaseamount(urgentpuchaseamount){
        cy.xpath("(//input[@placeholder='600'])[1]").click().clear().type(urgentpuchaseamount).wait(2000).click();
        return this;
    }

    setUrgentamount(urgentamount){
        cy.xpath("(//input[@placeholder='650'])[1]").click().clear().type(urgentamount).wait(2000);
        return this;
    }

    addtestSavebutton(){
        cy.xpath("(//span[normalize-space()='Save'])[1]").click();
        return this;
    }

    errorToastmessage(){
        cy.xpath("//span[normalize-space()='Error']").should('not.have.text', 'Unable to create');
        return this;
    }

    successToastmessage(){
        cy.xpath("/html[1]/body[1]/div[5]").should('be.visible');
        return this;
    }

    sqlDatabaseerror(){
        cy.xpath("(//div[@class='line-clamp-2'])[1]").should('not.be.visible'); //When regular amount 54456556
        return this;
    }

    checkErrorToastMessage() {
       cy.xpath("//span[normalize-space()='Error']")
            .should('not.have.text', 'Unable to create');
       return this;
    }

    checkSuccessToastMessage() {
        cy.xpath("(//div[@class='v-toast v-toast--top'])[1]")
            .should('be.visible');
        return this;
    }

    checkSqlDatabaseError() {
        cy.xpath("(//div[@class='line-clamp-2'])[1]")
            .should('not.be.visible'); // When regular amount is large
        return this;
    }

    checkRequiredFieldErrors() {
        cy.xpath("//span[contains(text(), 'This field is required')]")
            .should('be.visible');
        return this;
    }

    checkFieldValidationError(field, errorMessage) {
        cy.xpath(`//span[contains(text(), '${errorMessage}')]`)
            .should('be.visible');
        return this;
    }

    sidebarAttributegroup(){
        return cy.xpath("(//span[normalize-space()='Attribute Group'])[1]").click();
    }

    addArtibutegroupbutton(){
        return cy.xpath("//span[normalize-space()='Add Attribute Group']").click();
    }

    setAttributename(attributename){
        return cy.xpath("//input[@placeholder='enter attribute name']").click().clear().type(attributename).wait(2000);
    }

    attributegroupSavebutton(){
        return cy.xpath("//span[normalize-space()='Save']").click();
    }

    attributeTabledata(){
        return cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
            .xpath("//tbody[1]/tr/td[3]")

    }

    sidebarTestAdditionalitems(){
        return cy.xpath("(//span[normalize-space()='Test Additional Items'])[1]").click().wait(3000);
    }

    testaddtionalitemsTable(){
        return cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
            .xpath("//tbody[1]/tr/td[2]")
    }

    addtestadditionalitems(){
        cy.xpath("(//span[normalize-space()='Add Test Additional Item'])[1]").click().wait(2000);
    }

    setNameoftestadditionalitems(nameoftestadditionalitems){
        return cy.xpath("(//input[@placeholder='Needle'])[1]").click().clear().type(nameoftestadditionalitems).wait(2000);
    }

    setShortnameoftestadditionalitems(shortnameoftestadditinalitems){
       return  cy.xpath("(//input[@placeholder='nd'])[1]").click().clear().type(shortnameoftestadditinalitems).wait(2000);
    }

    selectTestoftestadditionalitems(){
        return cy.xpath("(//div[@class='multiselect-wrapper'])[1]")
            .xpath("(//input[@role='combobox'])[1]").click().type('L').clear();
    }

    selectMesurementunitoftestadditionalitems(){
        return cy.xpath("(//label[@class='w-1/2'])[1]")
            .xpath("(//select[@class='w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm border border-gray-300 rounded-lg'])[1]")

    }

    setPurchaseamountoftestadditionalitems(purchaseamount){
        return cy.xpath("(//input[@placeholder='500'])[1]").click().clear().type(purchaseamount);
    }

    setAmountoftestadditionalitems(amountoftestadditionalitems){
        return cy.xpath("(//input[@placeholder='550'])[1]").click().clear().type(amountoftestadditionalitems).wait(2000);
    }

    selectSampleoftestadditionalitems(){
        return cy.xpath("(//select[@class='w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm border border-gray-300 rounded-lg'])[2]");
    }

    saveButtonoftestadditionalitems(){
        return cy.xpath("(//span[normalize-space()='Add'])[1]").click();
    }

    clearIcon(){
        return cy.xpath("(//span[@class='multiselect-clear-icon'])[1]").click();
    } //Cross icon locator of select test from add test additional itmes form page


}
export default ParameterLocators;