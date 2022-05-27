<template>
    <div class="flex">
        <label for="input" class="labelClass">{{ label }}</label>
        <input v-if="useMask" v-mask="localMask" type="text" :placeholder="placeHolder" v-model="inputValue" ref="myInput"/>
        <input v-else :type="type" :placeholder="placeHolder" v-model="inputValue" ref="myInput" :min="localMinDate"/>
    </div>
</template>

<script>
export default {
    name: "InputLabel",
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
        mask: { type: String, default: ''},
        minDate: { type: String, default: ''}
    },
    data() {
        return {
            localMask: '',
            useMask: false,
            localMinDate: '2022-05-28',
        };
    },
    created() {
        this.useMask = !!this.mask;
        this.localMask = this.mask;
        // this.getMinDate();

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
    },
    methods: {
        getMinDate() {
            var dtToday = new Date();

            var month = dtToday.getMonth() + 1;
            var day = dtToday.getDate();
            var year = dtToday.getFullYear();

            if(month < 10)
                month = '0' + month.toString();
            if(day < 10)
                day = '0' + day.toString();

            this.minDate = (year) + '-' + month + '-' + day; 
                    
        }
    },


};
</script>

<style lang="scss" src="./style.scss" scoped />
