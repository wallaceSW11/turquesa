<template>
    <div class="container">
        <div class="information">
            <div>Status: Aguardando aprovação</div>
            <div>Cliente: Juma Marruá</div>
            <div>Data de entrega: 11/06/2022 13:30</div>
        </div>

        <div class="products">
            <div class="list-products">
                <div class="product">
                    Produto: Topo <br />
                    Tipo: Especial (Camadas) <br />
                    Tamanho: 25 cm <br />
                    Tema: Marsha <br />
                    Preço: R$ 25,00 <br>
                    Fotos: (sugestões)
                    <div class="images">
                        <img src="https://source.unsplash.com/random/100x100?cake" alt="" />
                        <img src="https://source.unsplash.com/random/100x100?paper" alt="" />
                        <img src="https://source.unsplash.com/random/100x100?garden" alt="" />
                    </div>
                </div>

                <div class="product">
                    Produto: Topo <br />
                    Tipo: Simples (Impresso) <br />
                    Tamanho: 15 cm <br />
                    Tema: Nome + Idade <br />
                    Preço: R$ 15,00 <br>
                    Fotos: (sugestões)
                    <div class="images">
                        <img src="https://source.unsplash.com/random/100x100?flower" alt="" />
                        <img src="https://source.unsplash.com/random/100x100?sky" alt="" />
                        <img src="https://source.unsplash.com/random/100x100?sea" alt="" />
                    </div>
                </div>

                <div class="product">
                    Produto: Caixa explosão <br />
                    Tipo: Com gaveta <br />
                    Tamanho: 35 cm <br />
                    Tema: Azul <br />
                    Preço: R$ 45,00 <br>
                    Fotos: (sugestões)
                    <div class="images">
                        <img src="https://source.unsplash.com/random/100x100?table" alt="" />
                        <img src="https://source.unsplash.com/random/100x100?sunset" alt="" />
                        <img src="https://source.unsplash.com/random/100x100?food" alt="" />
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "OrderDetail",
};
</script>

<style lang="scss" src="./style.scss" scoped />
