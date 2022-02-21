import { inputValue } from '../../lesson_16/methods.js';
import {userData, states, stateCities, randomState, randomCity, randomGender} from '../../lesson_16/mock_data.js'

describe('HW Lesson 16', () => {
    it('Navigation', () => {
        cy.visit('/automation-practice-form')
        cy.url().should('include', '/automation-practice-form')

    });
    it('Filling in the registration form', () => {

        inputValue(userData[0]);

        inputValue(userData[1]);

        inputValue(userData[2]);

        cy.get(`[value=${randomGender}]`).check({ force: true })

        inputValue(userData[3]);

        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__year-select')
            .select(userData[4].value).should('have.value', userData[4].value)

        cy.get('.react-datepicker__month-select')
            .select(userData[5].value).should('have.value', userData[5].value)

        cy.get('.react-datepicker__week').contains(userData[6].value).click()
    });

    it('File Upload using cypress-file-upload npm package', () => {
        const filepath = './fun.jpg'
        cy.get('input[type="file"]').attachFile(filepath)
    })

    it('checkbox test', () => {

        cy.get('[type="checkbox"]').check({ force: true })
            .should('be.checked')
    })

    it('check states dropdowns', () => {
        cy.get('#state').click();
        cy.get('[tabindex="-1"]').then(dropdownListOptions => { 
            const actual = [...dropdownListOptions].map(htmlElement => htmlElement.innerText) 
            expect(actual).to.deep.eq(states) 
        })
    })

    it('check cities dropdowns', () => {
        states.forEach(state => { 
            cy.get('#state #react-select-3-input').type(`${state}{enter}`); 
            cy.get('#city').click();  
            cy.get('[tabindex="-1"]').then(dropdownListOptions => { 
                const actual = [...dropdownListOptions].map(o => o.innerText) 
                expect(actual).to.deep.eq(stateCities[state]) 
            })
        })
    })

    it('select address', () => {
        cy.get('#state #react-select-3-input').type(`${randomState}{enter}`);
        cy.get('#city').type(`${randomCity}{enter}`);
    })

    it('check required inputs filled', () => {
        cy.get('[required]').then($requiredInputs => {  
            cy.wrap($requiredInputs).each($input => { 
                expect($input).not.eq('')
            })
        })
    })

    it('submit', () => {

        cy.get('#submit').click();

        cy.get('table').contains('td', userData[0].value).should('be.visible');
        cy.get('table').contains('td', userData[1].value).should('be.visible');
        cy.get('table').contains('td', userData[2].value).should('be.visible');
        cy.get('table').contains('td', randomGender).should('be.visible');
        cy.get('table').contains('td', userData[3].value).should('be.visible');
        cy.get('table').contains('td', userData[4].value, userData[5].value, userData[6].value).should('be.visible');
        cy.get('table').contains('td', 'Sports').should('be.visible');
        cy.get('table').contains('td',  randomState, randomCity);
    })
})
