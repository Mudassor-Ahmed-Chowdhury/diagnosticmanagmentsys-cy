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
    }

}
export default BillsFunctions;