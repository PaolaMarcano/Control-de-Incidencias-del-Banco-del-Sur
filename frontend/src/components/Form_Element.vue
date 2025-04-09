<script setup>
//import { defineProps, defineModel, ref, computed } from 'vue';
import { defineProps, ref } from 'vue';
import { tickets_users } from '../../../server/tickets_user';
import { tickets_dev } from '../../../server/tickets_dev';

const props = defineProps({
  esDesarrollador: {
    type: Boolean,
    default: false // Valor por defecto si no se pasa el prop
  }
});

const mostrarDesarrolladores = ref(props.esDesarrollador);
const registrada = ref(false);

// Crear refs para los campos del formulario
const nombre = ref('');
const telefono = ref('');
const correo = ref('');
const incidencia_titulo = ref('');
const descripcion = ref('');
const fecha_hora = ref('');
const ubicacion = ref('');
const id_equipo = ref('');
const radio_equipo = ref('');
const radio_impacto = ref('');
const radio_tipo_incidencia = ref('');
const radio_N_urgencia = ref('');
const causas = ref('');
const reporte = ref('');
const resolucion = ref('');

const handleSubmit = () => {
  // Crear un objeto con los datos del formulario
  const nuevoTicket = {
    nombre: nombre.value,
    telefono: telefono.value,
    correo: correo.value,
    titulo: incidencia_titulo.value,
    descripcion: descripcion.value,
    fecha_y_hora: fecha_hora.value,
    ubicacion: ubicacion.value,
    estado: "En curso",
  };

  // Agregar datos solo si el usuario es desarrollador
  if (mostrarDesarrolladores.value) {
    nuevoTicket.identificador = id_equipo.value;
    nuevoTicket.responsable = radio_equipo.value;
    nuevoTicket.impacto_en_el_negocio = radio_impacto.value;
    nuevoTicket.tipo_de_incidencia = radio_tipo_incidencia.value;
    nuevoTicket.priorizacion = radio_N_urgencia.value;
    nuevoTicket.causas = causas.value;
    nuevoTicket.reporte = reporte.value;
    nuevoTicket.resolucion = resolucion.value;

    // Hacer push al array de dev
    tickets_dev.push(nuevoTicket);
    registrada.value = true;
  }else{
    // Hacer push al array usuarios
    tickets_users.push(nuevoTicket);
    registrada.value = true;
  }

  // Opcional: Limpiar el formulario después de enviar
  nombre.value = '';
  telefono.value = '';
  correo.value = '';
  incidencia_titulo.value = '';
  descripcion.value = '';
  fecha_hora.value = '';
  ubicacion.value = '';
  id_equipo.value = '';
  radio_equipo.value = '';
  radio_impacto.value = '';
  radio_tipo_incidencia.value = '';
  radio_N_urgencia.value = '';
  causas.value = '';
  reporte.value = '';
  resolucion.value = '';
};

</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <div class="form_section">
      <label class="label_title">Datos Personales</label>

      <label for="nombre" class="label_sub_title">Nombre Completo</label>
      <input id="cy_nombre" v-model="nombre" required class="input_element" type="text" name="nombre" />

      <label for="telefono" class="label_sub_title">Teléfono</label>
      <input id="cy_telefono" v-model="telefono" required class="input_element" type="tel" name="telefono" />

      <label for="correo" class="label_sub_title">Correo por el que quiere ser contactado</label>
      <input id="cy_correo" v-model="correo" required class="input_element" type="gmail" name="correo" />
    </div>
  
    <div class="form_section">
      <label class="label_title">Registro de la Incidencia</label>

      <label for="incidencia_titulo" class="label_sub_title">Título de la incidencia (No es obligatorio)</label>
      <input id="cy_titulo" v-model="incidencia_titulo" class="input_element" type="text" name="incidencia_titulo" />

      <label for="descripcion" class="label_sub_title">Descripción de la incidencia</label>
      <textarea id="cy_descripcion" v-model="descripcion" required class="input_element" name="descripcion" ></textarea>

      <label for="fecha_hora" class="label_sub_title">Fecha y hora de cuando ocurrió la incidencia</label>
      <input id="cy_fecha_hora" v-model="fecha_hora" required class="input_element" type="datetime-local" name="fecha_hora" />

      <label for="ubicacion" class="label_sub_title">Ubicación del equipo o incidencia</label>
      <input id="cy_ubicacion" v-model="ubicacion" required class="input_element" type="text" name="ubicacion" />

      <!-- Partes para desarrolladores -->

      <div class="section_dev" v-if="mostrarDesarrolladores">
        <label for="id_equipo" class="label_sub_title">Número de identificación del equipo (Si es que lo tiene, no es obligatorio)</label>
        <input  id="cy_id_equipo" v-model="id_equipo" class="input_element" type="text" name="id_equipo" />
 
        <label class="label_sub_title">Asigne un equipo que se pueda hacer responsable de la gestión</label>
        <label class="label_option" for="1_equipo">
          <input v-model="radio_equipo" value="Equipo de Soporte Cajeros" type="radio" id="1_equipo" name="radio_equipo" required />Equipo de Soporte Cajeros
        </label>
        <label class="label_option" for="2_equipo">
          <input v-model="radio_equipo" value="Equipo de Soporte Banca en Línea" type="radio" id="2_equipo" name="radio_equipo" />Equipo de Soporte Banca en Línea
        </label>
        <label class="label_option" for="3_equipo">
          <input v-model="radio_equipo" value="Equipo de Soporte Redes" type="radio" id="3_equipo" name="radio_equipo" />Equipo de Soporte Redes
        </label>
      </div>

    </div>

    <div class="form_section" v-if="mostrarDesarrolladores">

      <label class="label_title">Clasificación, Categorías según el caso:</label>
      <label class="label_sub_title">Impacto en el negocio</label>
      <label class="label_option" for="1_impacto">
        <input v-model="radio_impacto" value="Crítico" type="radio" id="1_impacto" name="radio_impacto" required />Crítico (Problemas que impiden realizar operaciones bancarias esenciales)
      </label>
      <label class="label_option" for="2_impacto">
        <input v-model="radio_impacto" value="Alto" type="radio" id="2_impacto" name="radio_impacto" />Alto (Problemas que afectan a un gran número de usuarios o procesos laborales
      </label>
      <label class="label_option" for="3_impacto">
        <input v-model="radio_impacto" value="Medio" type="radio" id="3_impacto" name="radio_impacto" />Medio (Problemas que afectan a un grupo limitado de usuarios o procesos laborales)
      </label>
      <label class="label_option" for="4_impacto">
        <input v-model="radio_impacto" value="Bajo" type="radio" id="4_impacto" name="radio_impacto" />Bajo (Problemas que tienen un impacto mínimo en los usuarios o procesos laborales)
      </label>

      <label class="label_sub_title">Tipo de incidencia</label>
      <label class="label_option" for="1_tipo_incidencia">
        <input v-model="radio_tipo_incidencia" value="Hardware" type="radio" id="1_tipo_incidencia" name="radio_tipo_incidencia" required />Hardware
      </label>
      <label class="label_option" for="2_tipo_incidencia">
        <input v-model="radio_tipo_incidencia" value="Software" type="radio" id="2_tipo_incidencia" name="radio_tipo_incidencia" />Software
      </label>
      <label class="label_option" for="3_tipo_incidencia">
        <input v-model="radio_tipo_incidencia" value="Red" type="radio" id="3_tipo_incidencia" name="radio_tipo_incidencia" />Red
      </label>
      <label class="label_option" for="4_tipo_incidencia">
        <input v-model="radio_tipo_incidencia" value="Seguridad" type="radio" id="4_tipo_incidencia" name="radio_tipo_incidencia" />Seguridad
      </label>
      <label class="label_option" for="5_tipo_incidencia">
        <input v-model="radio_tipo_incidencia" value="Comunicación" type="radio" id="5_tipo_incidencia" name="radio_tipo_incidencia" />Comunicación
      </label>
      <label class="label_option" for="6_tipo_incidencia">
        <input v-model="radio_tipo_incidencia" value="Procesos" type="radio" id="6_tipo_incidencia" name="radio_tipo_incidencia" />Procesos
      </label>

    </div>

    <div class="form_section" v-if="mostrarDesarrolladores">

      <label class="label_title">Priorización, Priorizar la urgencia de resolución de la incidencia</label>
      <label class="label_sub_title">Nivel de urgencia</label>
      <label class="label_option" for="1_N_urgencia">
        <input v-model="radio_N_urgencia" value="Alto" type="radio" id="1_N_urgencia" name="radio_N_urgencia" required />Alto
      </label>
      <label class="label_option" for="2_N_urgencia">
        <input v-model="radio_N_urgencia" value="Medio" type="radio" id="2_N_urgencia" name="radio_N_urgencia" />Medio
      </label>
      <label class="label_option" for="3_N_urgencia">
        <input v-model="radio_N_urgencia" value="Bajo" type="radio" id="3_N_urgencia" name="radio_N_urgencia" />Bajo
      </label>

    </div>

    <div class="form_section" v-if="mostrarDesarrolladores">

      <label class="label_title">Otros datos sobre la incidencia</label>

      <label for="causas" class="label_sub_title">Posibles causas</label>
      <textarea id="cy_causas" v-model="causas" required class="input_element" name="causas" ></textarea>

      <label for="reporte" class="label_sub_title">Reporte de la situación</label>
      <textarea id="cy_reporte" v-model="reporte" required class="input_element" name="reporte" ></textarea>

      <label for="resolucion" class="label_sub_title">Resolución</label>
      <textarea id="cy_resolucion" v-model="resolucion" required class="input_element" name="resolucion" ></textarea>

    </div>

    <button type="submit" class="submit_button">Enviar</button>

    <p v-if="registrada" class="label_title">Incidencia registrada</p>

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
  background-color: #a7e9fa;
  color: #1B2B46;
}

.section_dev{
  display: flex;
  flex-direction: column;
}

</style>