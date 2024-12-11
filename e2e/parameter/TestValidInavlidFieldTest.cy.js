import GlobalFunction from "../../pageobject/globalpage/GlobalFunction";
import ParameterFunction from "../../pageobject/parameterpage/ParameterFunction";

describe('Duplicate UOM name should not exist in table', () => {
    const gf = new GlobalFunction();
    const pf = new ParameterFunction();

    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));
        gf.Adminuser();
        pf.selectTest()
    });

    it('Assuming all mandatory fields show "This field is required" error message', () => {
        pf.assumingallMandatoryfieldsshow();
    });

    it.only('Test case with valid data', () => {
        pf.testcasewithValiddata();
    });

    it('Invalid test case char limit', () =>{
        pf.invalidtestCharlimit();
    });

    it('Show an error if Department is not selected', () =>{
        pf.showanerrorifDepartmentisnotselected();
    });

    it('Show an error if sample is not selected', () =>{
        pf.showanerrorifDepartmentisnotselected();
    });

    it('Show an error for regular amount greater than allowed value', () =>{
        pf.showanerrorforRegularamountgreaterthanallowedvalue();
    });

    it('Show an SQLd atabase error message when a large regular amount is entered', () => {
        pf.showanSQLdatabaseerror();
    })

});