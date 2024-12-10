# DMS- Digonistic Management System
# Automation - Cypress

DMS is a SaaS project. Here've multiple module which are Dashboard, Departments, Patients, Bills, Parameter, Pathology, Access Management, Settings. 
And I cover regression automation testing for Departments, Patients, Bills, Parameter, Pathology modules.

## Business Logic 

### **Cash Counter:**
- Create bills from bills module.
- When bill create then patient also create. (Bill's `invoice no` = `patient id`)
- Partial bill can be paid but when discharge that full amount of bill should be paid.


If you need to click on a child module under a specific parent like "Settings" under "Admin", you can use the two-parameter version:
```java
sidebar.clickItem("Admin", "Settings");
```
## **Why This Approach is Efficient?**
Instead of defining locators for each sidebar item individually, this function uses a minimal number of locators and dynamically handles both parent and child clicks. This approach not only reduces the redundancy of writing locators but also ensures that future sidebar changes like adding new modules don’t require additional code changes.

By implementing this method, I’ve made the sidebar navigation easier to maintain, more readable, and less prone to errors, particularly when the sidebar structure evolves.

## Credits
This solution was developed by [Mudassor Ahmed Chowdhury](https://www.linkedin.com/in/mudassor/) – feel free to connect on LinkedIn!
