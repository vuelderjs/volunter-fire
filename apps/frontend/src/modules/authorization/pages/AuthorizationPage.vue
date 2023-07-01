<script setup>
    import LoginComponent from '../components/LoginComponent.vue'
    import RegisterComponent from '../components/RegisterComponent.vue'
</script>

<template>
    <v-main style="height: 90%">
        <login-component v-if="login"/>
        <register-component v-else/>
    </v-main>
</template>

<script>
    export default{
        name: 'AuthorizationPage',
        data(){
            return{
                login: false
            }
        }
    }
</script>