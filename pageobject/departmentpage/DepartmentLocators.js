import GlobalFunction from "../globalpage/GlobalFunction";

class DepartmentLocators{

    constructor() {
        this.gf = new GlobalFunction();
    };

    sidebarDepartment(){
        this.gf.clickParentContent('Departments');
    }

    addDepartment(){
        return cy.xpath("(//span[normalize-space()='Add Department'])[1]").click();
    }

    setDepartmentname(departmentname){
        return cy.xpath("(//input[@placeholder='Enter Department Name'])[1]").click().clear().type(departmentname)
            .should('not.have.value', /[^a-zA-Z\s]/);
        
    }

    selectDepartmenthead(){
        return cy.xpath("(//select[@class='w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm border border-gray-300 rounded-lg'])[2]")
            .click();
    }

    deparmentSavebutton() {
        return cy.xpath("(//span[normalize-space()='Save'])[1]").click();
    }

    departmentEdit(){
        return cy.xpath("(//*[name()='svg'][@role='img'])[22]").click();
    }

    departmenttableDataofname(){
        return cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
            .xpath("//tbody[1]/tr/td[2]");

    }

    setSearchbyname(searchbyname){
        return cy.xpath("(//input[@placeholder='Search by name'])[1]").click().clear().type(searchbyname);
    }

    searchByNameError() {
        cy.get("body div iframe")
            .its('0.contentDocument.body', { log: true })
            .should('be.visible')
            .then(($body) => {
                if ($body) {
                    throw new Error('Iframe body of SQL error should not be visible ');
                }
            })
    }    // SQL database error when search any data


    unabletocreateToastmessage(){
        return cy.get('.v-toast__item');
    }

    successfulToastmessage(){
        return cy.get('.v-toast__item');
    }


}
export default DepartmentLocators;