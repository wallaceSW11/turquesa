<template>
  <div class="title" @click="$emit('clicked')">
    <div class="main">
      <h6>{{ text }}</h6>
      <div v-if="icon" class="icon">+</div>
    </div>

    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: { type: String, default: "" },
    icon: { type: Boolean, default: false },
  },
  data() {
    return {
      // icon: true,
    };
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
