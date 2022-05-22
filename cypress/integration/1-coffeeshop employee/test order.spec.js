it('check order page', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.contains('Order').click()
    cy.url().should('include', 'coffee-admin/order')
    
});
it('change status to page', () => {
    cy.contains('Order# 2')
    
});