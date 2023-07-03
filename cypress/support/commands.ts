/// <reference types="cypress" />

import {Constants} from "./constants";

Cypress.Commands.add('appIsLoaded', () => {
  cy.get(Constants.APP_CONTAINER, {timeout: Cypress.config('pageLoadTimeout')})
    .should('be.visible');

  cy.get(Constants.PRODUCTS)
    .should('be.visible')
    .and('have.length', Constants.TOTAL_AMOUNT_PRODUCTS);
});
// @ts-ignore
Cypress.Commands.add('addProductToCart', (product) => {
  cy.get(product)
    .should('be.visible')

  return cy.get(product + ' [class^=Product__BuyButton]')
    .should('be.visible')
    .click();
});
Cypress.Commands.add('deleteProductFromCart', (cartProduct) => {
  cy.get(cartProduct)
    .should('be.visible')
  cy.get(Constants.CART_DELETE_BUTTON)
    .eq(0)
    .should('be.visible')
    .click();
});
Cypress.Commands.add('checkout', () => {
  cy.get(Constants.CART_SUBTOTAL_AMOUNT)
    .should('be.visible')
    .then((subtotal) => {

      cy.get(Constants.CART_CHECKOUT_BUTTON)
        .should('be.visible')
        .click();

      cy.on('window:alert',(message) => {
        expect(message).to.contains('Checkout - Subtotal: ' + subtotal.text());
      });
  });
});

