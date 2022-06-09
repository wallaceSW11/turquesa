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
  model: {
    prop: "selection",
    event: "onChange",
  },
  props: {
    label: { type: String, require },
    selection: { type: String, default: "" },
    options: {
      value: "",
      text: "",
    },
  },

  data() {
    return {};
  },
  computed: {
    selected: {
      get: function () {
        return this.selection;
      },
      set: function (newValue) {
        this.$emit("onChange", newValue);
      },
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
