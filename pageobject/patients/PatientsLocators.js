import GlobalFunction from "../globalpage/GlobalFunction";

class PatientsLocators{

    constructor() {
        this.gf = new GlobalFunction();
    };

    sidebarDepartment(){
        this.gf.clickParentContent('Patients');
    }

    patientsTable(){
        cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
            .xpath("//tbody[1]/tr/td[2]")
    }

}
export default PatientsLocators;