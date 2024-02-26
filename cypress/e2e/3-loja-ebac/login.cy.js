/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username') .type('larissa.teste1@teste.com.br')
        cy.get('#password') .type('teste@123')
        cy.get('#rememberme')
        cy.get('.woocommerce-form > .button') .click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, larissa.teste1 (não é larissa.teste1? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username') .type('larissa1@teste.com.br')
        cy.get('#password') .type('teste@123')
        cy.get('#rememberme')
        cy.get('.woocommerce-form > .button') .click()
        //cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.') 
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username') .type('larissa.teste1@teste.com.br')
        cy.get('#password') .type('teste@1234')
        cy.get('#rememberme')
        cy.get('.woocommerce-form > .button') .click()   
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail larissa.teste1@teste.com.br está incorreta. Perdeu a senha?') 
        cy.get('.woocommerce-error').should('exist')

    });
})