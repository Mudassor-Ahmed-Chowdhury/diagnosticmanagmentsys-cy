import DepartmentFunction from "../../pageobject/departmentpage/DepartmentFunction";
import DepartmentLocators from "../../pageobject/departmentpage/DepartmentLocators";
import GlobalFunction from "../../pageobject/globalpage/GlobalFunction";


describe('create deparment functionality', ()=>{
    const df = new DepartmentFunction();
    const dl = new DepartmentLocators();
    const gf = new GlobalFunction();

    beforeEach(()=>{
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));
        gf.Adminuser();
        dl.sidebarDepartment().addDepartment();
    });


    it('add department functionality with valid data', () =>{
        df.validDatawithdepartment();
    });

    it('add department functionality with invalid data', () =>{
        df.invalidDepartmentname();
    });

    it('add department functionality with invalid char limit', ()=>{
        df.invalidCharlimitofdepartmentname();
    });

    it('add department functionality with mandatory field blank', ()=>{
        df.mandatoryfiledBlank();
    });

})