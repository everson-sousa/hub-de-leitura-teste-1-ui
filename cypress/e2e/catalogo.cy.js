describe('Funcionalidade: Catalogo de livros', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
    });        
    
    it.skip('Deve adicionar um livro da segunda página pelo nome', () => {    
        cy.get(':nth-child(3) > .page-link').click() 
        //Inserindo 22° item    
        cy.contains('.card', 'Orgulho e Preconceito').find('.btn-primary').click()
        });
    it.only('Deve adicionar todos os 23 livros do acervo e validar a cesta', () => {
        cy.get('.btn-primary').click({ multiple: true })  
        // NOTA TÉCNICA: O Cypress interage apenas com o DOM atual renderizado. 
        // Devido à paginação da interface (12 itens por tela), o clique na página seguinte 
        // é obrigatório para carregar os elementos em memória antes de efetuar a busca.  
        cy.contains('.page-link', '2').click()    
        cy.get('.btn-primary').click({ multiple: true })    
        cy.get('#cart-count').should('contain', 23)    
        cy.contains('CESTA DE LIVROS').click()    
        cy.contains('Total de livros:').parent().should('contain', 23)      
        });
});
  
     

