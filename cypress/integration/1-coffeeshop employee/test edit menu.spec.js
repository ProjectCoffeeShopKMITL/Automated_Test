it('check stock and menu page', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.contains('Menu').click()
    cy.url().should('include', 'coffee-admin/stockandmenu')
    
});
it('add Menu', () => {
    cy.get('.Menu_textButton__2oYqW').click()
    cy.get("input[type=file]")
        .attachFile("Matcha-Latte.jpg")
    cy.get('#name')
        .clear()
        .type('Matcha')
    cy.get('#price')
        .clear()
        .type('65')
    cy.get('#sale_to')
        .clear()
        .type('50')
    //cy.get('#type').click()
    //cy.get('.ant-select-item-option-content').contains('Milk').click()
    cy.get('#description')
        .clear()
        .type('edit test')
    //cy.get('.ant-select-selection-placeholder').click({force: true})
    //cy.get('.ant-select-item-option-content').last().click()
    //cy.get('.ant-input-number-input-wrap')
        //.type('10')
        .get('button').next().click('right')

});