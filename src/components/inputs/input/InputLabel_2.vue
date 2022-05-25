<template>
    <div class="flex">
        <label for="input" class="labelClass">{{ label }}</label>
        <input v-if="useMask" v-mask="localMask" type="text" :placeholder="placeHolder" v-model="inputValue" ref="myInput"/>
        <input v-else :type="type" :placeholder="placeHolder" @input="$emit('input', $event.target.value)" :value="value" ref="myInput"/>
    </div>
</template>

<script>
export default {
    name: 'InputLabel',    
    props: {
        label: { type: String, default: '' },
        type: { type: String, default: "text" },
        placeHolder: { type: String, default: '' },  
        value: {type: String, default: ''},    
        autoFocus: { type: Boolean, default: false},
        mask: { type: String, default: ''}
    },
    data() {
        return {
            localMask: '',
            useMask: false
        };
    },
    created() {
        this.useMask = !!this.mask;
        this.localMask = this.mask;
    },
    mounted() {
        if (this.autoFocus) {
            this.$refs.myInput.focus();
        }
    },    
};
</script>

<style lang="scss" src="./style.scss" scoped />
