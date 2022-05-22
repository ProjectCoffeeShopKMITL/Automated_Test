it('add to cart', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.get('#navbar').click(480, 33) //Menupage in navbar
    cy.url().should('include', 'coffee/menu')
        .wait(1000)
    cy.get('img').last().click()
        .wait(1000)
    //cy.get('#MenuDetailPage_button_1UGMF').click()
    cy.get('.MenuDetailPage_button__R_SAT')
        .click()
    cy.get('.ant-form-item-control-input').first()
    cy.get('.ant-radio-button-wrapper').first()
        .click()
    cy.get('.ant-input-number')
        .clear().type('2')
    cy.get('#note').type('in front office').blur()
    cy.get('.ant-drawer-wrapper-body').contains('CART').click()

})
it('cart to checkout', () => {
    cy.get('#navbar').click(820, 33) //Cart in navbar
    cy.url().should('include', 'coffee/cart')
    cy.get('.CartPage_checkoutButton__3yLlj').click()
        .get('#firstname').type('John')
        .get('#lastname').type('Cena')
        .get('#phone_no').type('0817293384')
        .get('#address').type('3750/4 Soi Wonglee Ladprao Klong Chan Bang')
    cy.contains('CANCEL').click()
    //cy.contains('ORDER').click()


})
it('cancel order', () => {
    cy.get('#navbar').click(820, 33) //Cart in navbar
    cy.contains('ORDER').click()


})