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
			event.path[0].style.minHeight = event.path[0].scrollHeight + 'px';
		}
	}
};
</script>


<style lang="scss">

</style>
