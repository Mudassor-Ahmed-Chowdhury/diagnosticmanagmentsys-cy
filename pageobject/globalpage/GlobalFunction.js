import LoginLocators from "../loginpage/LoginLocators";

class GlobalFunction{

    constructor(){
        this.lp = new LoginLocators();
    }
    clickParentContent(contentName) {
        cy.xpath('//div[@class="h-full px-3 pb-4 overflow-y-auto bg-white"][1]//ul[1]//li') // Locate the sidebar and all 'li' elements within it then iterate through each 'li' element
            .should('exist')
            .should('be.visible')
            .then($listItems => {
                cy.log(`Found ${$listItems.length} items in the sidebar.`);
                cy.wrap($listItems).each($li => {
                    cy.wrap($li).invoke('text').then(text => {
                        cy.log(`Item text: ${text.trim()}`);
                        if (text.trim() === contentName) {
                            cy.wrap($li).click();
                            cy.log(`Clicked on the item with content: ${contentName}`);
                            return false;
                        }
                    });
                });
            });
    }

    checkRequiredFieldErrors() {
        cy.xpath("//span[contains(text(), 'This field is required')]")
            .should('be.visible');
        return this;
    }

    checkFieldValidationError(field, errorMessage) {
        cy.xpath(`//span[contains(text(), '${errorMessage}')]`)
            .should('be.visible');
        return this;
    }

    Adminuser(){
         this.lp.setEmail('demo@dms.com');
         this.lp.setPassword("password");
         this.lp.Loginbutton();
         return this;
    }

    unabletocreateToastmessage(){
        cy.get('.v-toast__item');
        return this;
    }

    successfulToastmessage(){
        cy.get('.v-toast__item');
        return this;
    }

}
export default GlobalFunction;