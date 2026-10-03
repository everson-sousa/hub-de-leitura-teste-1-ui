///<reference types = 'cypress'/>
import catalogo from  "../fixtures/livros.json"

describe('Funcionalidade: Busca no catálogo', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
    });
    it('Deve fazer a busca do livro O Alquimista com sucesso!', () => {
        cy.get('#search-input').type('O Alquimista')
        cy.get('.card-title > .text-dark').should('contain', 'O Alquimista')
        
    });
    it.only('Deve fazer a busca do arquivo de massa de dados!', () => {
        cy.get('#search-input').type(catalogo[1].Livro)
        cy.get('.card-title > .text-dark').should('contain', catalogo[1].Livro)
        
    });
});