<template>
    <div class="button-style">
        <button :class=" secondary ? 'secundaria' : 'primaria'" @click="callback">{{ text }}</button>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: { type: String, default: "" },
        callback: { type: Function, default: () => {} },
        secondary: { type: Boolean, default: false },
    },
    data() {
        return {

        }
    }
};
</script>

<style lang="scss" src="./style.scss" scoped />