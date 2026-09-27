describe('Funcionalidade: Catalogo de livros', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
    });
    it('Deve clicar no botão Adicionar à cesta', () => {
        cy.get(':nth-child(2) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#global-alert-container').should('contain', 'A Arte da Guerra')
        //cy.get('#alert-container').should('contain', 'A Arte da Guerra')
         
        cy.get('#cart-count').should('contain', 1)
        //cy.get(':nth-child(2) > .nav-link').click()
    });
    it('Deve clicar em todos os botões Adicionar à cesta', () => {
        cy.get('.btn-primary').click({multiple: true})
        cy.get('#cart-count').should('contain', 12)
        
    });
     it('Deve clicar no primeiro botão Adicionar à cesta', () => {
        cy.get('.btn-primary').first().click()
     });
     
     it('Deve clicar no ultimo botão Adicionar à cesta', () => {
        cy.get('.btn-primary').last().click()
     });
     it('Deve clicar no ultimo botão Adicionar à cesta', () => {
        cy.get('.btn-primary').eq(3).click()
        cy.get('#global-alert-container').should('contain',  'A Menina que Roubava Livros')        
        cy.get('.btn-outline-danger').click()

        cy.get('#global-alert-container').should('contain',  "A Menina que Roubava Livros")
     });
     it('Deve adicionar e remover o livro da cesta', () => {
            cy.get('.btn-primary').eq(3).click()

            cy.get('#global-alert-container')
                .should('contain', 'A Menina que Roubava Livros')

            cy.contains('CESTA DE LIVROS').click()

            cy.get('.btn-outline-danger').click()
        
        // Valida que o livro foi removido verificando a mensagem de cesto vazio
        cy.contains('Sua cesta está vazia').should('be.visible')
    });
    it.only('Deve clicar no nome do livro e direcionar para a tela do livro', () => {
        cy.contains('A Metamorfose').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', ' Livro adicionado à cesta com sucesso!')
        });
    });
  
     

