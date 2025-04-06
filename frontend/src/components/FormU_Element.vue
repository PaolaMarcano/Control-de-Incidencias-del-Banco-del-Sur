<script setup>
//import { defineProps, defineModel, ref, computed } from 'vue';

</script>

<template>
  <form class="form">
    <div class="form_section">
      <label class="label_title">Datos Personales</label>

      <label for="nombre" class="label_sub_title">Nombre Completo</label>
      <input class="input_element" type="text" name="nombre" />

      <label for="telefono" class="label_sub_title">Teléfono</label>
      <input class="input_element" type="tel" name="telefono" />

      <label for="correo" class="label_sub_title">Correo por el que quiere ser contactado</label>
      <input class="input_element" type="gmail" name="correo" />
    </div>
  
    <div class="form_section">
      <label class="label_title">Registro de la Incidencia</label>

      <label for="incidencia_titulo" class="label_sub_title">Título de la incidencia (No es obligatorio)</label>
      <input class="input_element" type="text" name="incidencia_titulo" />

      <label for="descripcion" class="label_sub_title">Descripción de la incidencia</label>
      <textarea class="input_element" name="descripcion" ></textarea>

      <label for="fecha_hora" class="label_sub_title">Fecha y hora de cuando ocurrió la incidencia</label>
      <input class="input_element" type="datetime-local" name="fecha_hora" />

      <label for="ubicacion" class="label_sub_title">Ubicación del equipo o incidencia</label>
      <input class="input_element" type="text" name="ubicacion" />
    </div>

    <button type="submit" class="submit_button">Enviar</button>

  </form>
</template>

<style>

.form{
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 35px;
}

.form_section{
  margin: 15px 0px;
  padding: 15px;
  border: 8px solid #1B2B46;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 800px;
  gap: 5px;
}

.label_title{
  font-size: 20px;
  font-weight: bold;
  color: #1B2B46;
  margin-bottom: 10px;
}

.label_sub_title{
  font-size: 15px;
  font-weight: bold;
  color: #1B2B46;
  margin-bottom: 5px;
}

textarea{
  resize: none;
  height: 100px;
}

.input_element{
  width: 96%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #1B2B46;
  margin-bottom: 10px;
}

.submit_button{
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #1B2B46;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.submit_button:hover{
  background-color: #2fc3e7;
  color: #1B2B46;
}

</style>