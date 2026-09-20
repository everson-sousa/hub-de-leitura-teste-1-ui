describe('Funcionalidade: Contato', () => {
    beforeEach(() => {
        cy.visit('index.html')
    });
        
    
    it('Deve preencher formuário de contato com sucesso', () => {        
        cy.get('#name').type('Everson Almeida')
        cy.get('#email').type('zedascouves@gmail.com')
        cy.get('#subject').select('Parcerias')
        cy.get('#message').type('Como ser uma parceiro?')
        cy.get('#btn-submit').click()
        cy.contains('Contato enviado com sucesso').should('exist')
        
    });
    it('Deve validar mensagem de erro ao enviar sem preencer o nome', () => {        
        cy.get('#name').clear()
        cy.get('#email').type('zedascouves@gmail.com')
        cy.get('#subject').select('Parcerias')
        cy.get('#message').type('Como ser uma parceiro?')
        cy.get('#btn-submit').click()
        cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome')
        });

        it('Deve validar mensagem de erro ao enviar sem preencer o campo email', () => {        
        cy.get('#name').type('Everson Almeida')
        cy.get('#email').clear()
        cy.get('#subject').select('Parcerias')
        cy.get('#message').type('Como ser uma parceiro?')
        cy.get('#btn-submit').click()
        cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.')
        });

        it('Deve validar mensagem de erro ao não selecionar assunto', () => {        
        cy.get('#name').type('Everson Almeida')
        cy.get('#email').type('zedascouves@gmail.com')
        //cy.get('#subject').select('Parcerias')
        cy.get('#message').type('Como ser uma parceiro?')
        cy.get('#btn-submit').click()
        cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')
        });

        it('Deve validar mensagem de erro ao deixar campo mensagem vazio', () => {        
        cy.get('#name').type('Everson Almeida')
        cy.get('#email').type('zedascouves@gmail.com')
        cy.get('#subject').select('Parcerias')
        cy.get('#message').clear()
        cy.get('#btn-submit').click()
        cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')
        });
    
});
