describe('Test formulario usuario', () => {
  it('visitar la ruta de dev', () => {
    cy.visit('/form_dev')
    cy.contains('h1', 'Datos Control de Incidencia (Parte del Equipo de Desarrollo)')
  })
  it('llenar los datos del formulario', () => {
    cy.get('#cy_nombre').type("Gino Paolo")
    cy.get('#cy_telefono').type("0414-1535567")
    cy.get('#cy_correo').type("gino@gmail.com")
    cy.get('#cy_titulo').type("Problemas con el terminal")
    cy.get('#cy_descripcion').type("El terminal del cajero automático no responde")
    cy.get('#cy_fecha_hora').type("2025-04-08T22:49")
    cy.get('#cy_ubicacion').type("Oficina de Créditos, Estación #2")
    cy.get('#cy_id_equipo').type("EST-CRE-2")
    cy.get('#1_equipo').click()
    cy.get('#3_impacto').click()
    cy.get('#2_tipo_incidencia').click()
    cy.get('#2_N_urgencia').click()
    cy.get('#cy_causas').type("Error en la comunicación con la base de datos del servidor.")
    cy.get('#cy_reporte').type("El usuario reporta mensaje de error al intentar acceder a su cuenta en línea.")
    cy.get('#cy_resolucion').type("Se reinició el servidor de la base de datos y se restableció la conexión. Se monitorea el sistema para asegurar la estabilidad.")
    cy.contains('button', 'Enviar').click()//Enviar formulario
    cy.contains('p', 'Incidencia registrada')
  })
  it('ver incidencia registrada', () => {
    cy.contains('a', 'Tickets Desarrolladores').click()//Ver incidencias
    cy.url().should('include', '/tickets_dev')
  })
})
