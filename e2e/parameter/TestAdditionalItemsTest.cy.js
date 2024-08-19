import ParameterFunction from "../../pageobject/parameterpage/ParameterFunction";
import GlobalFunction from "../../pageobject/globalpage/GlobalFunction";

describe('Attribute Name Validation', () => {
    const pf = new ParameterFunction();
    const gf = new GlobalFunction();

    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));
        gf.Adminuser();
        pf.selectTestadditionalItemsfromsidebar()
            .createTestadditionalitems();
    });

    it('using valid data to creating "Test Additional Items"', () =>{
        pf.validaddtestadditionalitems();
    });

    it ('without select sample the test additional items should not be created', () => {
        pf.invalidSampleoftestadditionalitems();
    })


});
