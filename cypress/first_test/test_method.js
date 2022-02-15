export function checkInputValue(htmlElement, data){
    cy.get(htmlElement)
        .type(data)
        .should('have.value', data)
  }
export function checkOutputValue(htmlElement, data){
    cy.get('#output '+ htmlElement ).should(($p) => {
        expect($p.first()).to.contain(data)
      })
}