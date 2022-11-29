<script setup lang="ts">
import { auth } from '@/firebaseConfig';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const snackbarTimeOut = 1000
const snackbar = ref(false);

const chatAuth = auth
const emailCreateCount = () => {
    createUserWithEmailAndPassword(chatAuth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
            snackbar.value = true
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage)
        });
    // console.log(email.value, password.value)
}
</script>

<template>
    <v-card class="loginCard" max-width="400">
        <v-form>
            <v-text-field v-model="email" label="Email" required>
            </v-text-field>
            <v-text-field v-model="password" label="Password" required>
            </v-text-field>
            <v-btn @click="emailCreateCount">
                Register
            </v-btn>
        </v-form>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="snackbarTimeOut">
        Sign in おめでとう
    </v-snackbar>
</template>

<style lang="scss" scoped>
.loginCard {
    margin: auto;
    padding: 1rem;
}
</style>