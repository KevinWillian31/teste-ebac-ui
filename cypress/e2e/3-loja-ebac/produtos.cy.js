describe('Funcionalidade: Produtos', () => {
  
  beforeEach('', () => {
        cy.visit('produto')
       });
  
    it('Dever selecionar um produto da lista', () => {

      cy.get('.product-block')
        //.first()
            // .last()
              // .eq(2)
              .contains("Aero Daily Fitness Tee")
                      .click()
                      cy.get('.single_add_to_cart_button').should("contain", "Comprar")
    });
});