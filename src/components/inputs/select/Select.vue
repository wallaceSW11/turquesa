<template>
  <div class="main">
    <label for="hour">{{ label }}</label>
    <select name="hour" v-model="selected">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    label: { type: String, require },

    options: {
      value: "",
      text: "",
    },
  },

  data() {
    return {
      selected: "",
    };
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
