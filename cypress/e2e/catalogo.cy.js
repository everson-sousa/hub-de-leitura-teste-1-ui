describe('Funcionalidade: Catalogo de livros', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
    });
    it.skip('Deve clicar no botão Adicionar à cesta', () => {
        cy.get(':nth-child(2) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#global-alert-container').should('contain', 'A Arte da Guerra')
        //cy.get('#alert-container').should('contain', 'A Arte da Guerra')
         
        cy.get('#cart-count').should('contain', 1)
        //cy.get(':nth-child(2) > .nav-link').click()
    });
    it.skip('Deve clicar em todos os botões Adicionar à cesta', () => {
        cy.get('.btn-primary').click({multiple: true})
        cy.get('#cart-count').should('contain', 10)
        
    });
     it.skip('Deve clicar no primeiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').first().click()
     });
     
     it.skip('Deve clicar no ultimo botão Adicionar à cesta', () => {
        cy.get('.btn-primary').last().click()
     });
     it.skip('Deve clicar no ultimo botão Adicionar à cesta', () => {
        cy.get('.btn-primary').eq(3).click()
        cy.get('#global-alert-container').should('contain',  'A Menina que Roubava Livros')        
        cy.get('.btn-outline-danger').click()

        cy.get('#global-alert-container').should('contain',  "A Menina que Roubava Livros")
     });
     
    it.skip('Deve clicar no nome do livro e direcionar para a tela do livro', () => {
        cy.contains('A Metamorfose').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', ' Livro adicionado à cesta com sucesso!')
        });

    it.skip('Deve efetuar busca de um livro que está fora do índice', () => {
    //cy.get(':nth-child(3) > .page-link').click()
    cy.get('.btn-primary').eq(11).click()
    });
    it.skip('Deve adicionar e remover o livro da cesta', () => {
            cy.get('.btn-primary').eq(3).click()

            cy.get('#global-alert-container')
                .should('contain', 'A Menina que Roubava Livros')

            cy.contains('CESTA DE LIVROS').click()  
            cy.get('.btn-outline-danger').click()        
            cy.contains('Sua cesta está vazia').should('be.visible')
    });
    it.skip('Deve adicionar o livro pelo nome', () => {
        cy.contains('.card', 'O Alquimista').find('.btn-primary').click()
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
  
     

