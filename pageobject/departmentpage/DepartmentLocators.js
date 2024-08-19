import GlobalFunction from "../globalpage/GlobalFunction";

class DepartmentLocators{

    constructor() {
        this.gf = new GlobalFunction();
    };

    sidebarDepartment(){
        this.gf.clickParentContent('Department');
    }

    addDepartment(){
        return cy.xpath("(//span[normalize-space()='Add Department'])[1]").click();
    }

    setDepartmentname(departmentname){
        return cy.xpath("(//input[@placeholder='Enter Department Name'])[1]").click().clear().type(departmentname);
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
            .xpath("//tbody[1]/tr/td[2]")
    }


}
export default DepartmentLocators;