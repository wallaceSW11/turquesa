<template>
    <div class="container">
        <div class="information">
            <span>Status: {{ order.status }}</span> <br>
            <span>Cliente: {{ order.client }}</span> <br>
            <span>Data de entrega: {{ order.deadline }}</span>
        </div>

        <div class="products">
            <div class="list-products">
                <div class="product">
                    Produto: Topo <br />
                    Tipo: Especial (Camadas) <br />
                    Tamanho: 25 cm <br />
                    Tema: Marsha <br />
                    Preço: R$ 25,00 <br />
                    Fotos: (sugestões)
                    <div class="images">
                        <img
                            src="https://source.unsplash.com/random/100x100?cake"
                            alt=""
                        />
                        <img
                            src="https://source.unsplash.com/random/100x100?paper"
                            alt=""
                        />
                        <img
                            src="https://source.unsplash.com/random/100x100?garden"
                            alt=""
                        />
                    </div>
                </div>

                <div class="product">
                    Produto: Topo <br />
                    Tipo: Simples (Impresso) <br />
                    Tamanho: 15 cm <br />
                    Tema: Nome + Idade <br />
                    Preço: R$ 15,00 <br />
                    Fotos: (sugestões)
                    <div class="images">
                        <img
                            src="https://source.unsplash.com/random/100x100?flower"
                            alt=""
                        />
                        <img
                            src="https://source.unsplash.com/random/100x100?sky"
                            alt=""
                        />
                        <img
                            src="https://source.unsplash.com/random/100x100?sea"
                            alt=""
                        />
                    </div>
                </div>

                <div class="product">
                    Produto: Caixa explosão <br />
                    Tipo: Com gaveta <br />
                    Tamanho: 35 cm <br />
                    Tema: Azul <br />
                    Preço: R$ 45,00 <br />
                    Fotos: (sugestões)
                    <div class="images">
                        <img
                            src="https://source.unsplash.com/random/100x100?table"
                            alt=""
                        />
                        <img
                            src="https://source.unsplash.com/random/100x100?sunset"
                            alt=""
                        />
                        <img
                            src="https://source.unsplash.com/random/100x100?food"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import orderService from "@/services/order-service";

export default {
    name: "OrderDetail",
    data() {
        return {
            order: { type: Object, default: () => {} },
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
        },
    },
};
</script>

<style lang="scss" src="./style.scss" scoped />
