import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import VDateInput from '@/components/VDateInput.vue';

const localVue = createLocalVue();
const vuetify = new Vuetify();

function makeComponent(options) {
  return shallowMount(VDateInput, {
    localVue,
    vuetify,
    propsData: {
      id: 'valid_id',
      label: 'valid_label',
    },
    ...options,
  });
}

describe('VDateInput', () => {
  it('should render component correctly', () => {
    const wrapper = makeComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render component with required attribute', () => {
    const wrapper = makeComponent({
      propsData: {
        label: 'valid_label',
        required: true,
      },
    });

    expect(wrapper.attributes('required')).toBe('true');
  });
});
