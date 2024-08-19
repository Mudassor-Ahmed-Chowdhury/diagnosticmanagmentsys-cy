import GlobalFunction from "../../pageobject/globalpage/GlobalFunction";
import ParameterFunction from "../../pageobject/parameterpage/ParameterFunction";

describe('Duplicate UOM name should not exist in table', () => {
    const gf = new GlobalFunction();
    const pf = new ParameterFunction();

    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));
        gf.Adminuser();
    });

    it('Duplicate data should not exist', () => {
        pf.selectUOM();
        // pf.duplicateUOMname();
        pf.checkUniqueColumnData()
    })

})