<script>
</script>

<template>

  <header class="color_bar nav_bar">
    <img class="logo_banco" alt="Banco del Sur" src="./assets/logo_banco_del_sur.jpg">
    <nav class="nav_options">
      <router-link class="link_elemento" to="/">Formulario Usuarios</router-link> |
      <router-link class="link_elemento" to="/form_dev">Formulario Desarrolladores</router-link> |
      <router-link class="link_elemento" to="/tickets_user">Tickets Usuarios</router-link> |
      <router-link class="link_elemento" to="/tickets_dev">Tickets Desarrolladores</router-link>
    </nav>
  </header>

  <router-view/>

  <footer class="color_bar footer_bar">Control de Incidencias del @banco_del_sur</footer>
</template>

<style scoped>

  .color_bar{
    background-color: #1B2B46;
    color: #fff;
  }

  .nav_bar{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 5px;
  }

  .logo_banco{
    height: 50px;
  }

  .nav_options{
    margin-left: 15px;
  }

  .link_elemento{
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
  .link_elemento:hover{
    color: #2fc3e7;
  }

  .footer_bar{
    display: flex;
    justify-content: center;
    padding: 10px 0px;
  }

</style>