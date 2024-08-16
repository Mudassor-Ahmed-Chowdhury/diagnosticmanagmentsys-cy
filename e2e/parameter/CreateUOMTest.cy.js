import GlobalFunction from "../../pageobject/globalpage/GlobalFunction";
import ParameterFunction from "../../pageobject/parameterpage/ParameterFunction";

describe('Create UOM validation where login as a Admin', () => {
    const gf = new GlobalFunction();
    const pf = new ParameterFunction();

    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));
        gf.Adminuser();
    });

    it('Create UOM with valid data validations', () => {
        pf.validUOM();
    })

    it ('Create UOM with invalid data validation', () =>{
        pf.invalidUOM();
    })
});