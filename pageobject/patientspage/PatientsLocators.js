import GlobalFunction from "../globalpage/GlobalFunction";

class PatientsLocators{

    constructor() {
        this.gf = new GlobalFunction();
    };

    sidebarPatients(){
        this.gf.clickParentContent('Patients');
        return this;
    }

    patientsTable(){
        return cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
            .xpath("//tbody[1]/tr/td[2]")
    }

    patientsEditbutton(){
        cy.xpath("(//*[name()='svg'][@role='img'])[16]").click();
        return this;
    }

    setpatientsFristName(patientsfristname){
         cy.xpath("(//input[@placeholder='First Name'])[1]").click().clear().type(patientsfristname)
            .should('not.have.value', /[^a-zA-Z\s]/);
         return this;
    }

    setpatientsLastName(patientslastname){
        cy.xpath("(//input[@placeholder='Last Name'])[1]").click().clear().type(patientslastname)
            .should('not.have.value', /[^a-zA-Z\s]/);
        return this;
    }

    setpatientsPhoneNumber(patientsphonenumber){
         cy.xpath("(//input[@placeholder='Phone Number'])[1]").click().clear().type(patientsphonenumber);
         return this;
    }

    setpatientsEmail(email){
        cy.xpath("(//input[@placeholder='Email'])[1]").click().clear().type(email);
        return this ;
    }

    setpatientsYears(patientsYears){
         cy.xpath("(//input[@placeholder='Years'])[1]").click().clear().type(patientsYears);
         return this;
    }

    setpatientsMonths(patientsMonts){
         cy.xpath("(//input[@placeholder='Months'])[1]").click().clear().type(patientsMonts);
         return this;
    }

    setpatientsDays(patientsDays){
        cy.xpath("(//input[@placeholder='Days'])[1]").click().clear().type(patientsDays);
        return this;
    }
    
    editpatientsUpdatebutton(){
        cy.xpath("(//span[normalize-space()='Update'])[1]").as('btn').click();
        return this;
    }

}
export default PatientsLocators;