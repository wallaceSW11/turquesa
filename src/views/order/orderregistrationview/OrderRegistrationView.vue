<template>
<div class="container">
    <div class="information">
            <InputLabel label="Cliente" v-model="order.client" />
            <div class="delivery">
                <InputLabel label="Data de entrega" type="date" v-model="order.deadline" />
                <div>
                <label for="hour">Horário</label>
                <select name="hour" id="" :value="order.hour">
                    <option value="1300">13:00</option>
                    <option value="1330">13:30</option>
                    <option value="1400">14:00</option>
                </select>
                </div>
            </div>
            <p>OBS: Horário aproximado</p>
            <hr />
            <span>Produto</span> <br>
            <div class="products">
                <select name="hour" id="" :value="order.hour">
                    <option value="1300">Topo</option>
                    <option value="1330">Caixa</option>
                    <option value="1400">Bento / Flok</option>
                </select>
            </div>
            <span>Tamanho</span> <br>
            <div class="products">
                
                <select name="hour" id="" :value="order.hour">
                    <option value="1300">15 cm</option>
                    <option value="1330">20 cm</option>
                    <option value="1400">25 cm</option>
                    <option value="1409">30 cm</option>
                    <option value="1419">35 cm</option>
                </select>
            </div> <br>
            <span>Observação</span>
            <textarea name="observation" rows="5" cols="35" id="" />            
        </div>
        <footer>
            <Button text="Salvar" />
            <Button text="Cancelar" secondary />

        </footer>
</div>
  
</template>

<script>

import InputLabel from "@/components/inputs/input/InputLabel.vue";
import Button from "@/components/buttons/button/Button.vue";

export default {
    name: "OrderRegistrationView",
    components: {
        InputLabel,
        Button
    },
    data() {
        return {
            order: {},
            orderItens: {},
            optionsSize: [
                { value: null, text: "Selecione o tamanho"},
                { value: 1, text: "10 cm"}
            ]

        }
    },

}
</script>

<style lang="scss" src="./style.scss" scoped />