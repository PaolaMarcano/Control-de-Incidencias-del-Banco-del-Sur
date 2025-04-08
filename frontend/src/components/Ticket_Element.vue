<script setup>

import { defineProps, ref } from 'vue';

const props = defineProps({
  esDesarrollador: {
    type: Boolean,
    default: false // Valor por defecto si no se pasa el prop
  }
});

const mostrarDesarrolladores = ref(props.esDesarrollador);

</script>

<template>
  <div class="ticket_container">
    <div class="ticket_botonera_section">
      <button class="boton">Cerrar Incidencia</button>
      <button class="boton">Eliminar</button>
    </div>
    <div class="ticket_Subcontainer">
      <div class="ticket_section">
        <h2>Datos del usuario</h2>
        <ul>
          <li><strong>Nombre:</strong> Juan Pérez</li>
          <li><strong>Teléfono:</strong> 555-1234</li>
          <li><strong>Correo:</strong> juanperez@email.com</li>
        </ul>
      </div>

      <div class="ticket_section">
        <h2>Registro de la Incidencia</h2>
        <ul>
          <li><strong>Título:</strong></li>
          <li><strong>Descripción:</strong> El terminal del cajero automático no dispensa efectivo</li>
          <li><strong>Fecha y hora:</strong> 2024-05-08 08:30 AM</li>
          <li><strong>Ubicación:</strong> Sucursal Centro, Cajero #3</li>

          <!-- Partes para desarrolladores -->
        
          <div v-if="mostrarDesarrolladores">
            <li><strong>Número de identificación del equipo:</strong> CAJ-CEN-03</li>
            <li><strong>Equipo responsable de la gestión:</strong> Equipo de Soporte Cajeros</li>
            <li><strong>Impacto en el negocio:</strong> Crítico</li>
            <li><strong>Tipo de incidencia:</strong> Hardware</li>
            <li><strong>Priorización:</strong> Alto</li>
            <li><strong>Estado:</strong> Cerrado</li> <!-- En curso o Cerrado (Siempre empieza en curso) -->
          </div>

        </ul>
      </div>
    </div>

  </div>
</template>

<style scoped>

.ticket_container{
  border: 8px solid #1B2B46;
  border-radius: 5px;
  width: 1000px;
  margin: 20px;
}

.ticket_Subcontainer{
  display: flex;
  flex-direction: row;
}

.ticket_section{
  padding: 10px 30px;
}

.ticket_botonera_section{
  background-color: #1B2B46;
}

.boton{
  margin: 10px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
}

.boton:hover{
  cursor: pointer;
  background-color: #a7e9fa;
}

ul {
  list-style-type: none;
  padding: 0;
}

li{
  margin: 8px 0;
}

strong, h2{
  color: #1B2B46;
}

</style>