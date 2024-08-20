import PatientsLocators from "../../pageobject/patients/PatientsLocators";
import GlobalFunction from "../../pageobject/globalpage/GlobalFunction";
import PatientsFunction from"../../pageobject/patients/PatientsFunctions"


describe('', () =>{
    const pat = new PatientsLocators();
    const paf = new PatientsFunction();
    const gf = new GlobalFunction();

    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));
        gf.Adminuser();
        pat.sidebarPatients();
    });

    it('should not allow any duplicate patient id ', () => {
        paf.patientsidDuplicate();

    });
})