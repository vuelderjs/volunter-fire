<template>
<v-form v-model="formValue">
    <v-row class="h-100" align="center" justify="center">
        <v-col cols="12" md="4">
            <v-card variant="outlined" color="black">
                <v-card-title>
                    <h4 class="text-center">Iniciar Sesión</h4>
                </v-card-title>
                <v-card-text>
                    <divider />
                    <v-text-field 
                        prepend-inner-icon="mdi-account"
                        label="Ingrese su email o usuario"
                        v-model="emailOrUsername"
                        :rules="emailOrUsernameRule"
                    ></v-text-field>
                    <v-text-field 
                        prepend-inner-icon="mdi-key"
                        label="Ingrese su contraseña"
                        type="password"
                        v-model="password"
                        :rules="[value => !!value || 'Este campo es obligatorio.']"
                    ></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-divider/>
                    <v-btn block color="primary" :disabled="!formValue">
                        Iniciar Sesión
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-col>    
    </v-row>
</v-form>
</template>

<script>
    export default{
        name: 'LoginComponent',
        data(){
            return{
                password: '',
                formValue: false,
                emailOrUsername: '',
                emailOrUsernameRule: [
                    value => !!value || 'Este campo es obligatorio.',
                    value => value.length >= 4 || 'Es un usuario invalido.',
                    value => {
                        if(/@/.test(value)) return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 'El email ingresado es invalido'
                        return true
                    }
                ]
            }
        }
    }
</script>