<template>
  <div class="main">
      <span><b> {{ titleWithDots }}</b> {{ description }}</span>
  </div>

</template>

<script>
export default {
    name: "TitleDescription",
    props: {
        title: { type: String, required: true },
        description: { type: String, required: true },
    },
    computed: {
        titleWithDots() {
            return `${this.title}:`;
        }
    }

}
</script>

<style lang="scss" src="./style.scss" scoped />