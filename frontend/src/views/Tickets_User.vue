<script setup>
import { ref } from 'vue';
import Ticket_Element from '../components/Ticket_Element.vue';
import { tickets_users } from '../../../server/tickets_user';
const tickets = ref(tickets_users);

</script>


<template>
  <div class="title">
    <h1>Tickets de Incidencias de Usuarios</h1>
  </div>
  <div  v-for="(ticket, index) in tickets" :key="index"  class="tickets_container">
    <Ticket_Element :ticketData="ticket" />
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