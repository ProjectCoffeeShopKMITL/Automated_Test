it('check Employee and Member page', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.contains('Menu').click()
    cy.url().should('include', 'coffee-admin/stockandmenu')

});
it('delete Menu', () => {
    cy.contains('Edit').debug().click()
        .get('button').last().click()
        .get('button').last().click()
});
