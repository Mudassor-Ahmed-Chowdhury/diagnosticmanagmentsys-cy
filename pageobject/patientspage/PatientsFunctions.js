import GlobalFunction from "../globalpage/GlobalFunction";
import PatientsLocators from "../../pageobject/patientspage/PatientsLocators";

class PatientsFunctions{
    constructor() {
        this.patientslocators = new PatientsLocators();
        this.globalfunction = new GlobalFunction();
    };
    patientsidDuplicate() {
        this.patientslocators.patientsTable().then(($cells) => {
            const columnData = Array.from($cells).map(cell => cell.textContent.trim());
            const seen = new Set();
            const duplicates = new Set();
            columnData.forEach(item => {
                if (seen.has(item)) {
                    duplicates.add(item);
                } else {
                    seen.add(item);
                }
            });
            if (duplicates.size > 0) {
                cy.log(`Non-unique data found: ${[...duplicates].join(', ')}`);
                expect(duplicates.size).to.be.lessThan(0, `Expected unique data, but found duplicates: ${[...duplicates].join(', ')}`);
            } else {
                cy.log('All data in column is unique.');
            }
        });
        return this;
    }

    phonenumberValidate(patientsphoneNumber)
    {
        this.patientslocators.setpatientsPhoneNumber(patientsphoneNumber);

        const validPrefixes = ['017', '013', '014', '015', '018', '019', '016'];
        const isValid = patientsphoneNumber.length === 11 && validPrefixes.includes(phoneNumber.substring(0, 3));

        if (!isValid) {
            this.globalfunction.checkFieldValidationError('phone', 'The phone field format is invalid.');
        }
        return this;
    }
    setEmailAndVerifyErrors() {
        const invalidEmails = [
            { email: 'invalidemail.com', message: this.globalfunction.checkFieldValidationError('email', 'The email field format is invalid.') },
            { email: 'user@.com', message: this.globalfunction.checkFieldValidationError('email', 'The email field format is invalid.') },
            { email: 'user@domain', message: this.globalfunction.checkFieldValidationError('email', 'The email field format is invalid.') },
            { email: 'user@domain!com', message: this.globalfunction.checkFieldValidationError('email', 'The email field format is invalid.') },
            { email: '', message: this.globalfunction.checkFieldValidationError('email', 'The email field format is invalid.') },
            { email: 'user@@domain.com', message: this.globalfunction.checkFieldValidationError('email', 'The email field format is invalid.') },
            { email: 'user @domain.com', message: this.globalfunction.checkFieldValidationError('email', 'The email field format is invalid.') },
            { email: 'user@domain.c', message: this.globalfunction.checkFieldValidationError('email', 'The email field format is invalid.') }
        ];

        invalidEmails.forEach(({ email, message }) => {
            this.patientslocators.setpatientsEmail(email)  
                .should('have.value', email);
            this.globalfunction.checkFieldValidationError('email', message);
        });
        return this;
    }

    invalidDOB(){
        this.patientslocators.setpatientsYears(4567893)
            .setpatientsMonths(13)
            .setpatientsDays(56)
        const validationErrors = [
            { field: 'years', message: 'The years field format is invalid' },
            { field: 'months', message: 'The months field format is invalid' },
            { field: 'days', message: 'The days field format is invalid' }];
        validationErrors.forEach(error => {
            this.globalfunction.checkFieldValidationError(error.field, error.message);
        });
        return this;
    }


    validEditFunctionality(){
        this.patientslocators.setpatientsFristName('Mudassor Ahmed')
            .setpatientsLastName('Chowdhury')
            .setpatientsPhoneNumber('01311773124')
            .setpatientsEmail('amudassor@gmail.com')
            .setpatientsYears(1998)
            .setpatientsDays(31)
            .setpatientsMonths(8)
            .editpatientsUpdatebutton();
        this.globalfunction.successfulToastmessage();
        return this;
    }

    invalideditPatientsData(){
        this.patientslocators.setpatientsFristName('0123456789'.repeat(51))
            .setpatientsLastName('C')
            .setpatientsPhoneNumber('01311773124')
            .setpatientsEmail('amudassor@5.com')
            .setpatientsYears(199889565)
            .setpatientsDays(32)
            .setpatientsMonths(13)
            .editpatientsUpdatebutton();

        const validationErrors = [
            { field: 'first_name', message: 'The first name field format is invalid' },
            { field: 'last_name', message: 'The last name field must have at least 3 characters' },
            { field: 'phone', message: 'The phone field format is invalid.' },
            { field: 'email', message: 'The email field format is invalid' },
            { field: 'years', message: 'The years field format is invalid' },
            { field: 'months', message: 'The months field format is invalid' },
            { field: 'days', message: 'The days field format is invalid' }
        ];

        this.globalfunction.unabletocreateToastmessage();
        validationErrors.forEach(error => {
            this.globalfunction.checkFieldValidationError(error.field, error.message);
        });
        return this;
    }


}
export default PatientsFunctions;