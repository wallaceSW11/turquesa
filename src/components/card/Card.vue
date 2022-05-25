<template>
  <div class="card">
      <div class="content">
        <div class="image"><img :src="imageId" alt=""></div>
        <div class="resume">
            <div class="status">Status: {{status}}</div>
            <div class="title">Cliente: {{client}}</div>
            <div class="delivery">Entrega: {{deadline}}</div>
        </div>
      </div>

      <footer>
          <div class="details" @click="toggleOrder(1)">
              <span>Detalhes do pedido</span>
              <span>></span>
          </div>
      </footer>
  </div>
</template>

<script>

export default {
    name: 'Card',
    props: {
        imageId: { type: String, default: ''},
        status: { type: String, default: ''},
        client: { type: String, default: ''},
        deadline: { type: String, default: ''},
    },
    methods: {
        toggleOrder(idOrder) {
            this.$router.push({ name: 'Order Detail', params: { id: idOrder}})
        }
    }
}
</script>

<style lang="scss" src="./style.scss" scoped />
