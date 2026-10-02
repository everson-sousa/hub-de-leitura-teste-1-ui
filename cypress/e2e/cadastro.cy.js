
///<reference types = 'cypress'/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de leitura', () => {
    beforeEach(() => {
            cy.visit('register.html')
        });
    it('Deve efetuar cadastro com sucesso', () => {        
        cy.get('#name').type('Everson Almeida')
        cy.get('#email').type(`everson${Date.now()}@teste.com`)
        cy.get('#phone').type('11989674523')
        cy.get('#password').type('Senha@456')
        cy.get('#confirm-password').type('Senha@456')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        
    });
    it.only('Deve preencher cadastro costumizado', () => {
        let email = `teste${Date.now()}@teste.com`
        let nome = faker.person.fullName({sex: 'male'})
        cy.preencherCadastro(
            'Everson Sousa',
            email,
            '11962839201',
            'Senha1234',
            'Senha1234',
        )
        cy.url().should('include', 'dashboard') 
        
    });
    it('Deve efetuar cadastro com sucesso usando Faker', () => {        
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('11989674523')
        cy.get('#password').type('Senha@456')
        cy.get('#confirm-password').type('Senha@456')        
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
        
    });
   
});