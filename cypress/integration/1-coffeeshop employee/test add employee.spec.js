it('check Employee and Member page', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.contains('Member').click()
    cy.url().should('include', 'coffee-admin/admin')

});
it('add Employee', () => {
    cy.contains('Add').click()
    
    cy.get("input[type=file]")
        .attachFile("test.jpg")
    cy.get('#firstname')
        .type('tester')
    cy.get('#lastname')
        .type('test')
    cy.get('#age')
        .type('24')
    cy.get('#phone_no')
        .type('0891254785')
    cy.get('#email')
        .type('fake@email.com')
        .get('button').next().click('right')
        .wait(4000)

});
/*it('add Employee2', () => {
    cy.contains('Add').click()
    cy.get("input[type=file]")
        .attachFile("tester.jpg")
    cy.get('#firstname')
        .type('helo')
    cy.get('#lastname')
        .type('tommy')
    cy.get('#age')
        .type('26')
    cy.get('#phone_no')
        .type('0891258855')
    cy.get('#email')
        .type('anotherfake@email.com')
        .get('button').next().click('right')

});*/
