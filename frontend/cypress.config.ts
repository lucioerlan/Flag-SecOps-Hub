import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    video: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 8000,
    execTimeout: 60000,
    taskTimeout: 60000,
    pageLoadTimeout: 30000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    viewportWidth: 1280,
    viewportHeight: 720,
    projectId: 'e4uxw9'
  }
})
