import { mount, createLocalVue } from "@vue/test-utils";

import FieldCheckbox from "src/fields/core/fieldCheckbox.vue";

const localVue = createLocalVue();
let wrapper;

function createField(data, methods) {
	const _wrapper = mount(FieldCheckbox, {
		localVue,
		propsData: data,
		methods: methods
	});

	wrapper = _wrapper;

	return _wrapper;
}

describe("FieldCheckbox.vue", () => {


});
