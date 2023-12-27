describe('Form Validation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display error message if you dont fill in the email or password', () => {
    cy.get('button[type="submit"]').dblclick()
    cy.get('.error-form').contains('E-mail é obrigatório')
    cy.get('.error-form').contains('Senha requerida')
  })

  it('should display an error message if email is invalid', () => {
    cy.get('input[name="email"]').type('test')
    cy.get('input[name="password"]').type('test')
    cy.get('.error-form').contains('Formato de endereço de e-mail inválido')
  })

  it('should display an error message if password is invalid', () => {
    cy.get('input[name="email"]').clear()
    cy.get('input[name="password"]').clear()
    cy.get('input[name="password"]').type('1a')
    cy.get('input[name="email"]').type('test')
    cy.get('.error-form').contains('A senha deve ter no mínimo 6 caracteres')
  })

  it('unregistered email', () => {
    cy.get('input[name="email"]').type('invalid@hotmail.com')
    cy.get('input[name="password"]').type('123456')
    cy.get('button[type="submit"]').click()
    cy.get('.Toastify__toast-body').contains('Oops... credenciais inválidas')
    cy.get('.Toastify__toast-body').should('be.visible')
  })
})
