<template>
    <v-card>
        <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" :title="title"
            :subtitle="subtitle"></v-list-item>
    </v-card>
</template>
<script setup lang="ts">
defineProps<{
    title: string,
    subtitle: string,
}>()
</script>

<style lang="scss" scoped>

</style>