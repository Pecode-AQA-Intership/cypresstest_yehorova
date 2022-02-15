import userData, { stateAndSity } from '../../lesson_16/mock_data.js'

describe('HW Lesson 16', () => {
    it('Navigation', () => {
        cy.visit('https://demoqa.com/automation-practice-form')

        // Should be on a new URL which includes '/automation-practice-forms'
        cy.url().should('include', '/automation-practice-form')

    });
    it('Filling in the registration form', () => {

        cy.get('#firstName')
            .type(userData.firstName)
            .should('have.value', userData.firstName);

        cy.get('#lastName')
            .type(userData.lastName)
            .should('have.value', userData.lastName);


        cy.get('#userEmail')
            .type(userData.userEmail)
            .should('have.value', userData.userEmail);

        cy.get('[type="radio"].custom-control-input').first().check({ force: true })

        cy.get('#userNumber')
            .type(userData.userNumber)
            .should('have.value', userData.userNumber);

        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__year-select')
            .select(userData.yearSelect).should('have.value', userData.yearSelect)

        cy.get('.react-datepicker__month-select')
            .select(userData.monthSelect).should('have.value', userData.monthSelect)

        cy.get('.react-datepicker__week').contains(userData.daySelect).click()

    });

    it('File Upload using cypress-file-upload npm package', () => {
        const filepath = './fun.jpg'
        cy.get('input[type="file"]').attachFile(filepath)
    })

    it('checkbox test', () => {

        cy.get('[type="checkbox"]').check({ force: true })
            .should('be.checked')

    })

    it('Add curent adress', () => {
        cy.get('#stateCity-wrapper').type('NCR{enter}')
        cy.get('#city').type('Noida{enter}')
        // cy.get('#stateCity-wrapper').click().then(Element=>Element.get('#react-select-3-option-0').click())
        // cy.get('#city').select(stateAndSity['#react-select-3-option-0'].cities['#react-select-4-option-0'])
    })

    it('submit', () => {

        cy.get('#submit').click();

        cy.get('table').contains('td', userData.firstName).should('be.visible');
        cy.get('table').contains('td', userData.lastName).should('be.visible');
        cy.get('table').contains('td', userData.userEmail).should('be.visible');
        cy.get('table').contains('td', 'Male').should('be.visible');
        cy.get('table').contains('td', userData.userNumber).should('be.visible');
        cy.get('table').contains('td', userData.daySelect, userData.monthSelect, userData.yearSelect).should('be.visible');
        cy.get('table').contains('td', 'Sports').should('be.visible');
        cy.get('table').contains('td',  'NCR', 'Noida');

    })

})



