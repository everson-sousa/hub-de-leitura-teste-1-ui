class CadastroPage{
    //Seletores
    campoNome() {return cy.get('#name')}
    campoEmail() {return cy.get('#email')}
    campoTelefone() {return cy.get('#phone')}
    campoSenha() {return cy.get('#password')}
    campoConfirmarSenha() {return cy.get('#confirm-password')}
    checkTerms() {return cy.get('#terms-agreement')}
    botaCriarConta() {return cy.get('#register-btn')}

    //Métodos
    visitarPaginaCadastro(){
    cy.visit('register.html')
    }

    preencherCadastro(nome, email, telefone, senha, confirmaSenha) {
        if(nome)this.campoNome().clear().type(nome)
        if(email)this.campoEmail().clear().type(email)
        this.campoTelefone().clear().type(telefone)
        this.campoSenha().clear().type(senha)
        this.campoConfirmarSenha().clear().type(confirmaSenha)
        this.checkTerms().check()
        this.botaCriarConta().click()
    }
    
}

export default new CadastroPage()