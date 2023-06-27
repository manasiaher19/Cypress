
///<reference types ="Cypress"/>

describe('Traversal mthods', function () {

    it.skip('To get the first DOM element within elements, use the .first() command.', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone {enter}')
        cy.get('._3879cV').first().should('have.text', 'SAMSUNG')

    })

    it.skip('To get the last DOM element within elements, use the .last() command.', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.get('._3879cV').last().should('have.text', '10% or more')

    })

    it('To get a DOM element at a specific index, use the .eq() command.', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.get('._3879cV').eq(4).should('have.text','Infinix')
    })

})