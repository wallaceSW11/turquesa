<template>
    <div class="card">
        <div class="content">
            <div class="image">
                <img :src="localUrl" alt="" />
            </div>
            <div class="resume">
                <div class="title">
                    <TitleDescription title="Cliente" :description="client" />
                </div>
                <div><TitleDescription title="Status" :description="status" /></div>
                <div><TitleDescription title="Entrega" :description="deadline" /></div>
            </div>
        </div>

        <footer>
            <div class="details" @click="$emit('clicked')">
                <span>Detalhes do pedido</span>
                <span>></span>
            </div>
        </footer>
    </div>
</template>

<script>
import TitleDescription from '@/components/fields/titledescription/TitleDescription.vue';

export default {
    name: "Card",
    components: {
        TitleDescription,
    },
    props: {
        imageId: { type: String, default: "" },
        status: { type: String, default: "" },
        client: { type: String, default: "" },
        deadline: { type: String, default: "" },
        callback: { type: Function },
    },
    data() {
        return {
            localUrl: require("@/assets/images/" + this.imageId),
        };
    },
    watch: {
        callback(newValue, oldValue) {
            console.log(newValue);
            console.log(oldValue);
            console.log(this.client);
        },
    },
};
</script>

<style lang="scss" src="./style.scss" scoped />
