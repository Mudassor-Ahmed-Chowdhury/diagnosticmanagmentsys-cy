import GlobalFunction from "../globalpage/GlobalFunction";
import DoctorsLocators from "../doctors/DoctorsLocators";

class DoctorsFunctions{
    constructor() {
        this.gf = new GlobalFunction();
        this.doctorlocators = new DoctorsLocators();
    }

    validateDifferentNumbers(doctorsPhoneNumber, doctorsEmergencyNumber) {
        if (doctorsPhoneNumber === doctorsEmergencyNumber) {
            this.gf.checkFieldValidationError(
                'phone',
                'Phone Number and Emergency Number should not be the same'
            );
        }
        return this;
    }

    checkDuplicatephonenumber(){
        this.doctorlocators.doctorstablePhonenumber()
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
    }

    doctorsTableAllDataDuplicatevalidation(){
        this.doctorlocators.doctorsTable().then($cells => {
            const data = [];

            $cells.each((index, cell) => {
                data.push(cell.innerText.trim());
            });

            const uniqueData = new Set(data);

            if (uniqueData.size !== data.length) {
                throw new Error("Duplicate data found in the doctors' table.");
            } else {
                cy.log("All table data is unique.");
            }
        });

        return this;
    }

    phonenumberValidate(doctorsphoneNumber)
    {
        this.doctorlocators.setdoctorsPhoneNumber(doctorsphoneNumber);

        const validPrefixes = ['017', '013', '014', '015', '018', '019', '016'];
        const isValid = doctorsphoneNumber.length === 11 && validPrefixes.includes(doctorsphoneNumber.substring(0, 3));

        if (!isValid) {
            cy.spy(this.gf, 'checkFieldValidationError');
            this.gf.checkFieldValidationError('phone', 'The phone field format is invalid.');
        }
    }

    editdoctorsFirstNameusinginvaliddata(){
        this.doctorlocators.setdoctorsFirstName('#$%% #%%##%  856'.repeat(51));
        this.gf.checkFieldValidationError('frist_name', 'The frist name formate is invalid');
    } // Field validation checking by using invalid data for frist name

    editdoctorsLastNameusinginvaliddata(){
        this.doctorlocators.setdoctorsLastName('#$%% #%%##%  856'.repeat(51));
        this.gf.checkFieldValidationError('frist_name', 'The frist name formate is invalid');
    } // Field validation checking by using invalid data for last name

    editdoctorsPhoneNumberEmergencyNumberValidation(){
        this.doctorlocators.setdoctorsPhoneNumber('01311773124')
            .setdoctorsEmergencyNumber('01311773124');
        this.validateDifferentNumbers('01311773124','01311773124');
    } // Phone number and emergency number validation which checks both field values should not be same

    editdoctorsPhoneNumberValidation(){
        this.phonenumberValidate('01211773124');
    } //Phone number format validation for BD

    editdoctorsDOBValidation(){
        this.doctorlocators.editdoctorsDOB()
            .validateDOB();
    } //DOB should  not be the current date

    editdoctorPassingdateValidation(){
        this.doctorlocators.editdoctorPasingYear()
            .validatePassingYear();
    } //Assuming passing date should not be the current date. Validation function

    editdoctorsAddressusingvaliddata(){
        this.doctorlocators.setdoctorsAddress('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');
        this.gf.checkFieldValidationError('address', 'The address field must not be greater than 255 characters.');
    } //Checking the max char limit of address field

    usinginvalidDataINBasicInfo(){
        this.doctorlocators.setdoctorsFirstName('        ')
            .setdoctorsPhoneNumber(13117731245)
            .editbasicinfoeducationandprofessionalUpdateButton();
        this.gf.unabletocreateToastmessage()
            .checkRequiredFieldErrors()
            .checkFieldValidationError('personal_number', 'The personal number field format is invalid.')
    } //Check personal number filed validation of error message

    degreeNamevalidation(){
        this.doctorlocators.editEducationButton()
            .editEducationProfessionalExperienceAddButton()
            .seteditdegreName('545415 *(*((*_+@'.repeat(51))
        this.gf.checkFieldValidationError('')
    } //Check degree name field validation

    validateeditfunctionalityofEducation(){
        this.doctorlocators.editEducationButton()
            .editEducationProfessionalExperienceAddButton()
            .seteditdegreName('MBBS')
            .editdoctorAddEducationInfoButton()
            .editEducationProfessionalExperienceAddButton()
            .educationEditButton()
            .seteditdegreName('      ')
            .educationSaveButton()
        this.gf.unabletocreateToastmessage()
            .checkRequiredFieldErrors();
    } //If education part blank then create an education profile by filling mandatory field then edit the profile and keep blank the mandatory field. Check after click save button the toast message should be shown and required filed error message should be shown

  validateMedicalInstituteName(){
        this.doctorlocators.editEducationButton()
            .editEducationProfessionalExperienceAddButton()
            .seteditdoctorMedicalInstituteName('789 %^*)_'.repeat(51))
      this.gf.checkFieldValidationError('unversity_name', 'The university name formate is invalid')
  }

  validationDesignationName(){
        this.doctorlocators.clickProfessionalExperienceButton()
            .seteditprofessionalexperinceofDesignationName('+=_@#$! 562'.repeat(51))
      this.gf.checkFieldValidationError('desination_name', 'The designation name formate is invalid');
  }
  //Professional experience's designation field validation

    validationInstituteName(){
        this.doctorlocators.clickProfessionalExperienceButton()
            .seteditprofessionalInstituteName('8956 @#$'.repeat(51))
        this.gf.checkFieldValidationError('institute name', 'The institute name formate is invalid');

    }// Professional experienc's institution name field validation

    validationResponsibilities(){
        this.doctorlocators.clickProfessionalExperienceButton()
            .seteditprofessionalResponsibilities('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')
        this.gf.checkFieldValidationError('responsibilities', 'The responsibility max char limit 255')
    } // Professional experience's responsibilities max char limit 255 validation

    startDateAndEndDateValidation(){
        this.doctorlocators.clickProfessionalExperienceButton()
            .editprofessionalexperinceStartDateforcurrentdate()
            .editprofessionalexperienceEndDateforcurrentdate()
            .validateStartAndEndDateAreDifferent()
    }// Professional experienc's start date and end date should be diff.

    endDateShouldNotBeforeOfStartDate(){
        this.doctorlocators.clickProfessionalExperienceButton()
            .editprofessionalexperienceEndDateforcurrentdate()
            .editprofessionalexperinceStartDateforcurrentdate()
            .validateStartAndEndDate()
    }

    professionalExperienceValidationUsingInvalid(){
        this.doctorlocators.clickProfessionalExperienceButton()
            .seteditprofessionalexperinceofDesignationName('Associate SQA Engineer')
            .seteditprofessionalInstituteName('Softzino Technologies')
            .editprofessionalEndDateBeforeStartDate()
            .editprofessionalexperinceStartDateforcurrentdate()
            .editaddProfessionalExpericeButton()
        this.gf.unabletocreateToastmessage()

    }













}
export default DoctorsFunctions;