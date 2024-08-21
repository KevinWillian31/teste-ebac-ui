///<reference types="cypress"/>
import { faker, Faker } from "@faker-js/faker";

describe('Funcionalidade:Adicionar produtos no carrinho', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

    it('Adicionar produtos no carrinho - com sucesso', () => {

        var email = faker.internet.email()
       
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste@123')
        cy.get(':nth-child(4) > .button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-2622 > .product-block ').click()
        cy.get('.button-variable-item-XS') .click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.page-title').should("contain", "Carrinho")
    
    });
});

