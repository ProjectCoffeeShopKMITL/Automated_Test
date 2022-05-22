it('check stock and menu page', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.contains('Menu').click()
    cy.url().should('include', 'coffee-admin/stockandmenu')
    
});
it('add Menu', () => {
    cy.contains('Add').click()
    cy.get("input[type=file]")
        .attachFile("latte.jpg")
    cy.get('#name')
        .type('Latte')
    cy.get('#price')
        .type('50')
    cy.get('#sale_to')
        .type('45')
    cy.get('#type').click()
    cy.get('.ant-select-item-option-content').contains('Coffee').click()
    cy.get('#description')
        .type('just test')
    cy.get('.ant-select-selection-placeholder').click({force: true})
    cy.get('.ant-select-item-option-content').last().click()
    cy.get('.ant-input-number-input-wrap')
        //.type('10')
        .get('button').next().click('right')

});