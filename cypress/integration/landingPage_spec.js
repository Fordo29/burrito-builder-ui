describe('Burrito Builder User Flow', () => {
 beforeEach(() => {
   cy.intercept('http://localhost:3001/api/v1/orders', { fixture: 'orders.json' })
   cy.visit('http://localhost:3000')
 });
  it('Should be able to visit the main page and the user will see the application name & fun tagline', () => {
   cy.get('.app-title').contains('Burrito Builder')
    .get('.enter-name')
    .get('button').contains('beans')
    .get('button').contains('steak')
    .get('button').contains('carnitas')
    .get('button').contains('sofritas')
    .get('button').contains('lettuce')
    .get('button').contains('queso fresco')
    .get('button').contains('pico de gallo')
    .get('button').contains('hot sauce')
    .get('button').contains('guacamole')
    .get('button').contains('jalapenos')
    .get('button').contains('cilantro')
    .get('button').contains('sour cream')
    .get('.order-details').contains('Nothing selected')
    .get('button').contains('Submit Order')
 });

  it('Should display 3 orders', () => {
    cy.get('.order')
      .should('have.length', 3)
  });
  it('should add an order when the form is filled out and ingredients added', () => {
    cy.get('.enter-name').should('be.visible')
      .type('John Doe')
    cy.get('button').contains('beans').click()
    .get('button').contains('steak').click()
    .get('.order-details').contains('Order: beans, steak')
    cy.get('button').contains('Submit Order').click()
  })


});