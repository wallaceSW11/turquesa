<template>
    <div class="float-button" @click="callback">+</div>

</template>

<script>
export default {
    name: 'Float-Button',
    props: {
        callback: { type: Function, default: () => {}}
    },
    data() {
        return {

        }
    },


}
</script>

<style lang="scss" src="./style.scss" scoped />