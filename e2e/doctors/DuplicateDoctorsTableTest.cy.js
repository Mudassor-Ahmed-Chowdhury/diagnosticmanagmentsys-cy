import GlobalFunction from "../../pageobject/globalpage/GlobalFunction";
import DoctorsLocators from "../../pageobject/doctors/DoctorsLocators";
import DoctorsFunctions from "../../pageobject/doctors/DoctorsFunctions";

describe('Doctors table data', ()=>{

    const doctorsLocators= new DoctorsLocators();
    const doctorsFunctions = new DoctorsFunctions();
    const globalFunction = new GlobalFunction();

    beforeEach(()=>{
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));
        globalFunction.Adminuser();
        doctorsLocators.sidebarDoctors()
    });

    it('Check each row should be uniuqe between rest of rows of doctors table data', ()=>{
        doctorsFunctions.doctorsTableAllDataDuplicatevalidation();
    });

})