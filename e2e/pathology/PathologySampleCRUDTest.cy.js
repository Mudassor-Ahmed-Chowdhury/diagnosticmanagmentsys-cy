import GlobalFunction from "../../pageobject/globalpage/GlobalFunction";
import PathologyLocators from "../../pageobject/pathologypage/PathologyLocators";
import PathologyFunctions from "../../pageobject/pathologypage/PathologyFunctions";

describe('', ()=>{

    const globalFunction = new GlobalFunction();
    const pathologyLocators =new PathologyLocators();
    const pathologyFunctions = new PathologyFunctions();

    beforeEach(() =>{
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));
        globalFunction.Adminuser();
        pathologyLocators.sidebarPathology();
    });

    it('Collect Sample Recived', ()=>{

     pathologyFunctions.validCollectSampleFunctionality();

    })
})