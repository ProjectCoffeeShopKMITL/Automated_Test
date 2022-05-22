it('Login member', () => {
    cy.visit('/') // change URL to match your dev URL
    cy.get('#navbar').click(920, 33) //Login in navbar
    cy.get('input[type=text]').last().type('JohnCena12345@gmail.com')
        .get('input[type=password]').last().type('JohnCena1234')
    cy.contains('Login').click()

});
it('Logout member', () => {
    cy.wait(5000)
    cy.get('#navbar').click(943, 33) //Login in navbar
    cy.get('.ant-tabs-content-holder').first().click(615, 18)

})
