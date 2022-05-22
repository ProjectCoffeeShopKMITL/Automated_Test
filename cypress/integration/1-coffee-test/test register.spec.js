it('Register member', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.url().should('include', 'coffee/')
    cy.get('#navbar').click(920, 33) //Login in navbar
    cy.get('.ant-tabs-nav-list').click('right')
        .get('#firstname').type('Tommy')
        .get('#lastname').type('Japper').blur()
        .get('input[type=text]').last().type('testtest@gmail.com')
        .get('#phone_no').type('0811234565')
        .get('input[type=password]').last().type('Tommy123456')
    cy.contains('Create').click()

});
