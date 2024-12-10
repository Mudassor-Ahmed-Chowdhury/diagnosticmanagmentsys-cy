# DMS- Digonistic Management System
# Automation - Cypress

DMS is a SaaS project. Here've multiple module which are Dashboard, Departments, Patients, Bills, Parameter, Pathology, Access Management, Settings. 
And I cover regression automation testing for Departments, Patients, Bills, Parameter, Pathology modules.

## Business Logic 

### **Bills:**
- Create bills from bills module.
- When bill create then patient also create. (Bill's `invoice no` = `patient id`)
- Partial bill can be paid but when discharge that full amount of bill should be paid.

### **Doctor:**
- Doctor can create by basic information with mandatory fields
- Doctor full informations like education & professional experience can be added or updated by edit form.
- Doctor's phone number can not be duplicate.

### **Dashboard:**
- In dashboard we can see the summary of DMS's forcasting information

### **Parameter:**
- Parameter section for who assgined as a data entry or operator.
- UOM (Unit of Messurement) for test attribute and test additional items
- In test attribute we can build test stratuctre like test's refference value etc.

### **Pathology:**
- We can collect the sample as per `invoice no`
- Each `invoice no's` samples only show in `specimens`
- If each `invoice no` have multiple tests then each tests have separate `lab no`
- In lab recvied, that `lab no` helps to recived sample then added the result by cliking on action `btn`
- We can update the test results from test results which is sub module of pathology.
- We can verified the test reports from test reports which is sub module of pathology.

## Regression Automation Testing's Test Cases

### **Bills:**
- Bills CRUD test with `valid functionality` 
- Checked bills `invoice no` duplicate validation

### **Departments:**
- Create department functionality with `valid data`
- Create  department functionality with `invalid data`
- Create department functionality with `invalid char limit`
- Create department functionality with `mandatory field blank`

### **Doctors:**
- Check each row should be `uniuqe` between rest of rows of doctors table data.
- Field validation checking by using invalid data for frist name for edit form.
- Field validation checking by using invalid data for last name for edit form.
- Phone number and emergency number validation which checks both field `values` should not be same for edit form.
- Phone number format validation for `BD`of edit form
- DOB should  not be the `current date` for edit form.
- Should checking the max `char limit` of address field for edit form.
- Check personal number filed `validation of error message` for edit form.
- Check degree name field validation for edit form.
- Validate edit functionality of Education for edit form.
- Validate medical institute name for edit form.
- Validate designation name for edit form.
- Validation responsibilities for edit form.
- Start date and end date validation for edit form.
- End date should not before start date for edit form.
- Professional experience validation using invalid for edit form.

### **Parameter:**
- In attribute group, should throw an error if the name is not provided.
- In attribute group, should throw an error if the name is too short.
- In attribute group, should throw an error if the name contains numeric characters.
- In attribute group, should throw an error if the name is too long
- In attribute group, should throw an error if the name contains invalid special characters.
- In attribute group, should pass and return the name if all validations are met.
- In attribute group, attribute name should be unique.
- Create UOM with valid data validations.
- Create UOM with invalid data validation.
- Duplicate data should not exist.
- Using valid data to creating "Test Additional Items"
- Without select sample the test additional items should not be created.

### **Pathology:**
- Collect sample patients `data format` should be `accurate`
- Using valid data collect sample functionality check.
- Check test report `functionality`
- Check duplicat number of reports should not found
- Check duplicate status should not found


## Installation
- Open IDE
- Click on New > Project from Version Control (If not login then login JetBrain Account else select the repository). Alternatively
  you can clone the repository by terminial like
  ```git
   https://github.com/mudassorahmedchowdhury/diagnosticmanagmentsys-cy.git
  ```
- After setup then click on `cypress.config.js`. In `config.specPattern` change the path.
- Then in terminal write then execute
   ```git
   npx cypress open
  ```
   

