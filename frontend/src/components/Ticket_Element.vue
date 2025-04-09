<script setup>

import { defineProps, ref, defineEmits } from 'vue';

const props = defineProps({
  esDesarrollador: {
    type: Boolean,
    default: false // Valor por defecto si no se pasa el prop
  },
  ticketData: {
    type: Object,
    required: true
  },
});

const mostrarDesarrolladores = ref(props.esDesarrollador);

const emit = defineEmits(['cerrar-incidencia', 'eliminar-ticket']); // Define el evento que se emitirá

const cerrarTicket = () => {
  emit('cerrar-incidencia', props.ticketData); // Emite el evento con los datos del ticket (el padre decidirá cómo actualizar el estado)
};

const eliminarTicket = () => {
    emit('eliminar-ticket', props.ticketData); // Emite el evento con los datos del ticket a eliminar
};

</script>

<template>
  <div class="ticket_container">
    <div class="ticket_botonera_section">
      <button class="boton" v-if="ticketData.estado != 'Cerrado'" @click="cerrarTicket">Cerrar Incidencia</button>
      <button class="boton" @click="eliminarTicket">Eliminar</button>
    </div>
    <div class="ticket_Subcontainer">
      <div class="ticket_section">
        <h2>Datos del usuario</h2>
        <ul>
          <li><strong>Nombre:</strong> {{ ticketData.nombre }}</li>
          <li><strong>Teléfono:</strong> {{ ticketData.telefono }}</li>
          <li><strong>Correo:</strong> {{ ticketData.correo }}</li>
        </ul>
      </div>

      <div class="ticket_section">
        <h2>Registro de la Incidencia</h2>
        <ul>
          <li><strong>Título:</strong> {{ ticketData.titulo }}</li>
          <li><strong>Descripción:</strong> {{ ticketData.descripcion }}</li>
          <li><strong>Fecha y hora:</strong> {{ ticketData.fecha_y_hora }}</li>
          <li><strong>Ubicación:</strong> {{ ticketData.ubicacion }}</li>

          <!-- Partes para desarrolladores -->
        
          <div v-if="mostrarDesarrolladores">
            <li><strong>Número de identificación del equipo:</strong> {{ ticketData.identificador }}</li>
            <li><strong>Equipo responsable de la gestión:</strong> {{ ticketData.responsable }}</li>
            <li><strong>Impacto en el negocio:</strong> {{ ticketData.impacto_en_el_negocio }}</li>
            <li><strong>Tipo de incidencia:</strong> {{ ticketData.tipo_de_incidencia }}</li>
            <li><strong>Priorización:</strong> {{ ticketData.priorizacion }}</li>

            <li><strong>Posibles Causas:</strong> {{ ticketData.causas }}</li>
            <li><strong>Reporte:</strong> {{ ticketData.reporte }}</li>
            <li><strong>Resolución:</strong> {{ ticketData.resolucion }}</li>
          </div>
          <li><strong>Estado:</strong> {{ ticketData.estado }}</li> <!-- En curso o Cerrado (Siempre empieza en curso) -->

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