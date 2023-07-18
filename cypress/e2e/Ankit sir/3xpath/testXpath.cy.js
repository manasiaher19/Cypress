//to install xpath ==> npm install cypress-xpath
//paster ==> require('cypress-xpath')  in support e2e.js


///<reference types='cypress'/>

describe('X path ', () => {
    it('Gereral xpath', function () {
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//div[@class="_2Brcj4"]').should('have.length', 4)
    })

    it('Gereral xpath', function () {
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//a[@class="_1_3w1N"]').should('be.visible')
    })

    it('Gereral xpath', function () {
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//div[@class="_38VF5e"]').should('have.length', 4)
    })

    it('Gereral xpath', () => {
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//[@aria-label="Fashion"]').should('be.visible') //*********
    })

    //----------------------------------------------------------------------------------
    it('select one element from list using x-path', function () {
        cy.visit('https://www.flipkart.com/')
        //selecting third element using x path....(for xpath index start from 1)
        cy.xpath('(//div[@class="_2Brcj4"])[3]').should('contain', 'CONSUMER POLICY')
    })

    it('select one element from list using x-path', function () {
        cy.visit('https://www.flipkart.com/')
        //selecting first element using x path....(for xpath index start from 1)
        cy.xpath('(//ul[@class="_3YjYK7"])[1]').should('contain', 'Notification Preferences')
    })

    it('select one element from list using x-path', function () {
        cy.visit('https://www.flipkart.com/')
        //selecting 8th element using x path....(for xpath index start from 1)
        cy.xpath('(//ul[@class="_3YjYK7 ecs1XG"]) [1]').should('contain', 'My Profile')
        //cy.xpath('(//ul[@class="_3YjYK7 ecs1XG"]) [2]').should('contain', 'SuperCoin Zone')

    }) //*********

    //---------------------------------------------------------------------------------
    //*[@aria-label="Home & Furniture"]  use star to select attr and value with any tagName   

    it('Travers towards parent element', function () {
        //to traverse towards parent el /..
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//*[@aria-label="Home & Furniture"]/..').should('have.class', '_3sdu8W')
    })

    it('Travers towards parent element', function () {
        //to traverse towards parent el /..
        cy.visit('https://www.flipkart.com/')
        //cy.xpath('//div[@class="_3pKU-e"]/..').should('have.class', '_3YjYK7 ecs1XG')
        cy.xpath('//*[@class="AT0fUR"]/..').should('have.class', '_3YjYK7 ecs1XG')

    })

    //----------------------------------------------------------------------------
    it.only('traverse towards children el', () => {
        cy.visit('https://www.flipkart.com/')
        //To traverse towards children use //tagname
        cy.xpath('(//*[@aria-label="Home & Furniture"]//div//div)[1]').should('have.class', 'YBLJE4')
        //cy.xpath('//*[@aria-label="Home & Furniture"]//span[@class="_1XjE3T"]').should('have.class', '_1XjE3T')
    })

    //-------------------------------------------------------------------

    it('dynamic Xpath', () => {
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//div[@aria-label="$var"]'.replace('$var', 'Appliances'))
    })


})




































// describe('X path ', () => {
//     it('Gereral xpath', () => {
//         cy.visit('https://www.flipkart.com/')
//         cy.xpath('//[@aria-label="Fashion"]').should('be.visible')
//     })
// })

