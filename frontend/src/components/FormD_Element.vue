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

      <label for="id_equipo" class="label_sub_title">Número de identificación del equipo (Si es que lo tiene, no es obligatorio)</label>
      <input class="input_element" type="text" name="id_equipo" />

      
      <label class="label_sub_title">Asigne un equipo que se pueda hacer responsable de la gestión</label>
      <label class="label_option" for="1_equipo">
        <input type="radio" id="1_equipo" name="radio_equipo" />Equipo de Soporte Cajeros
      </label>
      <label class="label_option" for="2_equipo">
        <input type="radio" id="2_equipo" name="radio_equipo" />Equipo de Soporte Banca en Línea
      </label>
      <label class="label_option" for="3_equipo">
        <input type="radio" id="3_equipo" name="radio_equipo" />Equipo de Soporte Redes
      </label>

    </div>

    <div class="form_section">

      <label class="label_title">Clasificación, Categorías según el caso:</label>
      <label class="label_sub_title">Impacto en el negocio</label>
      <label class="label_option" for="1_impacto">
        <input type="radio" id="1_impacto" name="radio_impacto" />Crítico (Problemas que impiden realizar operaciones bancarias esenciales)
      </label>
      <label class="label_option" for="2_impacto">
        <input type="radio" id="2_impacto" name="radio_impacto" />Alto (Problemas que afectan a un gran número de usuarios o procesos laborales
      </label>
      <label class="label_option" for="3_impacto">
        <input type="radio" id="3_impacto" name="radio_impacto" />Medio (Problemas que afectan a un grupo limitado de usuarios o procesos laborales)
      </label>
      <label class="label_option" for="4_impacto">
        <input type="radio" id="4_impacto" name="radio_impacto" />Bajo (Problemas que tienen un impacto mínimo en los usuarios o procesos laborales)
      </label>

      <label class="label_sub_title">Tipo de incidencia</label>
      <label class="label_option" for="1_tipo_incidencia">
        <input type="radio" id="1_tipo_incidencia" name="radio_tipo_incidencia" />Hardware
      </label>
      <label class="label_option" for="2_tipo_incidencia">
        <input type="radio" id="2_tipo_incidencia" name="radio_tipo_incidencia" />Software
      </label>
      <label class="label_option" for="3_tipo_incidencia">
        <input type="radio" id="3_tipo_incidencia" name="radio_tipo_incidencia" />Red
      </label>
      <label class="label_option" for="4_tipo_incidencia">
        <input type="radio" id="4_tipo_incidencia" name="radio_tipo_incidencia" />Seguridad
      </label>
      <label class="label_option" for="5_tipo_incidencia">
        <input type="radio" id="5_tipo_incidencia" name="radio_tipo_incidencia" />Comunicación
      </label>
      <label class="label_option" for="6_tipo_incidencia">
        <input type="radio" id="6_tipo_incidencia" name="radio_tipo_incidencia" />Procesos
      </label>

    </div>

    <div class="form_section">

      <label class="label_title">Priorización, Priorizar la urgencia de resolución de la incidencia</label>
      <label class="label_sub_title">Nivel de urgencia</label>
      <label class="label_option" for="1_N_urgencia">
        <input type="radio" id="1_N_urgencia" name="radio_N_urgencia" />Alto
      </label>
      <label class="label_option" for="2_N_urgencia">
        <input type="radio" id="2_N_urgencia" name="radio_N_urgencia" />Medio
      </label>
      <label class="label_option" for="3_N_urgencia">
        <input type="radio" id="3_N_urgencia" name="radio_N_urgencia" />Bajo
      </label>

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

.label_option{
  color: #1B2B46;
  margin-bottom: 3px;
  margin: 5px;
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