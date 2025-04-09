describe('Test formulario usuario', () => {
  it('visitar la ruta principal', () => {
    cy.visit('/')
    cy.contains('h1', 'Datos Control de Incidencia (Usuario Común)')
  })
  it('llenar los datos del formulario', () => {
    cy.get('#cy_nombre').type("Paola Marcano")
    cy.get('#cy_telefono').type("0414-1234567")
    cy.get('#cy_correo').type("paola@gmail.com")
    cy.get('#cy_titulo').type("Problemas con el terminal")
    cy.get('#cy_descripcion').type("El terminal del cajero automático no responde")
    cy.get('#cy_fecha_hora').type("2025-04-08T22:49")
    cy.get('#cy_ubicacion').type("")
    cy.contains('button', 'Enviar').click()//Enviar formulario
    cy.contains('p', 'Incidencia registrada')
  })
})
