<script setup>
import { ref } from 'vue';
import Ticket_Element from '../components/Ticket_Element.vue';
import { tickets_dev } from '../../../server/tickets_dev';
const ticketsD = ref(tickets_dev);

</script>


<template>
  <div class="title">
    <h1>Tickets de Incidencias de Desarrolladores</h1>
  </div>
  <div v-for="(ticketD, indexD) in ticketsD" :key="indexD"  class="tickets_container">
    <Ticket_Element :es-desarrollador="true" :ticketData="ticketD" />
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
