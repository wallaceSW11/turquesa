<template>
    <div class="card">
        <div class="content">
            <div class="image">
                <img :src="localUrl" alt="" />
            </div>
            <div class="resume">
                <div class="title">
                    <span>
                        Cliente:
                        {{ client }}
                    </span>
                </div>
                <div class="status">Status: {{ status }}</div>
                <div class="delivery">Entrega: {{ deadline }}</div>
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
export default {
    name: "Card",
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
    // methods: {
    //     toggleOrder(idOrder) {
    //         this.$router.push({
    //             name: "Order Detail",
    //             params: { id: idOrder },
    //         });
    //     },
    // },
};
</script>

<style lang="scss" src="./style.scss" scoped />
