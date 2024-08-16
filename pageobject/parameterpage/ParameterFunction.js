import ParameterLocators from "./ParameterLocators";
import GlobalFunction from "../globalpage/GlobalFunction";

class ParameterFunction{
    constructor() {
        this.pl = new ParameterLocators();
        this.gf = new GlobalFunction();
    };

    selectRandomUOMType() {
        cy.xpath("/html[1]/body[1]/div[5]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[2]/label[1]/select[1]")
            .then($select => {
                if ($select.length) {
                    const $options = $select.find('option');
                    if ($options.length > 1) {
                        const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
                        const randomValue = $options.eq(randomIndex).val();
                        cy.wrap($select).select(randomValue);
                        const selectedText = $options.eq(randomIndex).text();
                        cy.log(`Selected UOM Type: ${selectedText}`);
                    } else {
                        cy.log('No valid UOM types found to select.');
                    }
                } else {
                    cy.log('Select element not found.');
                }
            });
        return this;
    };




    validUOM() {
        this.selectUOM();
        this.pl.createUOM();
        this.pl.setnameofUOM('MM');
        this.selectRandomUOMType();
        this.pl.UOMsavebuttonforcreate().as('btn').should('be.visible').wait(2000).click();
        return this;
    };


     selectUOM(){
         this.gf.clickParentContent('Parameter');
         this.pl.UOMsidebar();
         return this;
    };

    invalidUOM(){
        this.selectUOM();
        this.pl.createUOM();
        this.pl.setnameofUOM('      ');
        this.selectRandomUOMType();
        this.pl.UOMsavebuttonforcreate().as('btn').should('be.visible').should('be.disabled');
        return this;
    };

    checkUniqueColumnData() {
        this.pl.tableUOM()
            .then((cells) => {
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
    };

    selectTest(){
        this.gf.clickParentContent('Parameter');
        this.pl.sidebarTest();
        return this;

    }

    assumingallMandatoryfieldsshow(){
        this.pl.createADDTest()
            .addtestSavebutton()
            .checkRequiredFieldErrors(); // Assuming all mandatory fields show "This field is required" error message
        return this;
    };

    testcasewithValiddata(){

        this.pl.createADDTest()
            .settestName("tet 002")
            .setshortName("kk")
        this.selectDepartmentfun()
            .selectSamplefun()
        this.pl.setRegularamount("500")
            .addtestSavebutton()
            //.checkSuccessToastMessage();
        return this;
    };

    invalidtestCharlimit(){
        this.pl.createADDTest()
            .settestName("V".repeat(51))
            .addtestSavebutton()
            .checkFieldValidationError('test name', 'The test name field must not be greater than 50 characters.');
        return this;
    };

    showanerrorifDepartmentisnotselected(){
        this.pl.createADDTest()
            .settestName("Test Name")
            .setshortName("VTN")
            .selectSample()
            .setRegularamount("500")
            .addtestSavebutton()
            .checkFieldValidationError('department', 'This field is required');
        return this;
    }; //show an error if Department is not selected

    showanerrorifSampleisnotselected(){
        this.pl.createADDTest()
            .settestName("Valid Test Name")
            .setshortName("VTN")
        this.selectDepartmentfun()
        this.pl.setRegularamount("500")
            .addtestSavebutton()
            .checkFieldValidationError('sample', 'This field is required');
        return this;
    }; //show an error if sample is not selected

    showanerrorforRegularamountgreaterthanallowedvalue(){
        this.pl.createADDTest()
            .settestName("Valid Test Name")
            .setshortName("VTN")
        this.selectDepartmentfun()
        this.pl.selectSample()
            .setRegularamount("1000000000")
            .addtestSavebutton()
            .checkFieldValidationError('regular amount', 'The regular amount field must not be greater than 999999999.');
        return this;

    }; //show an error for regular amount greater than allowed value

    showanSQLdatabaseerror(){
        this.pl.createADDTest()
            .settestName("Valid Test Name")
            .setshortName("VTN")
        this.selectDepartmentfun()
        this.pl.selectSample()
            .setRegularamount("54456556")
            .addtestSavebutton()
            .checkSqlDatabaseError();
        return this;
    };//show an SQLd atabase error message when a large regular amount is entered

    selectDepartmentfun(){
        this.pl.selectDepartment().then($select =>{
            if ($select.length) {
                const $options = $select.find('option');
                if ($options.length > 1) {
                    const reandomIndex = Math.floor(Math.random() * ($options.length -1)) + 1;
                    const randomValue = $options.eq(reandomIndex).val();
                    cy.wrap($select).select(randomValue);
                    const selectedText = $options.eq(reandomIndex).text();
                    cy.log(`Selected Department: ${selectedText}`);
                }
                else{
                    cy.log('No valid Deparments found to select');
                }
            }else {
                cy.log('Select element not found');
            }
        })
        return this;
    }

    // selectSamplefun(){
    //     this.pl.selectSample().then($select => {
    //         if ($select.length){
    //             const $options = $select.find()
    //         }
    //     })
    // }

    selectSamplefun(){

        cy.xpath("(//div[@role='combobox'])[1]").click({ force: true });  // Ensure dropdown is visible

        cy.xpath("(//div[@id='undefined-dropdown'])[1]/ul//li")
            .then(($listItems) => {
                const items = $listItems.toArray();
                const randomIndex = Math.floor(Math.random() * items.length);
                const randomItem = items[randomIndex];
                const ariaLabel = Cypress.$(randomItem).attr('aria-label');

                cy.log(`Selected aria-label: ${ariaLabel}`);

                // Ensure the dropdown is visible
                cy.xpath("(//div[@id='undefined-dropdown'])[1]").should('be.visible');

                // Scroll the item into view and then click
                cy.wrap(randomItem).scrollIntoView().should('be.visible').click({ force: true });
            });

        cy.get('input[placeholder="500"]').scrollIntoView().should('be.visible').click({ force: true }); // Scroll the input field into view and click

        return this;


    }
}
export default ParameterFunction;