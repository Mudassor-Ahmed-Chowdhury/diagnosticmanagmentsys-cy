import ParameterFunction from "../../pageobject/parameterpage/ParameterFunction";

describe('Attribute Name Validation', () => {
    const pf = new ParameterFunction();

    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));

    });

    it('should throw an error if the name is not provided', () => {
        const fn = () => pf.attributeName('');
        expect(fn).to.throw('The name field is required.');
    });

    it('should throw an error if the name is too short', () => {
        const fn = () => pf.attributeName('A');
        expect(fn).to.throw('The name field must be at least 2 characters.');
    });

    it('should throw an error if the name contains numeric characters', () => {
        const fn = () => pf.attributeName('Attribute1');
        expect(fn).to.throw('Attribute name cannot contain numeric characters.');
    });

    it('should throw an error if the name is too long', () => {
        const longName = 'A'.repeat(51);
        const fn = () => pf.attributeName(longName);
        expect(fn).to.throw('Attribute name cannot be longer than 50 characters.');
    });

    it('should throw an error if the name contains invalid special characters', () => {
        const fn = () => pf.attributeName('Invalid@Name!');
        expect(fn).to.throw('Attribute name contains invalid special characters.');
    });

    it('should pass and return the name if all validations are met', () => {
        const validName = 'ValidName';
        const result = pf.attributeName(validName);
        expect(result).to.equal(validName);
    });
});
