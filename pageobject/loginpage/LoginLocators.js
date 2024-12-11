class LoginLocators{
    setEmail(email){
        cy.xpath("//input[@placeholder='enter email']").click().clear().type(email).wait(3000)
        return this;

    }

    setPassword(password){
        cy.xpath("//input[@placeholder='enter password']").click().clear().type(password).wait(3000);
        return this;
    }

    Loginbutton(){
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[3]/button[1]").click().wait(2000);
        return this;
    }
}
export default LoginLocators;