import GlobalFunction from "../../pageobject/globalpage/GlobalFunction";
import PathologyLocators from "../../pageobject/pathologypage/PathologyLocators";
import PathologyFunctions from "../../pageobject/pathologypage/PathologyFunctions";
import BillsLocators from "../../pageobject/billspage/BillsLocators";
import BillsFunctions from "../../pageobject/billspage/BillsFunctions";

describe('Sample', () => {

    const globalFunction = new GlobalFunction();
    const pathologyLocators = new PathologyLocators();
    const pathologyFunctions = new PathologyFunctions();
    const billsLocators = new BillsLocators();
    const billsFunctions = new BillsFunctions();
    let testCase;

    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));
        globalFunction.Adminuser();
        pathologyLocators.sidebarPathology().sidebarSamplesButton();

        // if (testCase) {
        //     switch (testCase) {
        //         case 'Collect sample patients data format should be accurate':
        //             cy.log('Running setup for Collect sample patients data format should be accurate');
        //             pathologyLocators.sidebarPathology().sidebarSamplesButton();
        //             break;
        //
        //         case 'Using valid data collect sample functionality check':
        //             cy.log('Running setup for Using valid data collect sample functionality check');
        //             billsLocators.sidebarBills().should('be.visible'); // Ensure the sidebar is visible
        //             break;
        //
        //         default:
        //             cy.log('No valid test case specified.');
        //     }
        // } else {
        //     cy.log('No test case assigned.');
        // }
    });

    it.only('Collect sample patients data format should be accurate', () => {
        // testCase = 'Collect sample patients data format should be accurate';
        pathologyLocators.sidebarPathology().sidebarSamplesButton();
        pathologyFunctions.checktheCollectSamplePatientsData();
    });

    it('Using valid data collect sample functionality check', () => {
        // testCase = 'Using valid data collect sample functionality check';

        billsLocators.sidebarBills();
        billsFunctions.validBills();
        pathologyLocators
            .sidebarPathology()
            .sidebarSamplesButton()
            .collectSample();
        cy.window().then((window) => {
            let billNo = window.localStorage.getItem('billNo');
            cy.log(`Retrieved Bill No: ${billNo}`);

            if (billNo && billNo.includes('/login')) {
                billNo = billNo.replace('/login', '').trim();
            }

            cy.log(`Modified Bill No: ${billNo}`);

            pathologyLocators.typeInvoice().type(billNo);
        });

        // // Search and select all checkboxes
        // pathologyLocators.searchButton().selectallcheckbox();
    });
});
