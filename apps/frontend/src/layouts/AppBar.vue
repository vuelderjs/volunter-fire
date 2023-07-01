<template>
  <v-app-bar flat color="red">
    <v-app-bar-title>
      <v-icon icon="mdi-fire-truck" start/>
        Bomberos Voluntarios
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn text v-for="item in menu" :key="item.icon" :to="item.path">
      <v-icon :icon="item.icon" start></v-icon>
      {{item.text}}
    </v-btn>
    <v-spacer />
    <v-btn text v-if="userNeedLogin">
      <v-icon icon="mdi-login" start></v-icon>
      Iniciar Sesión
    </v-btn>
    <v-btn text v-else>
      <v-icon icon="mdi-logout" start></v-icon>
      Cerrar Sesión
    </v-btn>
    <v-btn text to="/login">
      <v-icon icon="mdi-account-plus" start></v-icon>
      Registrarse
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default{
    name: 'AppBar',
    data(){
      return{
        userNeedLogin: false,
        menu: [
          {
            path: '/home',
            icon: 'mdi-home',
            text: 'Inicio'
          },
          {
            path: '/contact',
            icon: 'mdi-card-account-mail',
            text: 'Contacto'
          },
          {
            path: '/history',
            icon: 'mdi-file-document',
            text: 'Historia'
          },
          {
            path: '/donations',
            icon: 'mdi-hand-heart-outline',
            text: 'Donaciones'
          }
        ]
      }
    }
  }
</script>
