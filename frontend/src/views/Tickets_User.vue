<script setup>
import { ref } from 'vue';
import Ticket_Element from '../components/Ticket_Element.vue';
import { tickets_users } from '../../../server/tickets_user';
const tickets = ref(tickets_users);

const cerrarIncidenciaHandler = (ticketRecibido) => {
  const index = tickets.value.findIndex(ticket => ticket === ticketRecibido);

  if (index !== -1) {
    tickets.value = tickets.value.map((ticket, i) =>
      i === index ? { ...ticket, estado: 'Cerrado' } : ticket
    );
    console.log(`Incidencia ${tickets.value[index].nombre} cerrada.`);
  }
};

const eliminarIncidenciaHandler = (ticketAEliminar) => {
    // Encuentra el índice del ticket a eliminar comparando por referencia
    const index = tickets.value.findIndex(ticket => ticket === ticketAEliminar);

    if (index !== -1) {
        // Crea un nuevo array sin el ticket a eliminar
        tickets.value = tickets.value.filter(ticket => ticket !== ticketAEliminar);
        console.log(`Incidencia ${ticketAEliminar.nombre} eliminada.`);
    }
};

</script>


<template>
  <div class="title">
    <h1>Tickets de Incidencias de Usuarios</h1>
  </div>
  <div  v-for="(ticket, index) in tickets" :key="index"  class="tickets_container">
    <Ticket_Element 
      :ticketData="ticket" 
      @cerrar-incidencia="cerrarIncidenciaHandler"
      @eliminar-ticket="eliminarIncidenciaHandler"
    />
  </div>
</template>

<style>

.title{
  color: #1B2B46;
  margin: 0px 15px;
}

.tickets_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;
}

</style>