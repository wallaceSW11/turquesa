<template>
    <div class="container">
        <div v-for="order in orders" :key="order.id">
            <Card
                :imageId="order.imageId"
                :status="order.status"
                :client="order.client"
                :deadline="order.deadline"
                :callback="orderDetail"
            />
        </div>

        <FloatButton :callback="() => {}" />
    </div>
</template>

<script>
import Card from "@/components/card/Card.vue";
import FloatButton from "@/components/buttons/floatbutton/FloatButton.vue";
import orderService from "@/services/order-service";

export default {
    name: "Orders",
    components: {
        Card,
        FloatButton,
    },
    data() {
        return {
            orders: [],
        };
    },
    mounted() {
        this.getOrders();
    },
    methods: {
        orderDetail(event, value) {
            console.log("id");
            console.log(value);

            // this.$router.push({
            //     name: "Order Detail",
            //     params: { id: id },
            // });
        },

        getOrders() {
            this.orders = orderService.getAll();
        },
    },
};
</script>

<style lang="scss" src="./style.scss" scoped />
