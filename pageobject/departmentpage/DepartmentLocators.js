import GlobalFunction from "../globalpage/GlobalFunction";

class DepartmentLocators{

    constructor() {
        this.gf = new GlobalFunction();
    };

    sidebarDepartment(){
        this.gf.clickParentContent('Departments');
        return this;
    }

    addDepartment(){
        return cy.xpath("(//span[normalize-space()='Add Department'])[1]").click();
        return this;
    }

    setDepartmentname(departmentName) {

        cy.xpath("(//input[@placeholder='Enter Department Name'])[1]").click().clear().type(departmentName, { delay: 100 }) // added a delay between keystrokes
        .then(($input) => {
                expect($input).to.have.value(departmentName); // assert the value after typing
            });
        // validate the department name after typing
        cy.wrap(departmentName).then((input) => {
            // check if the department name consists only of numeric or special characters
            if (/^[^a-zA-Z\s]*$/.test(input)) {
                throw new Error('Department name cannot consist entirely of numeric or special characters.');
            }
        });
        return this;
    }

    selectDepartmenthead(){
        return cy.xpath("(//select[@class='w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm border border-gray-300 rounded-lg'])[2]")
            .click();
        return this;
    }

    deparmentSavebutton() {
         cy.xpath("(//span[normalize-space()='Save'])[1]").as('btn').click();
        return this;
    }

    departmentEdit(){
        return cy.xpath("(//*[name()='svg'][@role='img'])[22]").click();
        return this;
    }

    departmenttableDataofname(){
        return cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
            .xpath("//tbody[1]/tr/td[2]");
        return this;
    }

    setSearchbyname(searchbyname){
        cy.xpath("(//input[@placeholder='Search by name'])[1]").click().clear().type(searchbyname);
        return this;
    }

    searchByNameError() {
        cy.wait(5000);
        cy.get("body div iframe")
            .its('0.contentDocument.body', { log: true })
            .should('be.visible')
            .then(($body) => {
                if ($body) {
                    throw new Error('Iframe body of SQL error should not be visible ');
                }
            })
        return this;
    }    // SQL database error when search any data


    unabletocreateToastmessage(){
        return cy.get('.v-toast__item');
        return this;
    }

    successfulToastmessage(){
        return cy.get('.v-toast__item');
        return this;
    }


}
export default DepartmentLocators;