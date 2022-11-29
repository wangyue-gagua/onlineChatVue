<script setup lang="ts">import { useLoginStateStore } from '@/stores/loginState';

const loginStateStore = useLoginStateStore()
</script>

<template>
  <main>
    {{ loginStateStore.isLoggedIn }}
  </main>
</template>
