<template>
  <div
    :class="['main-button', secondary ? 'secundaria' : 'primaria']"
    @click="$emit('clicked')"
  >
    <span>{{ text }}</span>
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
    return {};
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
