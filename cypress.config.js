const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000,
    experimentalRunAllSpecs: true,
    baseUrl: "http://demo.one0systems.com/login",
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      config.specPattern = [
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\parameter\\CreateUOMTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\parameter\\DuplicateUOMTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\parameter\\TestValidInavlidFieldTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\parameter\\AttributeGrpupTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\parameter\\TestAdditionalItemsTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\department\\DuplicateDepartmentTest.cy.js",
        "C:\\Users\\SOFTZINO\\cypress\\digonsiticmanagementsys-cy\\cypress\\e2e\\department\\CreateDepartmentTest.cy.js"
      ];
      return config;
    },
  },
});
