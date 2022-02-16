export function inputValue(userData){
cy.get(userData.selector)
    .type(userData.value)
    .should('have.value', userData.value);
    }