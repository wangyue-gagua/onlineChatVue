<template>
    <div>
        <v-list>
            <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" title="Wang yue" subtitle="从零开始吧">
            </v-list-item>
            <v-divider></v-divider>
        </v-list>
        <v-list :lines="false">
            <v-list-item v-for="item, i in items" :key="i" active-color="primary"
                :prepend-avatar="item.text === 'Starred' ? item.Avatar : ''"
                :append-avatar="item.text === 'Offline' ? item.Avatar : ''"
                :class="item.text === 'Offline' ? 'selfMsg': 'otherMsg'">
                <v-list-item-title>
                    {{item.text}}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{item.msg}}
                </v-list-item-subtitle>
            </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <div id="messageControlPanel">
            <div class="controlBtn">
                <v-btn>B1</v-btn>
                <v-btn @click="sendMessage">Send</v-btn>
            </div>
            <v-textarea label="何か話しみたい" v-model="curMessage"></v-textarea>
        </div>

    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';

const items = reactive([
    { text: 'My Files', icon: 'mdi-folder', Avatar: "https://cdn.vuetifyjs.com/images/john.png", msg: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang outs?I'll be in your neighborhood doing errands this weekend. Do you want to hang outs?I'll be in your neighborhood doing errands this weekend. Do you want to hang outs?I'll be in your neighborhood doing errands this weekend. Do you want to hang outs?I'll be in your neighborhood doing errands this weekend. Do you want to hang outs?I'll be in your neighborhood doing errands this weekend. Do you want to hang outs?` },
    { text: 'Shared with me', icon: 'mdi-account-multiple' },
    { text: 'Starred', icon: 'mdi-star', Avatar: "https://cdn.vuetifyjs.com/images/john.png", },
    { text: 'Recent', icon: 'mdi-history' },
    { text: 'Offline', icon: 'mdi-check-circle', Avatar: "https://cdn.vuetifyjs.com/images/john.png", msg: "testtesttesttesttest"},
    { text: 'Backups', icon: 'mdi-cloud-upload' },
])

const curMessage = ref('')
const sendMessage = () => {
    items.push({
        text: 'Offline',
        icon: 'mdi-check-circle',
        Avatar: "https://cdn.vuetifyjs.com/images/john.png",
        msg: curMessage.value
    })
    curMessage.value = ''
}

</script>

<style lang="scss" scoped>
#messageControlPanel {
    position: relative;
    bottom: 0;
}
.controlBtn {
    display: flex;
    justify-content: space-between;
}
.selfMsg {
    display: flex;
    justify-content: flex-end;
}
.selfMsg .v-list-item-title {
    text-align: end;
}
</style>