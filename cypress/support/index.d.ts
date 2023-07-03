/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to check that the shopping cart app is up and loaded.
     */
    appIsLoaded(): Chainable;
    /**
     * Custom command to add a product to the shopping cart.
     */
    addProductToCart(product: string): Chainable;
    /**
     * Custom command to delete a product from the shopping cart.
     */
    deleteProductFromCart(cartProduct: string): Chainable;
    /**
     * Custom command to checkout what is in the shopping cart.
     */
    checkout(): Chainable;
  }
}
