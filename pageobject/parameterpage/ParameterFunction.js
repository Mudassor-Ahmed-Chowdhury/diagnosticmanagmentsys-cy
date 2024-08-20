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

                cy.wrap(randomItem).scrollIntoView().should('be.visible').click({ force: true });
            });

        cy.get('input[placeholder="500"]').scrollIntoView().should('be.visible').click({ force: true }); // Scroll the input field into view and click

        return this;
    }

    attributeName(attributename) {

        if (!attributename || attributename.trim() === '') {
            throw new Error('The name field is required.');
        }

        if (attributename.length < 2) {
            throw new Error('The name field must be at least 2 characters.');
        }

        const hasNumericChars = /\d/;
        if (hasNumericChars.test(attributename)) {
            throw new Error('Attribute name cannot contain numeric characters.');
        }

        if (attributename.length > 50) {
            throw new Error('Attribute name cannot be longer than 50 characters.');
        }

        const invalidSpecialChars = /[!@#$%^&*()_+=[\]{};':"\\|,.<>?`~]/;
        if (invalidSpecialChars.test(attributename)) {
            throw new Error('Attribute name contains invalid special characters.');
        }

        return this.pl.setAttributename(attributename);
    }   // Check if the input is provided, the input is at least 2 characters long, the input contains numeric characters, the input is longer than 50 characters, the input contains invalid special characters

    selectAttributegroup(){
        this.gf.clickParentContent('Parameter');
        this.pl.sidebarAttributegroup();
        return this;
    }

    addAtributegroupbutton(){
        this.pl.addArtibutegroupbutton();
        return this;
    }

    checkattributeTabledataunique(){
        this.pl.attributeTabledata().then((cells) => {
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

    //Select test from add test additionalitem's form page
    selectTest(){
        this.pl.selectTestoftestadditionalitems().click({force: true});
        cy.xpath("(//div[@id='undefined-dropdown'])[1]/ul//li")
            .then(($listItems) => {
                const items = $listItems.toArray();
                const randomIndex = Math.floor(Math.random() * items.length);
                const randomItem = items[randomIndex];
                const ariaLabel = Cypress.$(randomItem).attr('aria-label');

                cy.log(`Selected aria-label: ${ariaLabel}`);

                cy.xpath("(//div[@id='undefined-dropdown'])[1]").should('be.visible');

                cy.wrap(randomItem).scrollIntoView().should('be.visible').click({ force: true });
            });
        return this;
    }

    // selectMeasurement() {
    //     this.pl.selectMesurementunitoftestadditionalitems().then($select => {
    //         cy.log(`Element Tag: ${$select.prop('tagName')}`);
    //         if ($select.length) {
    //             const $options = $select.find('option');
    //             if ($options.length > 1) {
    //                 const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
    //                 const randomValue = $options.eq(randomIndex).val();
    //                 cy.wrap($select).select(randomValue);
    //                 const selectedText = $options.eq(randomIndex).text();
    //                 cy.log(`Selected Mesurement: ${selectedText}`);
    //             } else {
    //                 cy.log('No valid Mesurement Unit found to select');
    //             }
    //         } else {
    //             cy.log('Select element not found');
    //         }
    //     });
    //     return this;
    // }

    selectMeasurement(){
        this.pl.selectMesurementunitoftestadditionalitems().select("MM");
        return this ;
    } // Static measurement unit


    selectSampleoftestadditionalitems() {
        this.pl.selectSampleoftestadditionalitems().then($select => {
            cy.log(`Element Tag: ${$select.prop('tagName')}`);
            if ($select.length) {
                const $options = $select.find('option');
                if ($options.length > 1) {
                    const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1;
                    const randomValue = $options.eq(randomIndex).val();
                    cy.wrap($select).select(randomValue);
                    const selectedText = $options.eq(randomIndex).text();
                    cy.log(`Selected Sample: ${selectedText}`);
                } else {
                    cy.log('No valid Sample (test additional items) found to select');
                }
            } else {
                cy.log('Select element not found');
            }
        });
        return this;
    }



    selectTestadditionalItemsfromsidebar(){
        this.gf.clickParentContent('Parameter');
        this.pl.sidebarTestAdditionalitems();
        return this;
    }

    createTestadditionalitems(){
        this.pl.addtestadditionalitems();
        return this;
    }

    validaddtestadditionalitems(){
        this.pl.setNameoftestadditionalitems('Niddle Niddle Niddle');
        this.pl.setShortnameoftestadditionalitems('N N N');
        this.selectTest()
            .selectMeasurement()
            .selectSampleoftestadditionalitems();
        this.pl.setPurchaseamountoftestadditionalitems('500');
        this.pl.setAmountoftestadditionalitems('550');
        this.pl.saveButtonoftestadditionalitems();
    }

    invalidSampleoftestadditionalitems(){

        this.pl.setNameoftestadditionalitems('Niddle Niddle Niddle');
        this.pl.setShortnameoftestadditionalitems('N N N');
        this.selectTest()
            .selectMeasurement()
            .selectSampleoftestadditionalitems();
        this.pl.setPurchaseamountoftestadditionalitems('500');
        this.pl.setAmountoftestadditionalitems('550');
        this.pl.clearIcon();
        this.selectTest();
        this.pl.saveButtonoftestadditionalitems();
        this.pl.checkErrorToastMessage();

    }
}
export default ParameterFunction;