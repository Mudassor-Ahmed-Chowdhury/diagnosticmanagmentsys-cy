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

    });

    it.skip('Collect sample patients data format should be accurate', () => {
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
            pathologyLocators.searchButton();
            pathologyLocators.selectallcheckbox();
            pathologyLocators.generateLabelButton();
            pathologyLocators.markasCollectedButton();
            globalFunction.navigatedoubleBack();
            cy.wait(5000);

            cy.window().then((window) => {
                let billNo = window.localStorage.getItem('billNo');
                cy.log(`Retrieved Bill No: ${billNo}`);

                if (billNo && billNo.includes('/login')) {
                    billNo = billNo.replace('/login', '').trim();
                }

                cy.log(`Modified Bill No: ${billNo}`);
                pathologyLocators.searchByInvoice().click().clear().type(billNo).wait(5000);
                pathologyLocators.labNumberCollect()
                pathologyLocators.clickLabRecivedButton();
                pathologyLocators.reciveSampleButton();

                cy.window().then((window)=>{
                    let labNo = window.localStorage.getItem('labNo');
                    cy.log(`Retrived Lab No: ${labNo}`);

                    pathologyLocators.searchLabNumberField().type(labNo);
                })
                pathologyLocators.reciveSampleSearchButton();
                pathologyFunctions.selectallCheckboxForSampleReciveFunction();
                pathologyLocators.doneButton();
                pathologyLocators.confirmationPopUpYes();
                pathologyLocators.sidebarPathologyTestResult();
                pathologyLocators.testresultSearchByInvoice().type(billNo).wait(5000);
                pathologyLocators.clickOnTestReuslt();
                pathologyLocators.addResultButton();
                const inputText = 'Normal 45';
                pathologyLocators.setAllTableInput(inputText);
                pathologyLocators.resultentrySaveButton();
                pathologyLocators.sidebarTestReports();
                pathologyLocators.testReportSearchByInvoice().type(billNo).wait(5000);
                pathologyLocators.clickTestReport();
                });
            });

        });
    });


