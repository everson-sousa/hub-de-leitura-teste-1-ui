///<reference types = 'cypress'/>
import user from "../fixtures/user.json"
 describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit('login.html')
    });
    it.skip('Deve efetuar login com sucesso', () => {
        cy.get('#email')
        cy.get('#password')
    });
    it.skip('Efetuando login capturando login e senha', () => {
        cy.get(':nth-child(4) > .btn').click()
        cy.get('#login-btn').click() 
        //cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')
    });
    it('Efetuando login digitando login e senha', () => {
       cy.get('#email').type('usuario@teste.com')
       cy.get('#password').type('user123')
       cy.get('#login-btn').click()
       cy.url().should('include', 'dashboard')
        
    });
    it('Deve efetuar login com sucesso, usando comando costumizado', () => {
       cy.login('usuario@teste.com', 'user123') 
    });
    it('Deve efetuar login com sucesso buscando massa de dados', () => {
        cy.login(user.email, user.senha) 

        
    });
 });