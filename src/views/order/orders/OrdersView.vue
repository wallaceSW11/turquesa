<template>
  <div class="main-container">
    <div v-for="order in orders" :key="order.id">
      <Card
        :imageId="order.imageId"
        :status="order.status"
        :client="order.client"
        :deadline="order.deadline"
        @clicked="orderDetail(order.id)"
      />
    </div>

    <FloatButton @clicked="orderRegistration" />
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
    orderDetail(id) {
      this.$router.push({
        name: "Order Detail",
        params: { id: id },
      });
    },
    orderRegistration() {
      this.$router.push({
        name: "Order Registration",
      });
    },

    getOrders() {
      this.orders = orderService.getAll();
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
