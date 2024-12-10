# DMS- Digonistic Management System
# Automation - Cypress

DMS is a SaaS project. Here've multiple module which are Dashboard, Departments, Patients, Bills, Parameter, Pathology, Access Management, Settings. 
And I cover regression automation testing for Departments, Patients, Bills, Parameter, Pathology modules.

## Business Logic 

### **Cash Counter:**
- Create bills from bills module.
- When bill create then patient also create. (Bill's `invoice no` = `patient id`)
- Partial bill can be paid but when discharge that full amount of bill should be paid.


