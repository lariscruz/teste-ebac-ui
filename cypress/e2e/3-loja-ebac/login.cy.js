/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username') .type('larissa.teste1@teste.com.br')
        cy.get('#password') .type('teste@123')
        cy.get('#rememberme')
        cy.get('.woocommerce-form > .button') .click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, larissa.teste1 (não é larissa.teste1? Sair)')
    })
})