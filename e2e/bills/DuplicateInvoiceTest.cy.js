import BillsLocators from "../../pageobject/billspage/BillsLocators";
import BillsFunctions from "../../pageobject/billspage/BillsFunctions";
import GlobalFunction from "../../pageobject/globalpage/GlobalFunction";

describe('Invoice duplicate', ()=>{

    const billsFunctions = new BillsFunctions();
    const billsLocators = new BillsLocators();
    const gf = new GlobalFunction();

    beforeEach(()=>{
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));
        gf.Adminuser();
        billsLocators.sidebarBills();
    });

    it('Invoice no duplicate validation',()=>{
        billsFunctions.checkInvoiceNoDuplicate();
    });
})