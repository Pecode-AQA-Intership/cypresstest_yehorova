import { userData } from '../../first_test/user_data.js'
import { checkInputValue, checkOutputValue } from '../../first_test/test_method.js'

describe('HW Lesson 14', () => {
  it('fill the form and verify result', () => {
    cy.visit('https://demoqa.com/text-box')

    // Should be on a new URL which includes '/text-box'
    cy.url().should('include', '/text-box')

    // Get an each input, type into it and verify that the value has been updated
    userData.forEach(item => checkInputValue(item["selector"], item["value"]));

    cy.get('#submit').click()

    userData.forEach(item => checkOutputValue(item["output"], item["value"]));

  })
})

