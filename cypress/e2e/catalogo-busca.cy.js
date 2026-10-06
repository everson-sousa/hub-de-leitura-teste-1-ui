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
    it('Deve fazer a busca do arquivo de massa de dados!', () => {
        cy.get('#search-input').type(catalogo[1].Livro)
        cy.get('.card-title > .text-dark').should('contain', catalogo[1].Livro)
        
    });
    it('Deve fazer busca de livro usando fixture', () => {
        cy.fixture('livros').then((cat) => {
            cy.get('#search-input').type(cat[1].Livro)
            cy.get('.card-title > .text-dark').should('contain', catalogo[1].Livro)
        })
        
    });
    it.only('Deve validar todos os livros da lista', () => {
        cy.fixture('livros').then((cat) =>{
            cat.forEach(item =>{
              cy.get('#search-input').clear().type(item.Livro)
              cy.get('.card-title > .text-dark').should('contain', item.Livro)  
            })

        })
        
    });
});