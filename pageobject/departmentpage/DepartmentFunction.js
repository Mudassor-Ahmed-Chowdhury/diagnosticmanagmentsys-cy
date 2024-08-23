import GlobalFunction from "../globalpage/GlobalFunction";
import DepartmentLocators from "./DepartmentLocators";

class DepartmentFunction{
    constructor() {
        this.dl = new DepartmentLocators();
        this.gf = new GlobalFunction();
    };


    nameofdepartmentDataduplicate() {
        this.dl.departmenttableDataofname().then(($cells) => {
            const columnData = Array.from($cells).map(cell => {
                let normalized = cell.textContent.trim().toLowerCase();
                normalized = normalized.replace(/[^\w\s]/gi, '');
                normalized = normalized.replace(/\s+/g, ' ');
                normalized = normalized.replace(/\b(\w+)(\s+\1\b)+/g, '$1');
                normalized = normalized.replace(/(\b\S+\b)\s+\b\1\b/g, '$1');
                normalized = normalized.replace(/\b(\w+)\s+(\1\s*)+\b/g, '$1');

                return normalized;
            }); // Remove special characters, multiple spaces with a single space, repeated words or phrases using regex patterns

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
    } //Duplicate detection function


    //If search any data in search box then if data exist then show result else show epmty state
    searchBox(){
        this.dl.setSearchbyname('Test Departments')
        .searchByNameError();

    }

    validDatawithdepartment(){

        this.dl.setDepartmentname('x-ray Departments')
        .deparmentSavebutton()
        .successfulToastmessage().should('be.visible');
    }

    mandatoryfiledBlank(){

        this.dl.setDepartmentname('           ').deparmentSavebutton().unabletocreateToastmessage().should('be.visible')
        this.gf.checkFieldValidationError('department name', 'This field is required');

    }

    invalidDepartmentname(){
        this.dl.setDepartmentname('123');
    }

    invalidCharlimitofdepartmentname(){

        this.dl.setDepartmentname('Department'.repeat(51)).deparmentSavebutton();
        this.gf.checkFieldValidationError('department name', 'The department name field must not be greater than 50 characters.' )
    }

}
export default DepartmentFunction;