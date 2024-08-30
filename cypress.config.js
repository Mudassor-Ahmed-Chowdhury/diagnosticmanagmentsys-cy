const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false, //if use true  Cypress will record a video of your test runs

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true,
    inlineAssets: true,
  },

  e2e: {
    pageLoadTimeout: 120000,
    experimentalRunAllSpecs: true,
    baseUrl: "http://demo.one0systems.com/login",
    viewportWidth: 1920,
    viewportHeight: 1080,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);


      config.specPattern = [
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\parameter\\CreateUOMTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\parameter\\DuplicateUOMTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\parameter\\TestValidInavlidFieldTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\parameter\\TestAdditionalItemsTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\department\\DuplicateDepartmentTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\department\\CreateDepartmentTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\patients\\PatientsDuplicateTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\patients\\PatientsCRUDTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\doctors\\EditDoctorsTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\doctors\\DuplicateDoctorsTableTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\bills\\DuplicateInvoiceTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\bills\\BillsCRUDTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\pathology\\PathologySampleCRUDTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\pathology\\TestReportTest.cy.js"

      ];

      return config;
    },
  },
});
