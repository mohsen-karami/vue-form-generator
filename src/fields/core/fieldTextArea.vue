<template lang="pug">
	textarea.form-control(
		v-model="value",
		:id="getFieldID(schema)",
		:class="schema.fieldClasses",
		:disabled="disabled",
		:maxlength="schema.max",
		:minlength="schema.min",
		:placeholder="schema.placeholder",
		:readonly="schema.readonly",
		:required="schema.required",
		:rows="schema.rows || 2",
		:name="schema.inputName",
		@input="textareaResize"
		v-attributes="'input'")
</template>

<script>

import abstractField from "../abstractField";

export default {
	mixins: [abstractField],
	methods: {
		textareaResize(event) {			
			this.$el.style.height = this.$el.scrollHeight + 'px';
		}
	}
};
</script>


<style lang="scss">
.vue-form-generator textarea{  
  display: block;
  box-sizing: padding-box;
  overflow: hidden;

  padding: 10px;
  width: 250px;
  font-size: 14px;
  margin: 50px auto;
  border-radius: 6px;
  box-shadow: 2px 2px 8px rgba(black, .3);
  border: 0;
}
</style>
