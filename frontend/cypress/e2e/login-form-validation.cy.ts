import mocks from '../fixtures/mocks.json'

describe('Login Form Validation', () => {
  beforeEach(() => {
    cy.visit('/login')
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
    cy.get('.Toastify__toast-body').contains('Oops... não encontramos nenhum usuário com esse e-mail')
    cy.get('.Toastify__toast-body').should('be.visible')
  })
})

describe('Login Screen Advanced Responsiveness Tests', () => {
  const viewports = mocks.viewports

  viewports.forEach((viewport) => {
    describe(`on ${viewport.size}`, () => {
      beforeEach(() => {
        cy.viewport(viewport.width, viewport.height)
        cy.visit('/login')
      })

      it('should show the form with all fields accessible', () => {
        cy.get('form').should('be.visible')
        cy.get('input[name="email"]').should('be.visible')
        cy.get('input[name="password"]').should('be.visible')
        cy.get('button[type="submit"]').should('be.visible')
      })

      it('should have a readable font size for all text', () => {
        cy.get('body')
          .should('have.css', 'font-size')
          .and('match', /^[1-9]\d*(\.\d+)?px$/)
      })

      it('should not have any text overflow or wrapping issues', () => {
        cy.get('form').each((element) => {
          cy.wrap(element).should('not.have.css', 'overflow', 'hidden')
          cy.wrap(element).should('not.have.css', 'white-space', 'nowrap')
        })
      })

      it('should maintain image aspect ratios', () => {
        cy.get('img').each((image) => {
          cy.wrap(image).invoke('outerWidth').should('be.gte', 0)
          cy.wrap(image).invoke('outerHeight').should('be.gte', 0)
        })
      })
    })
  })
})

describe('Login Form Accessibility', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should ensure that the page has a title', () => {
    cy.title().should('not.be.empty')
  })

  it('should ensure that all form elements are focusable', () => {
    cy.get('input[name="email"]').focus().should('have.focus')
    cy.get('input[name="password"]').focus().should('have.focus')
  })

  it('should ensure there are no images without alt text', () => {
    cy.get('img').each((img) => {
      cy.wrap(img).should('have.attr', 'alt').and('not.be.empty')
    })
  })

  it('should ensure ARIA attributes are used correctly', () => {
    cy.get('input[name="email"]').invoke('attr', 'aria-label').should('not.be.empty')
    cy.get('input[name="email"]').invoke('attr', 'aria-invalid').should('exist')
    cy.get('input[name="email"]').invoke('attr', 'aria-describedby').should('exist')

    cy.get('input[name="password"]').invoke('attr', 'aria-label').should('not.be.empty')
    cy.get('input[name="password"]').invoke('attr', 'aria-invalid').should('exist')
    cy.get('input[name="password"]').invoke('attr', 'aria-describedby').should('exist')
  })
})
