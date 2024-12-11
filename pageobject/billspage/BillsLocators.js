import GlobalFunction from "../globalpage/GlobalFunction";

class BillsLocators {
    constructor() {
        this.gf = new GlobalFunction();
    };



    sidebarBills(){
            this.gf.clickParentContent('Bills');
            return this;
    }

    clickNewBill(){
         cy.xpath("(//span[normalize-space()='New Bill'])[1]").click();
        return this;
    }

    setSearchPatient(searchpatient){
        cy.xpath("(//input[contains(@class,'rounded-sm rtl:pl-0 rtl:pr-3.5')])[1]")
            .click().clear().type(searchpatient);
        return this;
    }

    clickZahir(){
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/ul[1]/li[1]/div[1]/div[1]/div[1]").click();
        return this;
    }


    setDoctorRefenrence(doctorreference){
        cy.xpath("//input[contains(@aria-placeholder,'Dr. Ejajul Islam')]").click().clear().type(doctorreference);
        return this;
    }

    doctorTestReference(){
        cy.xpath("//div[normalize-space()='Test']").click();
        return this;
    }

    setTest(test)
    {
        cy.xpath("(//input[contains(@aria-placeholder,'Complete Blood Count')])[1]").click().clear().type(test);
        return this;
    }

    clickLiverFunction() {
        cy.waitUntil(() => {
            return cy.xpath("//span[normalize-space()='Liver Function Tests (LFTs)']")
                .should('not.have.css', 'pointer-events', 'none')
                .click({ force: true });
        });
        return this;
    }


    testSample() {
        cy.xpath("(//select[contains(@class,'w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm border border-gray-300 rounded-lg')])[1]")
            .should('exist')
            .and('be.visible');

        cy.xpath("(//select[contains(@class,'w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm border border-gray-300 rounded-lg')])[1]")
            .select('Urine', { force: true });
        cy.wait(3000);

        return this;
    }


    testAddButton(){
        cy.xpath("(//span[normalize-space()='Add'])[1]").click();
        cy.wait(3000);
        return this;
    }

    deliveryType(){
        cy.xpath("(//select[@class='w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm border border-gray-300 rounded-lg'])[2]").click()
    }

    discountToggle(){
        cy.xpath("(//div[@class='flex-1 text-center text-blue-700'])[1]").click();
        return this;
    }

    collectPayment(){
        cy.xpath("(//span[normalize-space()='Collect Payment'])[1]").click();
        return this;
    }

    billsTable(){
        return cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
            .xpath("//tbody[1]/tr/td[4]");
        return this;
    }

    paymentCollect(){
        cy.xpath("(//span[normalize-space()='Payment Collect'])[1]").click();
        cy.wait(5000)
        return this;
    }

    setamountField(){
        cy.xpath("(//input[@class='w-[112px] text-right text-[18px] bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-2 text-sm'])[1]")
            .click();
    }

    cashRecepitBillNoData(){
        return cy.xpath("(//div[@class='px-2 py-1'])[1]")
            // .xpath("(//div)[68]")
            // .xpath("(//div)[69]")
        return this;
    }

    recentExecuteBillsInvoiceNo(){
        return cy.xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]");
        return this;
    }

}
export default BillsLocators;