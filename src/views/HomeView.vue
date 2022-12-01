<script setup lang="ts">
import { auth } from '@/firebaseConfig';
import { useLoginStateStore } from '@/stores/loginState';
import { ref } from 'vue';
import Profile from '../components/Profile.vue';


const loginStateStore = useLoginStateStore()
const chatAuth = auth
const user = chatAuth.currentUser
let nickname = "gagua"
let email = ""
let photoURL = ""
if (user !== null) {
  nickname = user.displayName ?? nickname
  email = user.email ?? ""
  photoURL = user.photoURL ?? ""
}

const snackbar = ref(false);
const snackbarTimeOut = 1000

const modifyName = ""
const signature = ""
const modifyUserInfo = () => {
  if (user !== null) {
    
  }
}
</script>

<template>
  <main>
    {{ loginStateStore.isLoggedIn }}
    <Profile :title="nickname" :subtitle="email" />
    <v-card class="loginCard" max-width="400">
      <v-form>
        <v-text-field v-model="modifyName" label="昵称" required>
        </v-text-field>
        <v-text-field v-model="signature" label="签名">
        </v-text-field>
        <v-btn @click="modifyUserInfo">
          Login
        </v-btn>
      </v-form>
    </v-card>
    <v-snackbar v-model="snackbar" :timeout="snackbarTimeOut">
      Modified 勝った
    </v-snackbar>
  </main>
</template>
