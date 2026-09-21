///<reference types = 'cypress'/>

describe('Funcionalidade: Cadastro no Hub de leitura', () => {
    beforeEach(() => {
            cy.visit('register.html')
        });
    it.only('Deve efetuar cadastro com sucesso', () => {        
        cy.get('#name').type('Everson Almeida')
        cy.get('#email').type(`everson${Date.now()}@teste.com`)
        cy.get('#phone').type('11989674523')
        cy.get('#password').type('Senha@456')
        cy.get('#confirm-password').type('Senha@456')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        
    });
    it('', () => {
        
    });
});