<script setup lang="ts">
import { auth } from '@/firebaseConfig';
import { useLoginStateStore } from '@/stores/counter';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const snackbar = ref(false);
const snackbarTimeOut = 1000
const LoginErrorMsg = ref('');

const loginStateStore = useLoginStateStore()

const chatAuth = auth
const emailLogin = () => {
    signInWithEmailAndPassword(chatAuth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            console.log(user)
            snackbar.value = true
            LoginErrorMsg.value = ''
            loginStateStore.login()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage)
            LoginErrorMsg.value = errorCode
        });
    // console.log(email.value, password.value)
}
</script>

<template>
    <v-card class="loginCard" max-width="400">
        <v-form>
            <v-text-field v-model="email" label="Email" required>
            </v-text-field>
            <v-text-field v-model="password" label="Password" :error-messages="LoginErrorMsg">
            </v-text-field>
            <v-btn @click="emailLogin">
                Login
            </v-btn>
        </v-form>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="snackbarTimeOut">
        Log in おめでとう
    </v-snackbar>
</template>

<style lang="scss" scoped>
.loginCard {
    margin: auto;
    padding: 1rem;
}
</style>