<script setup lang="ts">
import ChatMainScreen from '@/components/ChatMainScreen.vue';
</script>
<template>
  <div class="about">
    <ChatMainScreen>

    </ChatMainScreen>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
