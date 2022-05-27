<template>
    <div class="float-button" @click="callback">
        <img src="@/assets/icons/plus-solid.svg" alt="back" class="plus-icon" />
    </div>
</template>

<script>
export default {
    name: "Float-Button",
    props: {
        callback: { type: Function, default: () => {} },
    },
    data() {
        return {};
    },
};
</script>

<style lang="scss" src="./style.scss" scoped />
