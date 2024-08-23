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
        cy.xpath("(//button[@class='text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 !rounded-full text-sm px-4 py-2 inline-flex items-center'])[1]")
            .xpath("(//span[normalize-space()='New Bill'])[1]").click();
        return this;
    }

    setSearchPatient(searchpatient){
        cy.xpath("(//input[contains(@class,'rounded-sm rtl:pl-0 rtl:pr-3.5')])[1]")
            .click().clear().type(searchpatient);
        return this;
    }

    setDoctorRefenrence(doctorreference){
        cy.xpath("//input[contains(@aria-placeholder,'Dr. Ejajul Islam')]").click().clear.type(doctorreference);
        return this;
    }

    setTest(test)
    {
        cy.xpath("(//input[contains(@aria-placeholder,'Complete Blood Count')])[1]").click().clear().type(test);
        return this;
    }

    testSample(){
        cy.xpath("(//select[contains(@class,'w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm border border-gray-300 rounded-lg')])[1]").click();
        return this;
    }
    testAddButton(){
        cy.xpath("(//button[contains(@class,'text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 !rounded-full text-sm px-4 py-2 inline-flex items-center grow')])[1]")
            .xpath("(//div[contains(@class,'ml-2')])[1]").click();
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
        cy.xpath("(//span[normalize-space()='Collect Payment'])[1]").click()
    }

    billsTable(){
        return cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
            .xpath("//tbody[1]/tr/td[4]");
        return this;
    }

}
export default BillsLocators;