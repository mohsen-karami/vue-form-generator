<template>
	<span @click="onChange" class="checkbox" :value="value" v-bind:class="{ active: value }" :id="getFieldID(schema)"  :disabled="disabled">
		{{schema.label}} , {{ value }} 
	</span>
</template>

<script>
import abstractField from "../abstractField";

export default {
	mixins: [abstractField],
	methods: {
		onChange($event){
			console.log(this.$data[this.model]);
			if (this.$data.hasOwnProperty(this.model)) {
                this.value = Boolean(this.$data[this.model]);
            }else{
				this.value = false;
			}
			this.value = !this.value;
			console.log(this);
			console.log('cgabi');
			
		}
	}
};
</script>

<style lang="scss">
.vue-form-generator .field-checkbox .checkbox{
	color: #585858;
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #686869;
}
.vue-form-generator .field-checkbox label{
	display: none;
}
.vue-form-generator .field-checkbox .active{
	color: #fff;
	background-color: #337ab7;
    border-color: #2e6da4;
}
</style>
