<template>
    <v-form v-model="formValue">
        <v-row class="h-100" align="center" justify="center">
            <v-col cols="12" md="4">
                <v-card variant="outlined" color="black">
                    <v-card-title>
                        <h4 class="text-center">Registrarse</h4>
                    </v-card-title>
                    <v-card-text>
                        <divider />
                        <v-text-field 
                            prepend-inner-icon="mdi-email"
                            label="Email"
                            v-model="email"
                            :rules="emailRules"
                        ></v-text-field>
                        <v-text-field 
                            prepend-inner-icon="mdi-account"
                            label="Nombre de usuario"
                            v-model="username"
                            :rules="userRules"
                        ></v-text-field>
                        <v-text-field 
                            prepend-inner-icon="mdi-key"
                            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append-inner="showPassword = !showPassword"
                            label="Contraseña"
                            :type="showPassword ? 'text' : 'password'"
                            v-model="password"
                            :rules="passwordRules"
                        ></v-text-field>
                        <v-text-field 
                            prepend-inner-icon="mdi-key"
                            :append-inner-icon="showRepetPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append-inner="showRepetPassword = !showRepetPassword"
                            label="Repita su contraseña"
                            :type="showRepetPassword ? 'text' : 'password'"
                            v-model="repetPassword"
                            :rules="repetPasswordRules"
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
                formValue: false,
                showRepetPassword: false,
                showPassword: false,
                email: '',
                username: '',
                password: '',
                repetPassword: '',
                emailRules: [
                    value => !!value || 'Este campo es obligatorio.',
                    value => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 'Debe ser un email valido.'
                ],
                userRules: [
                    value => !!value || 'Este campo es obligatorio.',
                    value => /^[a-zA-Z0-9]{4,}$/.test(value) || 'El usuario solo puede contener letras minusculas, mayusculas y numeros. Ademas debe contener almenos 4 caracteres.'
                ],
                passwordRules: [
                    value => !!value || 'Este campo es obligatorio',
                    value => /^[a-zA-Z0-9]{8,}$/.test(value) || 'La contraseña debe contener letras minusculas, mayusculas, numeros y almenos 8 caracteres'
                ],
                repetPasswordRules: [
                    value => !!value || 'Este campo es obligatorio',
                    value => this.password == value || 'Las contraseñas no coinciden.'
                ]
            }
        }
    }
</script>