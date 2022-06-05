<template>
  <div class="main-container">
    <Title text="Identificação" />
    <div class="information">
      <TitleDescription title="Status" :description="order.status" />
      <TitleDescription title="Cliente" :description="order.client" />
      <TitleDescription title="Data de entrega" :description="order.deadline" />
    </div>

    <Title text="Produtos" @clicked="toggleProducts" />

    <div class="products">
      <transition name="products">
        <div v-show="showProducts">
          <div
            class="product"
            v-for="(item, itemIndex) in order.items"
            :key="itemIndex"
          >
            <TitleDescription title="Entrega" :description="item.deadline" />
            <TitleDescription title="Produto" :description="item.product" />
            <TitleDescription title="Tipo" :description="item.type" />
            <TitleDescription title="Tamanho" :description="item.size" />
            <TitleDescription title="Tema" :description="item.theme" />
            <TitleDescription title="Preço" :description="item.price" />
            <TitleDescription title="Fotos" />
            <div class="images">
              <img
                v-for="(pic, index) in order.items[itemIndex].pics"
                :key="index"
                :src="pic.url"
                alt=""
              />
            </div>
            <TitleDescription title="Observação" />
            <span>{{ order.items[itemIndex].note }} </span>
          </div>
        </div>
      </transition>
    </div>

    <Title text="Pagamento" />
    <div class="payment">
      <table class="table">
        <thead>
          <td><b>Forma de pagamento</b></td>
          <td><b>Valor</b></td>
        </thead>
        <tbody>
          <tr v-for="(payment, index) in order.payment" :key="index">
            <td>{{ payment.form }}</td>
            <td>{{ payment.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import orderService from "@/services/order-service";
import Title from "@/components/titles/title/Title.vue";
import TitleDescription from "@/components/fields/titledescription/TitleDescription.vue";

export default {
  name: "OrderDetail",
  components: {
    Title,
    TitleDescription,
  },
  data() {
    return {
      order: {
        status: "",
        client: "",
        dealine: "",
      },
      showProducts: { type: Boolean, default: true },
    };
  },
  mounted() {
    this.getOrder();
  },
  methods: {
    getOrder() {
      let id = this.$route.params.id;
      if (!id) return;
      this.order = orderService.getById(id);
      console.log(this.order.items[0].pics[0].url);
    },
    toggleProducts() {
      this.showProducts = !this.showProducts;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
