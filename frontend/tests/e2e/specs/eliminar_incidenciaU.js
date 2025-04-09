describe('Eliminar incidencia', () => {
  it('visitar la ruta de los tickets', () => {
    cy.visit('/tickets_user')
    cy.contains('h1', 'Tickets de Incidencias de Usuarios')
  })
  it('eliminar una de las incidencias', () => {
    cy.contains('button', 'Eliminar').click()//Eliminar incidencia
  })
})
