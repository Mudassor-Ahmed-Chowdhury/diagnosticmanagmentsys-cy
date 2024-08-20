import GlobalFunction from "../globalpage/GlobalFunction";
import DepartmentLocators from "./DepartmentLocators";

class DepartmentFunction{
    constructor() {
        this.dl = new DepartmentLocators();
        this.gf = new GlobalFunction();
    };

    nameofdepartmentDataduplicate(){
        this.dl.departmenttableDataofname().then((cells) => {
            const columnData = Array.from(cells).map(cell => cell.textContent.trim());
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
                expect(duplicates.size).to.be.lessThan(0, `Expected unique data, but all data was non unique: ${[...seen].join(', ')}`);
            } else {
                cy.log('All data in column 2 is unique.');
            }
        });
        return this;
    }

    //If search any data in search box then if data exist then show result else show epmty state
    searchBox(){
        this.dl.setSearchbyname('Test Departments');
        cy.wait(5000);
        this.dl.searchByNameError();

    }

    validDatawithdepartment(){

        this.dl.setDepartmentname('x-ray Departments');
        this.dl.deparmentSavebutton();
        this.dl.successfulToastmessage().should('be.visible');
    }

    mandatoryfiledBlank(){

        this.dl.setDepartmentname('           ');
        this.dl.deparmentSavebutton();
        this.dl.unabletocreateToastmessage().should('be.visible');
        this.gf.checkFieldValidationError('department name', 'This field is required');

    }

    invalidDepartmentname(){
        this.dl.setDepartmentname('123');
    }

    invalidCharlimitofdepartmentname(){

        this.dl.setDepartmentname('Department'.repeat(51))
        this.dl.deparmentSavebutton();
        this.gf.checkFieldValidationError('department name', 'The department name field must not be greater than 50 characters.' )
    }


}
export default DepartmentFunction;