import GlobalFunction from "../globalpage/GlobalFunction";

class DoctorsLocators{

    constructor() {
        this.gf = new GlobalFunction();
    };

    sidebarDoctors(){
        this.gf.clickParentContent('Doctors');
        return this;
    };

    doctorstablePhonenumber(){
       this.doctorsTable();
       cy.xpath("//tbody[1]/tr/td[5]");
        return this;
    };

    doctorsTable(){
        cy.xpath("(//div[@class='relative shadow sm:rounded-lg mt-3 overflow-x-auto'])[1]")
            .xpath("(//table[@class='w-full text-sm text-gray-500 dark:text-gray-400 border-collapse'])[1]")
        return this;
    }

    doctorsallTableselect(){
        this.doctorsTable();
        cy.xpath("//tbody[1]/tr/td");
        return this;
    }

    addDoctor(){
        cy.xpath("(//span[normalize-space()='Add Doctor'])[1]").click();
        return this;
    }

    setdoctorsFirstName(doctorsfristname){
        cy.xpath("(//input[@placeholder='First Name'])[1]").click().clear().type(doctorsfristname).should('not.have.value', /[^a-zA-Z\s]/);
        return this;
    }

    setdoctorsLastName(doctorslastname){
        cy.xpath("//input[@placeholder='Last Name']").click().clear().type(doctorslastname).should('not.have.value', /[^a-zA-Z\s]/);
        return this;
    }

    setdoctorsPhoneNumber(doctorsphonenumber){
        cy.xpath("(//input[@placeholder='Phone Number'])[1]").click().clear().type(doctorsphonenumber);
        return this;
    }

    setdoctorsEmergencyNumber(doctorsemegencynumber){
        cy.xpath("//input[@placeholder='Emergency Number']").click().clear().type(doctorsemegencynumber);
        return this;
    }

    editdoctorsDOB(){
        cy.xpath("(//input[@aria-label='Datepicker input'])[1]").click()
            .xpath("(//div[@aria-label='Calendar days'])[1]")
            .xpath("(//div[@class='dp__cell_inner dp__pointer dp__today dp__date_hover'])[1]").click()
            .xpath("(//div[@class='dp__action_row'])[1]")
            .xpath("(//div[@class='dp__action_buttons'])[1]")
            .xpath("(//button[normalize-space()='Select'])[1]").as('btn').click();
        return this;
    }

    validateDOB(){
        cy.xpath("(//input[@aria-label='Datepicker input'])[1]").invoke('val').then(selectedDate => {
            const selecteddate = new Date(selectedDate).getDate();
            const currentdate = new Date().getDate();

            if (selecteddate === currentdate) {
                throw new Error('The selected date should not be the current date');
                this.gf.checkFieldValidationError('birth_date', 'The birth date should not be current date')
            }
        });
    }

    setdoctorsAddress(doctorsaddress){
        cy.xpath("(//textarea[@placeholder='Write your address...'])[1]").click().clear().type();
        return this;
    }

    editDoctorButton(){
        cy.xpath("(//*[name()='svg'][@role='img'])[18]").click();
        return this;
    } //Edit button for edit the doctor details

    editEducationButton(){
        cy.xpath("(//div[normalize-space()='Educations & Certifications'])[1]").click();
        return this;
    }

    editEducationProfessionalExperienceAddButton(){
        cy.xpath("(//button[@type='button'])[3]").click();
        return this;
    }

    seteditdegreName(degreename){
        cy.xpath("(//input[@placeholder='Ex: MBBS'])[1]").click().clear().type(degreename).should('not.have.value', /[^a-zA-Z\s]/);
        return this;
    }

    editdoctorPasingYear(){
        cy.xpath("(//input[@aria-label='Datepicker input'])[1]").click();
        cy.xpath("(//div[@class='dp__menu_inner'])[1]").trigger('mouseenter');
        cy.xpath("(//div[@class='dp__cell_inner dp__pointer dp__today dp__active_date'])[1]").click();
        cy.xpath("(//div[@class='dp__action_row'])[1]").trigger("mouseover");
        cy.xpath("(//button[normalize-space()='Select'])[1]").as('btn').click();
        return this;
    }

    validatePassingYear(){
        cy.xpath("(//input[@aria-label='Datepicker input'])[1]").invoke('val').then(selectedDate => {
            const selecteddate = new Date(selectedDate).getDate()
            const currentdate = new Date().getDate();

            if (selecteddate === currentdate) {
                throw new Error('The selected year should not be the current year');
                this.gf.checkFieldValidationError('passing_year', 'The passing year filed should not be current date and year')
            }
        });
    }

    editdoctorAddEducationInfoButton(){
        cy.xpath("(//span[normalize-space()='Add Education & Information'])[1]").click();
        return this;
    }

    educationEditButton(){
        cy.xpath("(//*[name()='path'][@fill='currentColor'])[15]").click();
        return this;
    }

    educationSaveButton(){
        cy.xpath("(//span[normalize-space()='Save'])[1]").click();
        return this;
    } //Education's save button

    seteditdoctorMedicalInstituteName(medicalname){
        cy.xpath("(//input[@placeholder='Ex: Dhaka Medical'])[1]").click().clear().type(medicalname).should('not.have.value', /[^a-zA-Z\s]/);
        return this;
    }

    editeducationAddMoreButton(){
        cy.xpath("(//span[normalize-space()='Add More'])[1]").as('btn').click();
        return this;
    }

    editeducationofdoctorSaveButton(){
        cy.xpath("(//span[normalize-space()='Save'])[1]").as('btn').click();
        return this;
    }

    seteditprofessionalexperinceofDesignationName(designationname){
        cy.xpath("(//input[@placeholder='Ex: Assistant Researcher'])[1]").click().clear().type(designationname).should('not.have.value', /[^a-zA-Z\s]/);
    }

    seteditprofessionalInstituteName(professionalinstitutename){
        cy.xpath("(//input[@placeholder='Ex: Dhaka Medical'])[1]").click().clear().type(professionalinstitutename).should('not.have.value', /[^a-zA-Z\s]/);
    }

    seteditprofessionalResponsibilities(professionalresposibilities)
    {
        cy.xpath("(//textarea[@placeholder='Write your responsibilities...'])[1]").click().clear().type(professionalresposibilities);
        return this;
    }

    editaddProfessionalExpericeButton(){
        cy.xpath("(//span[normalize-space()='Add Professional Experience'])[1]").as('btn').click();
        return this;
    }

    editprofessionalexperinceStartDateforcurrentdate(){
        cy.xpath("(//input[@aria-label='Datepicker input'])[1]").click()
            .xpath("(//div[@aria-label='Calendar days'])[1]").trigger("mouseenter")
            .xpath("(//div[@class='dp__cell_inner dp__pointer dp__today dp__active_date'])[1]").click()
            .xpath("(//div[@class='dp__action_row'])[1]").trigger("mouseover")
            .xpath("(//button[normalize-space()='Select'])[1]").as('btn').click();
        return this;
    } //Start Date of professional experience for current date

    editprofessionalexperienceEndDateforcurrentdate(){
        cy.xpath("(//input[@aria-label='Datepicker input'])[2]").click()
            .xpath("(//div[@aria-label='Calendar wrapper'])[1]").trigger("mouseenter")
            .xpath("//div[@class='dp__cell_inner dp__pointer dp__today dp__active_date']").click()
            .xpath("(//div[@class='dp__action_row'])[1]")
            .xpath("(//div[@class='dp__action_buttons'])[1]")
            .xpath("(//button[normalize-space()='Select'])[1]").as('btn').click();
        return this;
    } //End Date of professional experience for current date


    validateStartAndEndDateAreDifferent() {
        cy.xpath("(//input[@aria-label='Datepicker input'])[1]").invoke('val').then(startDate => {
            cy.xpath("(//input[@aria-label='Datepicker input'])[2]").invoke('val').then(endDate => {
                if (startDate === endDate) {
                    throw new Error('The start date and end date cannot be the same.');
                }
            });
        });
        return this;
    } //Validate if start date and end date are the same

    validateStartAndEndDate() {
        cy.xpath("(//input[@aria-label='Datepicker input'])[1]").invoke('val').then(startDate => {
            cy.xpath("(//input[@aria-label='Datepicker input'])[2]").invoke('val').then(endDate => {
                const start = new Date(startDate);
                const end = new Date(endDate);
                if (end < start) {
                    throw new Error('The end date cannot be before the start date.');
                }
            });
        });
        return this;
    } // Parse the dates to compare then check if the end date is before the start date

    editbasicinfoeducationandprofessionalUpdateButton(){
        cy.xpath("(//button[@type='submit'])[1]").as('btn').click();
        return this;
    }//Update button for basic info, educational info and professional info's same button



}
export default DoctorsLocators;