<template>
  <div class="main-container">
    <div v-if="!addingProduct" class="information">
      <InputLabel label="Cliente" v-model="order.client" />
      <div class="delivery">
        <div class="date">
          <InputLabel
            label="Data de entrega (padrão)"
            type="date"
            v-model="order.deadline"
          />
          <p class="ps">OBS: Horário aproximado</p>
        </div>
        <div class="space"></div>
        <Select label="Horário" :options="hours" />
      </div>
    </div>

    <Title text="Produtos" @clicked="addProduct" :icon="!addingProduct" />

    <div v-if="!addingProduct" class="product-list">
      <table class="table">
        <thead>
          <tr>
            <td>Produto</td>
            <td>Qt</td>
            <td>Valor</td>
            <td colspan="2"></td>
          </tr>
        </thead>
        <tbody class="table">
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ product.name }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.price }}</td>
            <td>E</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="product">
      <Select label="Produto" :options="optionsProduct" />
    </div>

    <footer class="actions">
      <Button text="Salvar" @clicked="save" />
      <Button text="Cancelar" @clicked="cancel" secondary />
    </footer>
  </div>
</template>

<script>
import InputLabel from "@/components/inputs/input/InputLabel.vue";
import Button from "@/components/buttons/button/Button.vue";
import Select from "@/components/inputs/select/Select.vue";
import Title from "@/components/titles/title/Title.vue";

export default {
  name: "OrderRegistrationView",
  components: {
    InputLabel,
    Button,
    Select,
    Title,
  },
  data() {
    return {
      order: {},
      orderItens: {},
      optionsSize: [
        { value: null, text: "Selecione o tamanho" },
        { value: 1, text: "10 cm" },
      ],
      optionsProduct: [
        { value: "1", text: "Topo Especial" },
        { value: "2", text: "Caixa explosão" },
        { value: "3", text: "Escrita Bento/Flok" },
      ],
      hours: [
        {
          value: "1300",
          text: "13:00",
        },
        {
          value: "1330",
          text: "13:30",
        },
        {
          value: "1400",
          text: "14:00",
        },
      ],
      product: "",
      products: [],

      addingProduct: false,
      keepAdding: false,
    };
  },
  methods: {
    addProduct() {
      //this.$router.push({ name: "Order Detail Product" });
      this.addingProduct = !this.addingProduct;
    },
    save() {
      if (!this.addingProduct) {
        // validar cadastro
        // salvar order
        this.$router.push({ name: "Orders" });
        return;
      }

      if (this.keepAdding) {
        this.product = "";
      } else {
        this.addingProduct = false;
      }
    },
    cancel() {
      if (!this.addingProduct) {
        // validar cadastro
        // salvar order
        this.$router.push({ name: "Orders" });
        return;
      }

      this.addingProduct = !this.addingProduct;
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
