<template>
    <div class="title" @click="$emit('clicked')">
        <h6>{{text}}</h6>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        text: { type: String, default: '' }

    }
}
</script>

<style lang="scss" src="./style.scss" scoped />