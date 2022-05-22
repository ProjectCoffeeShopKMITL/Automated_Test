it('check Employee and Member page', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.contains('Menu').click()
    cy.url().should('include', 'coffee-admin/stockandmenu')

});
it('delete Ingredient', () => {
    cy.contains('Edit').last().click()
        .get('button').last().click()
        .get('button').last().click()
});
