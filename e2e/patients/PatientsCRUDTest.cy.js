import GlobalFunction from "../../pageobject/globalpage/GlobalFunction";
import PatientsFunctions from "../../pageobject/patientspage/PatientsFunctions";
import PatientsLocators from "../../pageobject/patientspage/PatientsLocators";

describe('patients CRUD functionality', () =>{
    const pat = new PatientsLocators();
    const paf = new PatientsFunctions();
    const gf = new GlobalFunction();

    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));
        gf.Adminuser();
        pat.sidebarPatients()
            .patientsEditbutton();
    });

    it('using valid patients data for edit',()=>{
        paf.validEditFunctionality();
    });

    it('using invalid patients data for edit', ()=>{
        paf.invalideditPatientsData();
    });

    it('verifing phone number validation', () => {
        paf.phonenumberValidate();
    });

    it('verifing email validation', () => {
        paf.setEmailAndVerifyErrors();
    });

    it('verifing DOB validation', () => {
        paf.invalidDOB()
    });

})