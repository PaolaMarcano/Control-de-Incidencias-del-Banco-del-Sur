<script setup>
import Ticket_Element from '../components/Ticket_Element.vue';

</script>


<template>
  <div class="title">
    <h1>Tickets de Incidencias de Usuarios</h1>
  </div>
  <div class="tickets_container">
    <Ticket_Element />
    <Ticket_Element />
    <Ticket_Element />
    <Ticket_Element />
    <Ticket_Element />
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