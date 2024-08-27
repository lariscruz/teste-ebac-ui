/// <reference types="cypress" />

describe('Funcionalidade: Detalhes da Conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login=> {
            cy.login('larissa.teste1@teste.com.br', 'teste@123')
        })
    
    });
    
it('Deve completar detalhes da conta com sucesso ', () => {
        cy.detalhesConta ('Larissa' , 'Cruz', 'lari.cruz')
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });
});