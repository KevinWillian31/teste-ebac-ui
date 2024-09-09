///<reference types="cypress"/>

const perfil = require ('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
       cy.visit('minha-conta')
       
    });
   

it('Deve fazer login com sucesso', () =>{
    
    cy.get('#username').type('kevin.teste@teste.com')
    cy.get('#password').type('123456')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, kevin.teste (não é kevin.teste? Sair)')
   
} )

it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
   
    cy.get('#username').type('kevin.tete@teste.com')
    cy.get('#password').type('123456')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li'). should('contain', 'Endereço de e-mail desconhecido.')
})

it('Deve exibir uma mesagem de erro ao inserir uma senha inválida', () => {

    cy.get('#username').type('kevin.teste@teste.com')
    cy.get('#password').type('@123456')
    cy.get('.woocommerce-form > .button').click()
    //cy.get('.woocomumerce-error').should('contain','Erro: A senha fornecida para o e-mail kevin.teste@teste.com está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')
});

it('Deve fazer login utilizando massa de dados', () => {

cy.get('#username').type(perfil.usuario)
cy.get('#password').type(perfil.senha)
cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, kevin.teste (não é kevin.teste? Sair)')
   

});

it('Deve fazer login utilizando fixture', () => {

     cy.fixture('perfil').then(dados =>{

      cy.get('#username').type(dados.usuario)
      cy.get('#password').type(dados.senha, {log: false})
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, kevin.teste (não é kevin.teste? Sair)')

})
    
});

it('Deve fazer login com sucesso - usando comandos customizados', () => {

    cy.login('kevin.teste@teste.com', '123456')
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, kevin.teste (não é kevin.teste? Sair)")
    
});


})
