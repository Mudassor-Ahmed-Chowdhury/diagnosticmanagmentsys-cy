class PathologyLocators{

    sidebarPathology(){
        this.gf.clickParentContent('Pathology');
        return this;
    }

    samplesButton(){
        cy.xpath("(//span[normalize-space()='Samples'])[1]").as('btn').click();
    }

    collectSample(){
        cy.waitUntil(()=>{
            return cy.xpath("(//span[normalize-space()='Collect Sample'])[1]").as('btn').click();
        });
        return this;
    }

    setsearchInvoice(searchinvoise){
        return  cy.xpath("(//input[@placeholder='Ex: 2312031'])[1]").click().clear().type(searchinvoise);
        return  this;
    }

    searchButton(){
        cy.xpath("(//span[normalize-space()='Search'])[1]").click();
    }

    printAllLabel(){
        cy.xpath("(//span[normalize-space()='Print All Label'])[1]").click();
    }
}