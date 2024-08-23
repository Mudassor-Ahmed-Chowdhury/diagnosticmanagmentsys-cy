import DoctorsLocators from "../../pageobject/doctors/DoctorsLocators";
import DoctorsFunctions from "../../pageobject/doctors/DoctorsFunctions";
import  GlobalFunction from "../../pageobject/globalpage/GlobalFunction";

describe('Edit doctors field and functionality',()=>{
    const doctorsLocators= new DoctorsLocators();
    const doctorsFunctions = new DoctorsFunctions();
    const globalFunction = new GlobalFunction();

    beforeEach( () =>{
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit(Cypress.config('baseUrl'));
        globalFunction.Adminuser();
        doctorsLocators.sidebarDoctors()
            .editDoctorButton();
    });

    it('Field validation checking by using invalid data for frist name', ()=>{
        doctorsFunctions.editdoctorsFirstNameusinginvaliddata();
    });

    it('Field validation checking by using invalid data for last name', ()=>{
        doctorsFunctions.editdoctorsLastNameusinginvaliddata();
    });

    it('Phone number and emergency number validation which checks both field values should not be same', ()=>{
        doctorsFunctions.editdoctorsPhoneNumberEmergencyNumberValidation();
    });

    it('Phone number format validation for BD', ()=>{
        doctorsFunctions.editdoctorsPhoneNumberValidation();
    });

    it('DOB should  not be the current date', ()=>{
        doctorsFunctions.editdoctorsDOBValidation();
    });

    it('Should checking the max char limit of address field', () => {
        doctorsFunctions.editdoctorsAddressusingvaliddata();
    });

    it('Check personal number filed validation of error message', ()=>{
        doctorsFunctions.usinginvalidDataINBasicInfo();
    });

    it('Check degree name field validation', ()=>{
        doctorsFunctions.degreeNamevalidation();
    });

    it('ValidateeditfunctionalityofEducation', ()=>{
        doctorsFunctions.validateeditfunctionalityofEducation();
    });

    it('Validate medical institute name', ()=>{
        doctorsFunctions.validateMedicalInstituteName();
    });

    it('Validate designation name', () =>{
        doctorsFunctions.validationDesignationName();
    });

    it('Validation responsibilities', ()=>{
        doctorsFunctions.validationResponsibilities();
    });

    it('Start date and end date validation', ()=>{
        doctorsFunctions.startDateAndEndDateValidation();
    });

    it('End date should not before start date', ()=>{
        doctorsFunctions.endDateShouldNotBeforeOfStartDate();
    });

    it('Professional experience validation using invalid', ()=>{
        doctorsFunctions.professionalExperienceValidationUsingInvalid();
    });
})