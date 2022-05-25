<template>
    <div class="container">
        <Card
            imageId="https://source.unsplash.com/random/50x60?cake"
            status="Aguardando aprovação"
            client="Dona Bela"
            deadline="03/06/22 13:00"
        />

        <Card
           imageId="https://source.unsplash.com/random/50x60?flower"
            status="Aprovado"
            client="Juma Marruá"
            deadline="11/06/22 13:30"
        />
        <Card
            imageId="https://source.unsplash.com/random/50x60?garden"
            status="Aprovado"
            client="Juma Marruá"
            deadline="11/06/22 13:30"
        />
        <FloatButton :callback="() => {}" />
    </div>
</template>

<script>
import Card from "@/components/card/Card.vue";
import FloatButton from "@/components/buttons/floatbutton/FloatButton.vue";

export default {
    name: "Orders",
    components: {
        Card,
        FloatButton,
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" src="./style.scss" scoped />
