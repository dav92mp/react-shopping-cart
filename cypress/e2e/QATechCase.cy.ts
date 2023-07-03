import {Constants} from "../support/constants";
describe('QA Tech Case', () => {

  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('/');
    cy.appIsLoaded();
  })

  it('visualizes size XS products only', () => {
    cy.get(Constants.SIZES_BUTTONS)
      .contains('XS')
      .should('be.visible')
      .click();

    cy.get(Constants.PRODUCTS)
      .should('be.visible')
      .and('have.length', Constants.XS_AMOUNT_PRODUCTS);

    cy.get(Constants.BLACK_BATMAN_TSHIRT)
      .should('be.visible');
  });

  it('adds and removes products from the cart', () => {
    cy.addProductToCart(Constants.CROPPED_STAY_GROOVY_OFF_WHITE);

    cy.get(Constants.CART_CONTAINER)
      .should('be.visible');

    cy.get(Constants.CART_QUANTITY)
      .should('be.visible')
      .and('have.text', 1);

    cy.deleteProductFromCart(Constants.CART_CROPPED_STAY_GROOVY_OFF_WHITE);

    cy.get(Constants.CART_QUANTITY)
      .should('be.visible')
      .and('have.text', 0);
  });

  it('checks out products from the cart', () => {
    cy.addProductToCart(Constants.CROPPED_STAY_GROOVY_OFF_WHITE);

    cy.get(Constants.CART_CONTAINER)
      .should('be.visible');

    cy.get(Constants.CART_QUANTITY)
      .should('be.visible')
      .and('have.text', 1);

    cy.checkout();
  })
})
