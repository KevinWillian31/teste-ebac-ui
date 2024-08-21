///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
         
    });

    it('Funcionalidade:Cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@123@3')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')        
    });

    it('Funcionalidade:Modificação detalhes da conta com sucesso', () => {

      cy.get('#reg_email').type(faker.internet.email())
      cy.get('#reg_password').type(123455)
      cy.get(':nth-child(4) > .button').click()
      cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
      cy.get('#account_first_name').type(faker.person.firstName())
      cy.get('#account_last_name').type(faker.person.lastName())
      cy.get('.woocommerce-Button').click()
      cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

    it.only('Funcionalidade:Modificação detalhes da conta com sucesso - usando variáveis', () => {

    var email = faker.internet.email()
    var nome = faker.person.firstName()
    var sobrenome = faker.person.lastName()
      
      cy.get('#reg_email').type(email)
      cy.get('#reg_password').type(123455)
      cy.get(':nth-child(4) > .button').click()
      cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
      cy.get('#account_first_name').type(nome)
      cy.get('#account_last_name').type(sobrenome)
      cy.get('.woocommerce-Button').click()
      cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });


});