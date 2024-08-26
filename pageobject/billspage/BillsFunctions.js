import BillsLocators from "../billspage/BillsLocators";
class BillsFunctions{

    constructor() {
        this.billlocators = new BillsLocators();
    };

    checkInvoiceNoDuplicate() {
        this.billlocators.billsTable().then(($cells) => {
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
    };

    // selectTestSampleBaseOnTest() {
    //     this.billlocators.testSample().then($select => {
    //         const $options = $select.find('option');  // Check if there are options available
    //         if ($options.length > 1) {
    //             const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1; // Choose a random option from the dropdown
    //             const randomValue = $options.eq(randomIndex).val();
    //             cy.wrap($select).select(randomValue);
    //             const selectedText = $options.eq(randomIndex).text();
    //             cy.log(`Selected Element Type: ${selectedText}`);
    //         } else {
    //             cy.log('No valid Element types found to select.');
    //             return this;
    //         }
    //     })
    // }


    selectTestSampleBaseOnTest() {
        this.billlocators.testSample().then($select => {
            const $options = $select.find('option');  // Check if there are options available
            if ($options.length > 1) {
                const randomIndex = Math.floor(Math.random() * ($options.length - 1)) + 1; // Choose a random option from the dropdown
                const randomValue = $options.eq(randomIndex).val();

                // Use the .select() command to change the value of the dropdown
                cy.wrap($select).select(randomValue).then(() => {
                    const selectedText = $options.eq(randomIndex).text();
                    cy.log(`Selected Element Type: ${selectedText}`);
                });
            } else {
                cy.log('No valid Element types found to select.');
                return this;
            }
        });
    }





    validBills(){
        this.billlocators.clickNewBill()
            .setSearchPatient('Zahirul')
            .clickZahir()
            .setDoctorRefenrence('Test')
            .doctorTestReference()
            .setTest('Liver Function Test')
            .clickLiverFunction()
            .testSample()
            .testAddButton()
            // //.collectPayment()
            // .paymentCollect()

    }


}
export default BillsFunctions;