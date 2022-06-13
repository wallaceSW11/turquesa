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
      <!-- <select
        label="Produto"
        :options="optionsProduct"
        v-model="product.name"
      /> -->
      <div>
        <label for="prods">Produto: </label>
        <select name="prods" v-model="product.name">
          <option value="topo">Topo</option>
          <option value="caixa">Caixa</option>
          <option value="escrita">Escrita</option>
        </select>
      </div>
      <div>
        <label for="qt">Quantidade: </label>
        <input type="number" name="quantity" v-model="product.quantity" />
      </div>
      <div>
        <label for="price">Valor: </label>
        <span name="price">{{ product.price }}</span>
      </div>
      <div>
        <Checkbox text="Continuar adicionando" v-model="keepAdding" />
      </div>
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
import Checkbox from "@/components/inputs/checkbox/Checkbox.vue";

export default {
  name: "OrderRegistrationView",
  components: {
    InputLabel,
    Button,
    Select,
    Title,
    Checkbox,
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
        { value: "topo", text: "Topo Especial" },
        { value: "caixa", text: "Caixa explosão" },
        { value: "escrita", text: "Escrita Bento/Flok" },
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
      product: {
        name: "",
        quantity: "",
        price: "35,00",
      },
      products: [],

      addingProduct: false,
      keepAdding: true,
    };
  },
  methods: {
    addProduct() {
      if (this.addingProduct) return;
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
        this.products.push(this.product);
        this.product = {
          name: "",
          quantity: "",
          price: "35,00",
        };
      } else {
        this.products.push(this.product);
        this.product = {
          name: "",
          quantity: "",
          price: "35,00",
        };
        this.addingProduct = false;
      }
    },
    cancel() {
      if (this.addingProduct) {
        // validar cadastro
        // salvar order
        // this.$router.push({ name: "Orders" });
        this.addingProduct = !this.addingProduct;
        return;
      }

      this.$router.back();
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
