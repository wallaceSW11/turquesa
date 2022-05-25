<template>
    <div class="flex">
        <label for="input" class="labelClass">{{ label }}</label>
        <input v-if="useMask" v-mask="localMask" type="text" :placeholder="placeHolder" v-model="inputValue" ref="myInput"/>
        <input v-else :type="type" :placeholder="placeHolder" v-model="inputValue" ref="myInput"/>
    </div>
</template>

<script>
export default {
    name: 'InputLabel',
    inheritedAttrs: false,
    model: {
        prop: 'value',
        event: 'onChange',
    },
    props: {
        label: { type: String, default: '' },
        type: { type: String, default: "text" },
        placeHolder: { type: String, default: '' },
        value: { type: String, default: '' },
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
    computed: {
        inputValue: {
            get: function() {
                return this.value;
            },
            set: function(newValue) {
                this.$emit('onChange', newValue);
            }
        },
    }


};
</script>

<style lang="scss" src="./style.scss" scoped />
