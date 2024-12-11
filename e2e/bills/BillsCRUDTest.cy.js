import BillsFunctions from "../../pageobject/billspage/BillsFunctions";
import BillsLocators from "../../pageobject/billspage/BillsLocators";
import GlobalFunction from "../../pageobject/globalpage/GlobalFunction";


describe('Bills CRUD Test',()=>{

    const billsFunctions = new BillsFunctions();
    const billsLocators = new BillsLocators();
    const gf = new GlobalFunction();

    beforeEach(()=>{
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));
        gf.Adminuser();
        billsLocators.sidebarBills();
    });

    it('Valid bills functionality', ()=> {
        billsFunctions.validBills();
    })


})