describe('Cerrar incidencia', () => {
  it('visitar la ruta de los tickets', () => {
    cy.visit('/tickets_dev')
    cy.contains('h1', 'Tickets de Incidencias de Desarrolladores')
  })
  it('cerrar una de las incidencias', () => {
    cy.contains('button', 'Cerrar Incidencia').click()//Cerrar incidencia
  })
})
